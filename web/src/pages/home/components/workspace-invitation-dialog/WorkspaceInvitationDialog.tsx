import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';

import { useSelectedWorkspaceQuery } from '../../../../apollo-client/cache';
import { useInviteToWorkspaceMutation } from '../../../../generated/graphql';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const WorkspaceInvitationDialog: React.FC<Props> = ({open, onClose}) => {
  const [email, setEmail] = useState('');
  const workspaceId = useSelectedWorkspaceQuery();
  const [inviteToWorkspace, { loading, error }] = useInviteToWorkspaceMutation();

  const onSendRequest = useCallback(async () => {
    try {
      await inviteToWorkspace({variables: {
        workspaceId,
        email,
      }});
      onClose();
    } catch {
      return;
    }
  }, [inviteToWorkspace, workspaceId, email, onClose]);

  const onChangeEmail = useCallback((event) => {
    setEmail(event.currentTarget.value);
  }, [setEmail]);

  return (
    <Dialog open={open}>
    <DialogTitle>Request invitations</DialogTitle>
    <DialogContent>
        <DialogContentText>
          Fill email address a person you'd like to invite.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          onChange={onChangeEmail}
        />
        {error && (
          <Typography color="error">
            {error.message}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" disabled={loading}>
          Cancel
        </Button>
        <Button onClick={onSendRequest} color="primary" disabled={loading || !email}>
          Send Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};
