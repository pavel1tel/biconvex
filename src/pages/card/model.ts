import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.card;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.card.open,
});
