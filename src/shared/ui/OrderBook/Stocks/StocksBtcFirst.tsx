import { transformAsksAndBidsRows } from "@/helpers/transformAsksAndBidsRows";
import { Table } from "@mantine/core";

import { OrderRows } from "@/shared/types/OrderBook.types";
import { SortIcon } from "@/shared/ui/icon/SortIcon";

import classes from "../OrderBook.module.css";
import { Orders } from "../Orders/Orders";

interface TableProps {
  header: Array<string>;
  rows: OrderRows;
  isPositive: boolean;
  className?: string;
}

export const StocksBtcFirst = ({ header, rows, isPositive, className = "" }: TableProps) => {
  return (
    <Table {...{ className }}>
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
      <Orders {...{ isPositive }} rows={transformAsksAndBidsRows(rows)} cellsOrderChanged={true} />
    </Table>
  );
};
