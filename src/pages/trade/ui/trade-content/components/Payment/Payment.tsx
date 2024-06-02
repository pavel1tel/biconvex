import { useResize } from "@/hooks/useResize";
import { Stack } from "@mantine/core";

import { TradeChartTitle } from "@/shared/ui/TradeChartTitle";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { Tabs } from "@/shared/ui/tabs";

import containerClasses from "../../../../../../shared/ui/TradePageContainer/Container.module.css";
import { BuyTab } from "./components/tabs/BuyTab/BuyTab";
import { SellTab } from "./components/tabs/SellTab/SellTab";

const tabs = [
  { id: "buy", title: "Buy", content: <BuyTab /> },
  { id: "sell", title: "Sell", content: <SellTab /> },
];
export const Payment = () => {
  const { isAdaptive: md } = useResize(1200);

  return (
    <Stack className={containerClasses.payment}>
      <Container style={{ padding: "2rem clamp(1.5rem, 2vw, 2rem) 2rem clamp(1.5rem, 2vw, 2rem)" }}>
        {md && <TradeChartTitle className="withBottomIndent" />}

        <Tabs overflowContainer={false} tabs={tabs} />
      </Container>
    </Stack>
  );
};
