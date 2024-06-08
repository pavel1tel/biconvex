import { loginUser } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { AuthStatus } from "@/shared/lib/types";
import { routes } from "@/shared/routing";
import { $authenticationStatus, chainAnonymous, chainAuthenticated } from "@/shared/session";
import { CosmosIcon } from "@/shared/ui";
import { redirect } from "atomic-router";
import { createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";

export const currentRoute = routes.auth.signInByEmail;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

const $error = createStore<ResponseDto>({message : ""});
$error.on(loginUser.failData, (_, error) => error).reset(loginUser);

export const $token = createStore<string>("");
$token.on(loginUser.doneData, (_, token) => {
  setCookie("session_id", token.message, 999)
  return token.message;
}).reset(loginUser);


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
  clock : loginUser.doneData,
  route : routes.myProfile
})

sample({
  clock: loginUser.failData,
  source : $error,
  fn : (error) => error.message,
  target: showErrorNotification
})

function setCookie(name: string,value: string,days: number) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}