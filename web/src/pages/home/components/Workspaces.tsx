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

export const Workspaces: React.FC = () => {
  const {data, loading} = useWorkspacesQuery();
  const history = useHistory();

  const onAddNewWorkspace = useCallback(
    () => history.push(routerConfig.routes.createWorkspace.path),
    [history],
  );

  if (loading) {
    return null;
  }

  return (
    <WorkspacesContainer>
      {data?.workspaces.map(({name, avatar, id}) => (
        <Tooltip key={id} title={name} placement="right">
          <WorkspaceButton>
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
