import React from 'react';
import { HomeContainer } from './Home.styles';
import { Workspaces, WorkspacePalette } from './components';

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Workspaces />
      <WorkspacePalette />
    </HomeContainer>
  );
};
