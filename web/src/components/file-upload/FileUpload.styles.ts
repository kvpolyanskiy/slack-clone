import styled from 'styled-components/macro';

interface FileUploadInputContainerProps {
  error: string;
}

export const FileUploadInputContainer = styled.div<FileUploadInputContainerProps>`
  display: flex;
  align-items: ${({error}) => error ? 'center' : 'flex-end'};
  margin-bottom: 10px;
`;

export const FileUploadInput = styled.input`
  display: none;
`;
