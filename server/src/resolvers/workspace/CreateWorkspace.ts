import { Resolver, Arg, Authorized, Ctx, Mutation } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { isWorkspaceExists } from './utils';
import { Workspace } from '../../entities';
import { Context } from '../../types';

@Resolver()
export class CreateWorkspaceResolver {
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
}
