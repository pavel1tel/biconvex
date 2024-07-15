import { createEffect } from "effector";
import { requestRegistration } from "../request";

export const getTransactions = createEffect<void, any, void>(async () => {

    return requestRegistration({
      path: "/api/transactions",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  });