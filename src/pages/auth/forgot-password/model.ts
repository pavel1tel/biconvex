import { createStore, sample } from "effector";

import { resetPassSendCode } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

import { $response } from "../sign-up/model";

export const currentRoute = routes.auth.forgotPassword;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

$response.on(resetPassSendCode.doneData, (_, response) => response.message).reset(resetPassSendCode);

const $error = createStore<ResponseDto>({ message: "" });
$error.on(resetPassSendCode.failData, (_, error) => error).reset(resetPassSendCode);

sample({
  clock: resetPassSendCode.doneData,
  target: routes.auth.forgotPasswordCode.open,
});

sample({
  clock: resetPassSendCode.failData,
  source: $error,
  fn: (error) => error.message,
  target: showErrorNotification,
});
