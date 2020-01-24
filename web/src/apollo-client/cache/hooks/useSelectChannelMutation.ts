import { useMutation } from '@apollo/react-hooks';
import { SELECT_CHANNEL } from '../queries';
import { MessagesDocument } from '../../../generated/graphql';

export const useSelectChannelMutation = () => {
  const [selectChannel] = useMutation(
    SELECT_CHANNEL,
    {refetchQueries: (mutationResult) => {
      const data = mutationResult?.selectedChannel;
      if (data && data.selectedChannel) {
        return [{query: MessagesDocument, variables: {channelId: data.selectedChannel}}];
      }
      return [];
    }},
  );

  return (selectedChannel: string | null) => selectChannel({variables: {selectedChannel}});
};
