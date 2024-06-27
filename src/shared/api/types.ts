/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-11-22 13:19:37.

export interface ResponseDto {
  message: string;
}

export interface CandlesRequest {
  interval: string;
  pair: string
}

export interface Transaction {
  symbol: string;
  image: string;
  amount: string;
  address: string | null;
  name: string;
  id: number;
  time: string;
  type: string;
  hash: string;
  status: number;
}

export interface TransactionsResponse {
  transactions?: Transaction[]
}


export interface DepositCoin {
  symbol: string;
  image: string;
  address: {
    [key: string]: string;
  };
  balance: string;
  name: string;
  min_deposit_amount: string;
}

export interface DepositCoinsResponse {
  deposit_coins?: DepositCoin[];
}

export interface WithdrawCoin {
  symbol: string;
  name: string;
  image: string;
  address_types: string;
  gas_fee: number;
}

export interface FeesRequest {
  withdraw_coins?: {
    [key: string]: WithdrawCoin;
  }
  coins_balances?: {
    [key: string]: number;
  }
}

export interface TransferResponse {
  coins_balances?: {
    [key: string]: number;
  }
}
interface Coin {
  symbol: string;
  name: string;
  image: string;
}

export interface WithdrawRequest {
  amount: string;
  crypto: string;
  address: string;
}

export interface UpdateAccountRequest {
  username: string;
  phone: string;
  fullname: string;
}

export interface UpdatePasswordRequest {
  old_password: string;
  new_password: string;
}

export interface UpdatePersonalInfoRequest {
  date_birth: string;
  present_address: string;
  permanent_address: string;
  user_city: string;
  user_postal_code: string;
  user_country: string;
}

export interface SettingsReponse {
  name?: string;
  phone_number?: string;
  username?: string;
  birthDate?: string;
  city?: string;
  permanentAddress?: string;
  postalCode?: string;
  presentAddress?: string;
  country?: string;
}

export interface TransferRequest {
  amount: string;
  crypto: string;
  to: string;
}

interface InvestCoins {
  [key: string]: Coin;
}

interface PlanDetails {
  DAYS_10: number;
  DAYS_30: number;
  DAYS_60: number;
  DAYS_90: number;
  DAYS_180: number;
  DAYS_365: number;
}

interface Plans {
  [key: string]: PlanDetails;
}

export interface Course {
  [key: string]: number;
}

export interface InvestResponse {
  invest_coins?: InvestCoins;
  plans_percents?: Plans;
  total_balance?: string
  courses?: [
    Course
  ]
}

export interface ProfileReponse {
  pnl?: number[];
  total_balance?: string;
  username?: string;
  email?: string;
  id?: number;
  premium?: boolean;
  kyc_accepted?: boolean;
  twoFactorEnabled?: boolean;
  btc_price?: number;
  btc_balance?: number;
  eth_price?: number;
  eth_balance?: number;
  usdt_price?: number;
  usdt_balance?: number;
  coins?: Crypto[];
  avatar?: string;
  panel?: string;
}

export interface Crypto {
  symbol: string;
  image: string;
  balance: number;
  price: number;
  name: string;
}

export interface InvestmentHistory {
  image: string;
  symbol: string;
  name: string;
  expires: string;
  plan: string;
  profit: string;
  invested: string;
}

export interface StakingHistoryResponse {
  history?: {
    [key: string]: InvestmentHistory;
  };
}

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface RegistrationRequestDto {
  email: string;
  password: string;
  username: string;
  re_password: string;
}

export interface StakeRequestDto {
  invest_amount: string;
  invest_plan: string;
  invest_coin: string;
}

export interface ConfrimRegRequerstDto {
  userId: string;
  code: string;
}

export interface NewPasswordRequestDto {
  userId: string;
  code: string;
  newPassword: string;
  rePassword: string;
}

export interface UserDto {
  id: number;
  login: string;
  role: RoleType;
  filled: boolean;
  enabled: boolean;
  lastName: string;
  firstName: string;
  avatarUrl?: string | null;
  passwordHash: string;
  createdBy: string;
  createdAt: DateAsNumber;
  updatedBy: string;
  updatedAt: DateAsNumber;
}

export type DateAsNumber = number;

export enum RoleType {
  USER = "USER",
  ADMIN = "ADMIN",
}
