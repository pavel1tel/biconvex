import { checkDep } from "@/shared/api/deposit/request";
import { activatePromo, getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore, sample } from "effector";

export const currentRoute = routes.myProfile;
export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.myProfile.open,
});

export const $profileReponse = createStore({});
$profileReponse.on(getStakingHistoryFx.doneData, (_: any, data: ResponseDto) => data.message);

export const $promoResponse = createStore("");
$promoResponse.on(activatePromo.doneData, (_, data) => data.message);

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
    effect: checkDep,
    mapParams: (params) => params,
  },
});

sample({
  clock : activatePromo.doneData,
  source : $promoResponse,
  fn : (data) => data,
  target : showSuccessNotification
})

sample({
  clock : activatePromo.doneData,
  target : getStakingHistoryFx
})

sample({
  clock : activatePromo.failData,
  fn : () => "Failed to activate promo",
  target : showErrorNotification
})

