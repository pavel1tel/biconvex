import { createEffect } from "effector";

import { requestRegistration } from "../request";
import { ResponseDto, StakeRequestDto } from "../types";

export const requestStaking = createEffect<void, ResponseDto>(async () => {
  return requestRegistration({
    path: "/api/invest",
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
});

export const createStakeRequest = createEffect<StakeRequestDto, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "STAKE");
  data.append("invest_amount", request.invest_amount);
  data.append("invest_plan", request.invest_plan);
  data.append("invest_coin", request.invest_coin);

  return requestRegistration({
    path: "/api/stacking",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const createUnstakeRequest = createEffect<string, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "UNSTAKE");
  data.append("id", request);

  return requestRegistration({
    path: "/api/stacking",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const getStakingHistory = createEffect<void, ResponseDto>(async () => {
  return requestRegistration({
    path: "/api/stacking?action=GET_STAKING_HISTORY",
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
});

export const requestBalance = createEffect<string, ResponseDto>(async (coin) => {
  const data = new URLSearchParams();
  data.append("action", "GET_CURRENCY_BALANCE");
  data.append("crypto", coin);
  return requestRegistration({
    path: "/profile",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});
