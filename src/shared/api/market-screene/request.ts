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
  );

const fetchPerformanceData: FetchFunc = (range) =>
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
  );

const fetchOscillatorsData: FetchFunc = (range) =>
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
  );

const fetchTrendFollowingData: FetchFunc = (range) =>
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
  );

export {
  fetchOverviewData,
  fetchPerformanceData,
  fetchOscillatorsData,
  fetchTrendFollowingData,
  fetchData, // for custom requests
};
