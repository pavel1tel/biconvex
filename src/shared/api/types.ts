/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-11-22 13:19:37.

export interface ResponseDto {
  message: string;
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
