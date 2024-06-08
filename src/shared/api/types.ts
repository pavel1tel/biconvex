/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-11-22 13:19:37.

export interface ResponseDto {
  message: string;
}

interface Coin {
  symbol: string;
  name: string;
  image: string;
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
  total_balance? : string
  courses? : [
    Course
  ]
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
  username :string;
  re_password: string;
}

export interface StakeRequestDto {
  invest_amount: string;
  invest_plan: string;
  invest_coin :string;
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
