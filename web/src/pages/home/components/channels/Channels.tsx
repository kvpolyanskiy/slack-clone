import React, { useEffect, useCallback } from 'react';
import { ChannelsHeader, ListItemContainer, ListContainer } from './Channels.style';
import { Typography, IconButton, ListItemText } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import {
  useSelectedWorkspaceQuery,
  useSelectedChannelQuery,
  useSelectChannelMutation,
} from '../../../../apollo-client/cache';
import { useChannelsQuery } from '../../../../generated/graphql';

export const Channels: React.FC = () => {
  const workspaceId = useSelectedWorkspaceQuery();
  const {data} = useChannelsQuery({variables: {workspaceId}});
  const selectedChannelId = useSelectedChannelQuery();
  const selectChannel = useSelectChannelMutation();

  useEffect(() => {
    const channels = data?.channels || [];

    if (channels.length && !channels.find(({id}) => id === selectedChannelId)) {
      selectChannel(channels[0].id);
    }
  }, [selectedChannelId, data, selectChannel]);

  const onSelectChannel = useCallback((evt: React.SyntheticEvent<HTMLElement>) => {
    const {id = null} = evt.currentTarget.dataset;
    selectChannel(id);
  }, [selectChannel]);

  return (
    <>
      <ChannelsHeader>
        <Typography variant="subtitle2">Channels</Typography>
        <IconButton size="small" color="inherit">
          <AddCircleOutline />
        </IconButton>
      </ChannelsHeader>
      <ListContainer>
        {data?.channels && data.channels.map(({id, name}) => (
          <ListItemContainer
            data-id={id}
            key={id}
            button
            disableGutters
            selected={selectedChannelId === id}
            onClick={onSelectChannel}
          >
            <ListItemText
              primary={`# ${name}`}
              primaryTypographyProps={{
                variant: 'body2',
                color: 'inherit',
              }}
            />
          </ListItemContainer>
        ))}
      </ListContainer>
    </>
  );
};
