import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";

export const currentRoute = routes.myProfile;
export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.myProfile.open,
});
