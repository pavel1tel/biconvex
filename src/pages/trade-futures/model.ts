import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.tradeFutures;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.tradeFutures.open,
});
