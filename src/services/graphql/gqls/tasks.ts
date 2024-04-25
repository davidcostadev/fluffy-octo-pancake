import { gql } from '@apollo/client';

const TaskFragment = gql`
  fragment Task on Task {
    completed
    description
    id
    title
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
