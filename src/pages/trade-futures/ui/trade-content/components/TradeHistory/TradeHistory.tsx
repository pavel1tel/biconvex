import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Divider, Group, Pagination, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { LoadingScreen, NextIcon, PreviousIcon } from "@/shared/ui";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { CalendarIcon } from "@/shared/ui/icon/CalendarIcon";

import { PromoPopup } from "../../../promo-popup/PromoPopup";
import { Select } from "../Select/Select";
import { Tabs } from "../tabs";
import classes from "./TradeHistory.module.css";
import { HistoryTab } from "./tabs/HistoryTab/HistoryTab";
import { OrdersTab } from "./tabs/OrdersTab/OrdersTab";

export const tabs = [
  { id: "orders", title: "My Open Orders", content: <OrdersTab /> },
  { id: "history", title: "My Trading History", content: <HistoryTab /> },
];
export const TradeHistory = () => {
  const [activePeriodValue, setActivePeriodValue] = useState("1d");
  const [loading, setLoading] = useState(true);

  const [siblings, setSiblings] = useState(getSiblings());

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className={classes.container} padding={48} style={{ position: "relative" }}>
      {loading && <LoadingScreen type="block" opened={loading} styles={{ height: "98.5% !important" }} />}
      <Stack gap={32}>
        <Group justify="space-between">
          <Text className={classes.tradeHistoryBigText}>Trade History</Text>
          <Group gap={8}>
            <CalendarIcon />
            <Select defaultFirst backgroundTransparent activeValue={activePeriodValue} setActiveValue={setActivePeriodValue} />
          </Group>
        </Group>
        <Tabs tabs={tabs} />
        <Divider color="white" opacity={0.12} />
        <Group justify={"space-between"}>
          <Text className={classes.grayText}>1-5 of 9,383 assets</Text>
          <Pagination total={20} defaultValue={1} {...{ siblings }}>
            <Group gap={8} justify="center">
              <Pagination.Previous icon={PreviousIcon} />
              <Pagination.Items />
              <Pagination.Next icon={NextIcon} />
            </Group>
          </Pagination>
        </Group>
      </Stack>
    </Container>
  );
};
