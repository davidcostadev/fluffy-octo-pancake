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
