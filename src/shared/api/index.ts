import { createEffect } from "effector";

import { ConfrimRegRequerstDto, Login2FARequestDto, LoginRequestDto, LoginResponseDto, NewPasswordRequestDto, RegistrationRequestDto, ResponseDto, UserDto } from "@/shared/api/types";

import { requestFx, requestLogin, requestRegistration } from "./request";

export const logoutFx = createEffect<void, void, void>(async () => {
  return requestFx({
    path: '/auth/logout',
    method: 'PUT',
  });
});

export const loginUser = createEffect<LoginRequestDto, LoginResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'LOGIN');
  data.append('email', request.email);
  data.append('password', request.password);

  return requestLogin({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const loginUser2FA = createEffect<Login2FARequestDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'LOGIN_2FA');
  data.append('code_2fa', request.code_2fa);
  data.append('user_id', request.user_id);

  return requestRegistration({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const registerUser = createEffect<RegistrationRequestDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'REGISTER_FOR_VERIFICATION');
  data.append('email', request.email);
  data.append('password', request.password);
  data.append('re_password', request.re_password);
  data.append('username', request.username);
  data.append('ref_id', "-1");
  data.append('promo', "-1");
  data.append('browser_name', "Chrome");
  data.append('os_name', "Linux");

  return requestRegistration({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const confirmCode = createEffect<ConfrimRegRequerstDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'CONFIRM_EMAIL');
  data.append('userId', request.userId);
  data.append('code', request.code);

  return requestRegistration({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const checkCode = createEffect<ConfrimRegRequerstDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'CHECK_CODE');
  data.append('userId', request.userId);
  data.append('code', request.code);

  return requestFx({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const requestNewPassword = createEffect<NewPasswordRequestDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'NEW_PASSWORD');
  data.append('userId', request.userId);
  data.append('code', request.code);
  data.append('newPassword', request.newPassword);
  data.append('rePassword', request.rePassword);

  return requestFx({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const resetPassSendCode = createEffect<string, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append('action', 'PASSWORD_CODE');
  data.append('email', request);

  return requestRegistration({
    path: '/sign',
    method: 'POST',
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});
export const sessionGetFx = createEffect<void, UserDto, ResponseDto>(async () => {
  return requestFx({
    path: '/user',
    method: 'GET',
  });
});

export const refreshTokenFx = createEffect<void, void, ResponseDto>(async () => {
  return requestFx({
    path: '/user/token/refresh',
    method: 'PUT',
  });
});
