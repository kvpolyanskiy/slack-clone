import { Resolvers } from 'apollo-client';
import { GET_SELECTED_WORKSPACE } from '../queries';

export const workspaceResolvers: Resolvers = {
  Query: {
    selectedWorkspace: (root, args, {cache}) => {
      const {selectedWorkspace} = cache.readQuery({query: GET_SELECTED_WORKSPACE});
      return selectedWorkspace;
    },
  },
  Mutation: {
    selectWorkspace: (root, {selectedWorkspace}, {cache}) => {
      cache.writeQuery({query: GET_SELECTED_WORKSPACE, data: {
        selectedWorkspace,
      }});
      return cache.readQuery({query: GET_SELECTED_WORKSPACE});
    },
  },
};
