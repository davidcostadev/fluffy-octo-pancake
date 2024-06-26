export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string };
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string };
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthLoginResult = {
  __typename?: 'AuthLoginResult';
  token: Scalars['String']['output'];
  user: User;
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthSessionUpdateResult = {
  __typename?: 'AuthSessionUpdateResult';
  token: Scalars['String']['output'];
  user: UserSingleResult;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authChangePasswordByHash?: Maybe<Scalars['String']['output']>;
  authConfirmEmailByHash?: Maybe<Scalars['String']['output']>;
  authLogin?: Maybe<AuthLoginResult>;
  authLogout?: Maybe<Scalars['String']['output']>;
  authRegister?: Maybe<Scalars['String']['output']>;
  authRequestChangePassword?: Maybe<Scalars['String']['output']>;
  authSessionUpdate?: Maybe<AuthSessionUpdateResult>;
  taskCreate: TaskSingleResult;
  taskDestroy: TaskSingleResult;
  taskUpdate: TaskSingleResult;
};

export type MutationAuthChangePasswordByHashArgs = {
  hash: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationAuthConfirmEmailByHashArgs = {
  hash: Scalars['String']['input'];
};

export type MutationAuthLoginArgs = {
  input: AuthLoginInput;
};

export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
};

export type MutationAuthRequestChangePasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationTaskCreateArgs = {
  input: TaskCreateInput;
};

export type MutationTaskDestroyArgs = {
  taskId: Scalars['UUID']['input'];
};

export type MutationTaskUpdateArgs = {
  input: TaskUpdateInput;
  taskId: Scalars['UUID']['input'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  tasks?: Maybe<TaskListResult>;
};

export type QueryTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sorting?: InputMaybe<TaskSorting>;
};

export enum SortingOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaskCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type TaskFilter = {
  isCompleted?: InputMaybe<BoolFilter>;
};

export type TaskListResult = {
  __typename?: 'TaskListResult';
  data?: Maybe<Array<Task>>;
};

export type TaskSingleResult = {
  __typename?: 'TaskSingleResult';
  data?: Maybe<Task>;
};

export type TaskSorting = {
  createdAt?: InputMaybe<SortingOrder>;
  updatedAt?: InputMaybe<SortingOrder>;
};

export type TaskUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserSingleResult = {
  __typename?: 'UserSingleResult';
  data?: Maybe<User>;
};

export type AuthLoginMutationVariables = Exact<{
  input: AuthLoginInput;
}>;

export type AuthLoginMutation = {
  __typename?: 'Mutation';
  authLogin?: {
    __typename?: 'AuthLoginResult';
    token: string;
    user: {
      __typename?: 'User';
      createdAt: string;
      email: string;
      firstName: string;
      id: string;
      lastLogin?: string | null;
      lastName: string;
      updatedAt: string;
    };
  } | null;
};

export type AuthLogoutMutationVariables = Exact<{ [key: string]: never }>;

export type AuthLogoutMutation = { __typename?: 'Mutation'; authLogout?: string | null };

export type AuthRegisterMutationVariables = Exact<{
  input: AuthRegisterInput;
}>;

export type AuthRegisterMutation = { __typename?: 'Mutation'; authRegister?: string | null };

export type TaskFragment = {
  __typename?: 'Task';
  isCompleted: boolean;
  description?: string | null;
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TasksPendingQueryVariables = Exact<{
  pagination: PaginationInput;
}>;

export type TasksPendingQuery = {
  __typename?: 'Query';
  tasks?: {
    __typename?: 'TaskListResult';
    data?: Array<{
      __typename?: 'Task';
      isCompleted: boolean;
      description?: string | null;
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
  } | null;
};

export type TasksCompletedQueryVariables = Exact<{
  pagination: PaginationInput;
}>;

export type TasksCompletedQuery = {
  __typename?: 'Query';
  tasks?: {
    __typename?: 'TaskListResult';
    data?: Array<{
      __typename?: 'Task';
      isCompleted: boolean;
      description?: string | null;
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    }> | null;
  } | null;
};

export type TaskCreateMutationVariables = Exact<{
  input: TaskCreateInput;
}>;

export type TaskCreateMutation = {
  __typename?: 'Mutation';
  taskCreate: {
    __typename?: 'TaskSingleResult';
    data?: {
      __typename?: 'Task';
      isCompleted: boolean;
      description?: string | null;
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
};

export type TaskUpdateMutationVariables = Exact<{
  taskId: Scalars['UUID']['input'];
  input: TaskUpdateInput;
}>;

export type TaskUpdateMutation = {
  __typename?: 'Mutation';
  taskUpdate: {
    __typename?: 'TaskSingleResult';
    data?: {
      __typename?: 'Task';
      isCompleted: boolean;
      description?: string | null;
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
};

export type TaskDestroyMutationVariables = Exact<{
  taskId: Scalars['UUID']['input'];
}>;

export type TaskDestroyMutation = {
  __typename?: 'Mutation';
  taskDestroy: {
    __typename?: 'TaskSingleResult';
    data?: {
      __typename?: 'Task';
      isCompleted: boolean;
      description?: string | null;
      id: string;
      title: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
};
