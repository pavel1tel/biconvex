import { useResize } from "@/hooks/useResize";
import { Group, Stack } from "@mantine/core";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $profileReponse } from "@/pages/my-profile/model";

import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ProfileReponse } from "@/shared/api/types";
import { ButtonTabs } from "@/shared/ui/ButtonTabs/ui";
import { TradeActions } from "@/shared/ui/TradeActions/ui";

import { OrderBook } from "../../../../shared/ui/OrderBook/OrderBook";
import { OrderBookMobileTradeTab } from "../../../../shared/ui/OrderBook/OrderBookMobile";
import classes from "./TradeContent.module.css";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = ({ addScroll }: { addScroll?: boolean }) => {
  const { isAdaptive: md } = useResize(1200);
  const categories = ["Chart", "Trade"];
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const profileResponse = useUnit<ProfileReponse>($profileReponse);
  const profileResponsePending = useUnit<boolean>(getStakingHistoryFx.pending);
  const [currentPair, setCurrentPair] = useState("");
  const [currentPairName, setCurrentPairName] = useState("");

  useEffect(() => {
    if (!profileResponsePending) {
      setCurrentPair(profileResponse.coins![0].symbol + "/USDT");
      setCurrentPairName(profileResponse.coins![0].name + "/USDT");
    }
  }, [profileResponsePending]);

  useEffect(() => {
    if (!profileResponsePending && currentPair) {
      setCurrentPairName(profileResponse.coins!.filter((coin) => coin.symbol == currentPair.split("/")[0])[0].name + "/" + currentPair.split("/")[1]);
    }
  }, [profileResponsePending, currentPair]);

  return (
    <Stack gap={20} py={64}>
      {md ? (
        <Group>
          <ButtonTabs {...{ categories, activeCategory, setActiveCategory }} />
          {activeCategory === "Chart" && (
            <>
              <TradeChart currentPairName={currentPairName} setCurrentPair={setCurrentPair} currentPair={currentPair} />
              <MarketStats />
              <OrderBook currentPair={currentPair} />
            </>
          )}
          {activeCategory === "Trade" && (
            <>
              <div className={classes.tradeTabContainer}>
                <Payment currentPairName={currentPairName} setCurrentPair={setCurrentPair} />
                {/* <OrderBookMobile activeTab="Trade" activeCategory="All" addScroll={true}/> */}
                <OrderBookMobileTradeTab currentPair={currentPair} activeTab="Trade" activeCategory="All" addScroll={true} />
              </div>
              <TradeHistory />
            </>
          )}
          {activeCategory === "Chart" && <TradeActions actionsTitle="Spot" buyLabel="Buy/Long" sellLabel="Sell/Long" linkTo="/#/trade" />}
        </Group>
      ) : (
        <>
          <Group gap={20} wrap="nowrap" align="stretch">
            <Stack gap={20} w={345}>
              <OrderBook currentPair={currentPair} addScroll={addScroll} orderBookHeight="auto" />
              <MarketTrades />
            </Stack>
            <Stack style={{ flex: 1 }} gap={20}>
              <TradeChart currentPairName={currentPairName} setCurrentPair={setCurrentPair} currentPair={currentPair} />
              <MarketStats />
            </Stack>
            <Payment currentPairName={currentPairName} setCurrentPair={setCurrentPair} />
          </Group>
          <TradeHistory />
        </>
      )}
    </Stack>
  );
};
