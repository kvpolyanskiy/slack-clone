import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { useSelectedChannelQuery } from '../../../../apollo-client/cache/hooks';
import { useMessagesQuery, useMessageAddedSubscription, Message} from '../../../../generated/graphql';
import { MessagesContainer, MessageHeader, MessageBody, AvatarContainer, MessageContainer } from './Messages.styles';

export const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const channelId = useSelectedChannelQuery();
  const {data} = useMessagesQuery({variables: {channelId}});
  const {data: messageAddedData} = useMessageAddedSubscription({variables: {channelId}});

  useEffect(() => {
    if (data && data.messages) {
      setMessages(data.messages as Message[]);
    }
  }, [data]);

  useEffect(() => {
    const newMessage = messageAddedData?.messageAdded;

    if (newMessage) {
      setMessages((state) => [...state, newMessage]);
    }
  }, [messageAddedData, setMessages]);

  return (
    <MessagesContainer>
      {messages.map(({id, user, text, createdDate}) => {
        const src = user?.avatar || '';
        const createdAt = new Date(createdDate);

        return (
          <MessageContainer key={id}>
            <AvatarContainer src={src} variant="rounded" />
            <MessageBody>
              <MessageHeader>
                <Typography variant="subtitle2">{user?.username}</Typography>
                <Typography variant="caption">
                  {`${createdAt.toLocaleDateString() } ${createdAt.toLocaleTimeString() }`}
                </Typography>
              </MessageHeader>
              <Typography>{text}</Typography>
            </MessageBody>
          </MessageContainer>
        );
      })}
    </MessagesContainer>
  );
};
