import { Container } from "@/shared/ui/TradePageContainer/Container";
import { Tabs } from "@/shared/ui/tabs";

import classes from "./MarketTrades.module.css";
import { MarketTradesTab } from "./tabs/MarketTradesTab/MarketTradesTab";

export const MarketTrades = () => {
  return (
    <div className={classes.marketTradesContainer}>
      <Container>
        <Tabs
          tabsControllsWidth={"fit-content"}
          tabControllPadding={"0 16px"}
          tabControllFontSize={16}
          tabs={[{ id: "marketTrades", title: "Market Trades", content: <MarketTradesTab /> }]}
        />
      </Container>
    </div>
  );
};
