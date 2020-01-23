import { useMutation } from '@apollo/react-hooks';
import { GET_SELECTED_CHANNEL, SELECT_CHANNEL } from '../queries';

export const useSelectChannelMutation = () => {
  const [selectChannel] = useMutation(
    SELECT_CHANNEL,
    {refetchQueries: [{query: GET_SELECTED_CHANNEL}]},
  );

  return (selectedChannel: string | null) => selectChannel({variables: {selectedChannel}});
};
