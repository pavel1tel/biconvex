import { createEffect } from "effector";

import { requestRegistration } from "../request";
import { ResponseDto, UpdateAccountRequest, UpdatePasswordRequest, UpdatePersonalInfoRequest } from "../types";

export const updateAccount = createEffect<UpdateAccountRequest, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "UPDATE_ACCOUNT");
  data.append("phone", request.phone);
  data.append("fullname", request.fullname);
  data.append("username", request.username);

  return requestRegistration({
    path: "/api/edit_settings",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const updatePersonalInfo = createEffect<UpdatePersonalInfoRequest, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "UPDATE_PERSONAL_INFO");
  data.append("date_birth", request.date_birth);
  data.append("present_address", request.present_address);
  data.append("permanent_address", request.permanent_address);
  data.append("user_city", request.user_city);
  data.append("user_postal_code", request.user_postal_code);
  data.append("user_country", request.user_country);

  return requestRegistration({
    path: "/profile/edit_personal",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const requestSettings = createEffect<void, ResponseDto>(async () => {
  return requestRegistration({
    path: "/api/settings",
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
});

export const updatePassword = createEffect<UpdatePasswordRequest, ResponseDto>(async (request) => {
  const data = new URLSearchParams();
  data.append("action", "UPDATE_PASSWORD");
  data.append("old_password", request.old_password);
  data.append("new_password", request.new_password);

  return requestRegistration({
    path: "/api/edit_settings",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});
