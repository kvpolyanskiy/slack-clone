import React, { useCallback, useMemo } from 'react';
import { FileUploadInputContainer, FileUploadInput } from './FileUpload.styles';
import { TextField, Button } from '@material-ui/core';

interface Props {
  label: string;
  value: FileList | File;
  error: string;
  multiple?: boolean;
  onChange: (files: FileList) => void;
}

export const FileUpload: React.FC<Props> = ({
  label,
  value,
  error,
  multiple,
  onChange,
}) => {
  const handleOnChange = useCallback((event) => {
    const files = event.currentTarget.files;
    const newValue = multiple ? files : files[0];
    onChange(newValue);
  }, [onChange, multiple]);

  const selectedFiles = useMemo(() => {
    return value instanceof File
      ? value.name
      : [...value].map(({name}) => name).join(', ');
  }, [value]);

  return (
    <FileUploadInputContainer error={error}>
      <TextField
        label={label}
        value={selectedFiles}
        error={!!error}
        helperText={error}
        InputProps={{
          readOnly: true,
        }}
        fullWidth={true}
      />
      <FileUploadInput
        accept="image/*"
        id="file-upload-input"
        type="file"
        multiple={multiple}
        onChange={handleOnChange}
      />
      <label htmlFor="file-upload-input">
        <Button color="primary" component="span">
          Upload
        </Button>
      </label>
    </FileUploadInputContainer>
  );
};
