import { Flex, Group, Table, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { MarketSortIcon, NoRecords } from "@/shared/ui";

import { data, header } from "./HistoryTab.constants";
import classes from "./HistoryTab.module.css";

export const HistoryTabDesktop = () => {
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });

  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({ ...sortState, sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3) });
  };

  const renderThead = (cell: string) => {
    if (cell === "Filled Time") {
      return (
        <Table.Th key={cell} w={140}>
          <Group gap={0} onClick={() => sortHandler(cell)}>
            {cell}
            <div
              className={clsx(
                classes.sortArrowWrapper,
                sortState.sortCol === cell && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                sortState.sortCol === cell && sortState.sortFunc === 3 && classes.rotate,
              )}
            >
              <MarketSortIcon width={20} height={20} />
            </div>
          </Group>
        </Table.Th>
      );
    } else if (cell === "Fee") {
      return (
        <Table.Th key={cell} w={250}>
          <Group gap={0} onClick={() => sortHandler(cell)}>
            {cell}
            <div
              className={clsx(
                classes.sortArrowWrapper,
                sortState.sortCol === cell && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                sortState.sortCol === cell && sortState.sortFunc === 3 && classes.rotate,
              )}
            >
              <MarketSortIcon width={20} height={20} />
            </div>
          </Group>
        </Table.Th>
      );
    } else {
      return (
        <Table.Th key={cell}>
          <Group gap={0} onClick={() => sortHandler(cell)}>
            {cell}
            <div
              className={clsx(
                classes.sortArrowWrapper,
                sortState.sortCol === cell && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                sortState.sortCol === cell && sortState.sortFunc === 3 && classes.rotate,
              )}
            >
              <MarketSortIcon width={20} height={20} />
            </div>
          </Group>
        </Table.Th>
      );
    }
  };
  return (
    <Table className={classes.table} withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          {header.map((cell) => (
            <>{renderThead(cell)}</>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.length > 0 &&
          data.map((row, i) => (
            <Table.Tr key={i}>
              {row.map((cell) => {
                const isDirection = cell.key === "Direction";
                const isPL = cell.key === "P&L";
                const directionClass = isDirection ? (cell.value === "Long" ? classes.green : cell.value === "Short" ? classes.red : "") : "";
                const plClass = isPL ? (parseFloat(cell.value) > 0 ? classes.green : parseFloat(cell.value) < 0 ? classes.red : "") : "";
                const isBitcoinUsdt = cell.value === "Bitcoin/USDT";
                const bitusdtClass = isBitcoinUsdt ? classes.bitcoinUSDT : "";
                return (
                  <Table.Td key={cell.key} className={clsx({ [directionClass]: isDirection, [plClass]: isPL, [bitusdtClass]: isBitcoinUsdt })}>
                    {cell.value}
                  </Table.Td>
                );
              })}
            </Table.Tr>
          ))}
        {data.length < 8 && data.length !== 0 && (
          <>
            {new Array(8 - data.length).fill("").map((item, idx) => (
              <Table.Tr key={idx}>
                {new Array(9).fill("").map((rowItem, index) => (
                  <Table.Td h={61.1} key={rowItem + index}>
                    {rowItem}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </>
        )}
        {data.length === 0 && (
          <>
            <Table.Tr pos="relative" h={488}>
              <Table.Td>
                <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="40%" gap="10px">
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
