import { Table } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { $ratesResponse, navv } from "@/pages/trade/model";
import { useUnit } from "effector-react";
import { Crypto } from "../../../../api/types";
import { Favorite } from "../Favorite/Favorite";
import classes from "./CoinsTable.module.css";

export const CoinsTable = ({
  coins,
  isFiat,
  isMain,
  setCurrentPair,
  search
}: {
  coins: Crypto[]
  isFiat: boolean
  isMain: boolean
  setCurrentPair: Dispatch<SetStateAction<string>>
  search: string
}) => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const rates = useUnit<any>($ratesResponse);
  const handleRowClick = (index: string) => {
    setSelectedRow(index);
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
          {coins.filter(e => e.symbol.startsWith(search)).map((row, rowIndex) => (
            isFiat ? (
              row.fiat_pairs.filter(e => e.startsWith(search)).map(pair => (
                <Table.Tr
                  key={pair}
                  onClick={() => {
                    handleRowClick(pair)
                    setCurrentPair(pair.substring(0, row.symbol.length) + "/" + pair.substring(row.symbol.length));
                    navv(pair.substring(0, row.symbol.length) + "-" + pair.substring(row.symbol.length))
                  }}
                  className={clsx(classes.tableRow, classes.noSelect, { [classes.rowHover]: true, [classes.rowSelected]: selectedRow === pair })}
                >
                  <Table.Td>
                    <div className={classes.tableFavoriteCellWrapper}>
                      <Favorite />
                      <p>{pair.substring(0, row.symbol.length) + "/" + pair.substring(row.symbol.length)}</p>
                    </div>
                  </Table.Td><Table.Td>
                    {rates["usd"] ? (row.price * rates["usd"][pair.substring(row.symbol.length).toLocaleLowerCase()]).toFixed(2) : row.price}
                  </Table.Td>
                </Table.Tr>
              ))
            ) :
              (<Table.Tr
                key={row.symbol + "USDT"}
                onClick={() => {
                  handleRowClick(row.symbol + "USDT")
                  setCurrentPair(row.symbol + "/USDT");
                  navv(row.symbol + "-USDT")
                }}
                className={clsx(classes.tableRow, classes.noSelect, { [classes.rowHover]: true, [classes.rowSelected]: selectedRow === row.symbol + "USDT" })}
              >
                <Table.Td>
                  <div className={classes.tableFavoriteCellWrapper}>
                    <Favorite />
                    <p>{row.symbol + "/USDT"}</p>
                  </div>
                </Table.Td><Table.Td>
                  {row.price}
                </Table.Td>
              </Table.Tr>)
          ))}
          {coins.map((row, rowIndex) => (
            isMain ? (
              row.fiat_pairs.filter(e => e.startsWith(search)).map(pair => (
                <Table.Tr
                  key={pair}
                  onClick={() => {
                    handleRowClick(pair)
                    setCurrentPair(pair.substring(0, row.symbol.length) + "/" + pair.substring(row.symbol.length));
                    navv(pair.substring(0, row.symbol.length) + "/" + pair.substring(row.symbol.length))
                  }}
                  className={clsx(classes.tableRow, classes.noSelect, { [classes.rowHover]: true, [classes.rowSelected]: selectedRow === pair })}
                >
                  <Table.Td>
                    <div className={classes.tableFavoriteCellWrapper}>
                      <Favorite />
                      <p>{pair.substring(0, row.symbol.length) + "-" + pair.substring(row.symbol.length)}</p>
                    </div>
                  </Table.Td><Table.Td>
                    {rates["usd"] ? (row.price * rates["usd"][pair.substring(row.symbol.length).toLocaleLowerCase()]).toFixed(2) : row.price}
                  </Table.Td>
                </Table.Tr>
              ))
            ) : (null)
          ))}


        </Table.Tbody>
      </Table>
    </div>
  );
};
