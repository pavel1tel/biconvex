import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Avatar, Box, Button, Group, Pagination, Stack, Table, Text, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $p2pResponse } from "@/pages/p2p/model";

import { getP2pInfo } from "@/shared/api/p2p/requests";
import { P2pResponse } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { LoadingScreen, NextIcon, PreviousIcon } from "@/shared/ui";

import classes from "./Trade.module.css";

const header = [
  { title: "Trader", key: "trader" },
  { title: "Payment", key: "payment" },
  { title: "Price", key: "price" },
  { title: "Limits", key: "lƒimits" },
  { title: "Action", key: "action" },
];

export const Trade = ({ tabName }: { tabName: string }) => {
  const p2pResponse = useUnit<P2pResponse | null>($p2pResponse);
  const p2pResponsePending = useUnit(getP2pInfo.pending);
  const [body, setBody] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSellers, setCurrentPageSellers] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(p2pResponsePending);
    if (p2pResponse) {
      console.log(p2pResponse);
      let temp: any[] = [];
      p2pResponse.sellers.forEach((sellser, index) => {
        temp.push({
          id: index,
          trader: {
            img: sellser.image,
            name: sellser.name,
            userStats: sellser.orders + " " + sellser.orders_percent,
            status: "online",
          },
          payment: sellser.payment_method,
          price: sellser.price,
          limits: sellser.limits,
          action: <Button onClick={() => showErrorNotification(p2pResponse.p2p_error)} className={classes.sellButton}>{`${tabName} BTC`}</Button>,
        });
      });
      const startIndex = (currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      setCurrentPageSellers(temp.slice(startIndex, endIndex).length);
      setBody(temp.slice(startIndex, endIndex));
    }
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [p2pResponse, p2pResponsePending, currentPage]);

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
    <div className={classes.tableContainer} style={{ height: loading ? "1667.8px" : "auto" }}>
      {loading && <LoadingScreen type="block" opened={loading} />}
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
                <Table.Td w="350px">
                  <Group gap={13} display="flex" dir="row" align="center">
                    <div className={classes.imageWrapper}>
                      <Avatar size={32} src={trader.img} alt="avatar" />
                      <div className={clsx(classes.indicator, { [classes.online]: trader.status === "online" })} />
                    </div>
                    <Stack gap={4}>
                      <Text className={clsx(classes.userName, { [classes.online]: trader.status === "online" })}>{trader.name}</Text>
                      <Text className={classes.userStats}>{trader.userStats}</Text>
                    </Stack>
                  </Group>
                </Table.Td>
                <Table.Td w="180px">
                  <Text className={clsx(classes.badge, classes.orange)}>{payment}</Text>
                </Table.Td>
                <Table.Td w="140px">
                  <Text className={classes.price}>{price}</Text>
                </Table.Td>
                <Table.Td w="180px">
                  <Text>{limits}</Text>
                </Table.Td>
                <Table.Td w="170px">
                  <Group justify="center">{action}</Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
      <Group justify={"space-between"} mt={rem("32px")}>
        <Text variant="text-4" className={classes.paginationText}>
          {(currentPage - 1) * 20 + 1}-{(currentPage - 1) * 20 + (currentPageSellers ? currentPageSellers : 0)} of {223}
        </Text>
        <Pagination
          value={currentPage}
          onChange={() => showErrorNotification(p2pResponse ? p2pResponse.p2p_error : "Error")}
          total={Math.ceil(223 / 15)}
          defaultValue={1}
          {...{ siblings }}
        >
          <Group gap={8} justify="center">
            <Pagination.Previous icon={NextIcon} />
            <Pagination.Items />

            <Pagination.Next icon={PreviousIcon} />
          </Group>
        </Pagination>
      </Group>
    </div>
  );
};
