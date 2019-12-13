import gql from 'graphql-tag';

export const typeDefs = gql`
  type AccessToken {
    value: String
  }

  extend type Query {
    accessToken: AccessToken!
  }

  extend type Mutation {
    updateAccessToken(accessToken: String!): String!
  }
`;
