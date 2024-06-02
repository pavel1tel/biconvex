import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.settings;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.settings.open,
});
