import { createEffect } from "effector";
import { requestRegistration } from "../request";
import { ResponseDto } from "../types";

export const getChat = createEffect<void, any, void>(async () => {
  return requestRegistration({
    path: "/api/chat?action=REFRESH_SUPPORT",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
});

export const sendTextMessage = createEffect<string, ResponseDto>(async (message) => {
  const data = new URLSearchParams();
  data.append("action", "SEND_SUPPORT_MESSAGE");
  data.append("support_text", message);

  return requestRegistration({
    path: "/api/support",
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  });
});

export const uploadChatPhoto = createEffect<File, any, void>(async (file) => {
  const form = new FormData();

  form.append("support_send_image", file, file.name);

  return requestRegistration({
    path: "/api/chat?action=SEND_SUPPORT_IMAGE",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
});