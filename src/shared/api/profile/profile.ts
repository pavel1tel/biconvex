import { createEffect } from "effector";

import { requestFx, requestRegistration } from "../request";

export const getStakingHistoryFx = createEffect<void, any, void>(async () => {

  return requestRegistration({
    path: "/api/wallet",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
});

export const activatePromo = createEffect<string, any, void>(async (code) => {
  const data = new URLSearchParams();
  data.append('action', 'ACTIVATE_PROMOCODE');
  data.append('promo_code', code);

  return requestRegistration({
    path: "/profile",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body : data
  });
});