import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.signUp;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});
