import { useMutation } from '@apollo/react-hooks';
import { SELECT_WORKSPACE, GET_SELECTED_WORKSPACE } from '../queries';

export const useSelectWorkspaceMutation = () => {
  const [selectWorkspace] = useMutation(
    SELECT_WORKSPACE,
    {refetchQueries: [{query: GET_SELECTED_WORKSPACE}]},
  );

  return (selectedWorkspace: string) => selectWorkspace({variables: {selectedWorkspace}});
};
