import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { CredentialsForm } from '../../components';
import { routerConfig } from '../../router';
import { useRegisterMutation } from '../../generated/graphql';
import { UsernameField, EmailField, PasswordField } from '../../components/credentials-form';
import { createValidator } from '../../validation/createValidator';
import { validationSchema } from './validationSchema';

export const Register: React.FC = () => {
  const [register, {loading, error}] = useRegisterMutation();
  const history = useHistory();

  const createAccount = useCallback(
    async ({username, email, password}) => {
      try {
        const {
          data: {register: registered},
        }: any = await register({variables: {input: {username, email, password}}});
        // TODO: Implement error handling
        if (registered) {
          history.push(routerConfig.routes.home.path);
        }
      } catch {
        return;
      }
    },
    [register, history],
  );

  const validate = useMemo(() => createValidator(validationSchema), []);

  return (
    <CredentialsForm
      onSubmit={createAccount}
      validate={validate}
      submitButtonTitle="Create Account"
      disabled={loading}
      error={error && error.message}
    >
      <UsernameField />
      <EmailField />
      <PasswordField />
    </CredentialsForm>
  );
};
