// @ts-nocheck
// import { CosmosIcon } from "@/shared/ui";
import { redirect } from "atomic-router";
import { createStore, sample } from "effector";
import { persist } from "effector-storage/local";

import { loginUser, loginUser2FA } from "@/shared/api";
import { LoginResponseDto, ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
// import { AuthStatus } from "@/shared/lib/types";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.signInByEmail;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

const $error = createStore<LoginResponseDto>({ message: "", fa2: false });
$error.on(loginUser.failData, (_, error) => { return { message: error.message, fa2: error.fa2 } }).reset(loginUser);
loginUser.failData.watch(e => console.log(e.message))
export const $token = createStore<string>("");
$token.on(loginUser.doneData, (_, token) => {
  return token.message;
}).reset(loginUser);

$token.on(loginUser2FA.doneData, (_, token) => {
  return token.message;
}).reset(loginUser);

const $error2Fa = createStore<ResponseDto>({ message: "" });
$error2Fa.on(loginUser2FA.failData, (_, error) => { return { message: error.message } }).reset(loginUser);


persist({
  store: $token,
  key: "token",
  serialize(value) {
    return value;
  },
  deserialize(value) {
    return value;
  },
});

redirect({
  clock: loginUser.doneData,
  route: routes.myProfile,
});

redirect({
  clock: loginUser2FA.doneData,
  route: routes.myProfile,
});

sample({
  clock: loginUser.failData,
  source: $error,
  filter: (error) => !error.fa2,
  fn: (error) => error.message,
  target: showErrorNotification
})

sample({
  clock: loginUser2FA.failData,
  source: $error2Fa,
  fn: (error) => error.message,
  target: showErrorNotification
})

function setCookie(name: string, value: string, days: number) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; Secure; SameSite=None; Domain=20.79.188.227";
}
