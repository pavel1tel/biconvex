import { createRouteView } from "atomic-router-react";

import { PageLoader } from "@/shared/ui";

import { currentRoute } from "./model";
import { Page } from "./page";

export const AboutUsRoute = {
  view: createRouteView({ route: currentRoute, view: Page, otherwise: PageLoader }),
  route: currentRoute,
};
