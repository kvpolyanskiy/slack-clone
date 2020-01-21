import { Resolver, Subscription, Root } from 'type-graphql';

import { Message } from '../../entities';
import { MESSAGE_ADDED, MessageAddedPayload } from './subscriptionTypes';

@Resolver()
export class MessageAddedResolver {
  @Subscription({topics: MESSAGE_ADDED})
  messageAdded(
    @Root() {message}: MessageAddedPayload,
  ): Message {
    return message;
  }
}
