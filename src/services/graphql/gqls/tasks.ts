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

export const TASKS = gql`
  query Tasks {
    tasks {
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
