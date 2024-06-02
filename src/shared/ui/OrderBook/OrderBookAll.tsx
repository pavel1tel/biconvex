import { Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { rowsMobile } from "@/shared/config/OrderBook.constants";
import { OrderRows } from "@/shared/types/OrderBook.types";
import { Container } from "@/shared/ui/TradePageContainer/Container";

import containerClasses from "../TradePageContainer/Container.module.css";
import classes from "./OrderBook.module.css";
import { StocksPriceFirst } from "./Stocks/StocksPriceFirst";

export const OrderBookAll = ({ header, className = "" }: { header: Array<string>; className?: string }) => {
  const [stockRows, setStockRows] = useState<OrderRows>([]);

  useEffect(() => {
    const newRows: OrderRows = JSON.parse(JSON.stringify(rowsMobile));
    const slicedRows = newRows.slice(0, 4);
    setStockRows(slicedRows);
  }, []);

  return (
    <Stack className={clsx(containerClasses.ordersAll, containerClasses[className])}>
      <Container>
        <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
          <StocksPriceFirst
            header={header}
            rows={window.location.hash.includes("trade-futures") ? rowsMobile : stockRows}
            isPositive={true}
            cellsOrderChanged={false}
          />
          <Text className={classes.tradeOrderBookInfo}>38,555.19</Text>
          <StocksPriceFirst
            header={header}
            rows={window.location.hash.includes("trade-futures") ? rowsMobile : stockRows}
            isPositive={false}
            cellsOrderChanged={false}
          />
        </div>
      </Container>
    </Stack>
  );
};
