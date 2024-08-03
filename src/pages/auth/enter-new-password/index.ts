import { createRouteView } from "atomic-router-react";

import { PageLoader } from "@/shared/ui";

import { anonymousRoute, currentRoute } from "./model";
import { Page } from "./page";

export const EnterNewPasswordRoute = {
  view: createRouteView({ route: anonymousRoute, view: Page, otherwise: PageLoader }),
  route: currentRoute,
};
