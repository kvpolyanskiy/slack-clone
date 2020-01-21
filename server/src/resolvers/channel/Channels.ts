import { Resolver, Authorized, Ctx, Query, Arg } from 'type-graphql';

import { Workspace, Member, Channel } from '../../entities';
import { Context } from '../../types';
import { UserInputError } from 'apollo-server-express';

@Resolver()
export class ChannelsResolver {
  @Authorized()
  @Query(() => [Channel])
  async channels(
    @Arg('workspaceId') workspaceId: string,
    @Ctx() {req: {user}}: Context,
  ): Promise<Channel[]> {
    const workspace = await Workspace.findOne({id: workspaceId});

    if (!workspace) {
      throw new UserInputError('Cannot find workspace.');
    }

    const member = await Member.findOne({userId: user?.userId, workspaceId});

    if (!member) {
      throw new UserInputError(`You don't belong workspace: ${workspace.name}`);
    }

    return Channel.find({workspaceId});
  }
}
