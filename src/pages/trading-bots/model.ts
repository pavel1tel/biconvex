import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.tradingBots;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.trade.open,
});
