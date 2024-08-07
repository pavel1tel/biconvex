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
import { routes } from "@/shared/routing";
import { LoadingScreen } from "@/shared/ui";
import { ButtonTabs } from "@/shared/ui/ButtonTabs/ui";
import { TradeActions } from "@/shared/ui/TradeActions/ui";

import { OrderBook } from "../../../../shared/ui/OrderBook/OrderBook";
import { OrderBookMobileTradeTab } from "../../../../shared/ui/OrderBook/OrderBookMobile";
import { PromoPopup } from "../../../trade-futures/ui/promo-popup";
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
  const [loading, setLoading] = useState(true);
  const { lastMessage: priceWs } = useWebSocket(socketUrl);
  const routeParams = useUnit(currentRoute.$params);
  const [currentPair, setCurrentPair] = useState("");
  const [currentPairName, setCurrentPairName] = useState("");
  const [actionType, setActionType] = useState("Sell");
  useEffect(() => {
    setSocketUrl("wss://stream.binance.com:9443/ws/" + currentPair.split("/").join("").toLocaleLowerCase() + "@kline_1m");
  }, [currentPair]);

  useEffect(() => {
    if (!profileResponsePending) {
      setCurrentPair(routeParams.pairId.replace("-", "/"));
      setCurrentPairName(routeParams.pairId.replace("-", "/"));
    }
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [profileResponsePending, routeParams]);

  useEffect(() => {
    if (!profileResponsePending && currentPair) {
      setCurrentPairName(profileResponse.coins!.filter((coin) => coin.symbol == currentPair.split("/")[0])[0].name + "/" + currentPair.split("/")[1]);
    }
  }, [profileResponsePending, currentPair]);

  const handleAction = (name: "Trade" | "Chart") => {
    setActiveCategory(name);
  };

  const handleActionType = (name: "Buy" | "Sell") => {
    setActionType(name);
  };

  useEffect(() => {
    if (currentPair.length > 0) {
      getCoinInfo({ symbol: currentPair.split("/").join(""), windowSize: "1d" });
      getCoinPrice(currentPair.split("/").join(""));
      getTrades(currentPair.split("/").join(""));
    }
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
                <Payment
                  actionType={actionType}
                  priceWs={priceWs}
                  currentPair={currentPair}
                  currentPairName={currentPairName}
                  setCurrentPair={setCurrentPair}
                />
                <div id="tradeAction"></div>
                <OrderBookMobileTradeTab priceWs={priceWs} currentPair={currentPair} activeTab="Trade" activeCategory="All" addScroll={true} />
              </div>
              <TradeHistory />
            </>
          )}
          {activeCategory === "Chart" && (
            <TradeActions
              handleActionType={handleActionType}
              handleAction={handleAction}
              actionsTitle="Futures"
              buyLabel="Buy"
              sellLabel="Sell"
              linkTo="/trade-futures"
            />
          )}
        </Group>
      ) : (
        <>
          <Group className={classes.tableFlex} gap={20} align="stretch" h={1134} wrap="nowrap">
            <Stack className={classes.firstCol} gap={20} w={345} pos="relative">
              {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
              <OrderBook priceWs={priceWs} currentPair={currentPair} orderBookHeight={orderBookHeight} isFullRows={true} />
            </Stack>
            <Stack className={classes.secondCol} style={{ flex: 1 }} gap={20}>
              <Stack pos="relative">
                {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
                <TradeChart priceWs={priceWs} currentPair={currentPair} setCurrentPair={setCurrentPair} currentPairName={currentPairName} />
              </Stack>
              <MarketStats priceWs={priceWs} currentPair={currentPair} />
            </Stack>
            <Stack gap={20} w={345} className={classes.wrapper}>
              <Payment
                actionType={""}
                priceWs={priceWs}
                currentPair={currentPair}
                currentPairName={currentPairName}
                setCurrentPair={setCurrentPair}
              />
              <MarketTrades currentPair={currentPair} />
            </Stack>
          </Group>
          <Stack pos="relative">
            {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
            <TradeHistory />
          </Stack>
        </>
      )}
    </Stack>
  );
};
