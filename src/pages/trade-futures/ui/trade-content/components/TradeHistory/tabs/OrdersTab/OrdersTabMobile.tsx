import { Button, Group, Table } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { PromoPopup } from "@/pages/trade-futures/ui/promo-popup/PromoPopup";

import { MarketSortIcon } from "@/shared/ui";

import tradeHistoryClasses from "../../TradeHistory.module.css";
import TradeDetailsModal from "./ModalOrdersTabMobile/ModalOrdersTabMobile";
import { dataMobile, headerMobile } from "./OrdersTab.constants";
import classes from "./OrdersTab.module.css";

export const OrdersTabMobile = () => {
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);

  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({ ...sortState, sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3) });
  };

  const handleOpenClick = (rowData: any) => {
    setSelectedData(rowData);
    setModalOpened(true);
  };

  return (
    <div className={tradeHistoryClasses.containerScrolled}>
      {/* <PromoPopup handleSave={() => console.log("")} handleClose={() => setOpen(false)} opened={true} /> */}
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
            <Table.Tr key={i}>
              {row.map((cell) => (
                <Table.Td key={cell.key} className={clsx({ [classes.green]: cell.value === "Buy", [classes.red]: cell.value === "Sell" })}>
                  {cell.value}
                </Table.Td>
              ))}
              <Table.Td>
                <Button variant="radial-gradient" className={classes.openOrderBtn} onClick={() => handleOpenClick(row)}>
                  Open
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      {selectedData && (
        <TradeDetailsModal
          onPopup={() => setOpen(true)}
          openPopup={open}
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          data={selectedData}
        />
      )}
      <PromoPopup opened={open} handleClose={() => setOpen(false)} handleSave={() => console.log("")} />
    </div>
  );
};
