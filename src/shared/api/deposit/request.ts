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