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
export type FetchFunc = (range: Range) => Promise<any>;

const fetchData = async (columns: Column[], sort: Sort, filter: Filter[] = [], range: Range = [0, 150]): Promise<any[]> => {
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
    price_conversion: {
      to_symbol: false,
    },
    range,
  };

  const response = await axios.post(API_URL, data, {
    headers: {
      "Content-Type": null,
    },
  });
  return response.data.data;
};

const fetchOverviewData: FetchFunc = (range) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "name",
      "close",
      "change",
      "change_abs",
      "high",
      "low",
      "volume",
      "24h_vol|5",
      "24h_vol_change|5",
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
    { sortBy: "crypto_total_rank", sortOrder: "asc" },
    [],
    range,
  );

const fetchPerformanceData: FetchFunc = (range) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "name",
      "change",
      "change|1W",
      "change|1M",
      "Perf.3M",
      "Perf.6M",
      "Perf.YTD",
      "Perf.Y",
      "Perf.5Y",
      "Perf.All",
      "Volatility.D",
      "description",
      "type",
      "subtype",
      "update_mode",
      "exchange",
    ],
    { sortBy: "crypto_total_rank", sortOrder: "asc" },
    [],
    range,
  );

const fetchOscillatorsData: FetchFunc = (range) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "name",
      "Recommend.Other",
      "ADX",
      "AO",
      "ATR",
      "CCI20",
      "MACD.macd",
      "MACD.signal",
      "Mom",
      "RSI",
      "Stoch.K",
      "Stoch.D",
      "description",
      "type",
      "subtype",
      "update_mode",
      "exchange",
      "ADX+DI",
      "ADX-DI",
      "ADX+DI[1]",
      "ADX-DI[1]",
      "AO[1]",
      "AO[2]",
      "CCI20[1]",
      "Mom[1]",
      "RSI[1]",
      "Stoch.K[1]",
      "Stoch.D[1]",
    ],
    { sortBy: "crypto_total_rank", sortOrder: "asc" },
    [],
    range,
  );

const fetchTrendFollowingData: FetchFunc = (range) =>
  fetchData(
    [
      "base_currency_logoid",
      "currency_logoid",
      "name",
      "Recommend.MA",
      "close",
      "SMA20",
      "SMA50",
      "SMA200",
      "BB.upper",
      "BB.lower",
      "description",
      "type",
      "subtype",
      "update_mode",
      "exchange",
      "pricescale",
      "minmov",
      "fractional",
      "minmove2",
    ],
    { sortBy: "crypto_total_rank", sortOrder: "asc" },
    [],
    range,
  );

export {
  fetchOverviewData,
  fetchPerformanceData,
  fetchOscillatorsData,
  fetchTrendFollowingData,
  fetchData, // for custom requests
};
