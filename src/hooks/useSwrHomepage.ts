import { BASE_API_URL, fetcher } from "@/swr";
import useSWRImmutable from "swr/immutable";

export interface SwrHomepage {
  symbol: string
  price_change: number
  price: number
  quote_volume: string
  name: string
  volume24h: number
  price_change_percent: number
  history: string[]
}



export const useSwrHomepage = () => {
  const { data } = useSWRImmutable<SwrHomepage[]>(`${BASE_API_URL}:8081/home/coins?c=BTC&c=ETH&c=XRP&c=BNB&c=SOL&c=MATIC`, fetcher);

  return {
    coins: data,
  };
};
