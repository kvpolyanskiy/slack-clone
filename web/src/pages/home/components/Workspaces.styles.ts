import styled from 'styled-components/macro';

export const WorkspacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  background: #3F0E40;
`;

interface WorkspaceButtonProps {
  selected?: boolean;
}

export const WorkspaceButton = styled.div<WorkspaceButtonProps>`
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({selected}) => `4px solid ${selected ? '#fff' : 'transparent'}`};
  border-radius: 10px;
  transition: border .3s ease-out .1s;
  margin: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    border-color: ${({selected}) => selected ? '#fff' : 'gray'};
  }

  img, svg {
    height: 40px;
    width: 40px;
    padding: 2px;
    border-radius: 5px;
  }
`;
