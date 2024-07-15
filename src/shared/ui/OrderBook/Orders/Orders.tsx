import { priceFirstOrderBackgroundStyles, qtyFirstOrderBackgroundStyles } from "@/helpers/orderBackgroundStyles";
import { Table } from "@mantine/core";
import clsx from "clsx";

import { OrderRows } from "@/shared/types/OrderBook.types";

import classes from "../OrderBook.module.css";

interface BidsProps {
  rows: OrderRows;
  isPositive: boolean;
  cellsOrderChanged: boolean;
  className?: string;
}

export const Orders = ({ rows, isPositive, cellsOrderChanged, className = "" }: BidsProps) => {
  return (
    <Table.Tbody className={classes.tableBody}>
      {rows.map((row) => (
        <Table.Tr
          key={row.id}
          style={() => (!cellsOrderChanged ? priceFirstOrderBackgroundStyles(row, isPositive) : qtyFirstOrderBackgroundStyles(row, isPositive))}
          className={clsx(cellsOrderChanged ? classes.stocksRowReversed : classes.stocksRow, classes[className])}
        >
          {row.cells.map((td) => (
            <Table.Td key={td} className={clsx(classes.tableCell, !isPositive ? classes.tableCellNegative : "")}>
              <p className={classes.tableCellValue}>{td}</p>
            </Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};
