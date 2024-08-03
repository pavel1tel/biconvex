import { createStore, sample } from "effector";

import { checkCode } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.forgotPasswordCode;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

const $error = createStore<ResponseDto>({ message: "" });
$error.on(checkCode.failData, (_, error) => error).reset(checkCode);

sample({
  clock: checkCode.doneData,
  target: routes.auth.enterNewPassword.open,
});

sample({
  clock: checkCode.failData,
  source: $error,
  fn: (error) => error.message,
  target: showErrorNotification,
});
