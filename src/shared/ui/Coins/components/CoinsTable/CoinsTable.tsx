import { Table, TableData } from "@mantine/core";

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
  return (
    <div className={classes.tableContainer}>
      <Table
        data={tableData}
        withRowBorders={false}
        classNames={{ th: classes.tableTh, td: classes.tableTd, thead: classes.tableTHead }}
        stickyHeader
      ></Table>
    </div>
  );
};
