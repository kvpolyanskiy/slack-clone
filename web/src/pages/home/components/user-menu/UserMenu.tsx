import React, { useState, useCallback } from 'react';
import { Popover, List, ListItem, ListItemText } from '@material-ui/core';
import { WorkspaceInvitationDialog } from '../workspace-invitation-dialog';

interface Props {
  anchorEl: Element | null;
  onClose: () => void;
}

export const UserMenu: React.FC<Props> = ({anchorEl, onClose}) => {
  const [openInvitationDialog, setOpenInvitationDialog] = useState(false);

  const onCloseInvitationDialog = useCallback(() => {
    setOpenInvitationDialog(false);
  }, [setOpenInvitationDialog]);

  const onOpenInvitationDialog = useCallback(() => {
    onClose();
    setOpenInvitationDialog(true);
  }, [setOpenInvitationDialog, onClose]);

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem button onClick={onOpenInvitationDialog}>
            <ListItemText primary="Invite people" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sign out" />
          </ListItem>
        </List>
      </Popover>
      <WorkspaceInvitationDialog
        open={openInvitationDialog}
        onClose={onCloseInvitationDialog}
      />
    </>
);
};
