import React, { useState, useCallback } from 'react';
import { Input } from './MessageInput.styles';
import { useAddMessageMutation } from '../../../../generated/graphql';
import { useSelectedChannelQuery } from '../../../../apollo-client/cache';
import { KEYBOARD_KEYS } from '../../../../appConstants';

export const MessageInput: React.FC = () => {
  const [text, setText] = useState('');
  const channelId = useSelectedChannelQuery();
  const [addMessage] = useAddMessageMutation();

  const onKeyDown = useCallback(async (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === KEYBOARD_KEYS.ENTER) {
      try {
        await addMessage({variables: {input: {
          text,
          channelId,
        }}});
        setText('');
      } catch {
        return;
      }
    }
  }, [addMessage, channelId, setText, text]);

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.currentTarget.value);
  }, [setText]);

  return (
    <Input
      id="outlined-basic"
      variant="outlined"
      value={text}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};
