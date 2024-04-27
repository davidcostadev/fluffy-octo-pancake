import { gql } from '@apollo/client';

const TaskFragment = gql`
  fragment Task on Task {
    isCompleted
    description
    id
    title
    createdAt
    updatedAt
  }
`;

export const TASKS_PENDING = gql`
  query TasksPending($pagination: PaginationInput!) {
    tasks(filter: { isCompleted: { equals: false } }, sorting: { createdAt: ASC }, pagination: $pagination) {
      data {
        ...Task
      }
    }
  }

  ${TaskFragment}
`;

export const TASKS_COMPLETED = gql`
  query TasksCompleted($pagination: PaginationInput!) {
    tasks(filter: { isCompleted: { equals: true } }, sorting: { updatedAt: DESC }, pagination: $pagination) {
      data {
        ...Task
      }
    }
  }

  ${TaskFragment}
`;

export const TASK_CREATE = gql`
  mutation TaskCreate($input: TaskCreateInput!) {
    taskCreate(input: $input) {
      data {
        ...Task
      }
    }
  }

  ${TaskFragment}
`;

export const TASK_UPDATE = gql`
  mutation TaskUpdate($taskId: UUID!, $input: TaskUpdateInput!) {
    taskUpdate(taskId: $taskId, input: $input) {
      data {
        ...Task
      }
    }
  }

  ${TaskFragment}
`;

export const TASK_DESTROY = gql`
  mutation TaskDestroy($taskId: UUID!) {
    taskDestroy(taskId: $taskId) {
      data {
        ...Task
      }
    }
  }

  ${TaskFragment}
`;
