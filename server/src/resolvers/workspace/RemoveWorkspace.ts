import { Resolver, Arg, Authorized, Ctx, Mutation } from 'type-graphql';
import { UserInputError, ForbiddenError } from 'apollo-server-express';

import { Workspace } from '../../entities';
import { Context } from '../../types';

@Resolver()
export class WorkspaceResolver {
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
