import { useResize } from "@/hooks/useResize";
import { Group, Stack } from "@mantine/core";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

// import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { $profileReponse } from "@/pages/my-profile/model";

import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { getCoinInfo, getCoinPrice, getTrades } from "@/shared/api/trading/requests";
import { ProfileReponse } from "@/shared/api/types";
import { ButtonTabs } from "@/shared/ui/ButtonTabs/ui";
import { TradeActions } from "@/shared/ui/TradeActions/ui";

import { OrderBook } from "../../../../shared/ui/OrderBook/OrderBook";
import { OrderBookMobileTradeTab } from "../../../../shared/ui/OrderBook/OrderBookMobile";
import { currentRoute } from "../../model";
import classes from "./TradeContent.module.css";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = ({ orderBookHeight }: { orderBookHeight?: string }) => {
  const { isAdaptive: md } = useResize(1200);
  const categories = ["Chart", "Trade"];
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const profileResponse = useUnit<ProfileReponse>($profileReponse);
  const profileResponsePending = useUnit<boolean>(getStakingHistoryFx.pending);
  const [socketUrl, setSocketUrl] = useState("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
  const { lastMessage: priceWs } = useWebSocket(socketUrl);
  const routeParams = useUnit(currentRoute.$params);
  const [currentPair, setCurrentPair] = useState("");
  const [currentPairName, setCurrentPairName] = useState("");
  useEffect(() => {
    setSocketUrl("wss://stream.binance.com:9443/ws/" + currentPair.split("/").join("").toLocaleLowerCase() + "@kline_1m");
  }, [currentPair]);

  useEffect(() => {
    if (!profileResponsePending) {
      setCurrentPair(routeParams.pairId.replace("-", "/"));
      setCurrentPairName(routeParams.pairId.replace("-", "/"));
    }
  }, [profileResponsePending, routeParams]);

  useEffect(() => {
    if (!profileResponsePending && currentPair) {
      setCurrentPairName(profileResponse.coins!.filter((coin) => coin.symbol == currentPair.split("/")[0])[0].name + "/" + currentPair.split("/")[1]);
    }
  }, [profileResponsePending, currentPair]);

  useEffect(() => {
    getCoinInfo({ symbol: currentPair.split("/").join(""), windowSize: "1d" });
    getCoinPrice(currentPair.split("/").join(""));
    getTrades(currentPair.split("/").join(""));
  }, [currentPair]);

  return (
    <Stack gap={20} py={64}>
      {md ? (
        <Group>
          <ButtonTabs {...{ categories, activeCategory, setActiveCategory }} />
          {activeCategory === "Chart" && (
            <>
              <TradeChart priceWs={priceWs} currentPair={currentPair} setCurrentPair={setCurrentPair} currentPairName={currentPairName} />
              <MarketStats priceWs={priceWs} currentPair={currentPair} />
              <OrderBook priceWs={priceWs} currentPair={currentPair} />
            </>
          )}
          {activeCategory === "Trade" && (
            <>
              <div className={classes.tradeTabContainer}>
                <Payment priceWs={priceWs} currentPair={currentPair} currentPairName={currentPairName} setCurrentPair={setCurrentPair} />
                <OrderBookMobileTradeTab priceWs={priceWs} currentPair={currentPair} activeTab="Trade" activeCategory="All" addScroll={true} />
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
              <OrderBook priceWs={priceWs} currentPair={currentPair} orderBookHeight={orderBookHeight} isFullRows={true} />
            </Stack>
            <Stack className={classes.secondCol} style={{ flex: 1 }} gap={20}>
              <TradeChart priceWs={priceWs} currentPair={currentPair} setCurrentPair={setCurrentPair} currentPairName={currentPairName} />
              <MarketStats priceWs={priceWs} currentPair={currentPair} />
            </Stack>
            <Stack gap={20} w={345} className={classes.wrapper}>
              <Payment priceWs={priceWs} currentPair={currentPair} currentPairName={currentPairName} setCurrentPair={setCurrentPair} />
              <MarketTrades currentPair={currentPair} />
            </Stack>
          </Group>
          <TradeHistory />
        </>
      )}
    </Stack>
  );
};
