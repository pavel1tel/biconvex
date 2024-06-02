import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Box, Button, Group, Image, Pagination, Stack, Table, Text, rem } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

import { NextIcon, PreviousIcon } from "@/shared/ui";

import classes from "./Trade.module.css";

const header = [
  { title: "Trader", key: "trader" },
  { title: "Payment", key: "payment" },
  { title: "Price", key: "price" },
  { title: "Limits", key: "limits" },
  { title: "Action", key: "action" },
];

export const Trade = ({ tabName }: { tabName: string }) => {
  const body = useMemo(
    () => [
      {
        id: "1",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "2",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "3",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "4",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "5",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "6",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "7",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "8",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "9",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "10",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "11",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
      {
        id: "12",
        trader: {
          img: `${import.meta.env.BASE_URL}assets/air_user.png`,
          name: "Air user",
          userStats: "454 orders, 96%",
          status: "online",
        },
        payment: "Card to card",
        price: "34,929 USD",
        limits: "50 - 62,311 USD",
        action: <Button className={classes.sellButton}>{`${tabName} BTC`}</Button>,
      },
    ],
    [tabName],
  );
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
    <div className={classes.tableContainer}>
      <Box className={classes.tableWrapper}>
        <Table classNames={{ thead: classes.tableHead, th: classes.tableTh, tr: classes.tableBodyTr, td: classes.tableTd }} withRowBorders={false}>
          <Table.Thead>
            <Table.Tr className={classes.tableHeaderTr}>
              {header.map(({ title, key }) => (
                <Table.Th key={key}>{title}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {body.map(({ id, trader, payment, price, limits, action }) => (
              <Table.Tr key={id}>
                <Table.Td>
                  <Group gap={13} align="center">
                    <div className={classes.imageWrapper}>
                      <Image src={trader.img} alt="avatar" />
                      <div className={clsx(classes.indicator, { [classes.online]: trader.status === "online" })} />
                    </div>
                    <Stack gap={4}>
                      <Text className={clsx(classes.userName, { [classes.online]: trader.status === "online" })}>{trader.name}</Text>
                      <Text className={classes.userStats}>{trader.userStats}</Text>
                    </Stack>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text className={clsx(classes.badge, classes.orange)}>{payment}</Text>
                </Table.Td>
                <Table.Td>
                  <Text className={classes.price}>{price}</Text>
                </Table.Td>
                <Table.Td>
                  <Text>{limits}</Text>
                </Table.Td>
                <Table.Td>
                  <Group justify="center">{action}</Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
      <Group justify={"space-between"} mt={rem("32px")}>
        <Text variant="text-4" className={classes.paginationText}>
          1-20 of 9,383 assets
        </Text>
        <Pagination.Root
          total={20}
          defaultValue={1}
          classNames={{
            control: classes.control,
          }}
          {...{ siblings }}
        >
          <Group gap={8} justify="center">
            <Pagination.Previous icon={NextIcon} />
            <Pagination.Items />
            <Pagination.Next icon={PreviousIcon} />
          </Group>
        </Pagination.Root>
      </Group>
    </div>
  );
};
