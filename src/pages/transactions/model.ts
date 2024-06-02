import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.transactions;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.transactions.open,
});
