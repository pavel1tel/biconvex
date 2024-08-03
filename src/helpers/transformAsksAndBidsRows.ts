import { Order, OrderRows } from "@/shared/types/OrderBook.types";

export const transformAsksAndBidsRows = (rows: OrderRows) => {
  return JSON.parse(JSON.stringify(rows)).map((row: Order) => {
    row.cells = [...JSON.parse(JSON.stringify(row)).cells].reverse();
    return row;
  });
};
