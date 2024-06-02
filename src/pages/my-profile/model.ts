import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.myProfile;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.myProfile.open,
});
