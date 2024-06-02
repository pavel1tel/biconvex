import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.p2p;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.p2p.open,
});
