import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.live;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.live.open,
});
