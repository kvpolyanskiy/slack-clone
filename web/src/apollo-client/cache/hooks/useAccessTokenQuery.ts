import { useQuery } from '@apollo/react-hooks';
import { GET_ACCESS_TOKEN } from '../queries';

export const useAccessTokenQuery = () => {
  const {data} = useQuery(GET_ACCESS_TOKEN);
  return data.accessToken;
};
