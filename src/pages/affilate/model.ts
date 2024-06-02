import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.affiliate;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.affiliate.open,
});
