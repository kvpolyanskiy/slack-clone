import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { CredentialsForm } from '../../components';
import { routerConfig } from '../../router';
import { useLoginMutation } from '../../generated/graphql';
import { EmailField, PasswordField } from '../../components/credentials-form';
import { createValidator } from '../../validation/createValidator';
import { validationSchema } from './validationSchema';
import { useAccessTokenMutation } from '../../apollo-client/cache';

export const Login: React.FC = () => {
  const [login, {loading, error}] = useLoginMutation();
  const setAccessToken = useAccessTokenMutation();
  const history = useHistory();

  const createAccount = useCallback(
    async ({email, password}) => {
      try {
        const {data}: any = await login({variables: {email, password}});
        await setAccessToken(data.login.accessToken);
        history.push(routerConfig.defaultRoute);
      } catch {
        return;
      }
    },
    [login, history, setAccessToken],
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
