import gql from 'graphql-tag';

export const GET_SELECTED_WORKSPACE = gql`
  query SelectedWorkspace {
    selectedWorkspace @client
  }
`;

export const SELECT_WORKSPACE = gql`
  mutation SelectWorkspace($selectedWorkspace: String) {
    selectWorkspace(selectedWorkspace: $selectedWorkspace) @client {
      selectedWorkspace
    }
  }
`;
