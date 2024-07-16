/* tslint:disable:no-unused-variable */
import axios from "axios";

const API_URL = "https://scanner.tradingview.com/coin/scan";

type Column = string;
type Sort = {
  sortBy: string;
  sortOrder: "asc" | "desc";
};
type Filter = {
  left: string;
  operation: string;
  right: string;
};
export type Range = [number, number];
export type FetchFunc = (sort: Sort, filter: Filter[], preset: string) => Promise<any>;

const fetchData = async (columns: Column[], sort: Sort, filter: Filter[] = [], preset): Promise<any[]> => {
  const data = {
    filter,
    options: {
      lang: "en",
    },
    markets: ["coin"],
    symbols: {
      query: {
        types: [],
      },
      tickers: [],
    },
    columns,
    sort,
    preset,
    price_conversion: {
      to_symbol: false,
    },
  };

  const response = await axios.post(API_URL, data, {
    headers: {
      "Content-Type": null,
    },
  });
  return response.data.data;
};

const fetchOverviewData: FetchFunc = (sortRequest, filter: Filter[], preset) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "description",
      "close",
      "change",
      "change_abs",
      "high",
      "low",
      "volume",
      "24h_vol_cmc",
      "24h_vol_change_cmc",
      "Recommend.All",
      "exchange",
      "description",
      "type",
      "subtype",
      "update_mode",
      "pricescale",
      "minmov",
      "fractional",
      "minmove2",
    ],
    sortRequest,
    filter,
    preset,
  );

const fetchPerformanceData: FetchFunc = (sortRequest, filter: Filter[], preset) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "description",
      "market_cap_calc",
      "24h_close_change|5",
      "Perf.W",
      "Perf.1M",
      "Perf.3M",
      "Perf.6M",
      "Perf.Y",
      "Perf.All",
      "Volatility.D",
    ],
    sortRequest,
    filter,
    preset,
  );

const fetchOscillatorsData: FetchFunc = (sortRequest, filter: Filter[], preset) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "description",
      "Recommend.Other",
      "ADX",
      "AO",
      "ATR",
      "CCI20",
      "MACD.macd",
      "MACD.signal",
      "Mom",
      "RSI",
    ],
    sortRequest,
    filter,
    preset,
  );

const fetchTrendFollowingData: FetchFunc = (sortRequest, filter: Filter[], preset) =>
  fetchData(
    ["base_currency_logoid", "currency_logoid", "description", "Recommend.MA", "close", "SMA20", "SMA50", "SMA200", "BB.upper", "BB.lower"],
    sortRequest,
    filter,
    preset,
  );

export { fetchData, fetchOscillatorsData, fetchOverviewData, fetchPerformanceData, fetchTrendFollowingData };
