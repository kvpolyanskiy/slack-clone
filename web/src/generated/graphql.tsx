import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
};

export type Member = {
   __typename?: 'Member',
  userId: Scalars['String'],
  workspaceId: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  addMemberByName: Member,
  login: LoginResponse,
  logout: Scalars['Boolean'],
  register: User,
  createWorkspace: Workspace,
  removeWorkspace: Workspace,
};


export type MutationAddMemberByNameArgs = {
  workspaceName: Scalars['String'],
  username: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationCreateWorkspaceArgs = {
  avatar: Scalars['String'],
  name: Scalars['String']
};


export type MutationRemoveWorkspaceArgs = {
  id: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  workspaces: Array<Workspace>,
  hello: Scalars['String'],
};

export type RegisterInput = {
  email: Scalars['String'],
  username: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  userId: Scalars['String'],
  username: Scalars['String'],
  email: Scalars['String'],
};

export type Workspace = {
   __typename?: 'Workspace',
  id: Scalars['String'],
  name: Scalars['String'],
  ownerId: Scalars['String'],
  avatar: Scalars['String'],
};

export type CreateWorkspaceMutationVariables = {
  name: Scalars['String'],
  avatar: Scalars['String']
};


export type CreateWorkspaceMutation = (
  { __typename?: 'Mutation' }
  & { createWorkspace: (
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'name' | 'ownerId' | 'avatar'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = {
  input: RegisterInput
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username' | 'email'>
  ) }
);

export type WorkspacesQueryVariables = {};


export type WorkspacesQuery = (
  { __typename?: 'Query' }
  & { workspaces: Array<(
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'name' | 'avatar'>
  )> }
);


export const CreateWorkspaceDocument = gql`
    mutation CreateWorkspace($name: String!, $avatar: String!) {
  createWorkspace(name: $name, avatar: $avatar) {
    id
    name
    ownerId
    avatar
  }
}
    `;
export type CreateWorkspaceMutationFn = ApolloReactCommon.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, baseOptions);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = ApolloReactCommon.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    userId
    username
    email
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const WorkspacesDocument = gql`
    query Workspaces {
  workspaces {
    id
    name
    avatar
  }
}
    `;

/**
 * __useWorkspacesQuery__
 *
 * To run a query within a React component, call `useWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkspacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorkspacesQuery, WorkspacesQueryVariables>) {
        return ApolloReactHooks.useQuery<WorkspacesQuery, WorkspacesQueryVariables>(WorkspacesDocument, baseOptions);
      }
export function useWorkspacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorkspacesQuery, WorkspacesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorkspacesQuery, WorkspacesQueryVariables>(WorkspacesDocument, baseOptions);
        }
export type WorkspacesQueryHookResult = ReturnType<typeof useWorkspacesQuery>;
export type WorkspacesLazyQueryHookResult = ReturnType<typeof useWorkspacesLazyQuery>;
export type WorkspacesQueryResult = ApolloReactCommon.QueryResult<WorkspacesQuery, WorkspacesQueryVariables>;