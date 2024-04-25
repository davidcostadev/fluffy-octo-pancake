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
};

export type Query = {
  __typename?: 'Query';
  tasks?: Maybe<TaskListResult>;
};

export type Task = {
  __typename?: 'Task';
  completed?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TaskListResult = {
  __typename?: 'TaskListResult';
  data?: Maybe<Array<Maybe<Task>>>;
};

export type TaskSingleResult = {
  __typename?: 'TaskSingleResult';
  data?: Maybe<Task>;
};

export type TasksQueryVariables = Exact<{ [key: string]: never }>;

export type TasksQuery = {
  __typename?: 'Query';
  tasks?: {
    __typename?: 'TaskListResult';
    data?: Array<{
      __typename?: 'Task';
      completed?: boolean | null;
      description?: string | null;
      id?: string | null;
      title?: string | null;
    } | null> | null;
  } | null;
};