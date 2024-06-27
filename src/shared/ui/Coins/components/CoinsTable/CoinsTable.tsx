import { Table } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { $ratesResponse } from "@/pages/trade/model";
import { useUnit } from "effector-react";
import { Crypto } from "../../../../api/types";
import { Favorite } from "../Favorite/Favorite";
import classes from "./CoinsTable.module.css";

export const CoinsTable = ({
  coins,
  sufix,
  setCurrentPair
}: {
  coins: Crypto[]
  sufix: string[],
  setCurrentPair: Dispatch<SetStateAction<string>>
}) => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const rates = useUnit<any>($ratesResponse);
  const handleRowClick = (index: string) => {
    setSelectedRow(index);
    setCurrentPair(index);
  };
  return (
    <div className={classes.tableContainer}>
      <Table
        withRowBorders={false}
        classNames={{ th: classes.tableTh, td: classes.tableTd, thead: classes.tableTHead }}
        stickyHeader
      >
        <Table.Thead>
          <Table.Tr>{["Pair", "Price"].map((header, index) => <Table.Th key={index}>{header}</Table.Th>)}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {coins.map((row, rowIndex) => (
            sufix.map((suf) => (
              <Table.Tr
                key={row.symbol + "/" + suf}
                onClick={() => handleRowClick(row.symbol + "/" + suf)}
                className={clsx(classes.tableRow, classes.noSelect, { [classes.rowHover]: true, [classes.rowSelected]: selectedRow === row.symbol + "/" + suf })}
              >
                <Table.Td>
                  <div className={classes.tableFavoriteCellWrapper}>
                    <Favorite />
                    <p>{row.symbol}/{suf}</p>
                  </div>
                </Table.Td><Table.Td>
                  {rates && suf != "USDT" && suf != "USD" ? (row.price * rates["usd"][suf.toLocaleLowerCase()]).toFixed(2) : row.price}
                </Table.Td>
              </Table.Tr>
            ))
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
