import { Resolver, Mutation, Arg, Authorized, Ctx, PubSub, Publisher } from 'type-graphql';

import { AddMessageInput } from './input';
import { Context } from '../../types';
import { Message } from '../../entities';
import { MESSAGE_ADDED, MessageAddedPayload } from './subscriptionTypes';

@Resolver()
export class AddMessageResolver {
  @Authorized()
  @Mutation(() => Message)
  async addMessage(
    @Arg('input') {text, channelId}: AddMessageInput,
    @Ctx() {req: {user}}: Context,
    @PubSub(MESSAGE_ADDED) publish: Publisher<MessageAddedPayload>,
  ): Promise<Message> {
    const message = Message.create({
      userId: user?.userId,
      channelId,
      text,
    });

    await message.save();
    await publish({message});

    return message;
  }
}
