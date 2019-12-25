import React, { useCallback, useMemo } from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { CreateWorkspaceContainer, CreateWorkspaceFormForm, CreateWorkspacePaper } from './CreateWorkspace.styles';
import { useCreateWorkspaceMutation } from '../../generated/graphql';
import { routerConfig } from '../../router';
import { WorkspaceNameField } from './components';
import { createValidator } from '../../validation/createValidator';
import { validationSchema } from './validationSchema';

export const CreateWorkspace: React.FC = () => {
  const history = useHistory();
  const [createWorkspace, { loading, error }] = useCreateWorkspaceMutation();

  const onSubmit = useCallback(async ({name, avatar}) => {
    try {
      await createWorkspace({variables: {name, avatar}});
      history.push(routerConfig.defaultRoute);
    } catch {
      return;
    }
  }, [createWorkspace, history]);

  const validate = useMemo(() => createValidator(validationSchema), []);

  return (
    <CreateWorkspaceContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleSubmit }: FormRenderProps) => (
          <CreateWorkspaceFormForm onSubmit={handleSubmit}>
            <CreateWorkspacePaper elevation={0}>
              <WorkspaceNameField />
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
                disabled={loading}
              >
                Create
              </Button>
            </CreateWorkspacePaper>
          </CreateWorkspaceFormForm>
        )}
      </Form>
    </CreateWorkspaceContainer>
  );
};
