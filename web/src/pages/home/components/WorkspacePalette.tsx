import React from 'react';
import { KeyboardArrowDown } from '@material-ui/icons';

import { WorkspacePaletteContainer, WorkspacePaletteBody, WorkspacePaletteHeader } from './WorkspacePalette.styles';
import { Typography } from '@material-ui/core';
import { useGetLoggedUser } from '../../../hooks/users';

export const WorkspacePalette: React.FC = () => {
  const {user} = useGetLoggedUser();

  return (
    <WorkspacePaletteContainer>
      <WorkspacePaletteBody>
        <WorkspacePaletteHeader>
          <Typography variant="h6">
            {user?.username}
          </Typography>
          <KeyboardArrowDown />
        </WorkspacePaletteHeader>
      </WorkspacePaletteBody>
    </WorkspacePaletteContainer>
  );
};
