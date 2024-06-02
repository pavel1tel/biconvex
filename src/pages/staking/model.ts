import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.staking;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.staking.open,
});
