import { getDepostFx } from "@/shared/api/deposit/request";
import { getKycInfo, uploadKyc } from "@/shared/api/kyc/requests";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore, sample } from "effector";

export const currentRoute = routes.kyc;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.kyc.open,
});

export const $kycResponse = createStore({});
$kycResponse.on(getKycInfo.doneData, (_: any, data: ResponseDto) => data.message);

const $uploadKycError = createStore<ResponseDto>({ message: "" });
$uploadKycError.on(uploadKyc.failData, (_, error) => error);

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
    effect: getKycInfo,
    mapParams: (params) => params,
  },
});

sample({
  clock: uploadKyc.failData,
  source: $uploadKycError,
  fn: (error) => error.message,
  target: showErrorNotification,
});

sample({
  clock: uploadKyc.doneData,
  target: getKycInfo,
});