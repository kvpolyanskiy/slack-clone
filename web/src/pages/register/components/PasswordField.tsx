import React, { useCallback, useState } from 'react';
import { Field } from 'react-final-form';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff, SecurityOutlined } from '@material-ui/icons';

export const PasswordField: React.FC = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(
    () => setPasswordVisibility(!isPasswordVisible),
    [isPasswordVisible],
  );

  return (
    <Field name="password">
      {({input: {onChange}, meta: {error, touched}}) => (
        <TextField
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          margin={'normal'}
          error={error && touched}
          helperText={error && touched ? error : ''}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SecurityOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  onMouseDown={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </Field>
  );
};
