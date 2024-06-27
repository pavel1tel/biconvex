import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { getCandles, getOrderBook, getRates } from "@/shared/api/trading/requests";
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

export const $ratesResponse = createStore<any>({});
$ratesResponse.on(getRates.doneData, (_, data) => data.message);

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getCandles,
    mapParams: (params) => ({ interval: "1m", pair: "BTCUSDT" }),
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getStakingHistoryFx,
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

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getRates,
    mapParams: (params) => "1m",
  },
});