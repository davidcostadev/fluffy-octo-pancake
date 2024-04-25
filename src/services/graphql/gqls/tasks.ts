import { gql } from '@apollo/client';

export const TASKS = gql`
  query Tasks {
    tasks {
      data {
        completed
        description
        id
        title
      }
    }
  }
`;
