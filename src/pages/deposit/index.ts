
import { LoadingScreen } from "@/shared/ui";

import { currentRoute } from "./model";
import { Page } from "./page";

export const DepositRoute = {
  view: Page,
  route: currentRoute,
  otherwise: LoadingScreen,
};

