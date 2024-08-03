import { chainRoute } from "atomic-router";
import { createStore, sample } from "effector";

import { getDepostFx } from "@/shared/api/deposit/request";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { getTransfer, requestTransfer } from "@/shared/api/transfer/requests";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";

export const currentRoute = routes.transfer;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.transfer.open,
});

export const $transferResponse = createStore({});
$transferResponse.on(getTransfer.doneData, (_: any, data: ResponseDto) => data.message);

const $transferError = createStore<ResponseDto>({ message: "" });
$transferError.on(requestTransfer.failData, (_, error) => error).reset(requestTransfer);

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
    effect: getTransfer,
    mapParams: (params) => params,
  },
});

sample({
  clock: requestTransfer.failData,
  source: $transferError,
  fn: (error) => error.message,
  target: showErrorNotification,
});

sample({
  clock: requestTransfer.doneData,
  fn: () => "Success",
  target: showSuccessNotification,
});

sample({
  clock: requestTransfer.doneData,
  target: getDepostFx,
});
