import React from 'react';
import { ChatContainer } from './Chat.style';
import { Messages } from './messages';
import { MessageInput } from './message-input';

export const Chat: React.FC = () => {
  return (
    <ChatContainer>
      <Messages />
      <MessageInput />
    </ChatContainer>
  );
};
