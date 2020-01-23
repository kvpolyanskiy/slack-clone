import React, { useCallback, useState } from 'react';
import { KeyboardArrowDown } from '@material-ui/icons';

import { WorkspacePaletteContainer, WorkspacePaletteBody, WorkspacePaletteHeader } from './WorkspacePalette.styles';
import { Typography } from '@material-ui/core';
import { useGetLoggedUser } from '../../../hooks/users';
import { UserMenu } from './user-menu';
import { Channels } from './channels';

export const WorkspacePalette: React.FC = () => {
  const {user} = useGetLoggedUser();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onCloseUserMenu = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const onOpenUserMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  return (
    <WorkspacePaletteContainer>
      <WorkspacePaletteBody>
        <WorkspacePaletteHeader onClick={onOpenUserMenu}>
          <Typography variant="h6">
            {user?.username}
          </Typography>
          <KeyboardArrowDown />
        </WorkspacePaletteHeader>
        <UserMenu onClose={onCloseUserMenu} anchorEl={anchorEl} />
        <Channels />
      </WorkspacePaletteBody>
    </WorkspacePaletteContainer>
  );
};
