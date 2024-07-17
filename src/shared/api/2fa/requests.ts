import { createEffect } from "effector";

import { requestRegistration } from "../request";

export const enable2Fa = createEffect<string, any, void>(async (code) => {
  const data = new URLSearchParams();
  data.append("action", "CONNECT_GOOGLE_2FA");
  data.append("code_2fa", code);

  return requestRegistration({
    path: "/api/edit_settings",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
});
