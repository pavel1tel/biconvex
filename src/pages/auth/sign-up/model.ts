import { redirect } from "atomic-router";
import { createStore, sample } from "effector";
import { persist } from "effector-storage/local";

import { confirmCode, registerUser } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

import { $token } from "../sign-in/model";

export const currentRoute = routes.auth.signUp;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

export const $response = createStore<string>("");
$response.on(registerUser.doneData, (_, response) => response.message).reset(registerUser);

const $error = createStore<ResponseDto>({ message: "" });
$error.on(confirmCode.failData, (_, error) => error).reset(confirmCode);

const $registerError = createStore<ResponseDto>({ message: "" });
$registerError.on(registerUser.failData, (_, error) => error).reset(registerUser);

redirect({
  clock: confirmCode.doneData,
  route: routes.myProfile,
});

$token.on(confirmCode.doneData, (_, token) => token.message).reset(confirmCode);

sample({
  clock: confirmCode.failData,
  source: $error,
  fn: (error) => error.message,
  target: showErrorNotification,
});

sample({
  clock: registerUser.failData,
  source: $registerError,
  fn: (error) => error.message,
  target: showErrorNotification,
});

persist({
  store: $response,
  key: "userId",
  serialize(value) {
    return value;
  },
  deserialize(value) {
    return value;
  },
});

// function getCookie(key: string) {
//   var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
//   return b ? b.pop() : "";
// }
