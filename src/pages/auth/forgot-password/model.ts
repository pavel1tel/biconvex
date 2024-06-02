import { createEvent, sample } from "effector";

import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.forgotPassword;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

export const resetPasswordClicked = createEvent();

sample({
  clock: resetPasswordClicked,
  target: routes.auth.forgotPasswordCode.open,
});
