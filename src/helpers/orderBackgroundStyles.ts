import { Order } from "@/shared/types/OrderBook.types";

export const qtyFirstOrderBackgroundStyles = (row: Order, isPositive: boolean) => {
  return {
    background: `linear-gradient(-90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
      isPositive ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
    } ${100 - row.fill}%)`,
  };
};

export const priceFirstOrderBackgroundStyles = (row: Order, isPositive: boolean) => {
  return {
    background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
      isPositive ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
    } ${100 - row.fill}%)`,
  };
};
