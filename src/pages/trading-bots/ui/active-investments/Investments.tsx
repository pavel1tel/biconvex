import { BitcoinIcon } from "@/shared/ui/icon";

export const INVESTMENT_TABLE_HEADERS = [
  {
    label: "Coin",
    sortable: true,
  },
  {
    label: "Qty",
    sortable: true,
  },
  {
    label: "Bot ",
    sortable: true,
  },
  {
    label: "Trade type",
    sortable: true,
  },
  {
    label: "Activation time",
    sortable: true,
  },
  {
    label: "P&L",
    sortable: true,
  },
  {
    label: "Earned",
    sortable: true,
  },
  {
    label: "Action",
    sortable: true,
  },
];

export const INVESTMENTS = [
  {
    icon: <BitcoinIcon width={29} />,
    name: "BTC",
    qty: "0.0004",
    bot: "Smart Money Trading Bot",
    tradeType: "Lite",
    activationTime: "2024.04.24 2:35",
    pl: 200,
    earned: 267,
  },
  {
    icon: <BitcoinIcon width={29} />,
    name: "BTC",
    qty: "0.0004",
    bot: "Smart Money Trading Bot",
    tradeType: "Lite",
    activationTime: "2024.04.24 2:35",
    pl: 200,
    earned: 267,
  },
  {
    icon: <BitcoinIcon width={29} />,
    name: "BTC",
    qty: "0.0004",
    bot: "Smart Money Trading Bot",
    tradeType: "Lite",
    activationTime: "2024.04.24 2:35",
    pl: 200,
    earned: 267,
  },
  {
    icon: <BitcoinIcon width={29} />,
    name: "BTC",
    qty: "0.0004",
    bot: "Smart Money Trading Bot",
    tradeType: "Lite",
    activationTime: "2024.04.24 2:35",
    pl: 200,
    earned: 267,
  },
];

export const INVESTMENTS_WITH_HEADINGS = [
  {
    heading: "Coin",
    coins: [
      { icon: <BitcoinIcon width={29} />, name: "BTC" },
      { icon: <BitcoinIcon width={29} />, name: "BTC" },
      { icon: <BitcoinIcon width={29} />, name: "BTC" },
      { icon: <BitcoinIcon width={29} />, name: "BTC" },
    ],
  },
  {
    heading: "Qty",
    coins: ["0.0004", "0.0004", "0.0004", "0.0004"],
  },
  {
    heading: "Bot",
    coins: ["Smart Money Trading Bot", "Smart Money Trading Bot", "Smart Money Trading Bot", "Smart Money Trading Bot"],
  },
  {
    heading: "Trade Type",
    coins: ["Lite", "Lite", "Lite", "Lite"],
  },
  {
    heading: "P&L",
    coins: ["200%", "300%", "234%", "355%"],
  },
  {
    heading: "Earned",
    coins: ["250$", "245$", "267$", "259$"],
  },
  {
    heading: "Action",
    coins: ["Stop", "Stop", "Stop", "Stop"],
  },
];
