import axios, { AxiosRequestConfig } from "axios";
import { createEffect } from "effector";

interface Request {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: AxiosRequestConfig["headers"];
  body?: unknown;
}

//axios.defaults.withCredentials = true;

const BACKEND_HOST = location.origin; //window.providedUiConfig?.serverBaseUrl || import.meta.env.VITE_BACKEND_HOST;

export const api = axios.create({
  baseURL: `${BACKEND_HOST}/api/v1`,
  withCredentials: true,
});

export const requestFx = createEffect<Request, any>((request) => {
  return api({
    method: request.method,
    url: request.path,
    data: request.body,
    headers: {
      Accept: "application/json",
      ...request.headers,
    },
    withCredentials: true,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error, error.message);
      if (error.response) {
        return Promise.reject(error.response.data);
      } else {
        return Promise.reject({ message: error.message });
      }
    });
});
