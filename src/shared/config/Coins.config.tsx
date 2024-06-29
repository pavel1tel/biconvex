
import { Dispatch, SetStateAction } from "react";
import { Crypto } from "../api/types";
import { CoinsTable } from "../ui/Coins/components/CoinsTable/CoinsTable";

export const getCoinTabs = (coins: Crypto[], setCurrentPair: Dispatch<SetStateAction<string>>, search: string) => {
  return [
    {
      title: "All",
      content: <CoinsTable search={search} setCurrentPair={setCurrentPair} coins={coins} isFiat={false} isMain={true} />,
      id: "all",
    },
    {
      title: "USDT",
      content: <CoinsTable search={search} setCurrentPair={setCurrentPair} coins={coins} isFiat={false} isMain={false} />,
      id: "usdt",
    },
    {
      title: "FIAT",
      content: <CoinsTable search={search} setCurrentPair={setCurrentPair} coins={coins} isFiat={true} isMain={false} />,
      id: "fiat",
    },
    {
      title: "FAV",
      content: <CoinsTable search={search} setCurrentPair={setCurrentPair} coins={[]} isFiat={false} isMain={false} />,
      id: "fav",
    },
  ];
}