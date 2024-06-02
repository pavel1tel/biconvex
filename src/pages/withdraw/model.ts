import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.withdraw;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.withdraw.open,
});
