import styled from 'styled-components/macro';
import { Avatar } from '@material-ui/core';

export const MessagesContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const MessageContainer = styled.div`
  display: flex;
`;

export const MessageBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: flex-end;

  h6:first-child {
    margin-right: 5px;
  }
`;

const root = 'root';
export const AvatarContainer = styled(Avatar).attrs({
  classes: {root},
})`
  &.${root} {
    margin: 5px;
  }
`;
