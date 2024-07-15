import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.technicalAnalysis;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.technicalAnalysis.open,
});
