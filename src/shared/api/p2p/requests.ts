import { createEffect } from "effector";
import { requestRegistration } from "../request";

export const getP2pInfo = createEffect<void, any, void>(async () => {
    return requestRegistration({
      path: "/api/p2p",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  });
  