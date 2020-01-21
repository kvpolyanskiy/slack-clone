import { Message } from '../../entities';

export const MESSAGE_ADDED = 'MESSAGE_ADDED';

export interface MessageAddedPayload {
  message: Message;
}
