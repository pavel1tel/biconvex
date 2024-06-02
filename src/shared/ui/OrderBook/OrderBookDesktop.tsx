
import clsx from "clsx";

import classes from "./OrderBook.module.css";
import { NegativeTrendIcon } from "../icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "../icon/PositiveTrendIcon";
import { SortIcon } from "../icon/SortIcon";
import { Table } from "@mantine/core";

const header = ["Price USD", "Qty BTC", "Total USD"];
const rows = [
  {
    id: 1,
    fill: 60,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 2,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 3,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 4,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 5,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 6,
    fill: 80,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 7,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 8,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 9,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 10,
    fill: 95,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 11,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
];
const fullRows = [
  ...rows,
  {
    id: 12,
    fill: 77,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 13,
    fill: 88,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 14,
    fill: 55,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 15,
    fill: 33,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 16,
    fill: 22,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 17,
    fill: 46,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 18,
    fill: 37,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 19,
    fill: 54,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 20,
    fill: 66,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 21,
    fill: 99,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  {
    id: 22,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  },
  // {
  //   id: 23,
  //   fill: 16,
  //   cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  // },
  // {
  //   id: 24,
  //   fill: 45,
  //   cells: ["$ 38,555.19", "0.299993", "$ 15,156.56"],
  // },
];

export const OrderBookDesktop = ({ isFullRows,activeCategory, addScroll }: { isFullRows?:boolean,activeCategory: string; addScroll?: boolean }) => {
  return (
    <div className={classes.tableContainer}>
      <Table className={classes.table}>
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
      </Table>

 
      <div style={addScroll && activeCategory === 'All' ? { height: "210px", overflow: "auto" } : {}}>
        <div className={classes.table}>
          <div className={classes.tableBody}>
            {(activeCategory === "All" ? rows :isFullRows? fullRows:rows).map((row) => (
              <div
                key={row.id}
                className={clsx(
                  classes.tableRow,
                  activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative
                )}
                style={{
                  background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
                    activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
                  } ${100 - row.fill}%)`,
                }}
              >
                {row.cells.map((td) => (
                  <div key={td} className={classes.tableCell}>
                    <p>{td}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.table}>
        <div className={classes.tableBody}>
          <div className={classes.tableRow}>
            <div className={clsx(classes.tableCell, classes.totalCell)} style={{width:'100%'}}>
              <p
                className={clsx(classes.orderBookInfo, {
                  [classes.negative]: activeCategory === "Bids",
                  [classes.positive]: activeCategory === "All" || activeCategory === "Asks",
                })}
              >
                $ 38,555.19 {activeCategory === "Bids" ? <NegativeTrendIcon /> : <PositiveTrendIcon />}
              </p>
            </div>
          </div>
        </div>
      </div>
      {activeCategory === 'All'?
      
      <div style={addScroll ? { height: "210px", overflow: "auto" } : {}}>
        <div className={classes.table}>
          <div className={classes.tableBody}>
            {activeCategory === "All" &&
              rows.map((row) => (
                <div
                  key={row.id}
                  className={clsx(classes.tableRow, classes.negative)}
                  style={{
                    background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, rgba(244, 74, 74, 0.8) ${
                      100 - row.fill
                    }%)`,
                  }}
                >
                  {row.cells.map((td) => (
                    <div key={td}                   className={clsx(classes.tableCell, classes.negativeText)}
                    >
                      <p>{td}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
:null}
    </div>
  );
};
