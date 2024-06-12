import { uploadAvatar } from "@/shared/api/profile/profile";
import { createStakeRequest, createUnstakeRequest, getStakingHistory, requestBalance, requestStaking } from "@/shared/api/staking/request";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createEvent, createStore, sample } from "effector";

export const currentRoute = routes.staking;
export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.staking.open,
});


export const $investReponse = createStore({});
const $currentCoin = createStore("BTC");
export const changeCoin = createEvent<string>();
$currentCoin.on(changeCoin, (_, coin) => coin);
$investReponse.on(requestStaking.doneData, (_: any, data: ResponseDto) => data.message);
export const $historyResponse = createStore({});
$historyResponse.on(getStakingHistory.doneData, (_: any, data: ResponseDto) => data.message);
export const $balanceResponse = createStore("");
$balanceResponse.on(requestBalance.doneData, (_, data) => data.message);

sample({
  clock: createStakeRequest.doneData,
  source: $currentCoin,
  fn: (coin) => coin,
  target: requestBalance
})

sample({
  clock: createUnstakeRequest.doneData,
  source: $currentCoin,
  fn: (coin) => coin,
  target: requestBalance
})

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: requestStaking,
    mapParams: (params) => params,
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getStakingHistory,
    mapParams: (params) => params,
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: requestBalance,
    mapParams: (params) => "BTC",
  },
});

sample({
  clock: createStakeRequest.doneData,
  fn: () => "Investment created",
  target: showSuccessNotification
})

sample({
  clock: createUnstakeRequest.doneData,
  fn: () => "Done",
  target: showSuccessNotification
})

sample({
  clock: createUnstakeRequest.fail,
  fn: () => "Fail",
  target: showErrorNotification
})

sample({
  clock: createStakeRequest.failData,
  fn: () => "Failed to create investement",
  target: showErrorNotification
})

sample({
  clock: createStakeRequest.doneData,
  target: getStakingHistory
})

sample({
  clock: createUnstakeRequest.doneData,
  target: getStakingHistory
})

sample({
  clock: uploadAvatar.doneData,
  target: getStakingHistory
})

sample({
  clock: uploadAvatar.failData,
  fn: () => "Failed to upload new avatar",
  target: showErrorNotification
})

sample({
  clock: uploadAvatar.doneData,
  fn: () => "New avatar uploaded",
  target: showSuccessNotification
})