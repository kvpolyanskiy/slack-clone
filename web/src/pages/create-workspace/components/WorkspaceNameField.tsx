import React from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';

export const WorkspaceNameField: React.FC = () => {
  return (
    <Field name="name">
      {({input: {onChange}, meta: {error, touched}}) => (
        <TextField
          label="Name"
          margin={'normal'}
          error={error && touched}
          helperText={error && touched ? error : ''}
          onChange={onChange}
        />
      )}
    </Field>
  );
};
