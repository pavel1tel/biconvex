import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.deposit;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.deposit.open,
});
