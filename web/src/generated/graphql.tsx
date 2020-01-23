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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};

export type AddChannelInput = {
  name: Scalars['String'],
  workspaceId: Scalars['String'],
};

export type AddMessageInput = {
  text: Scalars['String'],
  channelId: Scalars['String'],
};

export type Channel = {
   __typename?: 'Channel',
  id: Scalars['String'],
  name: Scalars['String'],
  workspaceId: Scalars['String'],
  messages: Array<Message>,
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

export type Message = {
   __typename?: 'Message',
  id: Scalars['String'],
  createdDate: Scalars['DateTime'],
  channelId: Scalars['String'],
  text: Scalars['String'],
  user?: Maybe<User>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addChannel: Channel,
  removeChannel?: Maybe<Channel>,
  addMemberByName: Member,
  addMessage: Message,
  login: LoginResponse,
  logout: Scalars['Boolean'],
  register: User,
  applyWorkspaceInvitation: Workspace,
  createWorkspace: Workspace,
  inviteToWorkspace: Scalars['Boolean'],
  removeWorkspace: Workspace,
};


export type MutationAddChannelArgs = {
  input: AddChannelInput
};


export type MutationRemoveChannelArgs = {
  id: Scalars['String']
};


export type MutationAddMemberByNameArgs = {
  workspaceName: Scalars['String'],
  username: Scalars['String']
};


export type MutationAddMessageArgs = {
  input: AddMessageInput
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationApplyWorkspaceInvitationArgs = {
  token: Scalars['String']
};


export type MutationCreateWorkspaceArgs = {
  avatar: Scalars['String'],
  name: Scalars['String']
};


export type MutationInviteToWorkspaceArgs = {
  workspaceId: Scalars['String'],
  email: Scalars['String']
};


export type MutationRemoveWorkspaceArgs = {
  id: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  channels: Array<Channel>,
  workspaces: Array<Workspace>,
  messages: Array<Message>,
  hello: Scalars['String'],
  getUserById: User,
  getWorkspaceById: Workspace,
};


export type QueryChannelsArgs = {
  workspaceId: Scalars['String']
};


export type QueryMessagesArgs = {
  channelId: Scalars['String']
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['String']
};


export type QueryGetWorkspaceByIdArgs = {
  workspaceId: Scalars['String']
};

export type RegisterInput = {
  email: Scalars['String'],
  username: Scalars['String'],
  password: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  messageAdded: Message,
};


export type SubscriptionMessageAddedArgs = {
  channelId: Scalars['String']
};

export type User = {
   __typename?: 'User',
  userId: Scalars['String'],
  username: Scalars['String'],
  email: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
};

export type Workspace = {
   __typename?: 'Workspace',
  id: Scalars['String'],
  name: Scalars['String'],
  ownerId: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
};

export type AddChannelMutationVariables = {
  input: AddChannelInput
};


export type AddChannelMutation = (
  { __typename?: 'Mutation' }
  & { addChannel: (
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'name'>
  ) }
);

export type AddMessageMutationVariables = {
  input: AddMessageInput
};


export type AddMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text' | 'createdDate'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username' | 'avatar'>
    )> }
  ) }
);

export type ApplyWorkspaceInvitationMutationVariables = {
  token: Scalars['String']
};


export type ApplyWorkspaceInvitationMutation = (
  { __typename?: 'Mutation' }
  & { applyWorkspaceInvitation: (
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'name' | 'avatar'>
  ) }
);

export type ChannelsQueryVariables = {
  workspaceId: Scalars['String']
};


export type ChannelsQuery = (
  { __typename?: 'Query' }
  & { channels: Array<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'id' | 'name'>
  )> }
);

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

export type GetUserByIdQueryVariables = {
  userId: Scalars['String']
};


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username' | 'email' | 'avatar'>
  ) }
);

export type GetWorkspaceByIdQueryVariables = {
  workspaceId: Scalars['String']
};


export type GetWorkspaceByIdQuery = (
  { __typename?: 'Query' }
  & { getWorkspaceById: (
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'name' | 'avatar'>
  ) }
);

export type InviteToWorkspaceMutationVariables = {
  email: Scalars['String'],
  workspaceId: Scalars['String']
};


export type InviteToWorkspaceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'inviteToWorkspace'>
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

export type MessageAddedSubscriptionVariables = {
  channelId: Scalars['String']
};


export type MessageAddedSubscription = (
  { __typename?: 'Subscription' }
  & { messageAdded: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text' | 'createdDate' | 'channelId'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username' | 'avatar'>
    )> }
  ) }
);

export type MessagesQueryVariables = {
  channelId: Scalars['String']
};


export type MessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text' | 'createdDate'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username' | 'avatar'>
    )> }
  )> }
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


export const AddChannelDocument = gql`
    mutation AddChannel($input: AddChannelInput!) {
  addChannel(input: $input) {
    id
    name
  }
}
    `;
export type AddChannelMutationFn = ApolloReactCommon.MutationFunction<AddChannelMutation, AddChannelMutationVariables>;

/**
 * __useAddChannelMutation__
 *
 * To run a mutation, you first call `useAddChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChannelMutation, { data, loading, error }] = useAddChannelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddChannelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddChannelMutation, AddChannelMutationVariables>) {
        return ApolloReactHooks.useMutation<AddChannelMutation, AddChannelMutationVariables>(AddChannelDocument, baseOptions);
      }
export type AddChannelMutationHookResult = ReturnType<typeof useAddChannelMutation>;
export type AddChannelMutationResult = ApolloReactCommon.MutationResult<AddChannelMutation>;
export type AddChannelMutationOptions = ApolloReactCommon.BaseMutationOptions<AddChannelMutation, AddChannelMutationVariables>;
export const AddMessageDocument = gql`
    mutation AddMessage($input: AddMessageInput!) {
  addMessage(input: $input) {
    id
    text
    createdDate
    user {
      userId
      username
      avatar
    }
  }
}
    `;
export type AddMessageMutationFn = ApolloReactCommon.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, baseOptions);
      }
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = ApolloReactCommon.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
export const ApplyWorkspaceInvitationDocument = gql`
    mutation ApplyWorkspaceInvitation($token: String!) {
  applyWorkspaceInvitation(token: $token) {
    name
    avatar
  }
}
    `;
export type ApplyWorkspaceInvitationMutationFn = ApolloReactCommon.MutationFunction<ApplyWorkspaceInvitationMutation, ApplyWorkspaceInvitationMutationVariables>;

/**
 * __useApplyWorkspaceInvitationMutation__
 *
 * To run a mutation, you first call `useApplyWorkspaceInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyWorkspaceInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyWorkspaceInvitationMutation, { data, loading, error }] = useApplyWorkspaceInvitationMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useApplyWorkspaceInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ApplyWorkspaceInvitationMutation, ApplyWorkspaceInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<ApplyWorkspaceInvitationMutation, ApplyWorkspaceInvitationMutationVariables>(ApplyWorkspaceInvitationDocument, baseOptions);
      }
export type ApplyWorkspaceInvitationMutationHookResult = ReturnType<typeof useApplyWorkspaceInvitationMutation>;
export type ApplyWorkspaceInvitationMutationResult = ApolloReactCommon.MutationResult<ApplyWorkspaceInvitationMutation>;
export type ApplyWorkspaceInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<ApplyWorkspaceInvitationMutation, ApplyWorkspaceInvitationMutationVariables>;
export const ChannelsDocument = gql`
    query Channels($workspaceId: String!) {
  channels(workspaceId: $workspaceId) {
    id
    name
  }
}
    `;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        return ApolloReactHooks.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, baseOptions);
      }
export function useChannelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, baseOptions);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = ApolloReactCommon.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
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
export const GetUserByIdDocument = gql`
    query GetUserById($userId: String!) {
  getUserById(userId: $userId) {
    userId
    username
    email
    avatar
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
      }
export function useGetUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = ApolloReactCommon.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetWorkspaceByIdDocument = gql`
    query GetWorkspaceById($workspaceId: String!) {
  getWorkspaceById(workspaceId: $workspaceId) {
    id
    name
    avatar
  }
}
    `;

/**
 * __useGetWorkspaceByIdQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceByIdQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGetWorkspaceByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>(GetWorkspaceByIdDocument, baseOptions);
      }
export function useGetWorkspaceByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>(GetWorkspaceByIdDocument, baseOptions);
        }
export type GetWorkspaceByIdQueryHookResult = ReturnType<typeof useGetWorkspaceByIdQuery>;
export type GetWorkspaceByIdLazyQueryHookResult = ReturnType<typeof useGetWorkspaceByIdLazyQuery>;
export type GetWorkspaceByIdQueryResult = ApolloReactCommon.QueryResult<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>;
export const InviteToWorkspaceDocument = gql`
    mutation InviteToWorkspace($email: String!, $workspaceId: String!) {
  inviteToWorkspace(email: $email, workspaceId: $workspaceId)
}
    `;
export type InviteToWorkspaceMutationFn = ApolloReactCommon.MutationFunction<InviteToWorkspaceMutation, InviteToWorkspaceMutationVariables>;

/**
 * __useInviteToWorkspaceMutation__
 *
 * To run a mutation, you first call `useInviteToWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteToWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteToWorkspaceMutation, { data, loading, error }] = useInviteToWorkspaceMutation({
 *   variables: {
 *      email: // value for 'email'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useInviteToWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InviteToWorkspaceMutation, InviteToWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<InviteToWorkspaceMutation, InviteToWorkspaceMutationVariables>(InviteToWorkspaceDocument, baseOptions);
      }
export type InviteToWorkspaceMutationHookResult = ReturnType<typeof useInviteToWorkspaceMutation>;
export type InviteToWorkspaceMutationResult = ApolloReactCommon.MutationResult<InviteToWorkspaceMutation>;
export type InviteToWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<InviteToWorkspaceMutation, InviteToWorkspaceMutationVariables>;
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
export const MessageAddedDocument = gql`
    subscription MessageAdded($channelId: String!) {
  messageAdded(channelId: $channelId) {
    id
    text
    createdDate
    channelId
    createdDate
    user {
      userId
      username
      avatar
    }
  }
}
    `;

/**
 * __useMessageAddedSubscription__
 *
 * To run a query within a React component, call `useMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageAddedSubscription({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useMessageAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<MessageAddedSubscription, MessageAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<MessageAddedSubscription, MessageAddedSubscriptionVariables>(MessageAddedDocument, baseOptions);
      }
export type MessageAddedSubscriptionHookResult = ReturnType<typeof useMessageAddedSubscription>;
export type MessageAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<MessageAddedSubscription>;
export const MessagesDocument = gql`
    query Messages($channelId: String!) {
  messages(channelId: $channelId) {
    id
    text
    createdDate
    user {
      userId
      username
      avatar
    }
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        return ApolloReactHooks.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, baseOptions);
      }
export function useMessagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, baseOptions);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = ApolloReactCommon.QueryResult<MessagesQuery, MessagesQueryVariables>;
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