import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { MarketSortIcon } from "@/shared/ui";

import tradeHistoryClasses from "../../TradeHistory.module.css";
import { dataMobile, headerMobile } from "./HistoryTab.constants";
import classes from "./HistoryTab.module.css";

export const HistoryTabMobile = () => {
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });
  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({ ...sortState, sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3) });
  };
  return (
    <div className={tradeHistoryClasses.containerScrolled}>
      <Table className={classes.table} withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            {headerMobile.map((cell) => (
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
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dataMobile.map((row, i) => (
            <Table.Tr key={i} h="70.05px">
              {row.map((cell) => (
                <Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                  {cell.value}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
