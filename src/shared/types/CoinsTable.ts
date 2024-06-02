export type SortingLabel = "#" | "Coin Name" | "Price" | "CHG%" | "CHG" | "HIGH" | "LOW" | "VOL" | "VOL 24 USD" | "VOL 24 CHG%" | "TR";
export type SortingDirection = "ASC" | "DESC";

export interface Coin {
  icon: React.ReactNode;
  name: string;
  price: number;
  shortName: string;
  change: number;
  changePrice: number;
  hight: number;
  low: string;
  vol: string;
  volDayUsd: string;
  volDayChgPercent: number;
}

export interface CoinHeader {
  label: string;
  sortable: boolean;
  className?: string;
}
