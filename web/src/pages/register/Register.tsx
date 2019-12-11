import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormRenderProps } from 'react-final-form';
import { Button } from '@material-ui/core';

import { routerConfig } from '../../router';
import { useRegisterMutation } from '../../generated/graphql';
import { UsernameField, EmailField, PasswordField } from './components';
import { createValidator } from '../../validation/createValidator';
import { validationSchema } from './validationSchema';

import { RegisterContainer, RegisterForm, RegisterPaper } from './Register.styles';

export const Register: React.FC = () => {
  const [register, {loading}] = useRegisterMutation();
  const history = useHistory();

  const createAccount = useCallback(
    async ({username, email, password}) => {
      const {
        data: {register: registered},
      }: any = await register({variables: {username, email, password}});
      // TODO: Implement error handling
      if (registered) {
        history.push(routerConfig.defaultRoute);
      }
    },
    [register, history],
  );

  const validate = useMemo(() => createValidator(validationSchema), []);

  return (
    <RegisterContainer>
      <Form
        onSubmit={createAccount}
        validate={validate}
      >
        {({ handleSubmit }: FormRenderProps) => (
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterPaper elevation={0}>
              <UsernameField />
              <EmailField />
              <PasswordField />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
              >
                Create Account
              </Button>
            </RegisterPaper>
          </RegisterForm>
        )}
      </Form>
    </RegisterContainer>
  );
};
