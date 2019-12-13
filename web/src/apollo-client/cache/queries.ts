import gql from 'graphql-tag';

export const GET_ACCESS_TOKEN = gql`
  query AccessToken {
    accessToken @client
  }
`;

export const UPDATE_ACCESS_TOKEN = gql`
  mutation UpdateAccessToken($accessToken: String) {
    updateAccessToken(accessToken: $accessToken) @client {
      accessToken
    }
  }
`;
