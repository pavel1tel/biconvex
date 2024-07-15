import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.kyc;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.kyc.open,
});
