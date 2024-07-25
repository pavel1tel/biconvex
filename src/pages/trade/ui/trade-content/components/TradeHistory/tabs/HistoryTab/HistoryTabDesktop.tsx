import { Flex, Group, Table, Text } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $historyOrdersResponse } from "@/pages/trade/model";

import { requestHistoryOrders } from "@/shared/api/trading/requests";
import { OpenOrderResponse } from "@/shared/api/types";
import { NoRecords } from "@/shared/ui";

import { header } from "./HistoryTab.constants";
import classes from "./HistoryTab.module.css";

export const HistoryTabDesktop = ({ setTotalPages, currentPage, setCurrentPageCoins, activePeriodValue }) => {
  const historyOrderResponse = useUnit<OpenOrderResponse>($historyOrdersResponse);
  const historyOrderResponsePending = useUnit(requestHistoryOrders.pending);
  const [data, setData] = useState<any[]>([]);

  const parseDate = (dateString) => {
    const [datePart, timePart] = dateString.split(" ");
    const [year, month, day] = datePart.split("/").map(Number);
    const [hour, minute] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
  };

  const filterByPeriod = (data, period) => {
    const now = new Date();
    let fromDate;
    switch (period) {
      case "1d":
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 1);
        break;
      case "3d":
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 3);
        break;
      case "1w":
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 7);
        break;
      case "1M":
        fromDate = new Date(now);
        fromDate.setMonth(now.getMonth() - 1);
        break;
      default:
        throw new Error("Unsupported period");
    }

    return data.filter((item) => parseDate(item.date) >= fromDate);
  };

  useEffect(() => {
    if (!historyOrderResponsePending) {
      const temp: any[] = [];
      const startIndex = (currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      console.log(activePeriodValue);
      filterByPeriod(historyOrderResponse.orders, activePeriodValue)
        .slice(startIndex, endIndex)
        .forEach((order) => {
          temp.push([
            {
              key: "Pairs",
              value: order.pair,
            },
            {
              key: "Direction",
              value: order.direction,
            },
            {
              key: "Filled Qty",
              value: parseFloat(order.amount.toFixed(5)),
            },
            {
              key: "Filled Price",
              value: "$" + parseFloat(order.price.toFixed(2)),
            },
            {
              key: "Fee",
              value: "$" + parseFloat(order.fee).toFixed(2),
            },
            {
              key: "Order ID",
              value: order.order_id,
            },
            {
              key: "Order Time",
              value: order.date,
            },
          ]);
        });
      setTotalPages(filterByPeriod(historyOrderResponse.orders, activePeriodValue).length);
      setCurrentPageCoins(temp.length);
      setData(temp);
    }
  }, [historyOrderResponse, historyOrderResponsePending, currentPage, activePeriodValue]);

  return (
    <Table className={classes.table} withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          {header.map((cell) => (
            <Table.Th key={cell}>
              <Group gap={0}>{cell}</Group>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.length > 0 &&
          data.map((row, i) => (
            <Table.Tr key={i}>
              {row.map((cell) => (
                <Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                  {cell.value}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        {data.length === 0 && (
          <>
            <Table.Tr pos="relative" h={400}>
              <Table.Td>
                <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="120px" gap="10px">
                  <NoRecords />
                  <Text className={classes.noRecords}>
                    No records
                    <br />
                    found
                  </Text>
                </Flex>
              </Table.Td>
            </Table.Tr>
          </>
        )}
      </Table.Tbody>
    </Table>
  );
};
