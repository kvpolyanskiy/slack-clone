import { Resolver, Authorized, Ctx, Query, Arg } from 'type-graphql';

import { Workspace, Member, Channel, Message } from '../../entities';
import { Context } from '../../types';
import { UserInputError } from 'apollo-server-express';

@Resolver()
export class MessagesResolver {
  @Authorized()
  @Query(() => [Message])
  async messages(
    @Arg('channelId') channelId: string,
    @Ctx() {req: {user}}: Context,
  ): Promise<Message[]> {
    const channel = await Channel.findOne({id: channelId});

    if (!channel) {
      throw new UserInputError(`Cannot find channel with id: ${channelId}`);
    }

    const workspace = await Workspace.findOne({id: channel.workspaceId});
    const member = await Member.findOne({userId: user?.userId, workspaceId: workspace?.id});

    if (!member && workspace?.ownerId !== user?.userId) {
      throw new UserInputError(`You don't belong workspace: ${workspace.name}`);
    }

    return Message.find({channelId: channel.id});
  }
}
