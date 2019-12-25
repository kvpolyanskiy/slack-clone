import React from 'react';
import { Field } from 'react-final-form';
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircleOutlined } from '@material-ui/icons';

export const UsernameField: React.FC = () => {
  return (
    <Field name="username">
      {({input: {onChange}, meta: {error, touched}}) => (
        <TextField
          label="Username"
          margin={'normal'}
          error={error && touched}
          helperText={error && touched ? error : ''}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlined />
              </InputAdornment>
            ),
          }}
        />
      )}
    </Field>
  );
};
