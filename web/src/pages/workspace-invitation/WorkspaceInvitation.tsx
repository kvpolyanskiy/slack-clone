import React, { useEffect } from 'react';
import { useApplyWorkspaceInvitationMutation } from '../../generated/graphql';
import { useParams } from 'react-router-dom';
import { WorkspaceInvitationContainer } from './WorkspaceInvitation.styles';
import { Typography } from '@material-ui/core';

export const WorkspaceInvitation: React.FC = () => {
  const {id = ''} = useParams();
  const [
    applyWorkspaceInvitation,
    {data, loading, error},
  ] = useApplyWorkspaceInvitationMutation({variables: {token: id}});

  useEffect(() => {
    const apply = async () => {
      try {
        await applyWorkspaceInvitation();
      } catch {
        return;
      }
    };
    apply();
  }, [applyWorkspaceInvitation]);

  return (
    <WorkspaceInvitationContainer>
      {loading && (
        <Typography variant="h4">Inviting...</Typography>
      )}
      {error && (
        <Typography variant="h4">{error.message}</Typography>
      )}
      {!loading && !error && (
        <Typography variant="h4">
          {`You are successfully invited to ${data?.applyWorkspaceInvitation?.name} workspace.`}
        </Typography>
      )}
    </WorkspaceInvitationContainer>
  );
};
