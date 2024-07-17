import { chainRoute } from "atomic-router";
import { createStore } from "effector";

import { checkDep, getDepostFx } from "@/shared/api/deposit/request";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ResponseDto } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";

export const currentRoute = routes.deposit;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.deposit.open,
});

export const $depositResponse = createStore({});
$depositResponse.on(getDepostFx.doneData, (_: any, data: ResponseDto) => data.message);

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
    effect: checkDep,
    mapParams: (params) => params,
  },
});
