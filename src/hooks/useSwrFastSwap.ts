import { BASE_API_FAST_SWAP_URL, fetcher } from "@/swr";
import useSWRImmutable from "swr/immutable";

export interface FastSwapCoins {
  coins: Record<
    string,
    {
      symbol: string;
      name: string;
      image: string;
    }
  >;
  rates: Record<string, number>[];
}

export const useSwrFastSwapCoins = () => {
  const { data } = useSWRImmutable<FastSwapCoins>(`${BASE_API_FAST_SWAP_URL}/api/swap`, fetcher);

  return {
    rates: data?.rates,
    coins: data?.coins,
  };
};
