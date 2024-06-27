import axios from "axios";
import { createEffect } from "effector";
import { requestBinance } from "../request";
import { CandlesRequest, ResponseDto } from "../types";

export const getCandles = createEffect<CandlesRequest, any, ResponseDto>(async (request) => {

    return requestBinance({
        path: "/api/v3/klines?symbol=" + request.pair + "&interval=" + request.interval + "&limit=1000",
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});

export const getOrderBook = createEffect<string, any, ResponseDto>(async (symbol) => {

    return requestBinance({
        path: "/api/v3/depth?symbol=" + symbol + "&limit=22",
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});

export const getRates = createEffect<void, any, ResponseDto>(async () => {

    return axios.get("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json").then(response => {
        return { message: response.data }
    })
});