import styled from 'styled-components/macro';
import { Paper } from '@material-ui/core';

export const CredentialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const CredentialsFormForm = styled.form`
  flex: 1 1 480px;
  max-width: 480px;
`;

export const CredentialsPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;
