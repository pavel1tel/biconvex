import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { cancelOrder, createOrder, getCandles, getCoinInfo, getCoinPrice, getOrderBook, getRates, getTrades, requestHistoryOrders, requestOpenOrders, requestTrading } from "@/shared/api/trading/requests";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createEvent, createStore, sample } from "effector";

export const currentRoute = routes.trade;

export const anonymousRoute = chainAuthenticated(currentRoute);

export const navv = createEvent<any>();

export const $candlesReponse = createStore<any>({});
$candlesReponse.on(getCandles.doneData, (_, data) => data.message);

export const $orderBookResponse = createStore<any>({});
$orderBookResponse.on(getOrderBook.doneData, (_, data) => data.message);

export const $ratesResponse = createStore<any>({});
$ratesResponse.on(getRates.doneData, (_, data) => data.message);

export const $coinInfoResponse = createStore<any>({});
$coinInfoResponse.on(getCoinInfo.doneData, (_, data) => data.message);

export const $coinPrice = createStore<any>({});
$coinPrice.on(getCoinPrice.doneData, (_, data) => data.message);

export const $tradingReponse = createStore<any>({});
$tradingReponse.on(requestTrading.doneData, (_, data) => data.message);

export const $tradesResponse = createStore<any>({});
$tradesResponse.on(getTrades.doneData, (_, data) => data.message);

export const $openOrdersResponse = createStore<any>({});
$openOrdersResponse.on(requestOpenOrders.doneData, (_, data) => data.message);

export const $historyOrdersResponse = createStore<any>({});
$historyOrdersResponse.on(requestHistoryOrders.doneData, (_, data) => data.message);

$tradingReponse.watch((i) => console.log(i["items"] ? i["items"]["BTC"] : 0))

const $createOrderError = createStore<ResponseDto>({ message: "" });
$createOrderError.on(createOrder.failData, (_, error) => error);

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
    effect: requestTrading,
    mapParams: (params) => "",
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
    effect: getTrades,
    mapParams: (params) => "btcusdt",
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getRates,
    mapParams: (params) => "1m",
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: requestOpenOrders,
    mapParams: (params) => "1m",
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: requestHistoryOrders,
    mapParams: (params) => "1m",
  },
});


sample({
  clock: createOrder.doneData,
  target: requestOpenOrders
})

sample({
  clock: cancelOrder.doneData,
  target: requestOpenOrders
})

sample({
  clock: navv,
  fn: (pair) => ({
    params: { pairId: pair },
    query: {},
    replace: true
  }),
  target: routes.trade.navigate,
})

sample({
  clock: createOrder.failData,
  source: $createOrderError,
  fn: (error) => error.message,
  target: showErrorNotification,
});