import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.buyCrypto;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});
