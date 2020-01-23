import styled from 'styled-components/macro';
import { List, ListItem } from '@material-ui/core';

export const ChannelsHeader = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
`;

const selected = 'selected';
export const ListItemContainer = styled(ListItem).attrs({
  classes: {selected},
})`
  padding: 0 10px;

  &.${selected} {
    background-color: #347FC4;
  }
`;

export const ListContainer = styled(List)`
  padding: 0;
`;
