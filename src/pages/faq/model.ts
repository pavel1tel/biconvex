import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.faq;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.faq.open,
});
