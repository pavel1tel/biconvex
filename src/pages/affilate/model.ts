import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { getRef } from "@/shared/api/ref/requests";
import { ResponseDto } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore } from "effector";

export const currentRoute = routes.affiliate;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.affiliate.open,
});

export const $refResponse = createStore({});
$refResponse.on(getRef.doneData, (_: any, data: ResponseDto) => data.message);

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
    effect: getRef,
    mapParams: (params) => params,
  },
});