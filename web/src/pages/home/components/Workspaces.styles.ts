import styled from 'styled-components/macro';

export const WorkspacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  background: #3F0E40;
`;

export const WorkspaceButton = styled.div`
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid transparent;
  border-radius: 10px;
  transition: border .5s ease-out 0.3s;
  margin: 5px;
  color: #fff;

  &:hover {
    border: 4px solid gray;
  }

  img, svg {
    height: 40px;
    width: 40px;
    padding: 2px;
    border-radius: 5px;
  }
`;
