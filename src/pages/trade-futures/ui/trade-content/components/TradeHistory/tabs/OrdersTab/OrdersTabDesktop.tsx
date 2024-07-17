import { Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { PromoPopup } from "@/pages/trade-futures/ui/promo-popup/PromoPopup";

import { MarketSortIcon } from "@/shared/ui";

import { data, header } from "./OrdersTab.constants";
import classes from "./OrdersTab.module.css";

export const OrdersTabDesktop = () => {
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });

  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({ ...sortState, sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3) });
  };

  const handleSettingsClick = (rowIndex: number) => {
    setOpen(true);
    console.log(`Settings clicked for row ${rowIndex}`);
  };

  const [open, setOpen] = useState(false);

  return (
    <Table className={classes.table} withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          {header.map((cell) => (
            <Table.Th key={cell}>
              <Group gap={0} onClick={() => sortHandler(cell)}>
                {cell}
                {cell.length !== 0 ? (
                  <div
                    className={clsx(
                      classes.sortArrowWrapper,
                      sortState.sortCol === cell && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                      sortState.sortCol === cell && sortState.sortFunc === 3 && classes.rotate,
                    )}
                  >
                    <MarketSortIcon width={20} height={20} />
                  </div>
                ) : null}
              </Group>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <PromoPopup handleSave={() => console.log("")} handleClose={() => setOpen(false)} opened={open} />
      <Table.Tbody>
        {data.map((row, i) => (
          <Table.Tr key={i}>
            {row.map((cell, j) => {
              const isDirection = cell.key === "Direction";
              const isPL = cell.key === "P&L";
              const directionClass = cell.value === "Long" ? classes.green : classes.red;

              if (cell.key === "TP/SL") {
                return (
                  <>
                    <Table.Td
                      key={cell.key}
                      className={clsx({ [directionClass]: isDirection || (isPL && row[1].value === "Long") || (isPL && row[1].value === "Short") })}
                    >
                      {cell.value}
                    </Table.Td>
                    <Table.Td key={`settings-${i}`} className={classes.settingsIconCell}>
                      <button onClick={() => handleSettingsClick(i)} className={classes.settingsButton}>
                        <img src={"/assets/settings-icon.png"} alt="Settings" className={classes.settingsIcon} />
                      </button>
                    </Table.Td>
                  </>
                );
              }

              return (
                <Table.Td
                  key={cell.key}
                  className={clsx({ [directionClass]: isDirection || (isPL && row[1].value === "Long") || (isPL && row[1].value === "Short") })}
                >
                  {cell.value}
                </Table.Td>
              );
            })}
            <Table.Td key={`market-${i}`}>
              <button>Market</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
