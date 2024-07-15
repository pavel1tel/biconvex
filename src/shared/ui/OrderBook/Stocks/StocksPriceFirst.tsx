import { Table } from "@mantine/core";
import { useEffect, useState } from "react";

import { OrderRows } from "@/shared/types/OrderBook.types";
import { SortIcon } from "@/shared/ui/icon/SortIcon";

import classes from "../OrderBook.module.css";
import { Orders } from "../Orders/Orders";

interface TableProps {
  header: Array<string>;
  rows: OrderRows;
  isPositive: boolean;
  cellsOrderChanged: boolean;
}

export const StocksPriceFirst = ({ header, rows, isPositive, cellsOrderChanged }: TableProps) => {
  const [stockRows, setStockRows] = useState<OrderRows>([]);

  useEffect(() => {
    const newRows = JSON.parse(JSON.stringify(rows));
    setStockRows(newRows);
  }, [isPositive, rows]);

  return (
    <Table className={classes.leftPositionedTable}>
      <Table.Thead className={classes.tableTHead}>
        <Table.Tr>
          {header.map((head) => (
            <Table.Th key={head} className={classes.tableTh}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Orders {...{ rows, isPositive, cellsOrderChanged }} rows={stockRows} />
    </Table>
  );
};
