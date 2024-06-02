import { createEvent, sample } from "effector";

import { routes } from "@/shared/routing";

export const currentRoute = routes.notFound;

export const redirectToHomeClicked = createEvent();

sample({
  clock: redirectToHomeClicked,
  target: routes.home.open,
});
