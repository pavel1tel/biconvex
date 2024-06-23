import { createEffect } from "effector";
import { requestBinance } from "../request";
import { ResponseDto } from "../types";

export const getCandles = createEffect<string, any, ResponseDto>(async (interval) => {

    return requestBinance({
        path: "/api/v3/klines?symbol=BTCUSDT&interval=" + interval + "&limit=1000",
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
});