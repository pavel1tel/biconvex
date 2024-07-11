import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useState } from "react";


import { $openOrdersResponse } from "@/pages/trade/model";
import { cancelOrder, requestOpenOrders } from "@/shared/api/trading/requests";
import { OpenOrderResponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { header } from "./OrdersTab.constants";
import classes from "./OrdersTab.module.css";

export const OrdersTabDesktop = ({ setTotalPages, currentPage, setCurrentPageCoins, activePeriodValue }) => {
  const openOrdersReponse = useUnit<OpenOrderResponse>($openOrdersResponse);
  const openOrdersReponsePending = useUnit(requestOpenOrders.pending);
  const [data, setData] = useState<any[]>([]);

  const parseDate = (dateString) => {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('/').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute);
  };

  const filterByPeriod = (data, period : string) => {
    const now = new Date();
    let fromDate;
    console.log(period)
    switch (period.toLocaleLowerCase()) {
      case '1d':
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 1);
        break;
      case '3d':
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 3);
        break;
      case '1w':
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 7);
        break;
      case '1M':
        fromDate = new Date(now);
        fromDate.setMonth(now.getMonth() - 1);
        break;
      default:
        throw new Error('Unsupported period');
    }

    return data.filter(item => parseDate(item.date) >= fromDate);
  };

  const handleCancel = (id) => {
    cancelOrder(id)
  }

  useEffect(() => {
    if (!openOrdersReponsePending) {
      let temp: any[] = [];
      const startIndex = (currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      filterByPeriod(openOrdersReponse.orders, activePeriodValue).slice(startIndex, endIndex).forEach((order) => {
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
            key: "Order Price",
            value: "$" + parseFloat(order.full_price.toFixed(2)),
          },
          {
            key: "Price",
            value: "$" + parseFloat(order.order_price.toFixed(2)),
          },
          {
            key: "Order ID",
            value: order.order_id,
          },
          {
            key: "Order Time",
            value: order.date,
          },
          {
            key: "id",
            value: order.id,
          }])
      })
      setTotalPages(filterByPeriod(openOrdersReponse.orders, activePeriodValue).length)
      setCurrentPageCoins(temp.length)
      setData(temp)
    }
  }, [openOrdersReponse, openOrdersReponsePending, currentPage, activePeriodValue])


  return (
    <Table className={classes.table} withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          {header.map((cell) => (
            <Table.Th key={cell}>
              <Group gap={0} >
                {cell}
              </Group>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row: any[], i) => (
          <Table.Tr key={i}>
            {row.map((cell) => {
              return cell.key != "id" ? (<Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                {cell.value}
              </Table.Td>) : null
            }
            )}
            <Table.Td>
              <button onClick={() => handleCancel(row.find(cell => cell.key == "id").value)}>Cancel</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
