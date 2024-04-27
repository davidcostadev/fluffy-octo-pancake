import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from './types';

const defaultOptions = {} as const;
export const TaskFragmentDoc = gql`
  fragment Task on Task {
    isCompleted
    description
    id
    title
    createdAt
    updatedAt
  }
`;
export const AuthLoginDocument = gql`
  mutation AuthLogin($input: AuthLoginInput!) {
    authLogin(input: $input) {
      token
      user {
        createdAt
        email
        firstName
        id
        lastLogin
        lastName
        updatedAt
      }
    }
  }
`;
export type AuthLoginMutationFn = Apollo.MutationFunction<Types.AuthLoginMutation, Types.AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AuthLoginMutation, Types.AuthLoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AuthLoginMutation, Types.AuthLoginMutationVariables>(AuthLoginDocument, options);
}
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<Types.AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<
  Types.AuthLoginMutation,
  Types.AuthLoginMutationVariables
>;
export const AuthLogoutDocument = gql`
  mutation AuthLogout {
    authLogout
  }
`;
export type AuthLogoutMutationFn = Apollo.MutationFunction<Types.AuthLogoutMutation, Types.AuthLogoutMutationVariables>;

/**
 * __useAuthLogoutMutation__
 *
 * To run a mutation, you first call `useAuthLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLogoutMutation, { data, loading, error }] = useAuthLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useAuthLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AuthLogoutMutation, Types.AuthLogoutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AuthLogoutMutation, Types.AuthLogoutMutationVariables>(AuthLogoutDocument, options);
}
export type AuthLogoutMutationHookResult = ReturnType<typeof useAuthLogoutMutation>;
export type AuthLogoutMutationResult = Apollo.MutationResult<Types.AuthLogoutMutation>;
export type AuthLogoutMutationOptions = Apollo.BaseMutationOptions<
  Types.AuthLogoutMutation,
  Types.AuthLogoutMutationVariables
>;
export const AuthRegisterDocument = gql`
  mutation AuthRegister($input: AuthRegisterInput!) {
    authRegister(input: $input)
  }
`;
export type AuthRegisterMutationFn = Apollo.MutationFunction<
  Types.AuthRegisterMutation,
  Types.AuthRegisterMutationVariables
>;

/**
 * __useAuthRegisterMutation__
 *
 * To run a mutation, you first call `useAuthRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRegisterMutation, { data, loading, error }] = useAuthRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AuthRegisterMutation, Types.AuthRegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AuthRegisterMutation, Types.AuthRegisterMutationVariables>(
    AuthRegisterDocument,
    options,
  );
}
export type AuthRegisterMutationHookResult = ReturnType<typeof useAuthRegisterMutation>;
export type AuthRegisterMutationResult = Apollo.MutationResult<Types.AuthRegisterMutation>;
export type AuthRegisterMutationOptions = Apollo.BaseMutationOptions<
  Types.AuthRegisterMutation,
  Types.AuthRegisterMutationVariables
>;
export const TasksPendingDocument = gql`
  query TasksPending($pagination: PaginationInput!) {
    tasks(filter: { isCompleted: { equals: false } }, sorting: { createdAt: ASC }, pagination: $pagination) {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;

/**
 * __useTasksPendingQuery__
 *
 * To run a query within a React component, call `useTasksPendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksPendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksPendingQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useTasksPendingQuery(
  baseOptions: Apollo.QueryHookOptions<Types.TasksPendingQuery, Types.TasksPendingQueryVariables> &
    ({ variables: Types.TasksPendingQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>(TasksPendingDocument, options);
}
export function useTasksPendingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>(TasksPendingDocument, options);
}
export function useTasksPendingSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>(
    TasksPendingDocument,
    options,
  );
}
export type TasksPendingQueryHookResult = ReturnType<typeof useTasksPendingQuery>;
export type TasksPendingLazyQueryHookResult = ReturnType<typeof useTasksPendingLazyQuery>;
export type TasksPendingSuspenseQueryHookResult = ReturnType<typeof useTasksPendingSuspenseQuery>;
export type TasksPendingQueryResult = Apollo.QueryResult<Types.TasksPendingQuery, Types.TasksPendingQueryVariables>;
export const TasksCompletedDocument = gql`
  query TasksCompleted($pagination: PaginationInput!) {
    tasks(filter: { isCompleted: { equals: true } }, sorting: { updatedAt: DESC }, pagination: $pagination) {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;

/**
 * __useTasksCompletedQuery__
 *
 * To run a query within a React component, call `useTasksCompletedQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksCompletedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksCompletedQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useTasksCompletedQuery(
  baseOptions: Apollo.QueryHookOptions<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables> &
    ({ variables: Types.TasksCompletedQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables>(
    TasksCompletedDocument,
    options,
  );
}
export function useTasksCompletedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables>(
    TasksCompletedDocument,
    options,
  );
}
export function useTasksCompletedSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Types.TasksCompletedQuery, Types.TasksCompletedQueryVariables>(
    TasksCompletedDocument,
    options,
  );
}
export type TasksCompletedQueryHookResult = ReturnType<typeof useTasksCompletedQuery>;
export type TasksCompletedLazyQueryHookResult = ReturnType<typeof useTasksCompletedLazyQuery>;
export type TasksCompletedSuspenseQueryHookResult = ReturnType<typeof useTasksCompletedSuspenseQuery>;
export type TasksCompletedQueryResult = Apollo.QueryResult<
  Types.TasksCompletedQuery,
  Types.TasksCompletedQueryVariables
>;
export const TaskCreateDocument = gql`
  mutation TaskCreate($input: TaskCreateInput!) {
    taskCreate(input: $input) {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;
export type TaskCreateMutationFn = Apollo.MutationFunction<Types.TaskCreateMutation, Types.TaskCreateMutationVariables>;

/**
 * __useTaskCreateMutation__
 *
 * To run a mutation, you first call `useTaskCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskCreateMutation, { data, loading, error }] = useTaskCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.TaskCreateMutation, Types.TaskCreateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.TaskCreateMutation, Types.TaskCreateMutationVariables>(TaskCreateDocument, options);
}
export type TaskCreateMutationHookResult = ReturnType<typeof useTaskCreateMutation>;
export type TaskCreateMutationResult = Apollo.MutationResult<Types.TaskCreateMutation>;
export type TaskCreateMutationOptions = Apollo.BaseMutationOptions<
  Types.TaskCreateMutation,
  Types.TaskCreateMutationVariables
>;
export const TaskUpdateDocument = gql`
  mutation TaskUpdate($taskId: UUID!, $input: TaskUpdateInput!) {
    taskUpdate(taskId: $taskId, input: $input) {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;
export type TaskUpdateMutationFn = Apollo.MutationFunction<Types.TaskUpdateMutation, Types.TaskUpdateMutationVariables>;

/**
 * __useTaskUpdateMutation__
 *
 * To run a mutation, you first call `useTaskUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskUpdateMutation, { data, loading, error }] = useTaskUpdateMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTaskUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.TaskUpdateMutation, Types.TaskUpdateMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.TaskUpdateMutation, Types.TaskUpdateMutationVariables>(TaskUpdateDocument, options);
}
export type TaskUpdateMutationHookResult = ReturnType<typeof useTaskUpdateMutation>;
export type TaskUpdateMutationResult = Apollo.MutationResult<Types.TaskUpdateMutation>;
export type TaskUpdateMutationOptions = Apollo.BaseMutationOptions<
  Types.TaskUpdateMutation,
  Types.TaskUpdateMutationVariables
>;
export const TaskDestroyDocument = gql`
  mutation TaskDestroy($taskId: UUID!) {
    taskDestroy(taskId: $taskId) {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;
export type TaskDestroyMutationFn = Apollo.MutationFunction<
  Types.TaskDestroyMutation,
  Types.TaskDestroyMutationVariables
>;

/**
 * __useTaskDestroyMutation__
 *
 * To run a mutation, you first call `useTaskDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskDestroyMutation, { data, loading, error }] = useTaskDestroyMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.TaskDestroyMutation, Types.TaskDestroyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.TaskDestroyMutation, Types.TaskDestroyMutationVariables>(
    TaskDestroyDocument,
    options,
  );
}
export type TaskDestroyMutationHookResult = ReturnType<typeof useTaskDestroyMutation>;
export type TaskDestroyMutationResult = Apollo.MutationResult<Types.TaskDestroyMutation>;
export type TaskDestroyMutationOptions = Apollo.BaseMutationOptions<
  Types.TaskDestroyMutation,
  Types.TaskDestroyMutationVariables
>;
