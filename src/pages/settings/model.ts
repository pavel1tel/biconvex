import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { requestSettings, updateAccount, updatePassword, updatePersonalInfo } from "@/shared/api/settings/requests";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore, sample } from "effector";

export const currentRoute = routes.settings;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.settings.open,
});

const $updateAccountError = createStore<ResponseDto>({ message: "" });
$updateAccountError.on(updateAccount.failData, (_, error) => error);

const $updatePersonalInfoError = createStore<ResponseDto>({ message: "" });
$updatePersonalInfoError.on(updatePersonalInfo.failData, (_, error) => error);

const $updatePasswordError = createStore<ResponseDto>({ message: "" });
$updatePasswordError.on(updatePassword.failData, (_, error) => error);

export const $settingsResponse = createStore<any>({});
$settingsResponse.on(requestSettings.doneData, (_, error) => error.message);

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
    effect: requestSettings,
    mapParams: (params) => params,
  },
});

sample({
  clock: updateAccount.failData,
  source: $updateAccountError,
  fn: (error) => error.message,
  target: showErrorNotification,
});

sample({
  clock: updateAccount.doneData,
  target: getStakingHistoryFx,
});

sample({
  clock: updateAccount.doneData,
  fn: () => "",
  target: showSuccessNotification,
});

sample({
  clock: updatePersonalInfo.failData,
  source: $updatePersonalInfoError,
  fn: (error) => error.message,
  target: showErrorNotification,
});


sample({
  clock: updatePersonalInfo.doneData,
  fn: () => "",
  target: showSuccessNotification,
});

sample({
  clock: updatePassword.failData,
  source: $updatePasswordError,
  fn: (error) => error.message,
  target: showErrorNotification,
});


sample({
  clock: updatePassword.doneData,
  fn: () => "",
  target: showSuccessNotification,
});