import { gql } from '@apollo/client';

export const AUTH_LOGIN = gql`
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

export const AUTH_LOGOUT = gql`
  mutation AuthLogout {
    authLogout
  }
`;
