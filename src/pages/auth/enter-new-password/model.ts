import { createEvent, createStore, sample } from "effector";

import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";
import { requestNewPassword } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";

export const currentRoute = routes.auth.enterNewPassword;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

const $error = createStore<ResponseDto>({message : ""});
$error.on(requestNewPassword.failData, (_, error) => error).reset(requestNewPassword);


sample({
  clock: requestNewPassword.doneData,
  target: routes.auth.signInByEmail.open
});

sample({
  clock: requestNewPassword.doneData,
  fn: () => localStorage.removeItem("code")
});

sample({
  clock: requestNewPassword.failData,
  source : $error,
  fn : (error) => error.message,
  target: showErrorNotification
})