import { createEffect } from "effector";

import { requestRegistration } from "../request";

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
    body: data
  });
});

export const uploadAvatar = createEffect<File, any, void>(async (file) => {
  const form = new FormData();

  form.append('profile_photo', file, file.name);
  form.append('action', 'UPDATE_AVATAR');

  return requestRegistration({
    path: "/api/edit_settings",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form
  });
});