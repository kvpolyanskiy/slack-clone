import { GET_ACCESS_TOKEN } from './queries';
import { Resolvers } from 'apollo-client';

export const resolvers: Resolvers = {
  Query: {
    accessToken: (root, args, {cache}) => cache.readQuery({query: GET_ACCESS_TOKEN}),
  },
  Mutation: {
    updateAccessToken: (root, {accessToken}, {cache}) => {
      cache.writeQuery({query: GET_ACCESS_TOKEN, data: {
        accessToken,
      }});
      return cache.readQuery({query: GET_ACCESS_TOKEN});
    },
  },
};
