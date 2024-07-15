import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Divider, Group, Pagination, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { NextIcon, PreviousIcon } from "@/shared/ui";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { CalendarIcon } from "@/shared/ui/icon/CalendarIcon";

import { Select } from "../Select/Select";
import { Tabs } from "../tabs";
import classes from "./TradeHistory.module.css";
import { HistoryTab } from "./tabs/HistoryTab/HistoryTab";
import { OrdersTab } from "./tabs/OrdersTab/OrdersTab";


export const TradeHistory = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCoins, setCurrentPageCoins] = useState(1);
  const [activePeriodValue, setActivePeriodValue] = useState("1d");
  const tabs = [
    { id: "orders", title: "My Open Orders", content: <OrdersTab activePeriodValue={activePeriodValue} setCurrentPageCoins={setCurrentPageCoins} setTotalPages={setTotalPages} currentPage={currentPage} /> },
    { id: "history", title: "My Trading History", content: <HistoryTab activePeriodValue={activePeriodValue} setCurrentPageCoins={setCurrentPageCoins} setTotalPages={setTotalPages} currentPage={currentPage} /> },
  ];
  const [siblings, setSiblings] = useState(getSiblings());

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container className={classes.container} padding={48}>
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
          <Text className={classes.grayText}>{(currentPage - 1) * 5 + 1}-{(currentPage - 1) * 5 + (currentPageCoins ? currentPageCoins : 0)} of {totalPages}</Text>
          <Pagination value={currentPage} onChange={setCurrentPage} total={Math.ceil(totalPages / 20)} defaultValue={1} {...{ siblings }}>
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
