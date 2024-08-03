export interface TradeTypeProps {
  title: string;
  profit: number;
  minInvestment: number;
  risk: number;
  selected: boolean;
}

export const TRADE_TYPES = [
  {
    title: "Lite Trading",
    profit: 0.5,
    minInvestment: 300,
    risk: 0.5,
    selected: false,
  },
  {
    title: "Medium Trading",
    profit: 1,
    minInvestment: 300,
    risk: 1,
    selected: false,
  },
  {
    title: "Active Trading",
    profit: 1.7,
    minInvestment: 100,
    risk: 3.1,
    selected: false,
  },
  {
    title: "High Risk Trading",
    profit: 3,
    minInvestment: 250,
    risk: 10.3,
    selected: false,
  },
] as TradeTypeProps[];
