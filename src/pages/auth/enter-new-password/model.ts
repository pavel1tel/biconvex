import { createEvent, sample } from "effector";

import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.enterNewPassword;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

export const confirmClicked = createEvent();

sample({
  clock: confirmClicked,
  target: routes.auth.forgotPassword.open
});
