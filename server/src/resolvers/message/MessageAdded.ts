import { Resolver, Subscription, Root, Args } from 'type-graphql';

import { Message } from '../../entities';
import { MESSAGE_ADDED, MessageAddedPayload } from './subscriptionTypes';
import { MessageAddedArgs } from './args';

@Resolver()
export class MessageAddedResolver {
  @Subscription({
    topics: MESSAGE_ADDED,
    filter: ({payload, args}) => args.channelId === payload.message.channelId,
  })
  messageAdded(
    @Root() {message}: MessageAddedPayload,
    @Args() _: MessageAddedArgs,
  ): Message {
    return message;
  }
}
