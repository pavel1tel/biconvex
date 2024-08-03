import { createEffect } from "effector";
import { requestRegistration } from "../request";

export const getRef = createEffect<void, any, void>(async () => {
  return requestRegistration({
    path: "/api/ref",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
})