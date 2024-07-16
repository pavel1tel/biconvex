import { createEffect } from "effector";

import { requestRegistration } from "../request";

export const getDepostFx = createEffect<void, any, void>(async () => {
  return requestRegistration({
    path: "/api/deposit",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
});

export const checkDep = createEffect<void, any, void>(async () => {
  const data = new URLSearchParams();
  data.append("action", "REFRESH_MY_ADDRESSES");

  return requestRegistration({
    path: "/api/deposits",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
});
