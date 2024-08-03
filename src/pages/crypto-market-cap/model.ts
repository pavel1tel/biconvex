import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.cryptoMarketCap;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});
