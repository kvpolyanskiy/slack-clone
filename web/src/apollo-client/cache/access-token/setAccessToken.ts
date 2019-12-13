import { cache } from '../cache';
import { GET_ACCESS_TOKEN } from '../queries';

export const setAccessToken = (accessToken: string): void => {
  cache.writeQuery({query: GET_ACCESS_TOKEN, data: {accessToken}});
};
