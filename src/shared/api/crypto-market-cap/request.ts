import axios from "axios";

import { Coin } from "@/pages/crypto-market-cap/ui/coins-table/ui";

import { FetchFunc } from "../market-screene/request";

const API_URL = "http://20.79.188.227:8081/market";

const fetchMarketData = async (type: string): Promise<Record<string, Coin>> => {
  const response = await axios.get(`${API_URL}?type=${type}`);
  return response.data;
};

const fetchOverviewData: FetchFunc = () => fetchMarketData("vol");
const fetchPerformanceData: FetchFunc = () => fetchMarketData("gain");
const fetchOscillatorsData: FetchFunc = () => fetchMarketData("loss");
const fetchTrendFollowingData: FetchFunc = () => fetchMarketData("new");

export { fetchOverviewData, fetchPerformanceData, fetchOscillatorsData, fetchTrendFollowingData, fetchMarketData };
