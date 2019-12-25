import React from 'react';
import { useWorkspacesQuery } from '../../../generated/graphql';
import { WorkspacesContainer } from './Workspaces.styles';

export const Workspaces: React.FC = () => {
  const {data, loading} = useWorkspacesQuery();

  if (loading) {
    return null;
  }

  return (
    <WorkspacesContainer>
      {data?.workspaces.map(({name}) => name)}
    </WorkspacesContainer>
  );
};
