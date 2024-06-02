import { useResize } from "@/hooks/useResize";
import {  Group, Stack } from "@mantine/core";
import { useState } from "react";

import { ButtonTabs } from "@/shared/ui/ButtonTabs/ui";
import { TradeActions } from "@/shared/ui/TradeActions/ui";

import { OrderBook } from "../../../../shared/ui/OrderBook/OrderBook";
import {  OrderBookMobileTradeTab } from "../../../../shared/ui/OrderBook/OrderBookMobile";
import classes from "./TradeContent.module.css";
import { MarketStats } from "./components/MarketStats/MarketStats";
// import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";

export const TradeContent = ({orderBookHeight}:{orderBookHeight?:string}) => {
  const { isAdaptive: md } = useResize(1200);
  const categories = ["Chart", "Trade"];
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);

  return (
    <Stack gap={20} py={64}>
      {md ? (
        <Group>
          <ButtonTabs {...{ categories, activeCategory, setActiveCategory }} />
          {activeCategory === "Chart" && (
            <>
              <TradeChart />
              <MarketStats />
              <OrderBook />
            </>
          )}
          {activeCategory === "Trade" && (
            <>
              <div className={classes.tradeTabContainer}>
                <Payment />
                <OrderBookMobileTradeTab activeTab="Trade" activeCategory="All" addScroll={true} />
              </div>
              <TradeHistory />
            </>
          )}
          {activeCategory === "Chart" && <TradeActions actionsTitle="Futures" buyLabel="Buy" sellLabel="Sell" linkTo="#/trade-futures" />}
        </Group>
      ) : (
        <>
          <Group className={classes.tableFlex} gap={20} align="stretch" h={1134} wrap="nowrap">
            <Stack className={classes.firstCol} gap={20} w={345}>
              <OrderBook orderBookHeight={orderBookHeight} isFullRows={true}/>
            </Stack>
            <Stack className={classes.secondCol} style={{ flex: 1 }} gap={20}>
              <TradeChart />
              <MarketStats />
            </Stack>
            <Stack gap={20} w={345} className={classes.wrapper}>
              <Payment />
              <MarketTrades />
            </Stack>
          </Group>
          <TradeHistory />
        </>
      )}
    </Stack>
  );
};

