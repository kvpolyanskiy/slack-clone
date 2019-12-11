import React from 'react';
import { Field } from 'react-final-form';
import { TextField, InputAdornment } from '@material-ui/core';
import { EmailOutlined } from '@material-ui/icons';

export const EmailField: React.FC = () => {
  return (
    <Field name="email">
      {({input: {onChange}, meta: {error, touched}}) => (
        <TextField
          label="Email"
          margin={'normal'}
          error={error && touched}
          helperText={error && touched ? error : ''}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
        />
      )}
    </Field>
  );
};
