import { useQuery } from '@apollo/react-hooks';
import { GET_SELECTED_CHANNEL } from '../queries';

export const useSelectedChannelQuery = () => {
  const {data} = useQuery(GET_SELECTED_CHANNEL);
  return data.selectedChannel;
};
