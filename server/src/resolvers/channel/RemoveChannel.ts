import { Resolver, Mutation, Arg, Authorized, Ctx } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import { Workspace, Channel } from '../../entities';
import { Context } from '../../types';

@Resolver()
export class RemoveChannelResolver {
  @Authorized()
  @Mutation(() => Channel, {nullable: true})
  async removeChannel(
    @Arg('id') id: string,
    @Ctx() {req: {user}}: Context,
  ): Promise<Channel | null> {
    const channel = await Channel.findOne({id});

    if (!channel) {
      return null;
    }

    const workspace = await Workspace.findOne({id: channel.workspaceId});

    if (workspace?.ownerId !== user?.userId) {
      throw new UserInputError('You cannot remove channel in this workspace.');
    }

    try {
      const removedChannel = await channel.remove();
      removedChannel.id = id;
      return removedChannel;
    } catch {
      throw new Error('Something went wrong, try again.');
    }
  }
}
