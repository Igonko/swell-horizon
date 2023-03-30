import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import type { GraphQLError } from 'graphql-request/dist/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  SafeNumber: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccountAddress?: Maybe<SwellAccountAddress>;
  addAccountCard?: Maybe<SwellAccountCard>;
  addCartItem?: Maybe<SwellCart>;
  addSubscriptionItem?: Maybe<SwellSubscriptionItem>;
  applyCoupon?: Maybe<SwellCart>;
  applyGiftcard?: Maybe<SwellCart>;
  createAccount?: Maybe<SwellAccount>;
  createSubscription?: Maybe<SwellSubscription>;
  deleteAccountAddress?: Maybe<SwellAccountAddress>;
  deleteAccountCard?: Maybe<SwellAccountCard>;
  deleteCartItem?: Maybe<SwellCart>;
  deleteSubscriptionItem?: Maybe<SwellSubscriptionItem>;
  loginAccount?: Maybe<SuccessfulResponse>;
  logoutAccount?: Maybe<SuccessfulResponse>;
  recoverAccount?: Maybe<SuccessfulResponse>;
  removeCoupon?: Maybe<SwellCart>;
  removeGiftcard?: Maybe<SwellCart>;
  sendAccountRecovery?: Maybe<SuccessfulResponse>;
  submitCartOrder?: Maybe<SwellOrder>;
  updateAccount?: Maybe<SwellAccount>;
  updateAccountAddress?: Maybe<SwellAccountAddress>;
  updateAccountCard?: Maybe<SwellAccountCard>;
  updateCart?: Maybe<SwellCart>;
  updateCartItem?: Maybe<SwellCart>;
  updateSubscription?: Maybe<SwellSubscription>;
  updateSubscriptionItem?: Maybe<SwellSubscriptionItem>;
};


export type MutationAddAccountAddressArgs = {
  input?: InputMaybe<SwellAccountAddressInput>;
};


export type MutationAddAccountCardArgs = {
  input?: InputMaybe<SwellAccountCardInput>;
};


export type MutationAddCartItemArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartItemInput>;
};


export type MutationAddSubscriptionItemArgs = {
  input?: InputMaybe<SwellSubscriptionItemInput>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationApplyCouponArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};


export type MutationApplyGiftcardArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<SwellAccountInput>;
};


export type MutationCreateSubscriptionArgs = {
  input?: InputMaybe<SwellSubscriptionInput>;
};


export type MutationDeleteAccountAddressArgs = {
  addressId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAccountCardArgs = {
  cardId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCartItemArgs = {
  itemId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteSubscriptionItemArgs = {
  itemId?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationLoginAccountArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
};


export type MutationRecoverAccountArgs = {
  password?: InputMaybe<Scalars['String']>;
  passwordResetKey?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveGiftcardArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  giftcardId?: InputMaybe<Scalars['String']>;
};


export type MutationSendAccountRecoveryArgs = {
  email?: InputMaybe<Scalars['String']>;
  passwordResetUrl?: InputMaybe<Scalars['String']>;
};


export type MutationSubmitCartOrderArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAccountArgs = {
  input?: InputMaybe<SwellAccountInput>;
};


export type MutationUpdateAccountAddressArgs = {
  addressId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellAccountAddressInput>;
};


export type MutationUpdateAccountCardArgs = {
  cardId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellAccountCardInput>;
};


export type MutationUpdateCartArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartInput>;
};


export type MutationUpdateCartItemArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartItemInput>;
  itemId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellSubscriptionInput>;
};


export type MutationUpdateSubscriptionItemArgs = {
  input?: InputMaybe<SwellSubscriptionItemInput>;
  itemId?: InputMaybe<Scalars['String']>;
  subscriptionId?: InputMaybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  end?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

export type ProductPricing = {
  accountId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<SwellAccount>;
  attributeById?: Maybe<SwellAttribute>;
  attributes?: Maybe<SwellAttributes>;
  cart?: Maybe<SwellCart>;
  categories?: Maybe<SwellCategories>;
  categoryById?: Maybe<SwellCategory>;
  categoryBySlug?: Maybe<SwellCategory>;
  contentPageById?: Maybe<SwellContentPage>;
  contentPageBySlug?: Maybe<SwellContentPage>;
  contentPages?: Maybe<SwellContentPages>;
  contentQuizById?: Maybe<SwellContentQuiz>;
  contentQuizzes?: Maybe<SwellContentQuizzes>;
  menuSettings?: Maybe<SwellSettingsMenus>;
  orderById?: Maybe<SwellOrder>;
  orderByNumber?: Maybe<SwellOrder>;
  orders?: Maybe<SwellOrders>;
  paymentSettings?: Maybe<SwellSettingsPayments>;
  productById?: Maybe<SwellProduct>;
  productBySlug?: Maybe<SwellProduct>;
  products?: Maybe<SwellProducts>;
  session?: Maybe<Session>;
  storeSettings?: Maybe<SwellSettings>;
  subscriptionById?: Maybe<SwellSubscription>;
  subscriptionSettings?: Maybe<SwellSettingsSubscriptions>;
  subscriptions?: Maybe<SwellSubscriptions>;
};


export type QueryAccountArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryAttributeByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryAttributesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoryByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentPageByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentPageBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentPagesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContentQuizByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentQuizzesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMenuSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryOrderByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryOrderByNumberArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};


export type QueryOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPaymentSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QueryProductByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProductBySlugArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  _pricing?: InputMaybe<ProductPricing>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryStoreSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionByIdArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionSettingsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Session = {
  __typename?: 'Session';
  accountId?: Maybe<Scalars['String']>;
  cartId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
};

export type SuccessfulResponse = {
  __typename?: 'SuccessfulResponse';
  success?: Maybe<Scalars['Boolean']>;
};

/** Customer */
export type SwellAccount = {
  __typename?: 'SwellAccount';
  /** Stored addresses used by an account */
  addresses?: Maybe<SwellAccountsAddresses>;
  balance?: Maybe<Scalars['SafeNumber']>;
  /** Default account billing information */
  billing?: Maybe<SwellAccountBilling>;
  /** Stored credit cards used by an account */
  cards?: Maybe<SwellAccountsCards>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateFirstOrder?: Maybe<Scalars['DateTime']>;
  dateLastOrder?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailOptin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  /** Account Name */
  name?: Maybe<Scalars['String']>;
  orderCount?: Maybe<Scalars['Int']>;
  orderValue?: Maybe<Scalars['SafeNumber']>;
  orders?: Maybe<Array<Maybe<SwellOrder>>>;
  phone?: Maybe<Scalars['String']>;
  /** Default account shipping information */
  shipping?: Maybe<SwellAccountShipping>;
  subscriptions?: Maybe<Array<Maybe<SwellSubscription>>>;
  /** Account Type */
  type?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
};


/** Customer */
export type SwellAccountOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Customer */
export type SwellAccountSubscriptionsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** Stored addresses used by an account */
export type SwellAccountAddress = {
  __typename?: 'SwellAccountAddress';
  active?: Maybe<Scalars['Boolean']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  fingerprint?: Maybe<Scalars['String']>;
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellAccount>;
  parentId?: Maybe<Scalars['ID']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};


/** Stored addresses used by an account */
export type SwellAccountAddressParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellAccountAddressInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  fingerprint?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Default account billing information */
export type SwellAccountBilling = {
  __typename?: 'SwellAccountBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  /** Payment Card */
  card?: Maybe<SwellAccountBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

/** Payment Card */
export type SwellAccountBillingCard = {
  __typename?: 'SwellAccountBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellAccountBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellAccountBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  card?: InputMaybe<SwellAccountBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

/** Stored credit cards used by an account */
export type SwellAccountCard = {
  __typename?: 'SwellAccountCard';
  active?: Maybe<Scalars['Boolean']>;
  addressCheck?: Maybe<Scalars['String']>;
  billing?: Maybe<SwellAccountCardBilling>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  gateway?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Last 4 Digits */
  last4?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellAccount>;
  parentId?: Maybe<Scalars['ID']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};


/** Stored credit cards used by an account */
export type SwellAccountCardParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellAccountCardBilling = {
  __typename?: 'SwellAccountCardBilling';
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  /** Billing Company Name */
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Billing Email */
  email?: Maybe<Scalars['String']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellAccountCardBillingInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  vatNumber?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellAccountCardInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  addressCheck?: InputMaybe<Scalars['String']>;
  billing?: InputMaybe<SwellAccountCardBillingInput>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  dateUpdated?: InputMaybe<Scalars['DateTime']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  fingerprint?: InputMaybe<Scalars['String']>;
  gateway?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last4?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellAccountInput = {
  addresses?: InputMaybe<Array<InputMaybe<SwellAccountAddressInput>>>;
  billing?: InputMaybe<SwellAccountBillingInput>;
  cards?: InputMaybe<Array<InputMaybe<SwellAccountCardInput>>>;
  email?: InputMaybe<Scalars['String']>;
  emailOptin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetKey?: InputMaybe<Scalars['String']>;
  passwordResetUrl?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  shipping?: InputMaybe<SwellAccountShippingInput>;
  type?: InputMaybe<Scalars['String']>;
  vatNumber?: InputMaybe<Scalars['String']>;
};

/** Default account shipping information */
export type SwellAccountShipping = {
  __typename?: 'SwellAccountShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellAccountShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellAccountsAddresses = {
  __typename?: 'SwellAccountsAddresses';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAccountAddress>>>;
};

export type SwellAccountsCards = {
  __typename?: 'SwellAccountsCards';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAccountCard>>>;
};

/** Attribute */
export type SwellAttribute = {
  __typename?: 'SwellAttribute';
  default?: Maybe<Scalars['JSON']>;
  filterable?: Maybe<Scalars['Boolean']>;
  multi?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  searchable?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type SwellAttributes = {
  __typename?: 'SwellAttributes';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellAttribute>>>;
};

/** Cart */
export type SwellCart = {
  __typename?: 'SwellCart';
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Number of abandoned cart notifications sent to the customer */
  abandonedNotifications?: Maybe<Scalars['Int']>;
  account?: Maybe<SwellAccount>;
  accountCreditAmount?: Maybe<Scalars['SafeNumber']>;
  accountCreditApplied?: Maybe<Scalars['Boolean']>;
  accountId?: Maybe<Scalars['ID']>;
  accountInfoSaved?: Maybe<Scalars['Boolean']>;
  accountLoggedIn?: Maybe<Scalars['Boolean']>;
  authTotal?: Maybe<Scalars['SafeNumber']>;
  billing?: Maybe<SwellCartBilling>;
  captureTotal?: Maybe<Scalars['SafeNumber']>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutUrl?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  coupon?: Maybe<SwellCartCoupon>;
  couponCode?: Maybe<Scalars['String']>;
  couponId?: Maybe<Scalars['ID']>;
  currency?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  /** Date the cart should be marked as abandoned */
  dateAbandoned?: Maybe<Scalars['DateTime']>;
  dateAbandonedNext?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  discounts?: Maybe<Array<Maybe<SwellCartDiscount>>>;
  displayCurrency?: Maybe<Scalars['String']>;
  displayLocale?: Maybe<Scalars['String']>;
  gift?: Maybe<Scalars['Boolean']>;
  giftMessage?: Maybe<Scalars['String']>;
  giftcardDelivery?: Maybe<Scalars['Boolean']>;
  giftcardTotal?: Maybe<Scalars['SafeNumber']>;
  giftcards?: Maybe<Array<Maybe<SwellCartGiftcard>>>;
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  guest?: Maybe<Scalars['Boolean']>;
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  itemQuantity?: Maybe<Scalars['Int']>;
  itemShipmentWeight?: Maybe<Scalars['SafeNumber']>;
  itemTax?: Maybe<Scalars['SafeNumber']>;
  itemTaxIncluded?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<SwellCartItem>>>;
  metadata?: Maybe<Scalars['JSON']>;
  order?: Maybe<SwellOrder>;
  orderId?: Maybe<Scalars['ID']>;
  promotionIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  promotions?: Maybe<SwellCartsPromotions>;
  purchaseLinksErrors?: Maybe<Array<Maybe<SwellCartPurchaseLinksError>>>;
  recovered?: Maybe<Scalars['Boolean']>;
  shipmentDelivery?: Maybe<Scalars['Boolean']>;
  shipmentDiscount?: Maybe<Scalars['SafeNumber']>;
  shipmentPrice?: Maybe<Scalars['SafeNumber']>;
  shipmentRating?: Maybe<SwellCartShipmentRating>;
  shipmentTax?: Maybe<Scalars['SafeNumber']>;
  shipmentTaxIncluded?: Maybe<Scalars['Boolean']>;
  shipmentTotal?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<SwellCartShipping>;
  subTotal?: Maybe<Scalars['SafeNumber']>;
  subscriptionDelivery?: Maybe<Scalars['Boolean']>;
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellCartTax>>>;
  taxesFixed?: Maybe<Scalars['Boolean']>;
  test?: Maybe<Scalars['Boolean']>;
  trial?: Maybe<Scalars['Boolean']>;
  trialAuthTotal?: Maybe<Scalars['SafeNumber']>;
  trialGrandTotal?: Maybe<Scalars['SafeNumber']>;
  trialItemDiscount?: Maybe<Scalars['SafeNumber']>;
  trialItemTax?: Maybe<Scalars['SafeNumber']>;
  trialSubTotal?: Maybe<Scalars['SafeNumber']>;
  trialTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
};


/** Cart */
export type SwellCartAccountArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Cart */
export type SwellCartOrderArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellCartBilling = {
  __typename?: 'SwellCartBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  affirm?: Maybe<SwellCartBillingAffirm>;
  amazon?: Maybe<SwellCartBillingAmazon>;
  apple?: Maybe<SwellCartBillingApple>;
  bancontact?: Maybe<SwellCartBillingBancontact>;
  /** Payment Card */
  card?: Maybe<SwellCartBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Billing */
  default?: Maybe<Scalars['Boolean']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  google?: Maybe<SwellCartBillingGoogle>;
  ideal?: Maybe<SwellCartBillingIdeal>;
  intent?: Maybe<Scalars['JSON']>;
  klarna?: Maybe<SwellCartBillingKlarna>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  paypal?: Maybe<SwellCartBillingPaypal>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  resolve?: Maybe<SwellCartBillingResolve>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAffirm = {
  __typename?: 'SwellCartBillingAffirm';
  checkoutToken?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAffirmInput = {
  checkoutToken?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingAmazon = {
  __typename?: 'SwellCartBillingAmazon';
  accessToken?: Maybe<Scalars['String']>;
  checkoutSessionId?: Maybe<Scalars['String']>;
  orderReferenceId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAmazonInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  checkoutSessionId?: InputMaybe<Scalars['String']>;
  orderReferenceId?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingApple = {
  __typename?: 'SwellCartBillingApple';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellCartBillingAppleInput = {
  gateway?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingBancontact = {
  __typename?: 'SwellCartBillingBancontact';
  source?: Maybe<Scalars['String']>;
};

export type SwellCartBillingBancontactInput = {
  source?: InputMaybe<Scalars['String']>;
};

/** Payment Card */
export type SwellCartBillingCard = {
  __typename?: 'SwellCartBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellCartBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingGoogle = {
  __typename?: 'SwellCartBillingGoogle';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellCartBillingGoogleInput = {
  gateway?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingIdeal = {
  __typename?: 'SwellCartBillingIdeal';
  token?: Maybe<Scalars['String']>;
};

export type SwellCartBillingIdealInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  affirm?: InputMaybe<SwellCartBillingAffirmInput>;
  amazon?: InputMaybe<SwellCartBillingAmazonInput>;
  apple?: InputMaybe<SwellCartBillingAppleInput>;
  bancontact?: InputMaybe<SwellCartBillingBancontactInput>;
  card?: InputMaybe<SwellCartBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  google?: InputMaybe<SwellCartBillingGoogleInput>;
  ideal?: InputMaybe<SwellCartBillingIdealInput>;
  intent?: InputMaybe<Scalars['JSON']>;
  klarna?: InputMaybe<SwellCartBillingKlarnaInput>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paypal?: InputMaybe<SwellCartBillingPaypalInput>;
  phone?: InputMaybe<Scalars['String']>;
  resolve?: InputMaybe<SwellCartBillingResolveInput>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingKlarna = {
  __typename?: 'SwellCartBillingKlarna';
  source?: Maybe<Scalars['String']>;
};

export type SwellCartBillingKlarnaInput = {
  source?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingPaypal = {
  __typename?: 'SwellCartBillingPaypal';
  authorizationId?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingPaypalInput = {
  authorizationId?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
};

export type SwellCartBillingResolve = {
  __typename?: 'SwellCartBillingResolve';
  chargeId?: Maybe<Scalars['String']>;
};

export type SwellCartBillingResolveInput = {
  chargeId?: InputMaybe<Scalars['String']>;
};

export type SwellCartCoupon = {
  __typename?: 'SwellCartCoupon';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Coupon Name */
  name?: Maybe<Scalars['String']>;
};

export type SwellCartDiscount = {
  __typename?: 'SwellCartDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['JSON']>;
  /** References the related discount source object (e.g., promotion or coupon) */
  sourceId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellCartGiftcard = {
  __typename?: 'SwellCartGiftcard';
  /** Amount of gift card credit to spend for automatic payment */
  amount?: Maybe<Scalars['SafeNumber']>;
  code?: Maybe<Scalars['String']>;
  codeFormatted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last4?: Maybe<Scalars['String']>;
};

export type SwellCartInput = {
  billing?: InputMaybe<SwellCartBillingInput>;
  comments?: InputMaybe<Scalars['String']>;
  couponCode?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<SwellCartItemInput>>>;
  metadata?: InputMaybe<Scalars['JSON']>;
  shipmentRating?: InputMaybe<SwellCartShipmentRatingInput>;
  shipping?: InputMaybe<SwellCartShippingInput>;
};

export type SwellCartItem = {
  __typename?: 'SwellCartItem';
  bundleItems?: Maybe<Array<Maybe<SwellCartItemBundleItem>>>;
  /** Discount Amount */
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['JSON']>;
  options?: Maybe<Array<Maybe<SwellCartItemOption>>>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  purchaseOption?: Maybe<SwellCartItemPurchaseOption>;
  quantity?: Maybe<Scalars['Int']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Tax Amount */
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellCartItemTax>>>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellCartItemBundleItem = {
  __typename?: 'SwellCartItemBundleItem';
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellCartItemBundleItemOption>>>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  /** Bundled Quantity */
  quantityTotal?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellCartItemBundleItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantityTotal?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellCartItemBundleItemOption = {
  __typename?: 'SwellCartItemBundleItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellCartItemBundleItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellCartItemInput = {
  bundleItems?: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  options?: InputMaybe<Array<InputMaybe<SwellCartItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  purchaseOption?: InputMaybe<SwellCartItemPurchaseOptionInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellCartItemOption = {
  __typename?: 'SwellCartItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellCartItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellCartItemPurchaseOption = {
  __typename?: 'SwellCartItemPurchaseOption';
  authAmount?: Maybe<Scalars['SafeNumber']>;
  billingSchedule?: Maybe<SwellCartItemPurchaseOptionBillingSchedule>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellCartItemPurchaseOptionOrderSchedule>;
  planDescription?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  trialDays?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellCartItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellCartItemPurchaseOptionInput = {
  planDescription?: InputMaybe<Scalars['String']>;
  planId?: InputMaybe<Scalars['ID']>;
  planName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type SwellCartItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellCartItemTax = {
  __typename?: 'SwellCartItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellCartPromotion = {
  __typename?: 'SwellCartPromotion';
  /** Date the promotion automatically ends and no longer applicable */
  dateEnd?: Maybe<Scalars['DateTime']>;
  /** Date the promotion is first applicable */
  dateStart?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** Promotion Name */
  name?: Maybe<Scalars['String']>;
};

export type SwellCartPurchaseLinksError = {
  __typename?: 'SwellCartPurchaseLinksError';
  error?: Maybe<SwellCartPurchaseLinksErrorError>;
  id?: Maybe<Scalars['ID']>;
  purchaseLinkId?: Maybe<Scalars['String']>;
};

export type SwellCartPurchaseLinksErrorError = {
  __typename?: 'SwellCartPurchaseLinksErrorError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  resource?: Maybe<SwellCartPurchaseLinksErrorErrorResource>;
};

export type SwellCartPurchaseLinksErrorErrorResource = {
  __typename?: 'SwellCartPurchaseLinksErrorErrorResource';
  id?: Maybe<Scalars['ID']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SwellCartShipmentRating = {
  __typename?: 'SwellCartShipmentRating';
  dateCreated?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<SwellCartShipmentRatingError>>>;
  md5?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<SwellCartShipmentRatingService>>>;
};

export type SwellCartShipmentRatingError = {
  __typename?: 'SwellCartShipmentRatingError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type SwellCartShipmentRatingErrorInput = {
  code?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type SwellCartShipmentRatingInput = {
  dateCreated?: InputMaybe<Scalars['DateTime']>;
  errors?: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingErrorInput>>>;
  md5?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingServiceInput>>>;
};

export type SwellCartShipmentRatingService = {
  __typename?: 'SwellCartShipmentRatingService';
  carrier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type SwellCartShipmentRatingServiceInput = {
  carrier?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  taxCode?: InputMaybe<Scalars['String']>;
};

export type SwellCartShipping = {
  __typename?: 'SwellCartShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Shipping */
  default?: Maybe<Scalars['Boolean']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  /** Shipping Price */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipping Service ID */
  service?: Maybe<Scalars['String']>;
  /** Shipping Service Name */
  serviceName?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellCartShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  service?: InputMaybe<Scalars['String']>;
  serviceName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellCartTax = {
  __typename?: 'SwellCartTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<Scalars['Boolean']>;
};

export type SwellCartsPromotions = {
  __typename?: 'SwellCartsPromotions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellCartPromotion>>>;
};

export type SwellCategories = {
  __typename?: 'SwellCategories';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellCategory>>>;
};

/** Category */
export type SwellCategory = {
  __typename?: 'SwellCategory';
  children?: Maybe<Array<Maybe<SwellCategory>>>;
  content?: Maybe<SwellCategoryContent>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<SwellCategoryImage>;
  images?: Maybe<Array<Maybe<SwellCategoryImage>>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<SwellCategory>;
  parentId?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<SwellProduct>>>;
  /** URL friendly identifier */
  slug?: Maybe<Scalars['String']>;
  /** Sort Order */
  sort?: Maybe<Scalars['Int']>;
  sorting?: Maybe<Scalars['String']>;
  top?: Maybe<SwellCategory>;
  topId?: Maybe<Scalars['ID']>;
};


/** Category */
export type SwellCategoryChildrenArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryParentArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryProductsArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};


/** Category */
export type SwellCategoryTopArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellCategoryContent = {
  __typename?: 'SwellCategoryContent';
  enableQuickAdd?: Maybe<Scalars['Boolean']>;
  featuredCategories?: Maybe<Array<Maybe<SwellCategoryContentFeaturedCategory>>>;
  productsPerRow?: Maybe<Scalars['Int']>;
  showFeaturedCategories?: Maybe<Scalars['Boolean']>;
  showProductsDescription?: Maybe<Scalars['Boolean']>;
  showProductsPrice?: Maybe<Scalars['Boolean']>;
};

export type SwellCategoryContentFeaturedCategory = {
  __typename?: 'SwellCategoryContentFeaturedCategory';
  category?: Maybe<SwellCategory>;
  categoryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type SwellCategoryContentFeaturedCategoryCategoryArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellCategoryImage = {
  __typename?: 'SwellCategoryImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellCategoryImageFile>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SwellCategoryImageFile = {
  __typename?: 'SwellCategoryImageFile';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Page */
export type SwellContentPage = {
  __typename?: 'SwellContentPage';
  content?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  redirect?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<SwellContentPageSections>>>;
  slug?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionCategoriesPreview = {
  __typename?: 'SwellContentPageSectionCategoriesPreview';
  backgroundColor?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<SwellContentPageSectionCategoriesPreviewCategory>>>;
  columns?: Maybe<Scalars['Int']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageLayout?: Maybe<Scalars['String']>;
  showCategoryDescription?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionCategoriesPreviewCategory = {
  __typename?: 'SwellContentPageSectionCategoriesPreviewCategory';
  category?: Maybe<SwellCategory>;
  categoryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type SwellContentPageSectionCategoriesPreviewCategoryCategoryArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellContentPageSectionDivider = {
  __typename?: 'SwellContentPageSectionDivider';
  backgroundColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionFullWidthMedium = {
  __typename?: 'SwellContentPageSectionFullWidthMedium';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  horizontalBackgroundAlignment?: Maybe<Scalars['String']>;
  horizontalContentAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<SwellContentPageSectionFullWidthMediumLink>>>;
  overlayOpacity?: Maybe<Scalars['Int']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalBackgroundAlignment?: Maybe<Scalars['String']>;
  verticalContentAlignment?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionFullWidthMediumLink = {
  __typename?: 'SwellContentPageSectionFullWidthMediumLink';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionHeadingWithText = {
  __typename?: 'SwellContentPageSectionHeadingWithText';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  horizontalBackgroundPosition?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['Int']>;
  textAlignment?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  textLayout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleAlignment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalBackgroundPosition?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultipleFeature = {
  __typename?: 'SwellContentPageSectionMultipleFeature';
  backgroundColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<SwellContentPageSectionMultipleFeatureFeature>>>;
  horizontalContentAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultipleFeatureFeature = {
  __typename?: 'SwellContentPageSectionMultipleFeatureFeature';
  contentAlignment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiplePanel = {
  __typename?: 'SwellContentPageSectionMultiplePanel';
  backgroundColor?: Maybe<Scalars['String']>;
  horizontalContentAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  panels?: Maybe<Array<Maybe<SwellContentPageSectionMultiplePanelPanels>>>;
  type?: Maybe<Scalars['String']>;
  verticalContentAlignment?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiplePanelPanelImage = {
  __typename?: 'SwellContentPageSectionMultiplePanelPanelImage';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiplePanelPanelText = {
  __typename?: 'SwellContentPageSectionMultiplePanelPanelText';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['JSON']>;
  contentGap?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  horizontalBackgroundAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageScaling?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<SwellContentPageSectionMultiplePanelPanelTextLink>>>;
  overlayOpacity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalBackgroundAlignment?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiplePanelPanelTextLink = {
  __typename?: 'SwellContentPageSectionMultiplePanelPanelTextLink';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionMultiplePanelPanels = SwellContentPageSectionMultiplePanelPanelImage | SwellContentPageSectionMultiplePanelPanelText;

export type SwellContentPageSectionProductsPreview = {
  __typename?: 'SwellContentPageSectionProductsPreview';
  category?: Maybe<SwellCategory>;
  categoryId?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productsPerRow?: Maybe<Scalars['Int']>;
  showProductDescription?: Maybe<Scalars['Boolean']>;
  showProductPrice?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};


export type SwellContentPageSectionProductsPreviewCategoryArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellContentPageSectionReview = {
  __typename?: 'SwellContentPageSectionReview';
  contentAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  reviews?: Maybe<Array<Maybe<SwellContentPageSectionReviewReview>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentPageSectionReviewReview = {
  __typename?: 'SwellContentPageSectionReviewReview';
  comment?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Int']>;
  userImage?: Maybe<Scalars['JSON']>;
  userLocation?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SwellContentPageSections = SwellContentPageSectionCategoriesPreview | SwellContentPageSectionDivider | SwellContentPageSectionFullWidthMedium | SwellContentPageSectionHeadingWithText | SwellContentPageSectionMultipleFeature | SwellContentPageSectionMultiplePanel | SwellContentPageSectionProductsPreview | SwellContentPageSectionReview;

export type SwellContentPages = {
  __typename?: 'SwellContentPages';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellContentPage>>>;
};

/** Quiz */
export type SwellContentQuiz = {
  __typename?: 'SwellContentQuiz';
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  layout?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nextButtonLabel?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<SwellContentQuizQuestions>>>;
  resultsPage?: Maybe<Array<Maybe<SwellContentQuizResultsPage>>>;
  seeResultsLabel?: Maybe<Scalars['String']>;
};

export type SwellContentQuizQuestionQuizQuestion = {
  __typename?: 'SwellContentQuizQuestionQuizQuestion';
  answers?: Maybe<Array<Maybe<SwellContentQuizQuestionQuizQuestionAnswer>>>;
  answersCard?: Maybe<Array<Maybe<SwellContentQuizQuestionQuizQuestionAnswersCard>>>;
  columns?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isCustomerName?: Maybe<Scalars['Boolean']>;
  layoutTypeMultipleSelect?: Maybe<Scalars['String']>;
  layoutTypeSingleSelect?: Maybe<Scalars['String']>;
  maxChars?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<Scalars['String']>;
  questionDescription?: Maybe<Scalars['String']>;
  questionNote?: Maybe<Scalars['String']>;
  questionPrompt?: Maybe<Scalars['String']>;
  questionType?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentQuizQuestionQuizQuestionAnswer = {
  __typename?: 'SwellContentQuizQuestionQuizQuestionAnswer';
  id?: Maybe<Scalars['ID']>;
  option?: Maybe<Scalars['String']>;
  selection?: Maybe<Array<Maybe<SwellContentQuizQuestionQuizQuestionAnswerSelection>>>;
};

export type SwellContentQuizQuestionQuizQuestionAnswerSelection = {
  __typename?: 'SwellContentQuizQuestionQuizQuestionAnswerSelection';
  id?: Maybe<Scalars['ID']>;
  points?: Maybe<Scalars['Int']>;
  productSelection?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SwellContentQuizQuestionQuizQuestionAnswersCard = {
  __typename?: 'SwellContentQuizQuestionQuizQuestionAnswersCard';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  option?: Maybe<Scalars['String']>;
  selection?: Maybe<Array<Maybe<SwellContentQuizQuestionQuizQuestionAnswersCardSelection>>>;
};

export type SwellContentQuizQuestionQuizQuestionAnswersCardSelection = {
  __typename?: 'SwellContentQuizQuestionQuizQuestionAnswersCardSelection';
  id?: Maybe<Scalars['ID']>;
  points?: Maybe<Scalars['Int']>;
  productSelection?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type SwellContentQuizQuestionQuizTransition = {
  __typename?: 'SwellContentQuizQuestionQuizTransition';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  layoutOption?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentQuizQuestions = SwellContentQuizQuestionQuizQuestion | SwellContentQuizQuestionQuizTransition;

export type SwellContentQuizResultsPage = {
  __typename?: 'SwellContentQuizResultsPage';
  headingSection?: Maybe<Array<Maybe<SwellContentQuizResultsPageHeadingSection>>>;
  id?: Maybe<Scalars['ID']>;
  resultsTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SwellContentQuizResultsPageHeadingSection = SwellContentQuizResultsPageHeadingSectionMultiplePanel;

export type SwellContentQuizResultsPageHeadingSectionMultiplePanel = {
  __typename?: 'SwellContentQuizResultsPageHeadingSectionMultiplePanel';
  backgroundColor?: Maybe<Scalars['String']>;
  horizontalContentAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  panels?: Maybe<Array<Maybe<SwellContentQuizResultsPageHeadingSectionMultiplePanelPanels>>>;
  type?: Maybe<Scalars['String']>;
  verticalContentAlignment?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelImage = {
  __typename?: 'SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelImage';
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelText = {
  __typename?: 'SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelText';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Scalars['JSON']>;
  contentGap?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  horizontalBackgroundAlignment?: Maybe<Scalars['String']>;
  horizontalSpacing?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageScaling?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelTextLink>>>;
  overlayOpacity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verticalBackgroundAlignment?: Maybe<Scalars['String']>;
  verticalSpacing?: Maybe<Scalars['String']>;
};

export type SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelTextLink = {
  __typename?: 'SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelTextLink';
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type SwellContentQuizResultsPageHeadingSectionMultiplePanelPanels = SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelImage | SwellContentQuizResultsPageHeadingSectionMultiplePanelPanelText;

export type SwellContentQuizzes = {
  __typename?: 'SwellContentQuizzes';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellContentQuiz>>>;
};

/** Order */
export type SwellOrder = {
  __typename?: 'SwellOrder';
  accountCreditAmount?: Maybe<Scalars['SafeNumber']>;
  accountCreditApplied?: Maybe<Scalars['Boolean']>;
  accountId?: Maybe<Scalars['ID']>;
  accountInfoSaved?: Maybe<Scalars['Boolean']>;
  accountLoggedIn?: Maybe<Scalars['Boolean']>;
  billing?: Maybe<SwellOrderBilling>;
  canceled?: Maybe<Scalars['Boolean']>;
  comments?: Maybe<Scalars['String']>;
  coupon?: Maybe<SwellOrderCoupon>;
  couponCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyBase?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  delivered?: Maybe<Scalars['Boolean']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  discounts?: Maybe<Array<Maybe<SwellOrderDiscount>>>;
  gift?: Maybe<Scalars['Boolean']>;
  giftMessage?: Maybe<Scalars['String']>;
  giftcardDelivery?: Maybe<Scalars['Boolean']>;
  giftcardTotal?: Maybe<Scalars['SafeNumber']>;
  giftcards?: Maybe<Array<Maybe<SwellOrderGiftcard>>>;
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  guest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  itemQuantity?: Maybe<Scalars['Int']>;
  itemQuantityCancelable?: Maybe<Scalars['Int']>;
  itemQuantityCanceled?: Maybe<Scalars['Int']>;
  itemQuantityCreditable?: Maybe<Scalars['Int']>;
  itemQuantityCredited?: Maybe<Scalars['Int']>;
  itemQuantityDeliverable?: Maybe<Scalars['Int']>;
  itemQuantityDelivered?: Maybe<Scalars['Int']>;
  itemQuantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  itemQuantityInvoiceable?: Maybe<Scalars['Int']>;
  itemQuantityInvoiced?: Maybe<Scalars['Int']>;
  itemQuantityReturnable?: Maybe<Scalars['Int']>;
  itemQuantityReturned?: Maybe<Scalars['Int']>;
  itemQuantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  itemQuantitySubscriptionDeliverable?: Maybe<Scalars['Int']>;
  itemShipmentWeight?: Maybe<Scalars['SafeNumber']>;
  itemTax?: Maybe<Scalars['SafeNumber']>;
  itemTaxIncluded?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<SwellOrderItem>>>;
  metadata?: Maybe<Scalars['JSON']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  payments?: Maybe<SwellOrdersPayments>;
  promotionIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  promotions?: Maybe<SwellOrdersPromotions>;
  /** Refund */
  refunds?: Maybe<SwellOrdersRefunds>;
  shipmentDelivery?: Maybe<Scalars['Boolean']>;
  shipmentDiscount?: Maybe<Scalars['SafeNumber']>;
  shipmentPrice?: Maybe<Scalars['SafeNumber']>;
  shipmentRating?: Maybe<SwellOrderShipmentRating>;
  shipmentTax?: Maybe<Scalars['SafeNumber']>;
  shipmentTaxIncluded?: Maybe<Scalars['Boolean']>;
  shipmentTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  shipmentTotal?: Maybe<Scalars['SafeNumber']>;
  shipmentTotalCredited?: Maybe<Scalars['SafeNumber']>;
  shipmentTotalInvoiced?: Maybe<Scalars['SafeNumber']>;
  shipments?: Maybe<SwellOrdersShipments>;
  shipping?: Maybe<SwellOrderShipping>;
  status?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['SafeNumber']>;
  subscriptionDelivery?: Maybe<Scalars['Boolean']>;
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellOrderTax>>>;
  taxesFixed?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderBilling = {
  __typename?: 'SwellOrderBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  affirm?: Maybe<SwellOrderBillingAffirm>;
  amazon?: Maybe<SwellOrderBillingAmazon>;
  apple?: Maybe<SwellOrderBillingApple>;
  bancontact?: Maybe<SwellOrderBillingBancontact>;
  /** Payment Card */
  card?: Maybe<SwellOrderBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Billing */
  default?: Maybe<Scalars['Boolean']>;
  /** Billing First Name */
  firstName?: Maybe<Scalars['String']>;
  google?: Maybe<SwellOrderBillingGoogle>;
  ideal?: Maybe<SwellOrderBillingIdeal>;
  /** Payment Instructions */
  instructions?: Maybe<Scalars['String']>;
  intent?: Maybe<Scalars['JSON']>;
  klarna?: Maybe<SwellOrderBillingKlarna>;
  /** Billing Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Payment Method */
  method?: Maybe<Scalars['String']>;
  /** Billing Name */
  name?: Maybe<Scalars['String']>;
  paypal?: Maybe<SwellOrderBillingPaypal>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  resolve?: Maybe<SwellOrderBillingResolve>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingAffirm = {
  __typename?: 'SwellOrderBillingAffirm';
  checkoutToken?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingAmazon = {
  __typename?: 'SwellOrderBillingAmazon';
  accessToken?: Maybe<Scalars['String']>;
  checkoutSessionId?: Maybe<Scalars['String']>;
  orderReferenceId?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingApple = {
  __typename?: 'SwellOrderBillingApple';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingBancontact = {
  __typename?: 'SwellOrderBillingBancontact';
  source?: Maybe<Scalars['String']>;
};

/** Payment Card */
export type SwellOrderBillingCard = {
  __typename?: 'SwellOrderBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingGoogle = {
  __typename?: 'SwellOrderBillingGoogle';
  gateway?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingIdeal = {
  __typename?: 'SwellOrderBillingIdeal';
  token?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingKlarna = {
  __typename?: 'SwellOrderBillingKlarna';
  source?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingPaypal = {
  __typename?: 'SwellOrderBillingPaypal';
  authorizationId?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type SwellOrderBillingResolve = {
  __typename?: 'SwellOrderBillingResolve';
  chargeId?: Maybe<Scalars['String']>;
};

export type SwellOrderCoupon = {
  __typename?: 'SwellOrderCoupon';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** Coupon Name */
  name?: Maybe<Scalars['String']>;
};

export type SwellOrderDiscount = {
  __typename?: 'SwellOrderDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  rule?: Maybe<Scalars['JSON']>;
  /** References the related discount source object (e.g., promotion or coupon) */
  sourceId?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellOrderGiftcard = {
  __typename?: 'SwellOrderGiftcard';
  /** Amount of gift card credit to spend for automatic payment */
  amount?: Maybe<Scalars['SafeNumber']>;
  code?: Maybe<Scalars['String']>;
  codeFormatted?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last4?: Maybe<Scalars['String']>;
};

export type SwellOrderItem = {
  __typename?: 'SwellOrderItem';
  bundleItems?: Maybe<Array<Maybe<SwellOrderItemBundleItem>>>;
  /** Discount Amount */
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['JSON']>;
  options?: Maybe<Array<Maybe<SwellOrderItemOption>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  purchaseOption?: Maybe<SwellOrderItemPurchaseOption>;
  quantity?: Maybe<Scalars['Int']>;
  quantityCancelable?: Maybe<Scalars['Int']>;
  quantityCanceled?: Maybe<Scalars['Int']>;
  quantityConsumed?: Maybe<Scalars['Int']>;
  quantityCreditable?: Maybe<Scalars['Int']>;
  quantityCredited?: Maybe<Scalars['Int']>;
  quantityDeliverable?: Maybe<Scalars['Int']>;
  quantityDelivered?: Maybe<Scalars['Int']>;
  quantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  quantityInvoiceable?: Maybe<Scalars['Int']>;
  quantityInvoiced?: Maybe<Scalars['Int']>;
  quantityRestocked?: Maybe<Scalars['Int']>;
  quantityReturnable?: Maybe<Scalars['Int']>;
  quantityReturned?: Maybe<Scalars['Int']>;
  quantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  quantitySubscriptionDeliverable?: Maybe<Scalars['Int']>;
  quantitySubscriptionDelivered?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  /** Tax Amount */
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellOrderItemTax>>>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellOrderItemBundleItem = {
  __typename?: 'SwellOrderItemBundleItem';
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellOrderItemBundleItemOption>>>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  quantityCancelable?: Maybe<Scalars['Int']>;
  quantityCanceled?: Maybe<Scalars['Int']>;
  quantityConsumed?: Maybe<Scalars['Int']>;
  quantityDeliverable?: Maybe<Scalars['Int']>;
  quantityDelivered?: Maybe<Scalars['Int']>;
  quantityGiftcardDeliverable?: Maybe<Scalars['Int']>;
  quantityRestocked?: Maybe<Scalars['Int']>;
  quantityReturnable?: Maybe<Scalars['Int']>;
  quantityReturned?: Maybe<Scalars['Int']>;
  quantityShipmentDeliverable?: Maybe<Scalars['Int']>;
  quantityShipmentDelivered?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};

export type SwellOrderItemBundleItemOption = {
  __typename?: 'SwellOrderItemBundleItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscription?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderItemOption = {
  __typename?: 'SwellOrderItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscription?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderItemPurchaseOption = {
  __typename?: 'SwellOrderItemPurchaseOption';
  billingSchedule?: Maybe<SwellOrderItemPurchaseOptionBillingSchedule>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellOrderItemPurchaseOptionOrderSchedule>;
  planDescription?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellOrderItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellOrderItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellOrderItemTax = {
  __typename?: 'SwellOrderItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellOrderPayment = {
  __typename?: 'SwellOrderPayment';
  amount?: Maybe<Scalars['SafeNumber']>;
  amountRefundable?: Maybe<Scalars['SafeNumber']>;
  amountRefunded?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the payment has been authorized */
  authorized?: Maybe<Scalars['Boolean']>;
  /** Indicates the payment has been fully captured if applicable */
  captured?: Maybe<Scalars['Boolean']>;
  /** Payment card details if applicable */
  card?: Maybe<SwellOrderPaymentCard>;
  currency?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  gateway?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  /** Indicates the payment transaction was successful */
  success?: Maybe<Scalars['Boolean']>;
};

/** Payment card details if applicable */
export type SwellOrderPaymentCard = {
  __typename?: 'SwellOrderPaymentCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellOrderPromotion = {
  __typename?: 'SwellOrderPromotion';
  /** Date the promotion automatically ends and no longer applicable */
  dateEnd?: Maybe<Scalars['DateTime']>;
  /** Date the promotion is first applicable */
  dateStart?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** Promotion Name */
  name?: Maybe<Scalars['String']>;
};

/** Refund */
export type SwellOrderRefund = {
  __typename?: 'SwellOrderRefund';
  amount?: Maybe<Scalars['SafeNumber']>;
  currency?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  method?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  /** Indicates the refund was successfully processed */
  success?: Maybe<Scalars['Boolean']>;
};

export type SwellOrderShipment = {
  __typename?: 'SwellOrderShipment';
  canceled?: Maybe<Scalars['Boolean']>;
  carrier?: Maybe<Scalars['String']>;
  carrierName?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateEstimated?: Maybe<Scalars['DateTime']>;
  destination?: Maybe<SwellOrderShipmentDestination>;
  items?: Maybe<Array<Maybe<SwellOrderShipmentItem>>>;
  number?: Maybe<Scalars['String']>;
  origin?: Maybe<SwellOrderShipmentOrigin>;
  service?: Maybe<Scalars['String']>;
  serviceName?: Maybe<Scalars['String']>;
  trackingCode?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentDestination = {
  __typename?: 'SwellOrderShipmentDestination';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentItem = {
  __typename?: 'SwellOrderShipmentItem';
  bundleItemId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellOrderShipmentItemOption>>>;
  orderItemId?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type SwellOrderShipmentItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellOrderShipmentItemOption = {
  __typename?: 'SwellOrderShipmentItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentOrigin = {
  __typename?: 'SwellOrderShipmentOrigin';
  location?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentRating = {
  __typename?: 'SwellOrderShipmentRating';
  dateCreated?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<SwellOrderShipmentRatingError>>>;
  fingerprint?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<SwellOrderShipmentRatingService>>>;
};

export type SwellOrderShipmentRatingError = {
  __typename?: 'SwellOrderShipmentRatingError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type SwellOrderShipmentRatingService = {
  __typename?: 'SwellOrderShipmentRatingService';
  carrier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  taxCode?: Maybe<Scalars['String']>;
};

export type SwellOrderShipping = {
  __typename?: 'SwellOrderShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  /** Address Line 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address Line 2 */
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** Default Shipping */
  default?: Maybe<Scalars['Boolean']>;
  /** Shipping First Name */
  firstName?: Maybe<Scalars['String']>;
  /** Shipping Last Name */
  lastName?: Maybe<Scalars['String']>;
  /** Shipping Name */
  name?: Maybe<Scalars['String']>;
  /** Phone Number */
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  /** Shipping Price */
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipping Service ID */
  service?: Maybe<Scalars['String']>;
  /** Shipping Service Name */
  serviceName?: Maybe<Scalars['String']>;
  /** State/Province */
  state?: Maybe<Scalars['String']>;
  /** Zip/Postal Code */
  zip?: Maybe<Scalars['String']>;
};

export type SwellOrderTax = {
  __typename?: 'SwellOrderTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<Scalars['Boolean']>;
};

export type SwellOrders = {
  __typename?: 'SwellOrders';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrder>>>;
};

export type SwellOrdersPayments = {
  __typename?: 'SwellOrdersPayments';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderPayment>>>;
};

export type SwellOrdersPromotions = {
  __typename?: 'SwellOrdersPromotions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderPromotion>>>;
};

export type SwellOrdersRefunds = {
  __typename?: 'SwellOrdersRefunds';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderRefund>>>;
};

export type SwellOrdersShipments = {
  __typename?: 'SwellOrdersShipments';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellOrderShipment>>>;
};

/** Product */
export type SwellProduct = {
  __typename?: 'SwellProduct';
  attributes?: Maybe<Scalars['JSON']>;
  bundle?: Maybe<Scalars['Boolean']>;
  bundleItems?: Maybe<Array<Maybe<SwellProductBundleItem>>>;
  categories?: Maybe<Array<Maybe<SwellCategory>>>;
  content?: Maybe<SwellProductContent>;
  crossSells?: Maybe<Array<Maybe<SwellProductCrossSell>>>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<SwellProductImage>>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SwellProductOption>>>;
  optionsvalues?: Maybe<SwellProductOptionsvalues>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductPrice>>>;
  purchaseOptions?: Maybe<SwellProductPurchaseOptions>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['SafeNumber']>;
  /** SKU */
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
  stockPurchasable?: Maybe<Scalars['Boolean']>;
  /** Status of product stock for the purpose of ordering */
  stockStatus?: Maybe<Scalars['String']>;
  stockTracking?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  upSells?: Maybe<Array<Maybe<SwellProductUpSell>>>;
  /** Variations represented as unique product options */
  variants?: Maybe<SwellProductsVariants>;
};


/** Product */
export type SwellProductCategoriesArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellProductBundleItem = {
  __typename?: 'SwellProductBundleItem';
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};


export type SwellProductBundleItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellProductContent = {
  __typename?: 'SwellProductContent';
  calloutDescription?: Maybe<Scalars['String']>;
  calloutTitle?: Maybe<Scalars['String']>;
  enableProductCounter?: Maybe<Scalars['Boolean']>;
  expandableDetails?: Maybe<Array<Maybe<SwellProductContentExpandableDetail>>>;
  layoutOptions?: Maybe<Scalars['String']>;
  lowStockIndicator?: Maybe<Scalars['Int']>;
  productHighlights?: Maybe<Array<Maybe<SwellProductContentProductHighlight>>>;
  showStockLevels?: Maybe<Scalars['Boolean']>;
};

export type SwellProductContentExpandableDetail = {
  __typename?: 'SwellProductContentExpandableDetail';
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type SwellProductContentProductHighlight = {
  __typename?: 'SwellProductContentProductHighlight';
  customIcon?: Maybe<SwellProductContentProductHighlightCustomIcon>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type SwellProductContentProductHighlightCustomIcon = {
  __typename?: 'SwellProductContentProductHighlightCustomIcon';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductCrossSell = {
  __typename?: 'SwellProductCrossSell';
  discountAmount?: Maybe<Scalars['SafeNumber']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  discountType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
};


export type SwellProductCrossSellProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellProductImage = {
  __typename?: 'SwellProductImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellProductImageFile>;
  id?: Maybe<Scalars['ID']>;
};

export type SwellProductImageFile = {
  __typename?: 'SwellProductImageFile';
  height?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductOption = {
  __typename?: 'SwellProductOption';
  active?: Maybe<Scalars['Boolean']>;
  attributeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  inputHint?: Maybe<Scalars['String']>;
  inputMulti?: Maybe<Scalars['Boolean']>;
  inputType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  parentValueIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  /** Indicates the option requires a value */
  required?: Maybe<Scalars['Boolean']>;
  subscription?: Maybe<Scalars['Boolean']>;
  /** List of values for this option */
  values?: Maybe<Array<Maybe<SwellProductOptionValue>>>;
  /** Indicates the option is an aspect of variants */
  variant?: Maybe<Scalars['Boolean']>;
};

/** List of values for this option */
export type SwellProductOptionValue = {
  __typename?: 'SwellProductOptionValue';
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<SwellProductOptionValueImage>;
  images?: Maybe<Array<Maybe<SwellProductOptionValueImage>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  /** Shipment weight added if the option value is selected */
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  subscriptionInterval?: Maybe<Scalars['String']>;
  subscriptionIntervalCount?: Maybe<Scalars['Int']>;
  subscriptionTrialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductOptionValueImage = {
  __typename?: 'SwellProductOptionValueImage';
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  file?: Maybe<SwellProductOptionValueImageFile>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductOptionValueImageFile = {
  __typename?: 'SwellProductOptionValueImageFile';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductOptionsvalues = {
  __typename?: 'SwellProductOptionsvalues';
  image?: Maybe<SwellProductOptionsvaluesImage>;
};

export type SwellProductOptionsvaluesImage = {
  __typename?: 'SwellProductOptionsvaluesImage';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  dateUploaded?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  private?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductPrice = {
  __typename?: 'SwellProductPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptions = {
  __typename?: 'SwellProductPurchaseOptions';
  standard?: Maybe<SwellProductPurchaseOptionsStandard>;
  subscription?: Maybe<SwellProductPurchaseOptionsSubscription>;
  trial?: Maybe<SwellProductPurchaseOptionsTrial>;
};

export type SwellProductPurchaseOptionsStandard = {
  __typename?: 'SwellProductPurchaseOptionsStandard';
  accountGroups?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductPurchaseOptionsStandardPrice>>>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductPurchaseOptionsStandardPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsSubscription = {
  __typename?: 'SwellProductPurchaseOptionsSubscription';
  accountGroups?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<SwellProductPurchaseOptionsSubscriptionPlan>>>;
};

export type SwellProductPurchaseOptionsSubscriptionPlan = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan';
  active?: Maybe<Scalars['Boolean']>;
  billingSchedule?: Maybe<SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  orderSchedule?: Maybe<SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule>;
  price?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule';
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsTrial = {
  __typename?: 'SwellProductPurchaseOptionsTrial';
  active?: Maybe<Scalars['Boolean']>;
  authAmount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductPurchaseOptionsTrialPrice>>>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductPurchaseOptionsTrialPrice = {
  __typename?: 'SwellProductPurchaseOptionsTrialPrice';
  accountGroup?: Maybe<Scalars['String']>;
  authAmount?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellProductUpSell = {
  __typename?: 'SwellProductUpSell';
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
};


export type SwellProductUpSellProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

/** Variations represented as unique product options */
export type SwellProductVariant = {
  __typename?: 'SwellProductVariant';
  attributes?: Maybe<Scalars['JSON']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<SwellProductVariantImage>>>;
  name?: Maybe<Scalars['String']>;
  optionValueIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductVariantPrice>>>;
  purchaseOptions?: Maybe<SwellProductVariantPurchaseOptions>;
  /** SKU */
  sku?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantImage = {
  __typename?: 'SwellProductVariantImage';
  caption?: Maybe<Scalars['String']>;
  file?: Maybe<SwellProductVariantImageFile>;
  id?: Maybe<Scalars['ID']>;
};

export type SwellProductVariantImageFile = {
  __typename?: 'SwellProductVariantImageFile';
  height?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantPrice = {
  __typename?: 'SwellProductVariantPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProductVariantPurchaseOptions = {
  __typename?: 'SwellProductVariantPurchaseOptions';
  standard?: Maybe<SwellProductVariantPurchaseOptionsStandard>;
};

export type SwellProductVariantPurchaseOptionsStandard = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandard';
  origPrice?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  prices?: Maybe<Array<Maybe<SwellProductVariantPurchaseOptionsStandardPrice>>>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['SafeNumber']>;
};

export type SwellProductVariantPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice';
  accountGroup?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['SafeNumber']>;
  price?: Maybe<Scalars['SafeNumber']>;
  quantityMax?: Maybe<Scalars['Int']>;
  quantityMin?: Maybe<Scalars['Int']>;
};

export type SwellProducts = {
  __typename?: 'SwellProducts';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellProduct>>>;
};

export type SwellProductsVariants = {
  __typename?: 'SwellProductsVariants';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellProductVariant>>>;
};

export type SwellSettings = {
  __typename?: 'SwellSettings';
  store?: Maybe<SwellSettingsStore>;
  values?: Maybe<Scalars['JSON']>;
};

export type SwellSettingsMenus = {
  __typename?: 'SwellSettingsMenus';
  sections?: Maybe<Array<Maybe<SwellSettingsMenusSection>>>;
};

export type SwellSettingsMenusSection = {
  __typename?: 'SwellSettingsMenusSection';
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  name?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['String']>;
  themeMenuId?: Maybe<Scalars['String']>;
};

export type SwellSettingsPayments = {
  __typename?: 'SwellSettingsPayments';
  methods?: Maybe<Scalars['JSON']>;
};

export type SwellSettingsStore = {
  __typename?: 'SwellSettingsStore';
  analyticsScripts?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currencies?: Maybe<Array<Maybe<SwellSettingsStoreCurrency>>>;
  currency?: Maybe<Scalars['String']>;
  facebookPixelId?: Maybe<Scalars['String']>;
  homePage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<SwellSettingsStoreLocale>>>;
  name?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
  supportEmail?: Maybe<Scalars['String']>;
  supportPhone?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SwellSettingsStoreCurrency = {
  __typename?: 'SwellSettingsStoreCurrency';
  code?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  priced?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['SafeNumber']>;
  symbol?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SwellSettingsStoreLocale = {
  __typename?: 'SwellSettingsStoreLocale';
  code?: Maybe<Scalars['String']>;
  fallback?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SwellSettingsSubscriptions = {
  __typename?: 'SwellSettingsSubscriptions';
  features?: Maybe<Scalars['JSON']>;
  pauseNextSkipThreshold?: Maybe<Scalars['Int']>;
};

/** Subscription */
export type SwellSubscription = {
  __typename?: 'SwellSubscription';
  accountId?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  billing?: Maybe<SwellSubscriptionBilling>;
  billingSchedule?: Maybe<SwellSubscriptionBillingSchedule>;
  cancelAtEnd?: Maybe<Scalars['Boolean']>;
  canceled?: Maybe<Scalars['Boolean']>;
  couponCode?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyRate?: Maybe<Scalars['SafeNumber']>;
  dateCanceled?: Maybe<Scalars['DateTime']>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  dateOrderPeriodEnd?: Maybe<Scalars['DateTime']>;
  datePauseEnd?: Maybe<Scalars['DateTime']>;
  datePaused?: Maybe<Scalars['DateTime']>;
  datePaymentRetry?: Maybe<Scalars['DateTime']>;
  datePeriodEnd?: Maybe<Scalars['DateTime']>;
  datePeriodStart?: Maybe<Scalars['DateTime']>;
  dateTrialEnd?: Maybe<Scalars['DateTime']>;
  dateTrialStart?: Maybe<Scalars['DateTime']>;
  dateUpdated?: Maybe<Scalars['DateTime']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  grandTotal?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  invoiceTotal?: Maybe<Scalars['SafeNumber']>;
  itemDiscount?: Maybe<Scalars['SafeNumber']>;
  itemTax?: Maybe<Scalars['SafeNumber']>;
  itemTotal?: Maybe<Scalars['SafeNumber']>;
  items?: Maybe<Array<Maybe<SwellSubscriptionItem>>>;
  options?: Maybe<Array<Maybe<SwellSubscriptionOption>>>;
  orderId?: Maybe<Scalars['ID']>;
  orderSchedule?: Maybe<SwellSubscriptionOrderSchedule>;
  orders?: Maybe<SwellOrders>;
  paid?: Maybe<Scalars['Boolean']>;
  paused?: Maybe<Scalars['Boolean']>;
  paymentBalance?: Maybe<Scalars['SafeNumber']>;
  paymentTotal?: Maybe<Scalars['SafeNumber']>;
  planId?: Maybe<Scalars['ID']>;
  planName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productDiscountEach?: Maybe<Scalars['SafeNumber']>;
  productDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  productId?: Maybe<Scalars['ID']>;
  productTaxEach?: Maybe<Scalars['SafeNumber']>;
  productTaxTotal?: Maybe<Scalars['SafeNumber']>;
  quantity?: Maybe<Scalars['Int']>;
  recurringDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  recurringItemDiscount?: Maybe<Scalars['SafeNumber']>;
  recurringItemTax?: Maybe<Scalars['SafeNumber']>;
  recurringItemTotal?: Maybe<Scalars['SafeNumber']>;
  recurringTaxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  recurringTaxTotal?: Maybe<Scalars['SafeNumber']>;
  recurringTotal?: Maybe<Scalars['SafeNumber']>;
  shipping?: Maybe<SwellSubscriptionShipping>;
  status?: Maybe<Scalars['String']>;
  subTotal?: Maybe<Scalars['SafeNumber']>;
  taxIncludedTotal?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellSubscriptionTax>>>;
  taxesFixed?: Maybe<Scalars['Boolean']>;
  trial?: Maybe<Scalars['Boolean']>;
  trialDays?: Maybe<Scalars['Int']>;
  unpaid?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<SwellProductVariant>;
  variantId?: Maybe<Scalars['ID']>;
};


/** Subscription */
export type SwellSubscriptionOrdersArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type SwellSubscriptionBilling = {
  __typename?: 'SwellSubscriptionBilling';
  accountCardId?: Maybe<Scalars['ID']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  card?: Maybe<SwellSubscriptionBillingCard>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  intent?: Maybe<Scalars['JSON']>;
  lastName?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  useAccount?: Maybe<Scalars['Boolean']>;
  zip?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionBillingCard = {
  __typename?: 'SwellSubscriptionBillingCard';
  addressCheck?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  gateway?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  zipCheck?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionBillingCardInput = {
  addressCheck?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  cvcCheck?: InputMaybe<Scalars['String']>;
  expMonth?: InputMaybe<Scalars['Int']>;
  expYear?: InputMaybe<Scalars['Int']>;
  gateway?: InputMaybe<Scalars['String']>;
  last4?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  zipCheck?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionBillingInput = {
  accountCardId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  card?: InputMaybe<SwellSubscriptionBillingCardInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  intent?: InputMaybe<Scalars['JSON']>;
  lastName?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  useAccount?: InputMaybe<Scalars['Boolean']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionBillingSchedule = {
  __typename?: 'SwellSubscriptionBillingSchedule';
  dateLimitEnd?: Maybe<Scalars['DateTime']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  limitCurrent?: Maybe<Scalars['Int']>;
  trialDays?: Maybe<Scalars['Int']>;
};

export type SwellSubscriptionBillingScheduleInput = {
  dateLimitEnd?: InputMaybe<Scalars['DateTime']>;
  interval?: InputMaybe<Scalars['String']>;
  intervalCount?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  limitCurrent?: InputMaybe<Scalars['Int']>;
  trialDays?: InputMaybe<Scalars['Int']>;
};

export type SwellSubscriptionInput = {
  billing?: InputMaybe<SwellSubscriptionBillingInput>;
  billingSchedule?: InputMaybe<SwellSubscriptionBillingScheduleInput>;
  cancelAtEnd?: InputMaybe<Scalars['Boolean']>;
  canceled?: InputMaybe<Scalars['Boolean']>;
  couponCode?: InputMaybe<Scalars['String']>;
  datePauseEnd?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<InputMaybe<SwellSubscriptionItemInput>>>;
  options?: InputMaybe<Array<InputMaybe<SwellSubscriptionOptionInput>>>;
  paused?: InputMaybe<Scalars['Boolean']>;
  planId?: InputMaybe<Scalars['ID']>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  shipping?: InputMaybe<SwellSubscriptionShippingInput>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellSubscriptionItem = {
  __typename?: 'SwellSubscriptionItem';
  bundleItems?: Maybe<Array<Maybe<SwellSubscriptionItemBundleItem>>>;
  dateCreated?: Maybe<Scalars['DateTime']>;
  delivery?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountEach?: Maybe<Scalars['SafeNumber']>;
  discountTotal?: Maybe<Scalars['SafeNumber']>;
  discounts?: Maybe<Array<Maybe<SwellSubscriptionItemDiscount>>>;
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<SwellSubscriptionItemOption>>>;
  price?: Maybe<Scalars['SafeNumber']>;
  priceTotal?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  proration?: Maybe<Scalars['Boolean']>;
  prorationProductId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  recurring?: Maybe<Scalars['Boolean']>;
  recurringDiscountEach?: Maybe<Scalars['SafeNumber']>;
  recurringDiscountTotal?: Maybe<Scalars['SafeNumber']>;
  recurringPrice?: Maybe<Scalars['SafeNumber']>;
  recurringPriceTotal?: Maybe<Scalars['SafeNumber']>;
  recurringTaxEach?: Maybe<Scalars['SafeNumber']>;
  recurringTaxTotal?: Maybe<Scalars['SafeNumber']>;
  taxEach?: Maybe<Scalars['SafeNumber']>;
  taxTotal?: Maybe<Scalars['SafeNumber']>;
  taxes?: Maybe<Array<Maybe<SwellSubscriptionItemTax>>>;
  variantId?: Maybe<Scalars['ID']>;
};


export type SwellSubscriptionItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionItemBundleItem = {
  __typename?: 'SwellSubscriptionItemBundleItem';
  amountRatio?: Maybe<Scalars['SafeNumber']>;
  discountEach?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['SafeNumber']>;
  product?: Maybe<SwellProduct>;
  productId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  quantityTotal?: Maybe<Scalars['Int']>;
  taxEach?: Maybe<Scalars['SafeNumber']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type SwellSubscriptionItemBundleItemProductArgs = {
  _currency?: InputMaybe<Scalars['String']>;
  _locale?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionItemDiscount = {
  __typename?: 'SwellSubscriptionItemDiscount';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Array<InputMaybe<SwellSubscriptionItemOptionInput>>>;
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['ID']>;
};

export type SwellSubscriptionItemOption = {
  __typename?: 'SwellSubscriptionItemOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellSubscriptionItemOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellSubscriptionItemTax = {
  __typename?: 'SwellSubscriptionItemTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionOption = {
  __typename?: 'SwellSubscriptionOption';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['SafeNumber']>;
  shipmentWeight?: Maybe<Scalars['SafeNumber']>;
  value?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['Boolean']>;
};

export type SwellSubscriptionOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  shipmentWeight?: InputMaybe<Scalars['SafeNumber']>;
  value?: InputMaybe<Scalars['String']>;
  valueId?: InputMaybe<Scalars['ID']>;
  variant?: InputMaybe<Scalars['Boolean']>;
};

export type SwellSubscriptionOrderSchedule = {
  __typename?: 'SwellSubscriptionOrderSchedule';
  dateLimitEnd?: Maybe<Scalars['DateTime']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  limitCurrent?: Maybe<Scalars['Int']>;
};

export type SwellSubscriptionShipping = {
  __typename?: 'SwellSubscriptionShipping';
  accountAddressId?: Maybe<Scalars['ID']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['SafeNumber']>;
  service?: Maybe<Scalars['String']>;
  serviceName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  useAccount?: Maybe<Scalars['Boolean']>;
  zip?: Maybe<Scalars['String']>;
};

export type SwellSubscriptionShippingInput = {
  accountAddressId?: InputMaybe<Scalars['ID']>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pickup?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['SafeNumber']>;
  service?: InputMaybe<Scalars['String']>;
  serviceName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  useAccount?: InputMaybe<Scalars['Boolean']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type SwellSubscriptionTax = {
  __typename?: 'SwellSubscriptionTax';
  amount?: Maybe<Scalars['SafeNumber']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['SafeNumber']>;
};

export type SwellSubscriptions = {
  __typename?: 'SwellSubscriptions';
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  results?: Maybe<Array<Maybe<SwellSubscription>>>;
};

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginAccount?: { __typename: 'SuccessfulResponse' } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logoutAccount?: { __typename?: 'SuccessfulResponse', success?: boolean | null } | null };

export type SignupMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
}>;


export type SignupMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'SwellAccount', email?: string | null } | null };

export type CheckTokenValidityQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckTokenValidityQuery = { __typename?: 'Query', session?: { __typename?: 'Session', accountId?: string | null } | null };

export type SendResetPasswordMailMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  passwordResetUrl?: InputMaybe<Scalars['String']>;
}>;


export type SendResetPasswordMailMutation = { __typename?: 'Mutation', sendAccountRecovery?: { __typename?: 'SuccessfulResponse', success?: boolean | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  passwordResetKey?: InputMaybe<Scalars['String']>;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', recoverAccount?: { __typename?: 'SuccessfulResponse', success?: boolean | null } | null };

export type GetAccountDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountDetailsQuery = { __typename?: 'Query', account?: { __typename?: 'SwellAccount', name?: string | null, email?: string | null } | null };

export type AddToCartMutationVariables = Exact<{
  cartItemInput?: InputMaybe<SwellCartItemInput>;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addCartItem?: { __typename?: 'SwellCart', checkoutId?: string | null, checkoutUrl?: string | null, grandTotal?: any | null, items?: Array<{ __typename?: 'SwellCartItem', id?: string | null, quantity?: number | null, price?: any | null, priceTotal?: any | null, discountTotal?: any | null, discountEach?: any | null, taxTotal?: any | null, productId?: string | null, variantId?: string | null, purchaseOption?: { __typename?: 'SwellCartItemPurchaseOption', type?: string | null, planId?: string | null, planName?: string | null, billingSchedule?: { __typename?: 'SwellCartItemPurchaseOptionBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellCartItemPurchaseOptionOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null, options?: Array<{ __typename?: 'SwellCartItemOption', id?: string | null, name?: string | null, value?: string | null, valueId?: string | null, variant?: boolean | null, price?: any | null } | null> | null, taxes?: Array<{ __typename?: 'SwellCartItemTax', id?: string | null, amount?: any | null } | null> | null, product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, slug?: string | null, stockTracking?: boolean | null, stockPurchasable?: boolean | null, stockLevel?: number | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, variant?: { __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, stockLevel?: number | null, currency?: string | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null } | null } | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null };

export type UpdateCartItemMutationVariables = Exact<{
  itemId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<SwellCartItemInput>;
}>;


export type UpdateCartItemMutation = { __typename?: 'Mutation', updateCartItem?: { __typename?: 'SwellCart', checkoutUrl?: string | null, grandTotal?: any | null, items?: Array<{ __typename?: 'SwellCartItem', id?: string | null, quantity?: number | null, price?: any | null, priceTotal?: any | null, discountTotal?: any | null, discountEach?: any | null, taxTotal?: any | null, productId?: string | null, variantId?: string | null, purchaseOption?: { __typename?: 'SwellCartItemPurchaseOption', type?: string | null, planId?: string | null, planName?: string | null, billingSchedule?: { __typename?: 'SwellCartItemPurchaseOptionBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellCartItemPurchaseOptionOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null, options?: Array<{ __typename?: 'SwellCartItemOption', id?: string | null, name?: string | null, value?: string | null, valueId?: string | null, variant?: boolean | null, price?: any | null } | null> | null, taxes?: Array<{ __typename?: 'SwellCartItemTax', id?: string | null, amount?: any | null } | null> | null, product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, slug?: string | null, stockTracking?: boolean | null, stockPurchasable?: boolean | null, stockLevel?: number | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, variant?: { __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, stockLevel?: number | null, currency?: string | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null } | null } | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null };

export type DeleteCartItemMutationVariables = Exact<{
  itemId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteCartItemMutation = { __typename?: 'Mutation', deleteCartItem?: { __typename?: 'SwellCart', checkoutUrl?: string | null, grandTotal?: any | null, items?: Array<{ __typename?: 'SwellCartItem', id?: string | null, quantity?: number | null, price?: any | null, priceTotal?: any | null, discountTotal?: any | null, discountEach?: any | null, taxTotal?: any | null, productId?: string | null, variantId?: string | null, purchaseOption?: { __typename?: 'SwellCartItemPurchaseOption', type?: string | null, planId?: string | null, planName?: string | null, billingSchedule?: { __typename?: 'SwellCartItemPurchaseOptionBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellCartItemPurchaseOptionOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null, options?: Array<{ __typename?: 'SwellCartItemOption', id?: string | null, name?: string | null, value?: string | null, valueId?: string | null, variant?: boolean | null, price?: any | null } | null> | null, taxes?: Array<{ __typename?: 'SwellCartItemTax', id?: string | null, amount?: any | null } | null> | null, product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, slug?: string | null, stockTracking?: boolean | null, stockPurchasable?: boolean | null, stockLevel?: number | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, variant?: { __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, stockLevel?: number | null, currency?: string | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null } | null } | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null };

export type GetCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuery = { __typename?: 'Query', cart?: { __typename?: 'SwellCart', checkoutUrl?: string | null, grandTotal?: any | null, items?: Array<{ __typename?: 'SwellCartItem', id?: string | null, quantity?: number | null, price?: any | null, priceTotal?: any | null, discountTotal?: any | null, discountEach?: any | null, taxTotal?: any | null, productId?: string | null, variantId?: string | null, purchaseOption?: { __typename?: 'SwellCartItemPurchaseOption', type?: string | null, planId?: string | null, planName?: string | null, billingSchedule?: { __typename?: 'SwellCartItemPurchaseOptionBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellCartItemPurchaseOptionOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null, options?: Array<{ __typename?: 'SwellCartItemOption', id?: string | null, name?: string | null, value?: string | null, valueId?: string | null, variant?: boolean | null, price?: any | null } | null> | null, taxes?: Array<{ __typename?: 'SwellCartItemTax', id?: string | null, amount?: any | null } | null> | null, product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, slug?: string | null, stockTracking?: boolean | null, stockPurchasable?: boolean | null, stockLevel?: number | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, variant?: { __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, stockLevel?: number | null, currency?: string | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null } | null } | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'SwellCategories', results?: Array<{ __typename?: 'SwellCategory', name?: string | null, slug?: string | null, images?: Array<{ __typename?: 'SwellCategoryImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellCategoryImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, content?: { __typename?: 'SwellCategoryContent', showProductsPrice?: boolean | null, showProductsDescription?: boolean | null, showFeaturedCategories?: boolean | null, productsPerRow?: number | null, enableQuickAdd?: boolean | null, featuredCategories?: Array<{ __typename?: 'SwellCategoryContentFeaturedCategory', category?: { __typename?: 'SwellCategory', slug?: string | null, name?: string | null, description?: string | null, images?: Array<{ __typename?: 'SwellCategoryImage', caption?: string | null, id?: string | null, file?: { __typename?: 'SwellCategoryImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null } | null> | null } | null };

export type GetCategoryPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryPathsQuery = { __typename?: 'Query', categories?: { __typename?: 'SwellCategories', results?: Array<{ __typename?: 'SwellCategory', slug?: string | null } | null> | null } | null };

export type GetCategoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'SwellCategory', name?: string | null, slug?: string | null, description?: string | null, metaKeywords?: string | null, metaDescription?: string | null, products?: Array<{ __typename?: 'SwellProduct', id?: string | null, name?: string | null, description?: string | null, slug?: string | null, price?: any | null, currency?: string | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', width?: number | null, height?: number | null, url?: string | null } | null } | null> | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null, description?: string | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', active?: boolean | null } | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null> | null } | null };

export type GetFeaturedCategoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetFeaturedCategoryQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'SwellCategory', name?: string | null, description?: string | null, slug?: string | null, images?: Array<{ __typename?: 'SwellCategoryImage', caption?: string | null, file?: { __typename?: 'SwellCategoryImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null };

export type GetFilteredProductsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSON']>;
}>;


export type GetFilteredProductsQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', count?: number | null, results?: Array<{ __typename?: 'SwellProduct', id?: string | null, name?: string | null, description?: string | null, slug?: string | null, price?: any | null, currency?: string | null, attributes?: any | null, categories?: Array<{ __typename?: 'SwellCategory', name?: string | null, slug?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', width?: number | null, height?: number | null, url?: string | null } | null } | null> | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null, description?: string | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', active?: boolean | null } | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null> | null } | null };

export type GetCategoryInCurrencyQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryInCurrencyQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'SwellCategory', products?: Array<{ __typename?: 'SwellProduct', id?: string | null, price?: any | null, currency?: string | null } | null> | null } | null };

export type GetCategorySlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategorySlugsQuery = { __typename?: 'Query', categories?: { __typename?: 'SwellCategories', results?: Array<{ __typename?: 'SwellCategory', slug?: string | null } | null> | null } | null };

export type GetCategoryPreviewDataQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryPreviewDataQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'SwellCategory', name?: string | null, description?: string | null, slug?: string | null, images?: Array<{ __typename?: 'SwellCategoryImage', caption?: string | null, file?: { __typename?: 'SwellCategoryImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null };

export type GetCategoryWithProductSlugsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryWithProductSlugsQuery = { __typename?: 'Query', categoryBySlug?: { __typename?: 'SwellCategory', slug?: string | null, products?: Array<{ __typename?: 'SwellProduct', slug?: string | null } | null> | null } | null };

export type GetContentPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentPagesQuery = { __typename?: 'Query', contentPages?: { __typename?: 'SwellContentPages', results?: Array<{ __typename?: 'SwellContentPage', slug?: string | null, published?: boolean | null } | null> | null } | null };

export type GetOrdersQueryVariables = Exact<{
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'SwellOrders', results?: Array<{ __typename?: 'SwellOrder', status?: string | null, id?: string | null, number?: string | null, dateCreated?: any | null, itemQuantity?: number | null, currency?: string | null, grandTotal?: any | null, subTotal?: any | null, items?: Array<{ __typename?: 'SwellOrderItem', product?: { __typename?: 'SwellProduct', images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null } | null> | null } | null };

export type GetOrderByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', orderById?: { __typename?: 'SwellOrder', status?: string | null, id?: string | null, number?: string | null, dateCreated?: any | null, itemQuantity?: number | null, currency?: string | null, grandTotal?: any | null, subTotal?: any | null, shipmentTotal?: any | null, discountTotal?: any | null, taxTotal?: any | null, comments?: string | null, items?: Array<{ __typename?: 'SwellOrderItem', quantity?: number | null, priceTotal?: any | null, purchaseOption?: { __typename?: 'SwellOrderItemPurchaseOption', billingSchedule?: { __typename?: 'SwellOrderItemPurchaseOptionBillingSchedule', interval?: string | null, intervalCount?: number | null } | null } | null, product?: { __typename?: 'SwellProduct', name?: string | null, slug?: string | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, options?: Array<{ __typename?: 'SwellOrderItemOption', value?: string | null } | null> | null } | null> | null, refunds?: { __typename?: 'SwellOrdersRefunds', results?: Array<{ __typename?: 'SwellOrderRefund', amount?: any | null, currency?: string | null } | null> | null } | null, shipping?: { __typename?: 'SwellOrderShipping', name?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, country?: string | null, zip?: string | null, phone?: string | null, serviceName?: string | null, price?: any | null } | null, billing?: { __typename?: 'SwellOrderBilling', name?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, country?: string | null, zip?: string | null, method?: string | null, card?: { __typename?: 'SwellOrderBillingCard', brand?: string | null, last4?: string | null, expMonth?: number | null, expYear?: number | null } | null } | null } | null };

export type GetAllProductsQueryVariables = Exact<{
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductsQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', count?: number | null, results?: Array<{ __typename?: 'SwellProduct', id?: string | null, name?: string | null, description?: string | null, slug?: string | null, price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, currency?: string | null, attributes?: any | null, categories?: Array<{ __typename?: 'SwellCategory', name?: string | null, slug?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', width?: number | null, height?: number | null, url?: string | null } | null } | null> | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null, description?: string | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', active?: boolean | null } | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, origPrice?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null> | null } | null };

export type GetProductsPricesInCurrencyQueryVariables = Exact<{
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetProductsPricesInCurrencyQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', results?: Array<{ __typename?: 'SwellProduct', id?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, currency?: string | null } | null> | null } | null };

export type GetProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetProductQuery = { __typename?: 'Query', productBySlug?: { __typename?: 'SwellProduct', slug?: string | null, id?: string | null, name?: string | null, description?: string | null, currency?: string | null, metaTitle?: string | null, metaDescription?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, stockLevel?: number | null, stockStatus?: string | null, stockTracking?: boolean | null, stockPurchasable?: boolean | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, categories?: Array<{ __typename?: 'SwellCategory', name?: string | null, slug?: string | null } | null> | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, description?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, parentId?: string | null, parentValueIds?: Array<string | null> | null, inputHint?: string | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null, image?: { __typename?: 'SwellProductOptionValueImage', id?: string | null, file?: { __typename?: 'SwellProductOptionValueImageFile', id?: string | null, url?: string | null, width?: number | null, height?: number | null, filename?: string | null } | null } | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', plans?: Array<{ __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan', id?: string | null, name?: string | null, price?: any | null, billingSchedule?: { __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null> | null } | null } | null, upSells?: Array<{ __typename?: 'SwellProductUpSell', product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, description?: string | null, slug?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, currency?: string | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', plans?: Array<{ __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan', id?: string | null } | null> | null } | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, origPrice?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null } | null> | null, crossSells?: Array<{ __typename?: 'SwellProductCrossSell', discountType?: string | null, discountAmount?: any | null, discountPercent?: any | null, product?: { __typename?: 'SwellProduct', id?: string | null, name?: string | null, slug?: string | null, currency?: string | null, price?: any | null, origPrice?: any | null, sale?: boolean | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null } | null> | null, content?: { __typename?: 'SwellProductContent', layoutOptions?: string | null, showStockLevels?: boolean | null, lowStockIndicator?: number | null, calloutTitle?: string | null, calloutDescription?: string | null, enableProductCounter?: boolean | null, productHighlights?: Array<{ __typename?: 'SwellProductContentProductHighlight', id?: string | null, icon?: string | null, label?: string | null, customIcon?: { __typename?: 'SwellProductContentProductHighlightCustomIcon', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, expandableDetails?: Array<{ __typename?: 'SwellProductContentExpandableDetail', id?: string | null, details?: string | null, label?: string | null } | null> | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, origPrice?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null };

export type GetProductPricesInCurrencyQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetProductPricesInCurrencyQuery = { __typename?: 'Query', productBySlug?: { __typename?: 'SwellProduct', id?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, currency?: string | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, price?: any | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', plans?: Array<{ __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan', id?: string | null, price?: any | null } | null> | null } | null } | null, upSells?: Array<{ __typename?: 'SwellProductUpSell', product?: { __typename?: 'SwellProduct', id?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, currency?: string | null, options?: Array<{ __typename?: 'SwellProductOption', id?: string | null, attributeId?: string | null, name?: string | null, inputType?: string | null, active?: boolean | null, required?: boolean | null, variant?: boolean | null, values?: Array<{ __typename?: 'SwellProductOptionValue', id?: string | null, name?: string | null, price?: any | null } | null> | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductPurchaseOptions', standard?: { __typename?: 'SwellProductPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null } | null, subscription?: { __typename?: 'SwellProductPurchaseOptionsSubscription', plans?: Array<{ __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan', id?: string | null } | null> | null } | null } | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', name?: string | null, price?: any | null, origPrice?: any | null, optionValueIds?: Array<string | null> | null, stockLevel?: number | null, currency?: string | null, prices?: Array<{ __typename?: 'SwellProductVariantPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null, images?: Array<{ __typename?: 'SwellProductVariantImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductVariantImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null, discountPercent?: any | null, quantityMin?: number | null, quantityMax?: number | null, accountGroup?: string | null } | null> | null } | null } | null } | null> | null } | null } | null } | null> | null, crossSells?: Array<{ __typename?: 'SwellProductCrossSell', product?: { __typename?: 'SwellProduct', id?: string | null, currency?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null } | null } | null> | null, variants?: { __typename?: 'SwellProductsVariants', results?: Array<{ __typename?: 'SwellProductVariant', price?: any | null, origPrice?: any | null, currency?: string | null, purchaseOptions?: { __typename?: 'SwellProductVariantPurchaseOptions', standard?: { __typename?: 'SwellProductVariantPurchaseOptionsStandard', price?: any | null, sale?: boolean | null, salePrice?: any | null, origPrice?: any | null, prices?: Array<{ __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice', price?: any | null } | null> | null } | null } | null } | null> | null } | null } | null };

export type GetProductSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductSlugsQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', results?: Array<{ __typename?: 'SwellProduct', slug?: string | null } | null> | null } | null };

export type SearchProductsQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
}>;


export type SearchProductsQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', results?: Array<{ __typename?: 'SwellProduct', id?: string | null, name?: string | null, currency?: string | null, description?: string | null, slug?: string | null, price?: any | null, sale?: boolean | null, origPrice?: any | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', width?: number | null, height?: number | null, url?: string | null } | null } | null> | null } | null> | null } | null };

export type GetFilteredSortedProductsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JSON']>;
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetFilteredSortedProductsQuery = { __typename?: 'Query', products?: { __typename?: 'SwellProducts', results?: Array<{ __typename?: 'SwellProduct', slug?: string | null } | null> | null } | null };

export type GetStoreSettingsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetStoreSettingsQuery = { __typename?: 'Query', storeSettings?: { __typename?: 'SwellSettings', values?: any | null, store?: { __typename?: 'SwellSettingsStore', name?: string | null, homePage?: string | null, currency?: string | null, locale?: string | null, currencies?: Array<{ __typename?: 'SwellSettingsStoreCurrency', code?: string | null, name?: string | null, rate?: any | null, symbol?: string | null, decimals?: number | null, priced?: boolean | null, type?: string | null } | null> | null, locales?: Array<{ __typename?: 'SwellSettingsStoreLocale', name?: string | null, code?: string | null, fallback?: string | null } | null> | null } | null } | null };

export type GetStoreUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStoreUrlQuery = { __typename?: 'Query', storeSettings?: { __typename?: 'SwellSettings', store?: { __typename?: 'SwellSettingsStore', url?: string | null } | null } | null };

export type GetMenusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenusQuery = { __typename?: 'Query', menuSettings?: { __typename?: 'SwellSettingsMenus', sections?: Array<{ __typename?: 'SwellSettingsMenusSection', id?: string | null, name?: string | null, items?: Array<any | null> | null } | null> | null } | null };

export type GetSubscriptionByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSubscriptionByIdQuery = { __typename?: 'Query', subscriptionById?: { __typename?: 'SwellSubscription', id?: string | null, status?: string | null, dateCreated?: any | null, datePeriodEnd?: any | null, dateOrderPeriodEnd?: any | null, quantity?: number | null, trial?: boolean | null, dateTrialEnd?: any | null, subTotal?: any | null, discountTotal?: any | null, taxTotal?: any | null, grandTotal?: any | null, currency?: string | null, product?: { __typename?: 'SwellProduct', name?: string | null, slug?: string | null, images?: Array<{ __typename?: 'SwellProductImage', caption?: string | null, file?: { __typename?: 'SwellProductImageFile', width?: number | null, height?: number | null, url?: string | null } | null } | null> | null } | null, options?: Array<{ __typename?: 'SwellSubscriptionOption', value?: string | null } | null> | null, shipping?: { __typename?: 'SwellSubscriptionShipping', name?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, country?: string | null, zip?: string | null, phone?: string | null, service?: string | null, serviceName?: string | null, price?: any | null } | null, billing?: { __typename?: 'SwellSubscriptionBilling', name?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, country?: string | null, zip?: string | null, method?: string | null, card?: { __typename?: 'SwellSubscriptionBillingCard', brand?: string | null, last4?: string | null, expMonth?: number | null, expYear?: number | null } | null } | null, billingSchedule?: { __typename?: 'SwellSubscriptionBillingSchedule', interval?: string | null, intervalCount?: number | null, limit?: number | null, limitCurrent?: number | null } | null, orderSchedule?: { __typename?: 'SwellSubscriptionOrderSchedule', interval?: string | null, intervalCount?: number | null, limit?: number | null, limitCurrent?: number | null } | null } | null };

export type GetSubscriptionsQueryVariables = Exact<{
  currency?: InputMaybe<Scalars['String']>;
}>;


export type GetSubscriptionsQuery = { __typename?: 'Query', subscriptions?: { __typename?: 'SwellSubscriptions', results?: Array<{ __typename?: 'SwellSubscription', id?: string | null, status?: string | null, datePeriodEnd?: any | null, dateOrderPeriodEnd?: any | null, recurringTotal?: any | null, product?: { __typename?: 'SwellProduct', name?: string | null, images?: Array<{ __typename?: 'SwellProductImage', id?: string | null, caption?: string | null, file?: { __typename?: 'SwellProductImageFile', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null } | null, billingSchedule?: { __typename?: 'SwellSubscriptionBillingSchedule', interval?: string | null, intervalCount?: number | null, trialDays?: number | null } | null, orderSchedule?: { __typename?: 'SwellSubscriptionOrderSchedule', interval?: string | null, intervalCount?: number | null } | null } | null> | null } | null };

export type CancelSubscriptionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type CancelSubscriptionMutation = { __typename?: 'Mutation', updateSubscription?: { __typename?: 'SwellSubscription', canceled?: boolean | null } | null };


export const LoginDocument = `
    mutation login($email: String, $password: String) {
  loginAccount(email: $email, password: $password) {
    __typename
  }
}
    `;
export const LogoutDocument = `
    mutation logout {
  logoutAccount {
    success
  }
}
    `;
export const SignupDocument = `
    mutation signup($email: String, $password: String, $firstName: String, $lastName: String) {
  createAccount(
    input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}
  ) {
    email
  }
}
    `;
export const CheckTokenValidityDocument = `
    query checkTokenValidity {
  session {
    accountId
  }
}
    `;
export const SendResetPasswordMailDocument = `
    mutation sendResetPasswordMail($email: String, $passwordResetUrl: String) {
  sendAccountRecovery(email: $email, passwordResetUrl: $passwordResetUrl) {
    success
  }
}
    `;
export const ResetPasswordDocument = `
    mutation resetPassword($password: String, $passwordResetKey: String) {
  recoverAccount(password: $password, passwordResetKey: $passwordResetKey) {
    success
  }
}
    `;
export const GetAccountDetailsDocument = `
    query getAccountDetails {
  account {
    name
    email
  }
}
    `;
export const AddToCartDocument = `
    mutation addToCart($cartItemInput: SwellCartItemInput) {
  addCartItem(input: $cartItemInput) {
    checkoutId
    checkoutUrl
    grandTotal
    items {
      id
      quantity
      price
      priceTotal
      purchaseOption {
        type
        planId
        planName
        billingSchedule {
          interval
          intervalCount
          trialDays
        }
        orderSchedule {
          interval
          intervalCount
        }
      }
      options {
        id
        name
        value
        valueId
        variant
        price
      }
      discountTotal
      discountEach
      taxes {
        id
        amount
      }
      taxTotal
      productId
      variantId
      product {
        id
        name
        slug
        stockTracking
        stockPurchasable
        stockLevel
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      variant {
        name
        price
        stockLevel
        purchaseOptions {
          standard {
            price
          }
        }
        currency
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
    }
  }
}
    `;
export const UpdateCartItemDocument = `
    mutation updateCartItem($itemId: String, $input: SwellCartItemInput) {
  updateCartItem(itemId: $itemId, input: $input) {
    checkoutUrl
    grandTotal
    items {
      id
      quantity
      price
      priceTotal
      purchaseOption {
        type
        planId
        planName
        billingSchedule {
          interval
          intervalCount
          trialDays
        }
        orderSchedule {
          interval
          intervalCount
        }
      }
      options {
        id
        name
        value
        valueId
        variant
        price
      }
      discountTotal
      discountEach
      taxes {
        id
        amount
      }
      taxTotal
      productId
      variantId
      product {
        id
        name
        slug
        stockTracking
        stockPurchasable
        stockLevel
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      variant {
        name
        price
        stockLevel
        purchaseOptions {
          standard {
            price
          }
        }
        currency
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
    }
  }
}
    `;
export const DeleteCartItemDocument = `
    mutation deleteCartItem($itemId: String) {
  deleteCartItem(itemId: $itemId) {
    checkoutUrl
    grandTotal
    items {
      id
      quantity
      price
      priceTotal
      purchaseOption {
        type
        planId
        planName
        billingSchedule {
          interval
          intervalCount
          trialDays
        }
        orderSchedule {
          interval
          intervalCount
        }
      }
      options {
        id
        name
        value
        valueId
        variant
        price
      }
      discountTotal
      discountEach
      taxes {
        id
        amount
      }
      taxTotal
      productId
      variantId
      product {
        id
        name
        slug
        stockTracking
        stockPurchasable
        stockLevel
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      variant {
        name
        price
        stockLevel
        purchaseOptions {
          standard {
            price
          }
        }
        currency
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
    }
  }
}
    `;
export const GetCartDocument = `
    query getCart {
  cart {
    checkoutUrl
    grandTotal
    items {
      id
      quantity
      price
      priceTotal
      purchaseOption {
        type
        planId
        planName
        billingSchedule {
          interval
          intervalCount
          trialDays
        }
        orderSchedule {
          interval
          intervalCount
        }
      }
      options {
        id
        name
        value
        valueId
        variant
        price
      }
      discountTotal
      discountEach
      taxes {
        id
        amount
      }
      taxTotal
      productId
      variantId
      product {
        id
        name
        slug
        stockTracking
        stockPurchasable
        stockLevel
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      variant {
        name
        price
        stockLevel
        purchaseOptions {
          standard {
            price
          }
        }
        currency
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
    }
  }
}
    `;
export const GetCategoriesDocument = `
    query getCategories {
  categories {
    results {
      name
      slug
      images {
        id
        caption
        file {
          url
          width
          height
        }
      }
      content {
        showProductsPrice
        showProductsDescription
        showFeaturedCategories
        productsPerRow
        enableQuickAdd
        featuredCategories {
          category {
            slug
            name
            description
            images {
              caption
              file {
                url
                width
                height
              }
              id
            }
          }
        }
      }
    }
  }
}
    `;
export const GetCategoryPathsDocument = `
    query getCategoryPaths {
  categories {
    results {
      slug
    }
  }
}
    `;
export const GetCategoryDocument = `
    query getCategory($slug: String) {
  categoryBySlug(slug: $slug) {
    name
    slug
    description
    metaKeywords
    metaDescription
    products {
      id
      name
      description
      slug
      price
      currency
      images {
        caption
        file {
          width
          height
          url
        }
      }
      options {
        id
        attributeId
        name
        inputType
        active
        required
        variant
        values {
          id
          name
          price
          description
        }
      }
      purchaseOptions {
        standard {
          price
          sale
          salePrice
        }
        subscription {
          active
        }
      }
      variants {
        results {
          name
          price
          prices {
            price
            discountPercent
            quantityMin
            quantityMax
            accountGroup
          }
          images {
            id
            caption
            file {
              url
              width
              height
            }
          }
          optionValueIds
          purchaseOptions {
            standard {
              price
              sale
              salePrice
              prices {
                price
                discountPercent
                quantityMin
                quantityMax
                accountGroup
              }
            }
          }
          stockLevel
          currency
        }
      }
    }
  }
}
    `;
export const GetFeaturedCategoryDocument = `
    query getFeaturedCategory($slug: String) {
  categoryBySlug(slug: $slug) {
    name
    description
    slug
    images {
      caption
      file {
        url
        width
        height
      }
    }
  }
}
    `;
export const GetFilteredProductsDocument = `
    query getFilteredProducts($filter: JSON) {
  products(limit: 20, where: $filter) {
    count
    results {
      id
      name
      description
      slug
      price
      currency
      attributes
      categories {
        name
        slug
      }
      images {
        caption
        file {
          width
          height
          url
        }
      }
      categories {
        slug
      }
      options {
        id
        attributeId
        name
        inputType
        active
        required
        variant
        values {
          id
          name
          price
          description
        }
      }
      purchaseOptions {
        standard {
          price
          sale
          salePrice
        }
        subscription {
          active
        }
      }
      variants {
        results {
          name
          price
          prices {
            price
            discountPercent
            quantityMin
            quantityMax
            accountGroup
          }
          images {
            id
            caption
            file {
              url
              width
              height
            }
          }
          optionValueIds
          purchaseOptions {
            standard {
              price
              sale
              salePrice
              prices {
                price
                discountPercent
                quantityMin
                quantityMax
                accountGroup
              }
            }
          }
          stockLevel
          currency
        }
      }
    }
  }
}
    `;
export const GetCategoryInCurrencyDocument = `
    query getCategoryInCurrency($slug: String, $currency: String) {
  categoryBySlug(slug: $slug, _currency: $currency) {
    products {
      id
      price
      currency
    }
  }
}
    `;
export const GetCategorySlugsDocument = `
    query getCategorySlugs {
  categories {
    results {
      slug
    }
  }
}
    `;
export const GetCategoryPreviewDataDocument = `
    query getCategoryPreviewData($slug: String) {
  categoryBySlug(slug: $slug) {
    name
    description
    slug
    images {
      caption
      file {
        url
        width
        height
      }
    }
  }
}
    `;
export const GetCategoryWithProductSlugsDocument = `
    query getCategoryWithProductSlugs($slug: String) {
  categoryBySlug(slug: $slug) {
    slug
    products {
      slug
    }
  }
}
    `;
export const GetContentPagesDocument = `
    query getContentPages {
  contentPages {
    results {
      slug
      published
    }
  }
}
    `;
export const GetOrdersDocument = `
    query getOrders($currency: String) {
  orders(_currency: $currency) {
    results {
      status
      id
      number
      dateCreated
      itemQuantity
      currency
      grandTotal
      subTotal
      items {
        product {
          images {
            id
            caption
            file {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetOrderByIdDocument = `
    query getOrderById($id: String) {
  orderById(id: $id) {
    status
    id
    number
    dateCreated
    itemQuantity
    currency
    grandTotal
    subTotal
    shipmentTotal
    subTotal
    discountTotal
    taxTotal
    items {
      purchaseOption {
        billingSchedule {
          interval
          intervalCount
        }
      }
      product {
        name
        slug
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      quantity
      options {
        value
      }
      priceTotal
    }
    refunds {
      results {
        amount
        currency
      }
    }
    shipping {
      name
      address1
      address2
      city
      state
      country
      zip
      phone
      serviceName
      price
    }
    billing {
      name
      address1
      address2
      city
      state
      country
      zip
      method
      card {
        brand
        last4
        expMonth
        expYear
      }
    }
    comments
  }
}
    `;
export const GetAllProductsDocument = `
    query getAllProducts($currency: String) {
  products(_currency: $currency) {
    count
    results {
      id
      name
      description
      slug
      price
      sale
      salePrice
      origPrice
      currency
      attributes
      categories {
        name
        slug
      }
      images {
        caption
        file {
          width
          height
          url
        }
      }
      options {
        id
        attributeId
        name
        inputType
        active
        required
        variant
        values {
          id
          name
          price
          description
        }
      }
      purchaseOptions {
        standard {
          price
          sale
          salePrice
          origPrice
        }
        subscription {
          active
        }
      }
      variants {
        results {
          name
          price
          origPrice
          prices {
            price
            discountPercent
            quantityMin
            quantityMax
            accountGroup
          }
          images {
            id
            caption
            file {
              url
              width
              height
            }
          }
          optionValueIds
          purchaseOptions {
            standard {
              price
              sale
              salePrice
              origPrice
              prices {
                price
                discountPercent
                quantityMin
                quantityMax
                accountGroup
              }
            }
          }
          stockLevel
          currency
        }
      }
    }
  }
}
    `;
export const GetProductsPricesInCurrencyDocument = `
    query getProductsPricesInCurrency($currency: String) {
  products(limit: 20, _currency: $currency) {
    results {
      id
      price
      sale
      origPrice
      currency
    }
  }
}
    `;
export const GetProductDocument = `
    query getProduct($slug: String, $currency: String, $locale: String) {
  productBySlug(slug: $slug, _currency: $currency, _locale: $locale) {
    slug
    id
    name
    description
    currency
    metaTitle
    metaDescription
    price
    sale
    origPrice
    images {
      id
      caption
      file {
        url
        width
        height
      }
    }
    categories {
      name
      slug
    }
    options {
      id
      attributeId
      name
      description
      inputType
      active
      required
      variant
      parentId
      parentValueIds
      inputHint
      values {
        id
        name
        price
        image {
          id
          file {
            id
            url
            width
            height
            filename
          }
        }
      }
    }
    purchaseOptions {
      standard {
        price
        sale
        salePrice
        origPrice
      }
      subscription {
        plans {
          id
          name
          price
          billingSchedule {
            interval
            intervalCount
            trialDays
          }
          orderSchedule {
            interval
            intervalCount
          }
        }
      }
    }
    upSells {
      product {
        id
        name
        description
        slug
        price
        sale
        origPrice
        currency
        images {
          caption
          file {
            url
            width
            height
          }
        }
        options {
          id
          attributeId
          name
          inputType
          active
          required
          variant
          values {
            id
            name
            price
          }
        }
        purchaseOptions {
          standard {
            price
            sale
            salePrice
            origPrice
          }
          subscription {
            plans {
              id
            }
          }
        }
        variants {
          results {
            name
            price
            origPrice
            prices {
              price
              discountPercent
              quantityMin
              quantityMax
              accountGroup
            }
            images {
              id
              caption
              file {
                url
                width
                height
              }
            }
            optionValueIds
            purchaseOptions {
              standard {
                price
                sale
                salePrice
                origPrice
                prices {
                  price
                  discountPercent
                  quantityMin
                  quantityMax
                  accountGroup
                }
              }
            }
            stockLevel
            currency
          }
        }
      }
    }
    crossSells {
      discountType
      discountAmount
      discountPercent
      product {
        id
        name
        slug
        currency
        price
        origPrice
        sale
        images {
          caption
          file {
            url
            width
            height
          }
        }
      }
    }
    content {
      productHighlights {
        id
        icon
        label
        customIcon {
          url
          width
          height
        }
      }
      expandableDetails {
        id
        details
        label
      }
      layoutOptions
      showStockLevels
      lowStockIndicator
      calloutTitle
      calloutDescription
      enableProductCounter
    }
    stockLevel
    stockStatus
    stockTracking
    stockPurchasable
    variants {
      results {
        name
        price
        origPrice
        prices {
          price
          discountPercent
          quantityMin
          quantityMax
          accountGroup
        }
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
        optionValueIds
        purchaseOptions {
          standard {
            price
            sale
            salePrice
            origPrice
            prices {
              price
              discountPercent
              quantityMin
              quantityMax
              accountGroup
            }
          }
        }
        stockLevel
        currency
      }
    }
  }
}
    `;
export const GetProductPricesInCurrencyDocument = `
    query getProductPricesInCurrency($slug: String, $currency: String) {
  productBySlug(slug: $slug, _currency: $currency) {
    id
    price
    sale
    origPrice
    currency
    options {
      id
      values {
        id
        price
      }
    }
    purchaseOptions {
      standard {
        price
        sale
        salePrice
        origPrice
      }
      subscription {
        plans {
          id
          price
        }
      }
    }
    upSells {
      product {
        id
        price
        sale
        origPrice
        currency
        options {
          id
          attributeId
          name
          inputType
          active
          required
          variant
          values {
            id
            name
            price
          }
        }
        purchaseOptions {
          standard {
            price
            sale
            salePrice
            origPrice
          }
          subscription {
            plans {
              id
            }
          }
        }
        variants {
          results {
            name
            price
            origPrice
            prices {
              price
              discountPercent
              quantityMin
              quantityMax
              accountGroup
            }
            images {
              id
              caption
              file {
                url
                width
                height
              }
            }
            optionValueIds
            purchaseOptions {
              standard {
                price
                sale
                salePrice
                origPrice
                prices {
                  price
                  discountPercent
                  quantityMin
                  quantityMax
                  accountGroup
                }
              }
            }
            stockLevel
            currency
          }
        }
      }
    }
    crossSells {
      product {
        id
        currency
        price
        sale
        origPrice
      }
    }
    variants {
      results {
        price
        origPrice
        currency
        purchaseOptions {
          standard {
            price
            sale
            salePrice
            origPrice
            prices {
              price
            }
          }
        }
      }
    }
  }
}
    `;
export const GetProductSlugsDocument = `
    query getProductSlugs {
  products {
    results {
      slug
    }
  }
}
    `;
export const SearchProductsDocument = `
    query searchProducts($searchTerm: String, $currency: String) {
  products(search: $searchTerm, _currency: $currency) {
    results {
      id
      name
      currency
      description
      slug
      price
      sale
      origPrice
      images {
        caption
        file {
          width
          height
          url
        }
      }
    }
  }
}
    `;
export const GetFilteredSortedProductsDocument = `
    query getFilteredSortedProducts($filter: JSON, $sort: String, $limit: Int = 20) {
  products(where: $filter, sort: $sort, limit: $limit) {
    results {
      slug
    }
  }
}
    `;
export const GetStoreSettingsDocument = `
    query getStoreSettings($locale: String) {
  storeSettings(_locale: $locale) {
    store {
      name
      homePage
      currency
      currencies {
        code
        name
        rate
        symbol
        decimals
        priced
        type
      }
      locale
      locales {
        name
        code
        fallback
      }
    }
    values
  }
}
    `;
export const GetStoreUrlDocument = `
    query getStoreUrl {
  storeSettings {
    store {
      url
    }
  }
}
    `;
export const GetMenusDocument = `
    query getMenus {
  menuSettings {
    sections {
      id
      name
      items
    }
  }
}
    `;
export const GetSubscriptionByIdDocument = `
    query getSubscriptionById($id: String!) {
  subscriptionById(id: $id) {
    id
    status
    dateCreated
    datePeriodEnd
    dateOrderPeriodEnd
    quantity
    trial
    dateTrialEnd
    product {
      name
      slug
      images {
        caption
        file {
          width
          height
          url
        }
      }
    }
    options {
      value
    }
    subTotal
    discountTotal
    taxTotal
    grandTotal
    currency
    shipping {
      name
      address1
      address2
      city
      state
      country
      zip
      phone
      service
      serviceName
      price
    }
    billing {
      name
      address1
      address2
      city
      state
      country
      zip
      method
      card {
        brand
        last4
        expMonth
        expYear
      }
    }
    billingSchedule {
      interval
      intervalCount
      limit
      limitCurrent
    }
    orderSchedule {
      interval
      intervalCount
      limit
      limitCurrent
    }
  }
}
    `;
export const GetSubscriptionsDocument = `
    query getSubscriptions($currency: String) {
  subscriptions(_currency: $currency) {
    results {
      id
      status
      datePeriodEnd
      dateOrderPeriodEnd
      product {
        name
        images {
          id
          caption
          file {
            url
            width
            height
          }
        }
      }
      billingSchedule {
        interval
        intervalCount
        trialDays
      }
      orderSchedule {
        interval
        intervalCount
      }
      recurringTotal
    }
  }
}
    `;
export const CancelSubscriptionDocument = `
    mutation cancelSubscription($id: String) {
  updateSubscription(id: $id, input: {canceled: true}) {
    canceled
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables?: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: LoginMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation');
    },
    logout(variables?: LogoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: LogoutMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LogoutMutation>(LogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'logout', 'mutation');
    },
    signup(variables?: SignupMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: SignupMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SignupMutation>(SignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signup', 'mutation');
    },
    checkTokenValidity(variables?: CheckTokenValidityQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CheckTokenValidityQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CheckTokenValidityQuery>(CheckTokenValidityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'checkTokenValidity', 'query');
    },
    sendResetPasswordMail(variables?: SendResetPasswordMailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: SendResetPasswordMailMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SendResetPasswordMailMutation>(SendResetPasswordMailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendResetPasswordMail', 'mutation');
    },
    resetPassword(variables?: ResetPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: ResetPasswordMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ResetPasswordMutation>(ResetPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resetPassword', 'mutation');
    },
    getAccountDetails(variables?: GetAccountDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetAccountDetailsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAccountDetailsQuery>(GetAccountDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAccountDetails', 'query');
    },
    addToCart(variables?: AddToCartMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: AddToCartMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddToCartMutation>(AddToCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addToCart', 'mutation');
    },
    updateCartItem(variables?: UpdateCartItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UpdateCartItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateCartItemMutation>(UpdateCartItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCartItem', 'mutation');
    },
    deleteCartItem(variables?: DeleteCartItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: DeleteCartItemMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteCartItemMutation>(DeleteCartItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCartItem', 'mutation');
    },
    getCart(variables?: GetCartQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCartQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCartQuery>(GetCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCart', 'query');
    },
    getCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoriesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query');
    },
    getCategoryPaths(variables?: GetCategoryPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoryPathsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoryPathsQuery>(GetCategoryPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPaths', 'query');
    },
    getCategory(variables?: GetCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoryQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoryQuery>(GetCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategory', 'query');
    },
    getFeaturedCategory(variables?: GetFeaturedCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetFeaturedCategoryQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFeaturedCategoryQuery>(GetFeaturedCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFeaturedCategory', 'query');
    },
    getFilteredProducts(variables?: GetFilteredProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetFilteredProductsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFilteredProductsQuery>(GetFilteredProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFilteredProducts', 'query');
    },
    getCategoryInCurrency(variables?: GetCategoryInCurrencyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoryInCurrencyQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoryInCurrencyQuery>(GetCategoryInCurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryInCurrency', 'query');
    },
    getCategorySlugs(variables?: GetCategorySlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategorySlugsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategorySlugsQuery>(GetCategorySlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategorySlugs', 'query');
    },
    getCategoryPreviewData(variables?: GetCategoryPreviewDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoryPreviewDataQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoryPreviewDataQuery>(GetCategoryPreviewDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryPreviewData', 'query');
    },
    getCategoryWithProductSlugs(variables?: GetCategoryWithProductSlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetCategoryWithProductSlugsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetCategoryWithProductSlugsQuery>(GetCategoryWithProductSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryWithProductSlugs', 'query');
    },
    getContentPages(variables?: GetContentPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetContentPagesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetContentPagesQuery>(GetContentPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentPages', 'query');
    },
    getOrders(variables?: GetOrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetOrdersQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetOrdersQuery>(GetOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrders', 'query');
    },
    getOrderById(variables?: GetOrderByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetOrderByIdQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetOrderByIdQuery>(GetOrderByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOrderById', 'query');
    },
    getAllProducts(variables?: GetAllProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetAllProductsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAllProductsQuery>(GetAllProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllProducts', 'query');
    },
    getProductsPricesInCurrency(variables?: GetProductsPricesInCurrencyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetProductsPricesInCurrencyQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetProductsPricesInCurrencyQuery>(GetProductsPricesInCurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductsPricesInCurrency', 'query');
    },
    getProduct(variables?: GetProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetProductQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetProductQuery>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProduct', 'query');
    },
    getProductPricesInCurrency(variables?: GetProductPricesInCurrencyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetProductPricesInCurrencyQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetProductPricesInCurrencyQuery>(GetProductPricesInCurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductPricesInCurrency', 'query');
    },
    getProductSlugs(variables?: GetProductSlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetProductSlugsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetProductSlugsQuery>(GetProductSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductSlugs', 'query');
    },
    searchProducts(variables?: SearchProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: SearchProductsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SearchProductsQuery>(SearchProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchProducts', 'query');
    },
    getFilteredSortedProducts(variables?: GetFilteredSortedProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetFilteredSortedProductsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFilteredSortedProductsQuery>(GetFilteredSortedProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFilteredSortedProducts', 'query');
    },
    getStoreSettings(variables?: GetStoreSettingsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetStoreSettingsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetStoreSettingsQuery>(GetStoreSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStoreSettings', 'query');
    },
    getStoreUrl(variables?: GetStoreUrlQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetStoreUrlQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetStoreUrlQuery>(GetStoreUrlDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStoreUrl', 'query');
    },
    getMenus(variables?: GetMenusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetMenusQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetMenusQuery>(GetMenusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMenus', 'query');
    },
    getSubscriptionById(variables: GetSubscriptionByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetSubscriptionByIdQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetSubscriptionByIdQuery>(GetSubscriptionByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptionById', 'query');
    },
    getSubscriptions(variables?: GetSubscriptionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetSubscriptionsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetSubscriptionsQuery>(GetSubscriptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSubscriptions', 'query');
    },
    cancelSubscription(variables?: CancelSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CancelSubscriptionMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CancelSubscriptionMutation>(CancelSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelSubscription', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;