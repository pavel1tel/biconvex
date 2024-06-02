import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.transfer;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.transfer.open,
});
