import { useMutation } from '@apollo/react-hooks';
import { UPDATE_ACCESS_TOKEN } from '../queries';

export const useAccessTokenMutation = () => {
  const [setAccessToken] = useMutation(UPDATE_ACCESS_TOKEN);

  return (accessToken: string) => setAccessToken({variables: {accessToken}});
};
