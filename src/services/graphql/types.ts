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

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authConfirmEmailByHash?: Maybe<Scalars['String']['output']>;
  authRegister?: Maybe<Scalars['String']['output']>;
  taskCreate: TaskSingleResult;
  taskDestroy: TaskSingleResult;
  taskUpdate: TaskSingleResult;
};

export type MutationAuthConfirmEmailByHashArgs = {
  hash: Scalars['String']['input'];
};

export type MutationAuthRegisterArgs = {
  input: AuthRegisterInput;
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

export type Query = {
  __typename?: 'Query';
  tasks?: Maybe<TaskListResult>;
};

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

export type TaskListResult = {
  __typename?: 'TaskListResult';
  data?: Maybe<Array<Task>>;
};

export type TaskSingleResult = {
  __typename?: 'TaskSingleResult';
  data?: Maybe<Task>;
};

export type TaskUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TaskFragment = {
  __typename?: 'Task';
  isCompleted: boolean;
  description?: string | null;
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TasksQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQuery = {
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
