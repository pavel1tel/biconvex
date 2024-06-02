import { createEvent, sample } from "effector";

import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.forgotPasswordCode;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

export const resetPasswordCodeClicked = createEvent();

sample({
  clock: resetPasswordCodeClicked,
  target: routes.auth.enterNewPassword.open,
});
