import { createEffect } from "effector";

import { ResponseDto, UserDto } from "@/shared/api/types";

import { requestFx } from "./request";

export const logoutFx = createEffect<void, void, void>(async () => {
  return requestFx({
    path: "/auth/logout",
    method: "PUT",
  });
});

export const sessionGetFx = createEffect<void, UserDto, ResponseDto>(async () => {
  return requestFx({
    path: "/user",
    method: "GET",
  });
});

export const refreshTokenFx = createEffect<void, void, ResponseDto>(async () => {
  return requestFx({
    path: "/user/token/refresh",
    method: "PUT",
  });
});
