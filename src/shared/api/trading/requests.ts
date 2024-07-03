import axios from "axios";
import { createEffect } from "effector";
import { requestBinance, requestRegistration } from "../request";
import { CandlesRequest, ResponseDto, SpotOrderRequest } from "../types";

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


export const getCoinInfo = createEffect<any, any, ResponseDto>(async ({ symbol, windowSize }) => {

    return requestBinance({
        path: "/api/v3/ticker?symbols=[\"" + symbol + "\"]&windowSize=" + windowSize,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});

export const getCoinPrice = createEffect<string, any, ResponseDto>(async (symbol) => {

    return requestBinance({
        path: "/api/v3/ticker/price?symbol=" + symbol,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});

export const getTrades = createEffect<string, any, ResponseDto>(async (symbol) => {

    return requestBinance({
        path: "/api/v3/trades?symbol=" + symbol.toUpperCase() + "&limit=30",
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});

export const requestOpenOrders = createEffect<void, ResponseDto>(async () => {
    return requestRegistration({
        path: '/trading_api?action=GET_OPEN_ORDERS',
        method: 'GET',
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
    });
});

export const requestTrading = createEffect<void, ResponseDto>(async () => {
    return requestRegistration({
        path: '/api/trading',
        method: 'GET',
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
    });
});

export const createOrder = createEffect<SpotOrderRequest, any, ResponseDto>(async (request) => {
    const data = new URLSearchParams();
    data.append('action', 'CREATE_ORDER');
    data.append('pair_price', request.pair_price.toString());
    data.append('crypto', request.crypto);
    data.append('amount', request.amount.toString());
    data.append('type', request.type.toString());
    data.append('category', request.category);

    return requestRegistration({
        path: '/trading_api',
        method: 'POST',
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: data
    });
});

export const cancelOrder = createEffect<string, any, ResponseDto>(async (id) => {
    return requestRegistration({
        path: '/trading_api',
        method: 'POST',
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
            action: 'CANCEL_ORDER',
            order_id: id,
          })
    });
});