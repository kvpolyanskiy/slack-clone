import styled from 'styled-components/macro';
import { Paper } from '@material-ui/core';

export const CreateWorkspaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const CreateWorkspaceFormForm = styled.form`
  flex: 1 1 480px;
  max-width: 480px;
`;

export const CreateWorkspacePaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;
