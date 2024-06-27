
import { Dispatch, SetStateAction } from "react";
import { Crypto } from "../api/types";
import { CoinsTable } from "../ui/Coins/components/CoinsTable/CoinsTable";

export const getCoinTabs = (coins: Crypto[], setCurrentPair: Dispatch<SetStateAction<string>>) => {
  return [
    {
      title: "All",
      content: <CoinsTable setCurrentPair={setCurrentPair} coins={coins} sufix={["USDT", "TRY", "EUR", "RUB", "UAH", "BRL", "JPY"]} />,
      id: "all",
    },
    {
      title: "USDT",
      content: <CoinsTable setCurrentPair={setCurrentPair} coins={coins} sufix={["USDT"]} />,
      id: "usdt",
    },
    {
      title: "FIAT",
      content: <CoinsTable setCurrentPair={setCurrentPair} coins={coins} sufix={["TRY", "EUR", "RUB", "UAH", "BRL", "JPY"]} />,
      id: "fiat",
    },
    {
      title: "FAV",
      content: <CoinsTable setCurrentPair={setCurrentPair} coins={coins} sufix={["USDT"]} />,
      id: "fav",
    },
  ];
}