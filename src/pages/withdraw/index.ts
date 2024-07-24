
import { PageLoader } from "@/shared/ui";

import { currentRoute } from "./model";
import { Page } from "./page";

export const WithdrawRoute = {
  view: Page,
  route: currentRoute,
  otherwise: PageLoader,
};
