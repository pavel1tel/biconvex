import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";

export const currentRoute = routes.finance;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.finance.open,
});
