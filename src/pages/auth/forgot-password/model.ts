import { createEvent, createStore, sample } from "effector";

import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";
import { resetPassSendCode } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { $response } from "../sign-up/model";
import { showErrorNotification } from "@/shared/lib/notification";

export const currentRoute = routes.auth.forgotPassword;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

$response.on(resetPassSendCode.doneData, (_, response) => response.message).reset(resetPassSendCode);

const $error = createStore<ResponseDto>({message : ""});
$error.on(resetPassSendCode.failData, (_, error) => error).reset(resetPassSendCode);


sample({
  clock: resetPassSendCode.doneData,
  target: routes.auth.forgotPasswordCode.open
});

sample({
  clock: resetPassSendCode.failData,
  source : $error,
  fn : (error) => error.message,
  target: showErrorNotification
})