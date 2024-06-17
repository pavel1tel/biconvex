import { Table, TableData } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { Favorite } from "../Favorite/Favorite";
import classes from "./CoinsTable.module.css";

const tableData: TableData = {
  head: ["Pair", "Price"],
  body: [
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
    [
      <div className={classes.tableFavoriteCellWrapper}>
        <Favorite />
        <p>BTC/USDT</p>
      </div>,
      "$43,975.72",
    ],
  ],
};

export const CoinsTable = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index);
  };

  return (
    <div className={classes.tableContainer}>
      <Table
        data={tableData}
        withRowBorders={false}
        classNames={{ th: classes.tableTh, td: classes.tableTd, thead: classes.tableTHead }}
        stickyHeader
      >
        <Table.Thead>
          <Table.Tr>{tableData.head ? tableData.head.map((header, index) => <Table.Th key={index}>{header}</Table.Th>) : null}</Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {tableData.body
            ? tableData.body.map((row, rowIndex) => (
                <Table.Tr
                  key={rowIndex}
                  onClick={() => handleRowClick(rowIndex)}
                  className={clsx(classes.tableRow, classes.noSelect, { [classes.rowHover]: true, [classes.rowSelected]: selectedRow === rowIndex })}
                >
                  {row.map((cell, cellIndex) => (
                    <Table.Td key={cellIndex}>{cell}</Table.Td>
                  ))}
                </Table.Tr>
              ))
            : null}
        </Table.Tbody>
      </Table>
    </div>
  );
};
