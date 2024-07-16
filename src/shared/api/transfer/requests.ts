import { createEffect } from "effector";

import { requestRegistration } from "../request";
import { ResponseDto, TransferRequest } from "../types";

export const getTransfer = createEffect<void, any, void>(async () => {
  return requestRegistration({
    path: "/api/transfer",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
});

export const requestTransfer = createEffect<TransferRequest, any, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "TRANSFER");
  data.append("amount", request.amount);
  data.append("crypto", request.crypto);
  data.append("to", request.to);

  return requestRegistration({
    path: "/profile",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
});
