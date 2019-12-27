import { useQuery } from '@apollo/react-hooks';
import { GET_SELECTED_WORKSPACE } from '../queries';

export const useSelectedWorkspaceQuery = () => {
  const {data} = useQuery(GET_SELECTED_WORKSPACE);
  return data.selectedWorkspace;
};
