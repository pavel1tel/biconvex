import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.finance;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.finance.open,
});
