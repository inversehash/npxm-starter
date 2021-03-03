import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AccountCreateEmailInput = {
  email: Scalars['String']
}

export type AccountUpdatePasswordInput = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  verified: Scalars['String']
}

export type AccountUpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type AdminCreateCompanyInput = {
  addressLine1: Scalars['String']
  addressLine2: Scalars['String']
  city: Scalars['String']
  country: Scalars['String']
  name: Scalars['String']
  phoneNumber: Scalars['String']
  postalCode: Scalars['String']
  stateOrProvince: Scalars['String']
}

export type AdminCreateProviderInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name: Scalars['String']
}

export type AdminCreateReporterInput = {
  addressCity?: Maybe<Scalars['String']>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressPostalCode?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  faxNumber?: Maybe<Scalars['String']>
  name: Scalars['String']
  phoneNumber?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role: Role
  username?: Maybe<Scalars['String']>
}

export type AdminListCompanyInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListProviderInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListReporterInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminUpdateCompanyInput = {
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  stateOrProvince?: Maybe<Scalars['String']>
}

export type AdminUpdateProviderInput = {
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateReporterInput = {
  addressCity?: Maybe<Scalars['String']>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressPostalCode?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  faxNumber?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  username?: Maybe<Scalars['String']>
}

export type AuthToken = {
  __typename?: 'AuthToken'
  /** JWT Bearer token */
  token: Scalars['String']
}

export type Company = {
  __typename?: 'Company'
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  stateOrProvince?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type Email = {
  __typename?: 'Email'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  verified?: Maybe<Scalars['Boolean']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountCreateEmail?: Maybe<Email>
  accountDeleteEmail?: Maybe<Email>
  accountMarkEmailPrimary?: Maybe<Email>
  accountMarkEmailPrivate?: Maybe<Email>
  accountMarkEmailPublic?: Maybe<Email>
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdatePassword?: Maybe<Scalars['Boolean']>
  accountUpdateProfile?: Maybe<User>
  accountUpdateUsername?: Maybe<User>
  adminCreateCompany?: Maybe<Company>
  adminCreateProvider?: Maybe<Provider>
  adminCreateReporter?: Maybe<Reporter>
  adminCreateUser?: Maybe<User>
  adminDeleteCompany?: Maybe<Company>
  adminDeleteProvider?: Maybe<Provider>
  adminDeleteReporter?: Maybe<Reporter>
  adminDeleteUser?: Maybe<User>
  adminSetUserPassword?: Maybe<User>
  adminUpdateCompany?: Maybe<Company>
  adminUpdateProvider?: Maybe<Provider>
  adminUpdateReporter?: Maybe<Reporter>
  adminUpdateUser?: Maybe<User>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<AuthToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<AuthToken>
}

export type MutationAccountCreateEmailArgs = {
  input: AccountCreateEmailInput
}

export type MutationAccountDeleteEmailArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrimaryArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrivateArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPublicArgs = {
  emailId: Scalars['String']
}

export type MutationAccountUpdatePasswordArgs = {
  input: AccountUpdatePasswordInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAccountUpdateUsernameArgs = {
  username: Scalars['String']
}

export type MutationAdminCreateCompanyArgs = {
  input: AdminCreateCompanyInput
}

export type MutationAdminCreateProviderArgs = {
  input: AdminCreateProviderInput
}

export type MutationAdminCreateReporterArgs = {
  input: AdminCreateReporterInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteCompanyArgs = {
  companyId: Scalars['String']
}

export type MutationAdminDeleteProviderArgs = {
  providerId: Scalars['String']
}

export type MutationAdminDeleteReporterArgs = {
  reporterId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminSetUserPasswordArgs = {
  password: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminUpdateCompanyArgs = {
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}

export type MutationAdminUpdateProviderArgs = {
  input: AdminUpdateProviderInput
  providerId: Scalars['String']
}

export type MutationAdminUpdateReporterArgs = {
  input: AdminUpdateReporterInput
  reporterId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type Provider = {
  __typename?: 'Provider'
  createdAt?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Query = {
  __typename?: 'Query'
  accountEmails?: Maybe<Array<Email>>
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  adminCompany?: Maybe<Company>
  adminCompanys?: Maybe<Array<Company>>
  adminCountCompanys?: Maybe<CorePaging>
  adminCountProviders?: Maybe<CorePaging>
  adminCountReporters?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminProvider?: Maybe<Provider>
  adminProviders?: Maybe<Array<Provider>>
  adminReporter?: Maybe<Reporter>
  adminReporters?: Maybe<Array<Reporter>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  me?: Maybe<User>
  publicCompanys?: Maybe<Array<Company>>
  publicProviders?: Maybe<Array<Provider>>
  publicReporters?: Maybe<Array<Reporter>>
  uptime?: Maybe<Scalars['Float']>
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryAdminCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryAdminCompanysArgs = {
  input?: Maybe<AdminListCompanyInput>
}

export type QueryAdminCountCompanysArgs = {
  input?: Maybe<AdminListCompanyInput>
}

export type QueryAdminCountProvidersArgs = {
  input?: Maybe<AdminListProviderInput>
}

export type QueryAdminCountReportersArgs = {
  input?: Maybe<AdminListReporterInput>
}

export type QueryAdminCountUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminProviderArgs = {
  providerId: Scalars['String']
}

export type QueryAdminProvidersArgs = {
  input?: Maybe<AdminListProviderInput>
}

export type QueryAdminReporterArgs = {
  reporterId: Scalars['String']
}

export type QueryAdminReportersArgs = {
  input?: Maybe<AdminListReporterInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type Reporter = {
  __typename?: 'Reporter'
  addressCity?: Maybe<Scalars['String']>
  addressLine1?: Maybe<Scalars['String']>
  addressLine2?: Maybe<Scalars['String']>
  addressPostalCode?: Maybe<Scalars['String']>
  addressState?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  faxNumber?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  profession?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emails?: Maybe<Array<Email>>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type AccountEmailsQueryVariables = Exact<{ [key: string]: never }>

export type AccountEmailsQuery = { __typename?: 'Query' } & {
  accountEmails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
}

export type AccountProfileQueryVariables = Exact<{ [key: string]: never }>

export type AccountProfileQuery = { __typename?: 'Query' } & {
  accountProfile?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AccountUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUsernameAvailableQuery = { __typename?: 'Query' } & Pick<Query, 'accountUsernameAvailable'>

export type AccountCreateEmailMutationVariables = Exact<{
  input: AccountCreateEmailInput
}>

export type AccountCreateEmailMutation = { __typename?: 'Mutation' } & {
  accountCreateEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountDeleteEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountDeleteEmailMutation = { __typename?: 'Mutation' } & {
  accountDeleteEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrimaryMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrimaryMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrimary?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrivateMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrivateMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrivate?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPublicMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPublicMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPublic?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountUpdateProfileMutationVariables = Exact<{
  input: AccountUpdateProfileInput
}>

export type AccountUpdateProfileMutation = { __typename?: 'Mutation' } & {
  accountUpdateProfile?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdateUsernameMutationVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUpdateUsernameMutation = { __typename?: 'Mutation' } & {
  accountUpdateUsername?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdatePasswordMutationVariables = Exact<{
  input: AccountUpdatePasswordInput
}>

export type AccountUpdatePasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountUpdatePassword'>

export type AuthTokenDetailsFragment = { __typename?: 'AuthToken' } & Pick<AuthToken, 'token'>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type CompanyDetailsFragment = { __typename?: 'Company' } & Pick<
  Company,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'addressLine1'
  | 'addressLine2'
  | 'city'
  | 'stateOrProvince'
  | 'postalCode'
  | 'country'
  | 'phoneNumber'
>

export type AdminCompanysQueryVariables = Exact<{
  input?: Maybe<AdminListCompanyInput>
}>

export type AdminCompanysQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Company' } & CompanyDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountCompanysQueryVariables = Exact<{
  input?: Maybe<AdminListCompanyInput>
}>

export type AdminCountCompanysQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCompanyQueryVariables = Exact<{
  companyId: Scalars['String']
}>

export type AdminCompanyQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Company' } & CompanyDetailsFragment>
}

export type PublicCompanysQueryVariables = Exact<{ [key: string]: never }>

export type PublicCompanysQuery = { __typename?: 'Query' } & {
  companys?: Maybe<Array<{ __typename?: 'Company' } & CompanyDetailsFragment>>
}

export type AdminCreateCompanyMutationVariables = Exact<{
  input: AdminCreateCompanyInput
}>

export type AdminCreateCompanyMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Company' } & CompanyDetailsFragment>
}

export type AdminUpdateCompanyMutationVariables = Exact<{
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}>

export type AdminUpdateCompanyMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Company' } & CompanyDetailsFragment>
}

export type AdminDeleteCompanyMutationVariables = Exact<{
  companyId: Scalars['String']
}>

export type AdminDeleteCompanyMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Company' } & CompanyDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type CorePagingDetailsFragment = { __typename?: 'CorePaging' } & Pick<CorePaging, 'limit' | 'skip' | 'total'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type ProviderDetailsFragment = { __typename?: 'Provider' } & Pick<
  Provider,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'firstName' | 'lastName'
>

export type AdminProvidersQueryVariables = Exact<{
  input?: Maybe<AdminListProviderInput>
}>

export type AdminProvidersQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Provider' } & ProviderDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountProvidersQueryVariables = Exact<{
  input?: Maybe<AdminListProviderInput>
}>

export type AdminCountProvidersQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminProviderQueryVariables = Exact<{
  providerId: Scalars['String']
}>

export type AdminProviderQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Provider' } & ProviderDetailsFragment>
}

export type AdminCreateProviderMutationVariables = Exact<{
  input: AdminCreateProviderInput
}>

export type AdminCreateProviderMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Provider' } & ProviderDetailsFragment>
}

export type AdminUpdateProviderMutationVariables = Exact<{
  providerId: Scalars['String']
  input: AdminUpdateProviderInput
}>

export type AdminUpdateProviderMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Provider' } & ProviderDetailsFragment>
}

export type AdminDeleteProviderMutationVariables = Exact<{
  providerId: Scalars['String']
}>

export type AdminDeleteProviderMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Provider' } & ProviderDetailsFragment>
}

export type PublicProvidersQueryVariables = Exact<{ [key: string]: never }>

export type PublicProvidersQuery = { __typename?: 'Query' } & {
  provider?: Maybe<Array<{ __typename?: 'Provider' } & ProviderDetailsFragment>>
}

export type ReporterDetailsFragment = { __typename?: 'Reporter' } & Pick<
  Reporter,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'name'
  | 'addressLine1'
  | 'addressLine2'
  | 'addressCity'
  | 'addressState'
  | 'addressPostalCode'
  | 'phoneNumber'
  | 'profession'
  | 'faxNumber'
>

export type AdminReportersQueryVariables = Exact<{
  input?: Maybe<AdminListReporterInput>
}>

export type AdminReportersQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Reporter' } & ReporterDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountReportersQueryVariables = Exact<{
  input?: Maybe<AdminListReporterInput>
}>

export type AdminCountReportersQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminReporterQueryVariables = Exact<{
  reporterId: Scalars['String']
}>

export type AdminReporterQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Reporter' } & ReporterDetailsFragment>
}

export type AdminCreateReporterMutationVariables = Exact<{
  input: AdminCreateReporterInput
}>

export type AdminCreateReporterMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Reporter' } & ReporterDetailsFragment>
}

export type AdminUpdateReporterMutationVariables = Exact<{
  reporterId: Scalars['String']
  input: AdminUpdateReporterInput
}>

export type AdminUpdateReporterMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Reporter' } & ReporterDetailsFragment>
}

export type AdminDeleteReporterMutationVariables = Exact<{
  reporterId: Scalars['String']
}>

export type AdminDeleteReporterMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Reporter' } & ReporterDetailsFragment>
}

export type PublicReportersQueryVariables = Exact<{ [key: string]: never }>

export type PublicReportersQuery = { __typename?: 'Query' } & {
  reporter?: Maybe<Array<{ __typename?: 'Reporter' } & ReporterDetailsFragment>>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'name' | 'username' | 'avatarUrl' | 'email' | 'location' | 'phone' | 'bio' | 'role'
>

export type EmailDetailsFragment = { __typename?: 'Email' } & Pick<
  Email,
  'id' | 'createdAt' | 'updatedAt' | 'email' | 'public' | 'primary' | 'verified'
>

export type AdminUsersQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<{ __typename?: 'User' } & UserDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = { __typename?: 'Query' } & {
  adminUser?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = { __typename?: 'Mutation' } & {
  adminCreateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = { __typename?: 'Mutation' } & {
  adminUpdateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminSetUserPasswordMutationVariables = Exact<{
  userId: Scalars['String']
  password: Scalars['String']
}>

export type AdminSetUserPasswordMutation = { __typename?: 'Mutation' } & {
  adminSetUserPassword?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation' } & {
  adminDeleteUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export const AuthTokenDetailsFragmentDoc = gql`
  fragment AuthTokenDetails on AuthToken {
    token
  }
`
export const CompanyDetailsFragmentDoc = gql`
  fragment CompanyDetails on Company {
    id
    createdAt
    updatedAt
    name
    addressLine1
    addressLine2
    city
    stateOrProvince
    postalCode
    country
    phoneNumber
  }
`
export const CorePagingDetailsFragmentDoc = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const ProviderDetailsFragmentDoc = gql`
  fragment ProviderDetails on Provider {
    id
    createdAt
    updatedAt
    name
    firstName
    lastName
  }
`
export const ReporterDetailsFragmentDoc = gql`
  fragment ReporterDetails on Reporter {
    id
    createdAt
    updatedAt
    name
    addressLine1
    addressLine2
    addressCity
    addressState
    addressPostalCode
    phoneNumber
    profession
    faxNumber
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    name
    username
    avatarUrl
    email
    location
    phone
    bio
    role
  }
`
export const EmailDetailsFragmentDoc = gql`
  fragment EmailDetails on Email {
    id
    createdAt
    updatedAt
    email
    public
    primary
    verified
  }
`
export const AccountEmailsDocument = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountEmailsGQL extends Apollo.Query<AccountEmailsQuery, AccountEmailsQueryVariables> {
  document = AccountEmailsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountProfileDocument = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountProfileGQL extends Apollo.Query<AccountProfileQuery, AccountProfileQueryVariables> {
  document = AccountProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUsernameAvailableDocument = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUsernameAvailableGQL extends Apollo.Query<
  AccountUsernameAvailableQuery,
  AccountUsernameAvailableQueryVariables
> {
  document = AccountUsernameAvailableDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCreateEmailDocument = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCreateEmailGQL extends Apollo.Mutation<
  AccountCreateEmailMutation,
  AccountCreateEmailMutationVariables
> {
  document = AccountCreateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteEmailDocument = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteEmailGQL extends Apollo.Mutation<
  AccountDeleteEmailMutation,
  AccountDeleteEmailMutationVariables
> {
  document = AccountDeleteEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrimaryDocument = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrimaryGQL extends Apollo.Mutation<
  AccountMarkEmailPrimaryMutation,
  AccountMarkEmailPrimaryMutationVariables
> {
  document = AccountMarkEmailPrimaryDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrivateDocument = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrivateGQL extends Apollo.Mutation<
  AccountMarkEmailPrivateMutation,
  AccountMarkEmailPrivateMutationVariables
> {
  document = AccountMarkEmailPrivateDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPublicDocument = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPublicGQL extends Apollo.Mutation<
  AccountMarkEmailPublicMutation,
  AccountMarkEmailPublicMutationVariables
> {
  document = AccountMarkEmailPublicDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateProfileDocument = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateProfileGQL extends Apollo.Mutation<
  AccountUpdateProfileMutation,
  AccountUpdateProfileMutationVariables
> {
  document = AccountUpdateProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateUsernameDocument = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateUsernameGQL extends Apollo.Mutation<
  AccountUpdateUsernameMutation,
  AccountUpdateUsernameMutationVariables
> {
  document = AccountUpdateUsernameDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdatePasswordDocument = gql`
  mutation AccountUpdatePassword($input: AccountUpdatePasswordInput!) {
    accountUpdatePassword(input: $input)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdatePasswordGQL extends Apollo.Mutation<
  AccountUpdatePasswordMutation,
  AccountUpdatePasswordMutationVariables
> {
  document = AccountUpdatePasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCompanysDocument = gql`
  query AdminCompanys($input: AdminListCompanyInput) {
    items: adminCompanys(input: $input) {
      ...CompanyDetails
    }
    count: adminCountCompanys(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCompanysGQL extends Apollo.Query<AdminCompanysQuery, AdminCompanysQueryVariables> {
  document = AdminCompanysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountCompanysDocument = gql`
  query AdminCountCompanys($input: AdminListCompanyInput) {
    count: adminCountCompanys(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountCompanysGQL extends Apollo.Query<AdminCountCompanysQuery, AdminCountCompanysQueryVariables> {
  document = AdminCountCompanysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCompanyDocument = gql`
  query AdminCompany($companyId: String!) {
    item: adminCompany(companyId: $companyId) {
      ...CompanyDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCompanyGQL extends Apollo.Query<AdminCompanyQuery, AdminCompanyQueryVariables> {
  document = AdminCompanyDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const PublicCompanysDocument = gql`
  query PublicCompanys {
    companys: publicCompanys {
      ...CompanyDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class PublicCompanysGQL extends Apollo.Query<PublicCompanysQuery, PublicCompanysQueryVariables> {
  document = PublicCompanysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateCompanyDocument = gql`
  mutation AdminCreateCompany($input: AdminCreateCompanyInput!) {
    created: adminCreateCompany(input: $input) {
      ...CompanyDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateCompanyGQL extends Apollo.Mutation<
  AdminCreateCompanyMutation,
  AdminCreateCompanyMutationVariables
> {
  document = AdminCreateCompanyDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateCompanyDocument = gql`
  mutation AdminUpdateCompany($companyId: String!, $input: AdminUpdateCompanyInput!) {
    updated: adminUpdateCompany(companyId: $companyId, input: $input) {
      ...CompanyDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateCompanyGQL extends Apollo.Mutation<
  AdminUpdateCompanyMutation,
  AdminUpdateCompanyMutationVariables
> {
  document = AdminUpdateCompanyDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteCompanyDocument = gql`
  mutation AdminDeleteCompany($companyId: String!) {
    deleted: adminDeleteCompany(companyId: $companyId) {
      ...CompanyDetails
    }
  }
  ${CompanyDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteCompanyGQL extends Apollo.Mutation<
  AdminDeleteCompanyMutation,
  AdminDeleteCompanyMutationVariables
> {
  document = AdminDeleteCompanyDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminProvidersDocument = gql`
  query AdminProviders($input: AdminListProviderInput) {
    items: adminProviders(input: $input) {
      ...ProviderDetails
    }
    count: adminCountProviders(input: $input) {
      ...CorePagingDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminProvidersGQL extends Apollo.Query<AdminProvidersQuery, AdminProvidersQueryVariables> {
  document = AdminProvidersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountProvidersDocument = gql`
  query AdminCountProviders($input: AdminListProviderInput) {
    count: adminCountProviders(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountProvidersGQL extends Apollo.Query<AdminCountProvidersQuery, AdminCountProvidersQueryVariables> {
  document = AdminCountProvidersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminProviderDocument = gql`
  query AdminProvider($providerId: String!) {
    item: adminProvider(providerId: $providerId) {
      ...ProviderDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminProviderGQL extends Apollo.Query<AdminProviderQuery, AdminProviderQueryVariables> {
  document = AdminProviderDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateProviderDocument = gql`
  mutation AdminCreateProvider($input: AdminCreateProviderInput!) {
    created: adminCreateProvider(input: $input) {
      ...ProviderDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateProviderGQL extends Apollo.Mutation<
  AdminCreateProviderMutation,
  AdminCreateProviderMutationVariables
> {
  document = AdminCreateProviderDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateProviderDocument = gql`
  mutation AdminUpdateProvider($providerId: String!, $input: AdminUpdateProviderInput!) {
    updated: adminUpdateProvider(providerId: $providerId, input: $input) {
      ...ProviderDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateProviderGQL extends Apollo.Mutation<
  AdminUpdateProviderMutation,
  AdminUpdateProviderMutationVariables
> {
  document = AdminUpdateProviderDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteProviderDocument = gql`
  mutation AdminDeleteProvider($providerId: String!) {
    deleted: adminDeleteProvider(providerId: $providerId) {
      ...ProviderDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteProviderGQL extends Apollo.Mutation<
  AdminDeleteProviderMutation,
  AdminDeleteProviderMutationVariables
> {
  document = AdminDeleteProviderDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const PublicProvidersDocument = gql`
  query PublicProviders {
    provider: publicProviders {
      ...ProviderDetails
    }
  }
  ${ProviderDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class PublicProvidersGQL extends Apollo.Query<PublicProvidersQuery, PublicProvidersQueryVariables> {
  document = PublicProvidersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminReportersDocument = gql`
  query AdminReporters($input: AdminListReporterInput) {
    items: adminReporters(input: $input) {
      ...ReporterDetails
    }
    count: adminCountReporters(input: $input) {
      ...CorePagingDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminReportersGQL extends Apollo.Query<AdminReportersQuery, AdminReportersQueryVariables> {
  document = AdminReportersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountReportersDocument = gql`
  query AdminCountReporters($input: AdminListReporterInput) {
    count: adminCountReporters(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountReportersGQL extends Apollo.Query<AdminCountReportersQuery, AdminCountReportersQueryVariables> {
  document = AdminCountReportersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminReporterDocument = gql`
  query AdminReporter($reporterId: String!) {
    item: adminReporter(reporterId: $reporterId) {
      ...ReporterDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminReporterGQL extends Apollo.Query<AdminReporterQuery, AdminReporterQueryVariables> {
  document = AdminReporterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateReporterDocument = gql`
  mutation AdminCreateReporter($input: AdminCreateReporterInput!) {
    created: adminCreateReporter(input: $input) {
      ...ReporterDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateReporterGQL extends Apollo.Mutation<
  AdminCreateReporterMutation,
  AdminCreateReporterMutationVariables
> {
  document = AdminCreateReporterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateReporterDocument = gql`
  mutation AdminUpdateReporter($reporterId: String!, $input: AdminUpdateReporterInput!) {
    updated: adminUpdateReporter(reporterId: $reporterId, input: $input) {
      ...ReporterDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateReporterGQL extends Apollo.Mutation<
  AdminUpdateReporterMutation,
  AdminUpdateReporterMutationVariables
> {
  document = AdminUpdateReporterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteReporterDocument = gql`
  mutation AdminDeleteReporter($reporterId: String!) {
    deleted: adminDeleteReporter(reporterId: $reporterId) {
      ...ReporterDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteReporterGQL extends Apollo.Mutation<
  AdminDeleteReporterMutation,
  AdminDeleteReporterMutationVariables
> {
  document = AdminDeleteReporterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const PublicReportersDocument = gql`
  query PublicReporters {
    reporter: publicReporters {
      ...ReporterDetails
    }
  }
  ${ReporterDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class PublicReportersGQL extends Apollo.Query<PublicReportersQuery, PublicReportersQueryVariables> {
  document = PublicReportersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUsersDocument = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUsersGQL extends Apollo.Query<AdminUsersQuery, AdminUsersQueryVariables> {
  document = AdminUsersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserDocument = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserGQL extends Apollo.Query<AdminUserQuery, AdminUserQueryVariables> {
  document = AdminUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateUserDocument = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateUserGQL extends Apollo.Mutation<AdminCreateUserMutation, AdminCreateUserMutationVariables> {
  document = AdminCreateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateUserDocument = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateUserGQL extends Apollo.Mutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables> {
  document = AdminUpdateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSetUserPasswordDocument = gql`
  mutation AdminSetUserPassword($userId: String!, $password: String!) {
    adminSetUserPassword(userId: $userId, password: $password) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSetUserPasswordGQL extends Apollo.Mutation<
  AdminSetUserPasswordMutation,
  AdminSetUserPasswordMutationVariables
> {
  document = AdminSetUserPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteUserDocument = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteUserGQL extends Apollo.Mutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables> {
  document = AdminDeleteUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private accountEmailsGql: AccountEmailsGQL,
    private accountProfileGql: AccountProfileGQL,
    private accountUsernameAvailableGql: AccountUsernameAvailableGQL,
    private accountCreateEmailGql: AccountCreateEmailGQL,
    private accountDeleteEmailGql: AccountDeleteEmailGQL,
    private accountMarkEmailPrimaryGql: AccountMarkEmailPrimaryGQL,
    private accountMarkEmailPrivateGql: AccountMarkEmailPrivateGQL,
    private accountMarkEmailPublicGql: AccountMarkEmailPublicGQL,
    private accountUpdateProfileGql: AccountUpdateProfileGQL,
    private accountUpdateUsernameGql: AccountUpdateUsernameGQL,
    private accountUpdatePasswordGql: AccountUpdatePasswordGQL,
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private adminCompanysGql: AdminCompanysGQL,
    private adminCountCompanysGql: AdminCountCompanysGQL,
    private adminCompanyGql: AdminCompanyGQL,
    private publicCompanysGql: PublicCompanysGQL,
    private adminCreateCompanyGql: AdminCreateCompanyGQL,
    private adminUpdateCompanyGql: AdminUpdateCompanyGQL,
    private adminDeleteCompanyGql: AdminDeleteCompanyGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private adminProvidersGql: AdminProvidersGQL,
    private adminCountProvidersGql: AdminCountProvidersGQL,
    private adminProviderGql: AdminProviderGQL,
    private adminCreateProviderGql: AdminCreateProviderGQL,
    private adminUpdateProviderGql: AdminUpdateProviderGQL,
    private adminDeleteProviderGql: AdminDeleteProviderGQL,
    private publicProvidersGql: PublicProvidersGQL,
    private adminReportersGql: AdminReportersGQL,
    private adminCountReportersGql: AdminCountReportersGQL,
    private adminReporterGql: AdminReporterGQL,
    private adminCreateReporterGql: AdminCreateReporterGQL,
    private adminUpdateReporterGql: AdminUpdateReporterGQL,
    private adminDeleteReporterGql: AdminDeleteReporterGQL,
    private publicReportersGql: PublicReportersGQL,
    private adminUsersGql: AdminUsersGQL,
    private adminUserGql: AdminUserGQL,
    private adminCreateUserGql: AdminCreateUserGQL,
    private adminUpdateUserGql: AdminUpdateUserGQL,
    private adminSetUserPasswordGql: AdminSetUserPasswordGQL,
    private adminDeleteUserGql: AdminDeleteUserGQL,
  ) {}

  accountEmails(variables?: AccountEmailsQueryVariables, options?: QueryOptionsAlone<AccountEmailsQueryVariables>) {
    return this.accountEmailsGql.fetch(variables, options)
  }

  accountEmailsWatch(
    variables?: AccountEmailsQueryVariables,
    options?: WatchQueryOptionsAlone<AccountEmailsQueryVariables>,
  ) {
    return this.accountEmailsGql.watch(variables, options)
  }

  accountProfile(variables?: AccountProfileQueryVariables, options?: QueryOptionsAlone<AccountProfileQueryVariables>) {
    return this.accountProfileGql.fetch(variables, options)
  }

  accountProfileWatch(
    variables?: AccountProfileQueryVariables,
    options?: WatchQueryOptionsAlone<AccountProfileQueryVariables>,
  ) {
    return this.accountProfileGql.watch(variables, options)
  }

  accountUsernameAvailable(
    variables: AccountUsernameAvailableQueryVariables,
    options?: QueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.fetch(variables, options)
  }

  accountUsernameAvailableWatch(
    variables: AccountUsernameAvailableQueryVariables,
    options?: WatchQueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.watch(variables, options)
  }

  accountCreateEmail(
    variables: AccountCreateEmailMutationVariables,
    options?: MutationOptionsAlone<AccountCreateEmailMutation, AccountCreateEmailMutationVariables>,
  ) {
    return this.accountCreateEmailGql.mutate(variables, options)
  }

  accountDeleteEmail(
    variables: AccountDeleteEmailMutationVariables,
    options?: MutationOptionsAlone<AccountDeleteEmailMutation, AccountDeleteEmailMutationVariables>,
  ) {
    return this.accountDeleteEmailGql.mutate(variables, options)
  }

  accountMarkEmailPrimary(
    variables: AccountMarkEmailPrimaryMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrimaryMutation, AccountMarkEmailPrimaryMutationVariables>,
  ) {
    return this.accountMarkEmailPrimaryGql.mutate(variables, options)
  }

  accountMarkEmailPrivate(
    variables: AccountMarkEmailPrivateMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrivateMutation, AccountMarkEmailPrivateMutationVariables>,
  ) {
    return this.accountMarkEmailPrivateGql.mutate(variables, options)
  }

  accountMarkEmailPublic(
    variables: AccountMarkEmailPublicMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPublicMutation, AccountMarkEmailPublicMutationVariables>,
  ) {
    return this.accountMarkEmailPublicGql.mutate(variables, options)
  }

  accountUpdateProfile(
    variables: AccountUpdateProfileMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateProfileMutation, AccountUpdateProfileMutationVariables>,
  ) {
    return this.accountUpdateProfileGql.mutate(variables, options)
  }

  accountUpdateUsername(
    variables: AccountUpdateUsernameMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateUsernameMutation, AccountUpdateUsernameMutationVariables>,
  ) {
    return this.accountUpdateUsernameGql.mutate(variables, options)
  }

  accountUpdatePassword(
    variables: AccountUpdatePasswordMutationVariables,
    options?: MutationOptionsAlone<AccountUpdatePasswordMutation, AccountUpdatePasswordMutationVariables>,
  ) {
    return this.accountUpdatePasswordGql.mutate(variables, options)
  }

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  adminCompanys(variables?: AdminCompanysQueryVariables, options?: QueryOptionsAlone<AdminCompanysQueryVariables>) {
    return this.adminCompanysGql.fetch(variables, options)
  }

  adminCompanysWatch(
    variables?: AdminCompanysQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCompanysQueryVariables>,
  ) {
    return this.adminCompanysGql.watch(variables, options)
  }

  adminCountCompanys(
    variables?: AdminCountCompanysQueryVariables,
    options?: QueryOptionsAlone<AdminCountCompanysQueryVariables>,
  ) {
    return this.adminCountCompanysGql.fetch(variables, options)
  }

  adminCountCompanysWatch(
    variables?: AdminCountCompanysQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountCompanysQueryVariables>,
  ) {
    return this.adminCountCompanysGql.watch(variables, options)
  }

  adminCompany(variables: AdminCompanyQueryVariables, options?: QueryOptionsAlone<AdminCompanyQueryVariables>) {
    return this.adminCompanyGql.fetch(variables, options)
  }

  adminCompanyWatch(
    variables: AdminCompanyQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCompanyQueryVariables>,
  ) {
    return this.adminCompanyGql.watch(variables, options)
  }

  publicCompanys(variables?: PublicCompanysQueryVariables, options?: QueryOptionsAlone<PublicCompanysQueryVariables>) {
    return this.publicCompanysGql.fetch(variables, options)
  }

  publicCompanysWatch(
    variables?: PublicCompanysQueryVariables,
    options?: WatchQueryOptionsAlone<PublicCompanysQueryVariables>,
  ) {
    return this.publicCompanysGql.watch(variables, options)
  }

  adminCreateCompany(
    variables: AdminCreateCompanyMutationVariables,
    options?: MutationOptionsAlone<AdminCreateCompanyMutation, AdminCreateCompanyMutationVariables>,
  ) {
    return this.adminCreateCompanyGql.mutate(variables, options)
  }

  adminUpdateCompany(
    variables: AdminUpdateCompanyMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateCompanyMutation, AdminUpdateCompanyMutationVariables>,
  ) {
    return this.adminUpdateCompanyGql.mutate(variables, options)
  }

  adminDeleteCompany(
    variables: AdminDeleteCompanyMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteCompanyMutation, AdminDeleteCompanyMutationVariables>,
  ) {
    return this.adminDeleteCompanyGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  adminProviders(variables?: AdminProvidersQueryVariables, options?: QueryOptionsAlone<AdminProvidersQueryVariables>) {
    return this.adminProvidersGql.fetch(variables, options)
  }

  adminProvidersWatch(
    variables?: AdminProvidersQueryVariables,
    options?: WatchQueryOptionsAlone<AdminProvidersQueryVariables>,
  ) {
    return this.adminProvidersGql.watch(variables, options)
  }

  adminCountProviders(
    variables?: AdminCountProvidersQueryVariables,
    options?: QueryOptionsAlone<AdminCountProvidersQueryVariables>,
  ) {
    return this.adminCountProvidersGql.fetch(variables, options)
  }

  adminCountProvidersWatch(
    variables?: AdminCountProvidersQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountProvidersQueryVariables>,
  ) {
    return this.adminCountProvidersGql.watch(variables, options)
  }

  adminProvider(variables: AdminProviderQueryVariables, options?: QueryOptionsAlone<AdminProviderQueryVariables>) {
    return this.adminProviderGql.fetch(variables, options)
  }

  adminProviderWatch(
    variables: AdminProviderQueryVariables,
    options?: WatchQueryOptionsAlone<AdminProviderQueryVariables>,
  ) {
    return this.adminProviderGql.watch(variables, options)
  }

  adminCreateProvider(
    variables: AdminCreateProviderMutationVariables,
    options?: MutationOptionsAlone<AdminCreateProviderMutation, AdminCreateProviderMutationVariables>,
  ) {
    return this.adminCreateProviderGql.mutate(variables, options)
  }

  adminUpdateProvider(
    variables: AdminUpdateProviderMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateProviderMutation, AdminUpdateProviderMutationVariables>,
  ) {
    return this.adminUpdateProviderGql.mutate(variables, options)
  }

  adminDeleteProvider(
    variables: AdminDeleteProviderMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteProviderMutation, AdminDeleteProviderMutationVariables>,
  ) {
    return this.adminDeleteProviderGql.mutate(variables, options)
  }

  publicProviders(
    variables?: PublicProvidersQueryVariables,
    options?: QueryOptionsAlone<PublicProvidersQueryVariables>,
  ) {
    return this.publicProvidersGql.fetch(variables, options)
  }

  publicProvidersWatch(
    variables?: PublicProvidersQueryVariables,
    options?: WatchQueryOptionsAlone<PublicProvidersQueryVariables>,
  ) {
    return this.publicProvidersGql.watch(variables, options)
  }

  adminReporters(variables?: AdminReportersQueryVariables, options?: QueryOptionsAlone<AdminReportersQueryVariables>) {
    return this.adminReportersGql.fetch(variables, options)
  }

  adminReportersWatch(
    variables?: AdminReportersQueryVariables,
    options?: WatchQueryOptionsAlone<AdminReportersQueryVariables>,
  ) {
    return this.adminReportersGql.watch(variables, options)
  }

  adminCountReporters(
    variables?: AdminCountReportersQueryVariables,
    options?: QueryOptionsAlone<AdminCountReportersQueryVariables>,
  ) {
    return this.adminCountReportersGql.fetch(variables, options)
  }

  adminCountReportersWatch(
    variables?: AdminCountReportersQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountReportersQueryVariables>,
  ) {
    return this.adminCountReportersGql.watch(variables, options)
  }

  adminReporter(variables: AdminReporterQueryVariables, options?: QueryOptionsAlone<AdminReporterQueryVariables>) {
    return this.adminReporterGql.fetch(variables, options)
  }

  adminReporterWatch(
    variables: AdminReporterQueryVariables,
    options?: WatchQueryOptionsAlone<AdminReporterQueryVariables>,
  ) {
    return this.adminReporterGql.watch(variables, options)
  }

  adminCreateReporter(
    variables: AdminCreateReporterMutationVariables,
    options?: MutationOptionsAlone<AdminCreateReporterMutation, AdminCreateReporterMutationVariables>,
  ) {
    return this.adminCreateReporterGql.mutate(variables, options)
  }

  adminUpdateReporter(
    variables: AdminUpdateReporterMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateReporterMutation, AdminUpdateReporterMutationVariables>,
  ) {
    return this.adminUpdateReporterGql.mutate(variables, options)
  }

  adminDeleteReporter(
    variables: AdminDeleteReporterMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteReporterMutation, AdminDeleteReporterMutationVariables>,
  ) {
    return this.adminDeleteReporterGql.mutate(variables, options)
  }

  publicReporters(
    variables?: PublicReportersQueryVariables,
    options?: QueryOptionsAlone<PublicReportersQueryVariables>,
  ) {
    return this.publicReportersGql.fetch(variables, options)
  }

  publicReportersWatch(
    variables?: PublicReportersQueryVariables,
    options?: WatchQueryOptionsAlone<PublicReportersQueryVariables>,
  ) {
    return this.publicReportersGql.watch(variables, options)
  }

  adminUsers(variables?: AdminUsersQueryVariables, options?: QueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.fetch(variables, options)
  }

  adminUsersWatch(variables?: AdminUsersQueryVariables, options?: WatchQueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.watch(variables, options)
  }

  adminUser(variables: AdminUserQueryVariables, options?: QueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.fetch(variables, options)
  }

  adminUserWatch(variables: AdminUserQueryVariables, options?: WatchQueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.watch(variables, options)
  }

  adminCreateUser(
    variables: AdminCreateUserMutationVariables,
    options?: MutationOptionsAlone<AdminCreateUserMutation, AdminCreateUserMutationVariables>,
  ) {
    return this.adminCreateUserGql.mutate(variables, options)
  }

  adminUpdateUser(
    variables: AdminUpdateUserMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>,
  ) {
    return this.adminUpdateUserGql.mutate(variables, options)
  }

  adminSetUserPassword(
    variables: AdminSetUserPasswordMutationVariables,
    options?: MutationOptionsAlone<AdminSetUserPasswordMutation, AdminSetUserPasswordMutationVariables>,
  ) {
    return this.adminSetUserPasswordGql.mutate(variables, options)
  }

  adminDeleteUser(
    variables: AdminDeleteUserMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>,
  ) {
    return this.adminDeleteUserGql.mutate(variables, options)
  }
}
