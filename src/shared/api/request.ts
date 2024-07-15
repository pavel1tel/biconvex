import axios, { AxiosRequestConfig } from "axios";
import { createEffect } from "effector";

interface Request {
  path: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: AxiosRequestConfig["headers"];
  body?: unknown;
}

//axios.defaults.withCredentials = true;

const BACKEND_HOST = "https://74.235.165.183/";
// const BACKEND_HOST = "http://localhost:8088/";

export const api = axios.create({
  baseURL: `${BACKEND_HOST}`,
  withCredentials: true,
});

export const binanceApi = axios.create({
  baseURL: `https://data-api.binance.vision`,
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
      if (response.data != 1) {
        throw new Error(response.data);
      }
      return response.data;
    })
    .catch((error) => {
      console.error(error, error.message);
      if (error.response) {
        return Promise.reject({ message: error.response.data });
      } else {
        return Promise.reject({ message: error.message });
      }
    });
});

export const requestRegistration = createEffect<Request, any>((request) => {
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
      return { message: response.data };
    })
    .catch((error) => {
      console.error(error, error.message);
      if (error.response) {
        return Promise.reject({ message: error.response.data });
      } else {
        return Promise.reject({ message: error.message });
      }
    });
});

export const requestBinance = createEffect<Request, any>((request) => {
  return binanceApi({
    method: request.method,
    url: request.path,
    data: request.body,
    headers: {
      Accept: "application/json",
      ...request.headers,
    },
  })
    .then((response) => {
      return { message: response.data };
    })
    .catch((error) => {
      console.error(error, error.message);
      if (error.response) {
        return Promise.reject({ message: error.response.data });
      } else {
        return Promise.reject({ message: error.message });
      }
    });
});
