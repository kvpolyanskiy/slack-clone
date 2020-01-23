import { Resolvers } from 'apollo-client';
import { GET_SELECTED_CHANNEL } from '../queries';

export const channelResolvers: Resolvers = {
  Query: {
    selectedChannel: (root, args, {cache}) => {
      const {selectedChannel} = cache.readQuery({query: GET_SELECTED_CHANNEL});
      return selectedChannel;
    },
  },
  Mutation: {
    selectChannel: (root, {selectedChannel}, {cache}) => {
      cache.writeQuery({query: GET_SELECTED_CHANNEL, data: {
        selectedChannel,
      }});
      return cache.readQuery({query: GET_SELECTED_CHANNEL});
    },
  },
};
