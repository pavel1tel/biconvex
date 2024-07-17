import { chainRoute } from "atomic-router";
import { createStore, sample } from "effector";

import { getDepostFx } from "@/shared/api/deposit/request";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ResponseDto } from "@/shared/api/types";
import { getFees, requestWithdraw } from "@/shared/api/withdraw/requests";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";

export const currentRoute = routes.withdraw;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.withdraw.open,
});

export const $feesResponse = createStore({});
$feesResponse.on(getFees.doneData, (_: any, data: ResponseDto) => data.message);

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getStakingHistoryFx,
    mapParams: (params) => params,
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getDepostFx,
    mapParams: (params) => params,
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getFees,
    mapParams: (params) => params,
  },
});

sample({
  clock: requestWithdraw.doneData,
  fn: () => "Withdraw request created",
  target: showSuccessNotification,
});

sample({
  clock: requestWithdraw.failData,
  fn: () => "Error! Please contact administrator",
  target: showErrorNotification,
});

sample({
  clock: requestWithdraw.doneData,
  target: getDepostFx,
});
