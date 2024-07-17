import { createRouteView } from "atomic-router-react";

import { PageLoader } from "@/shared/ui";

import { anonymousRoute, currentRoute } from "../../../shared/session/signIn/model";
import { Page } from "./page";

export const SignInByEmailRoute = {
  view: createRouteView({ route: anonymousRoute, view: Page, otherwise: PageLoader }),
  route: currentRoute,
};
