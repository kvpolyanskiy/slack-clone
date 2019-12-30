import { Resolver, Query, Arg, Authorized } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { Workspace } from '../../entities';

@Resolver()
export class WorkspaceByIdResolver {
  @Authorized()
  @Query(() => Workspace)
  async getWorkspaceById(
    @Arg('workspaceId') workspaceId: string,
  ): Promise<Workspace> {
    const workspace = await Workspace.findOne({id: workspaceId});

    if (!workspace) {
      throw new UserInputError(`Cannot find workspace with id ${workspaceId}`);
    }

    return workspace;
  }
}
