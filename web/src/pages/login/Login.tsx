import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { CredentialsForm } from '../../components';
import { routerConfig } from '../../router';
import { useLoginMutation } from '../../generated/graphql';
import { EmailField, PasswordField } from '../../components/credentials-form';
import { createValidator } from '../../validation/createValidator';
import { validationSchema } from './validationSchema';

export const Login: React.FC = () => {
  const [login, {loading, error}] = useLoginMutation();
  const history = useHistory();

  const createAccount = useCallback(
    async ({email, password}) => {
      try {
        const {data}: any = await login({variables: {email, password}});
        console.log(data);
        history.push(routerConfig.defaultRoute);
      } catch {
        return;
      }
    },
    [login, history],
  );

  const validate = useMemo(() => createValidator(validationSchema), []);

  return (
    <CredentialsForm
      onSubmit={createAccount}
      validate={validate}
      submitButtonTitle="Login"
      disabled={loading}
      error={error && error.message}
    >
      <EmailField />
      <PasswordField />
    </CredentialsForm>
  );
};
