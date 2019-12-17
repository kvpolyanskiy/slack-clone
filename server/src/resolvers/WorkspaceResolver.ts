import { Resolver, Arg, Authorized, Ctx, Mutation, Query } from 'type-graphql';
import { UserInputError, ForbiddenError } from 'apollo-server-express';

import { isWorkspaceExists } from './utils';
import { Workspace } from '../entities';
import { Context } from '../types/Context';

@Resolver()
export class WorkspaceResolver {
  @Authorized()
  @Query(() => [Workspace])
  async workspaces(
    @Ctx() {req: {user}}: Context,
  ) {
    return Workspace.find({where: {owner: user}});
  }

  @Authorized()
  @Mutation(() => Workspace)
  async createWorkspace(
    @Arg('name') name: string,
    @Ctx() {req}: Context,
  ) {
    if (await isWorkspaceExists(name)) {
      throw new UserInputError('Workspace already exists.');
    }

    const {userId: ownerId} = req.user!;
    const workspace = Workspace.create({name, ownerId});

    try {
      return await workspace.save();
    } catch {
      throw new Error('Something went wrong, try again.');
    }
  }

  @Authorized()
  @Mutation(() => Workspace)
  async removeWorkspace(
    @Arg('id') id: string,
    @Ctx() {req}: Context,
  ) {
    const workspace = await Workspace.findOne({id});

    if (!workspace) {
      throw new UserInputError('There is no a workspace with passed id.');
    }

    if (workspace.ownerId !== req.user!.userId) {
      throw new ForbiddenError('You can remove only your workspaces.');
    }

    try {
      const removedWorkspace = await workspace.remove();
      removedWorkspace.id = id;
      return removedWorkspace;
    } catch {
      throw new Error('Something went wrong, try again.');
    }
  }
}
