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
export const TasksDocument = gql`
  query Tasks {
    tasks {
      data {
        ...Task
      }
    }
  }
  ${TaskFragmentDoc}
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<Types.TasksQuery, Types.TasksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TasksQuery, Types.TasksQueryVariables>(TasksDocument, options);
}
export function useTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TasksQuery, Types.TasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TasksQuery, Types.TasksQueryVariables>(TasksDocument, options);
}
export function useTasksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Types.TasksQuery, Types.TasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Types.TasksQuery, Types.TasksQueryVariables>(TasksDocument, options);
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksSuspenseQueryHookResult = ReturnType<typeof useTasksSuspenseQuery>;
export type TasksQueryResult = Apollo.QueryResult<Types.TasksQuery, Types.TasksQueryVariables>;
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
