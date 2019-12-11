import React from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { Button, Typography } from '@material-ui/core';

import { CredentialsContainer, CredentialsFormForm, CredentialsPaper } from './Credentials.styles';

interface Props {
  onSubmit: (values: object) => Promise<void>;
  validate: (values: any) => Promise<any>;
  disabled: boolean;
  submitButtonTitle: string;
  children: React.ReactNode;
  error?: string;
}

export const CredentialsForm: React.FC<Props> = ({
  onSubmit,
  validate,
  disabled,
  submitButtonTitle,
  children,
  error,
}) => {
  return (
    <CredentialsContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleSubmit }: FormRenderProps) => (
          <CredentialsFormForm onSubmit={handleSubmit}>
            <CredentialsPaper elevation={0}>
              {children}
              {error && (
                <Typography color="error">
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={disabled}
              >
                {submitButtonTitle}
              </Button>
            </CredentialsPaper>
          </CredentialsFormForm>
        )}
      </Form>
    </CredentialsContainer>
  );
};
