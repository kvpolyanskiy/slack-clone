import gql from 'graphql-tag';

export const GET_SELECTED_CHANNEL = gql`
  query SelectedChannel {
    selectedChannel @client
  }
`;

export const SELECT_CHANNEL = gql`
  mutation SelectChannel($selectedChannel: String) {
    selectChannel(selectedChannel: $selectedChannel) @client {
      selectedChannel
    }
  }
`;
