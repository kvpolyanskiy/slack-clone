import { Resolver, Mutation, Arg, Authorized } from 'type-graphql';

import { Workspace, Channel } from '../../entities';
import { AddChannelInput } from './input';

@Resolver()
export class AddChannelResolver {
  @Authorized()
  @Mutation(() => Channel)
  async addChannel(
    @Arg('input') {name, workspaceId}: AddChannelInput,
  ): Promise<Channel> {
    const workspace = await Workspace.findOne({id: workspaceId});
    if (!workspace) {
      throw new Error(`Cannot find workspace: ${workspaceId}`);
    }
    const channel = Channel.create({name, workspaceId});

    return channel.save();
  }
}
