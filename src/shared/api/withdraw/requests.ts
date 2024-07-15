import { createEffect } from "effector";
import { requestRegistration } from "../request";
import { WithdrawRequest } from "../types";

export const requestWithdraw = createEffect<WithdrawRequest, any, void>(async (request) => {
    const data = new URLSearchParams();
    data.append('action', 'WITHDRAW');
    data.append('amount', request.amount);
    data.append('crypto', request.crypto);
    data.append('address', request.address);

  
    return requestRegistration({
      path: "/profile",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data
    });
  });

  export const getFees = createEffect<void, any, void>(async () => {
    return requestRegistration({
      path: "/api/withdraw",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  });