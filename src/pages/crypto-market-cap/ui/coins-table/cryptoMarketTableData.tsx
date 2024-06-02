import { CoinHeader } from "@/shared/types/CoinsTable";
import {
  AnchorProtocolIcon,
  BinanceCoinIcon,
  BitcoinIcon,
  CardanoIcon,
  ChainlinkIcon,
  CosmosIcon,
  DogecoinIcon,
  EthereumIcon,
  PolkadotIcon,
  StellarIcon,
  SuperFarmIcon,
  TetherIcon,
  USDCoinIcon,
  UniswapIcon,
  XRPIcon,
} from "@/shared/ui";

import classes from "./styles.module.css";

interface Coin {
  icon: React.ReactNode;
  name: string;
  price: number;
  shortName: string;
  change: number;
  dayHighPrice: number;
  dayLowPrice: number;
  marketCap: string;
}

export const COINS: Coin[] = [
  {
    icon: <BitcoinIcon />,
    name: "Bitcoin",
    price: 43975.72,
    shortName: "BTC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <EthereumIcon />,
    name: "Ethereum",
    price: 43975.72,
    shortName: "ETH",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <SuperFarmIcon />,
    name: "SuperFarm",
    price: 43975.72,
    shortName: "SUPER",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <TetherIcon />,
    name: "Tether",
    price: 43975.72,
    shortName: "USDT",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <BinanceCoinIcon />,
    name: "Binance Coin",
    price: 43975.72,
    shortName: "BNB",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <CardanoIcon />,
    name: "Cardano",
    price: 43975.72,
    shortName: "ADA",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <XRPIcon />,
    name: "XRP",
    price: 43975.72,
    shortName: "XRP",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <USDCoinIcon />,
    name: "USD Coin",
    price: 43975.72,
    shortName: "USDC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <DogecoinIcon />,
    name: "Dogecoin",
    price: 43975.72,
    shortName: "DOGE",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <PolkadotIcon />,
    name: "Polkadot",
    price: 43975.72,
    shortName: "DOT",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <UniswapIcon />,
    name: "Uniswap",
    price: 43975.72,
    shortName: "UNI",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <StellarIcon />,
    name: "Stellar",
    price: 43975.72,
    shortName: "XLM",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <AnchorProtocolIcon />,
    name: "Anchor Protocol",
    price: 43975.72,
    shortName: "ANC",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <ChainlinkIcon />,
    name: "Chainlink",
    price: 43975.72,
    shortName: "LINK",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
  {
    icon: <CosmosIcon />,
    name: "Cosmos",
    price: 43975.72,
    shortName: "ATOM",
    change: +37.55,
    dayHighPrice: 43975.72,
    dayLowPrice: 28975.72,
    marketCap: "427.81M",
  },
];

export const HEADERS: CoinHeader[] = [
  {
    label: "#",
    sortable: true,
  },
  {
    label: "Coin Name",
    sortable: true,
    className: classes.coinTh,
  },
  {
    label: "Coin Price",
    sortable: true,
  },
  {
    label: "Change",
    sortable: true,
  },
  {
    label: "24h High Price",
    sortable: true,
  },
  {
    label: "24h Low Price",
    sortable: true,
  },
  {
    label: "Market Cap",
    sortable: true,
  },
  {
    label: "Chart",
    sortable: false,
    className: classes.chartTh,
  },
];

export const HEADERS_MOB: CoinHeader[] = [
  {
    label: "Coin Name",
    sortable: true,
    className: classes.coinTh,
  },
  {
    label: "Coin Price",
    sortable: true,
  },
  {
    label: "Change",
    sortable: true,
  },
  {
    label: "24h High Price",
    sortable: true,
  },
  {
    label: "24h Low Price",
    sortable: true,
  },
  {
    label: "Market Cap",
    sortable: true,
  },
  {
    label: "Chart",
    sortable: false,
    className: classes.chartTh,
  },
];
