/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AuthLoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  AuthRegisterInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
  }
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
  }
  PaginationInput: { // input type
    limit?: number | null; // Int
    page?: number | null; // Int
  }
  TaskCreateInput: { // input type
    description?: string | null; // String
    title: string; // String!
  }
  TaskFilter: { // input type
    isCompleted?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
  }
  TaskSorting: { // input type
    createdAt?: NexusGenEnums['SortingOrder'] | null; // SortingOrder
    updatedAt?: NexusGenEnums['SortingOrder'] | null; // SortingOrder
  }
  TaskUpdateInput: { // input type
    description?: string | null; // String
    isCompleted?: boolean | null; // Boolean
    title?: string | null; // String
  }
}

export interface NexusGenEnums {
  SortingOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: string | Date
  UUID: string
}

export interface NexusGenObjects {
  AuthLoginResult: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  AuthSessionUpdateResult: { // root type
    token: string; // String!
    user: NexusGenRootTypes['UserSingleResult']; // UserSingleResult!
  }
  Mutation: {};
  Query: {};
  Task: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: NexusGenScalars['UUID']; // UUID!
    isCompleted: boolean; // Boolean!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TaskListResult: { // root type
    data?: NexusGenRootTypes['Task'][] | null; // [Task!]
  }
  TaskSingleResult: { // root type
    data?: NexusGenRootTypes['Task'] | null; // Task
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    lastLogin?: NexusGenScalars['DateTime'] | null; // DateTime
    lastName: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  UserSingleResult: { // root type
    data?: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthLoginResult: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  AuthSessionUpdateResult: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['UserSingleResult']; // UserSingleResult!
  }
  Mutation: { // field return type
    authChangePasswordByHash: string | null; // String
    authConfirmEmailByHash: string | null; // String
    authLogin: NexusGenRootTypes['AuthLoginResult'] | null; // AuthLoginResult
    authLogout: string | null; // String
    authRegister: string | null; // String
    authRequestChangePassword: string | null; // String
    authSessionUpdate: NexusGenRootTypes['AuthSessionUpdateResult'] | null; // AuthSessionUpdateResult
    taskCreate: NexusGenRootTypes['TaskSingleResult']; // TaskSingleResult!
    taskDestroy: NexusGenRootTypes['TaskSingleResult']; // TaskSingleResult!
    taskUpdate: NexusGenRootTypes['TaskSingleResult']; // TaskSingleResult!
  }
  Query: { // field return type
    tasks: NexusGenRootTypes['TaskListResult'] | null; // TaskListResult
  }
  Task: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: NexusGenScalars['UUID']; // UUID!
    isCompleted: boolean; // Boolean!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TaskListResult: { // field return type
    data: NexusGenRootTypes['Task'][] | null; // [Task!]
  }
  TaskSingleResult: { // field return type
    data: NexusGenRootTypes['Task'] | null; // Task
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: NexusGenScalars['UUID']; // UUID!
    lastLogin: NexusGenScalars['DateTime'] | null; // DateTime
    lastName: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  UserSingleResult: { // field return type
    data: NexusGenRootTypes['User'] | null; // User
  }
}

export interface NexusGenFieldTypeNames {
  AuthLoginResult: { // field return type name
    token: 'String'
    user: 'User'
  }
  AuthSessionUpdateResult: { // field return type name
    token: 'String'
    user: 'UserSingleResult'
  }
  Mutation: { // field return type name
    authChangePasswordByHash: 'String'
    authConfirmEmailByHash: 'String'
    authLogin: 'AuthLoginResult'
    authLogout: 'String'
    authRegister: 'String'
    authRequestChangePassword: 'String'
    authSessionUpdate: 'AuthSessionUpdateResult'
    taskCreate: 'TaskSingleResult'
    taskDestroy: 'TaskSingleResult'
    taskUpdate: 'TaskSingleResult'
  }
  Query: { // field return type name
    tasks: 'TaskListResult'
  }
  Task: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'UUID'
    isCompleted: 'Boolean'
    title: 'String'
    updatedAt: 'DateTime'
  }
  TaskListResult: { // field return type name
    data: 'Task'
  }
  TaskSingleResult: { // field return type name
    data: 'Task'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    firstName: 'String'
    id: 'UUID'
    lastLogin: 'DateTime'
    lastName: 'String'
    updatedAt: 'DateTime'
  }
  UserSingleResult: { // field return type name
    data: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    authChangePasswordByHash: { // args
      hash: string; // String!
      password: string; // String!
    }
    authConfirmEmailByHash: { // args
      hash: string; // String!
    }
    authLogin: { // args
      input: NexusGenInputs['AuthLoginInput']; // AuthLoginInput!
    }
    authRegister: { // args
      input: NexusGenInputs['AuthRegisterInput']; // AuthRegisterInput!
    }
    authRequestChangePassword: { // args
      email: string; // String!
    }
    taskCreate: { // args
      input: NexusGenInputs['TaskCreateInput']; // TaskCreateInput!
    }
    taskDestroy: { // args
      taskId: NexusGenScalars['UUID']; // UUID!
    }
    taskUpdate: { // args
      input: NexusGenInputs['TaskUpdateInput']; // TaskUpdateInput!
      taskId: NexusGenScalars['UUID']; // UUID!
    }
  }
  Query: {
    tasks: { // args
      filter?: NexusGenInputs['TaskFilter'] | null; // TaskFilter
      pagination?: NexusGenInputs['PaginationInput'] | null; // PaginationInput
      sorting?: NexusGenInputs['TaskSorting'] | null; // TaskSorting
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}