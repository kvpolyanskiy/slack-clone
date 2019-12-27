import React, { useCallback } from 'react';
import { Tooltip } from '@material-ui/core';
import {
  PeopleOutline as PeopleIcon,
  AddBox as AddIcon,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useWorkspacesQuery } from '../../../generated/graphql';
import { WorkspacesContainer, WorkspaceButton } from './Workspaces.styles';
import { routerConfig } from '../../../router';
import { useSelectedWorkspaceQuery, useSelectWorkspaceMutation } from '../../../apollo-client/cache';

export const Workspaces: React.FC = () => {
  const {data, loading} = useWorkspacesQuery();
  const history = useHistory();
  const selectedWorkspace = useSelectedWorkspaceQuery();
  const selectWorkspace = useSelectWorkspaceMutation();

  const onAddNewWorkspace = useCallback(
    () => history.push(routerConfig.routes.createWorkspace.path),
    [history],
  );

  const onSelectWorkspace = useCallback((event) => {
    selectWorkspace(event.currentTarget.dataset.id);
  }, [selectWorkspace]);

  if (loading) {
    return null;
  }

  return (
    <WorkspacesContainer>
      {data?.workspaces.map(({name, avatar, id}) => (
        <Tooltip key={id} title={name} placement="right">
          <WorkspaceButton
            selected={selectedWorkspace === id}
            data-id={id}
            onClick={onSelectWorkspace}
          >
            {avatar ? <img src={avatar} alt={name} /> : <PeopleIcon color="inherit" />}
          </WorkspaceButton>
        </Tooltip>
      ))}
      <WorkspaceButton onClick={onAddNewWorkspace}>
        <Tooltip title="Add a new workspace" placement="right">
          <AddIcon color="inherit" />
        </Tooltip>
      </WorkspaceButton>
    </WorkspacesContainer>
  );
};
