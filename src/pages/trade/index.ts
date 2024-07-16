import { createRouteView } from "atomic-router-react";

import { PageLoader } from "@/shared/ui";
import LoadingScreen from "@/shared/ui/Loading/ui";

import { currentRoute } from "./model";
import { Page } from "./page";

export const TradeRoute = {
  view: Page,
  route: currentRoute,
  otherwise: LoadingScreen,
};
