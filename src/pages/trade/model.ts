import { getCandles, getOrderBook } from "@/shared/api/trading/requests";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore } from "effector";

export const currentRoute = routes.trade;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.trade.open,
});

export const $candlesReponse = createStore<any>({});
$candlesReponse.on(getCandles.doneData, (_, data) => data.message);

export const $orderBookResponse = createStore<any>({});
$orderBookResponse.on(getOrderBook.doneData, (_, data) => data.message);

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getCandles,
    mapParams: (params) => "1m",
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getOrderBook,
    mapParams: (params) => "1m",
  },
});