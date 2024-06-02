import { Tab } from "@/shared/ui/tabs/Tabs.types";

import { CoinsTable } from "../ui/Coins/components/CoinsTable/CoinsTable";

export const CoinsTabs: Tab[] = [
  {
    title: "All",
    content: <CoinsTable />,
    id: "all",
  },
  {
    title: "USDT",
    content: <CoinsTable />,
    id: "usdt",
  },
  {
    title: "FIAT",
    content: <CoinsTable />,
    id: "fiat",
  },
  {
    title: "FAV",
    content: <CoinsTable />,
    id: "fav",
  },
];
