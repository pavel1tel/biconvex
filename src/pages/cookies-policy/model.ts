import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.cookiesPolicy;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.auth.signInByEmail.open,
});
