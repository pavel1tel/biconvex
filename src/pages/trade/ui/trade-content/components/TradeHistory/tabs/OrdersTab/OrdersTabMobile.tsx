import { CloseButton, Flex, Group, Table, Text } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $openOrdersResponse } from "@/pages/trade/model";

import { cancelOrder, requestOpenOrders } from "@/shared/api/trading/requests";
import { OpenOrderResponse } from "@/shared/api/types";
import { NoRecords } from "@/shared/ui";

import tradeHistoryClasses from "../../TradeHistory.module.css";
import { headerMobile } from "./OrdersTab.constants";
import classes from "./OrdersTab.module.css";

export const OrdersTabMobile = ({ setTotalPages, currentPage, setCurrentPageCoins, activePeriodValue }) => {
  const openOrdersReponse = useUnit<OpenOrderResponse>($openOrdersResponse);
  const openOrdersReponsePending = useUnit(requestOpenOrders.pending);
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

  const handleCancel = (id) => {
    cancelOrder(id);
  };

  useEffect(() => {
    if (!openOrdersReponsePending) {
      const temp: any[] = [];
      const startIndex = (currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      filterByPeriod(openOrdersReponse.orders, activePeriodValue)
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
              key: "Order Type",
              value: order.category.slice(0, 1) + order.category.slice(1).toLowerCase(),
            },
            {
              key: "Qty",
              value: parseFloat(order.amount.toFixed(5)),
            },
            {
              key: "id",
              value: order.id,
            },
          ]);
        });
      setTotalPages(filterByPeriod(openOrdersReponse.orders, activePeriodValue).length);
      setCurrentPageCoins(temp.length);
      setData(temp);
    }
  }, [openOrdersReponse, openOrdersReponsePending, currentPage, activePeriodValue]);
  return (
    <div className={tradeHistoryClasses.containerScrolled}>
      <Table className={classes.table} withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            {headerMobile.map((cell) => (
              <Table.Th key={cell}>
                <Group gap={0}>{cell}</Group>
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, i) => (
            <Table.Tr key={i}>
              {row.map((cell) => {
                return cell.key != "id" ? (
                  <Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                    {cell.value}
                  </Table.Td>
                ) : null;
              })}
              <Table.Td>
                <button>
                  <CloseButton className={classes.closeButton} onClick={() => handleCancel(row.find((cell) => cell.key == "id")!.value)} />
                </button>
              </Table.Td>
            </Table.Tr>
          ))}
          {data.length < 5 && data.length !== 0 && (
            <>
              {new Array(5 - data.length).fill("").map((item, idx) => (
                <Table.Tr key={idx}>
                  {new Array(4).fill("").map((cell, j) => {
                    return (
                      <Table.Td key={cell.key} h={58}>
                        {""}
                      </Table.Td>
                    );
                  })}
                  <Table.Td key={`market-${idx}`} h={58}>
                    <button>{""}</button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </>
          )}

          {data.length === 0 && (
            <>
              <Table.Tr pos="relative" h={290}>
                <Table.Td>
                  <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="22%" gap="10px">
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
    </div>
  );
};
