import { Flex, StyleProp } from "@mantine/core";
import clsx from "clsx";

// import { NegativeTrendIcon } from "../icon/NegativeTrendIcon";
// import { PositiveTrendIcon } from "../icon/PositiveTrendIcon";
import { SortIcon } from "../icon/SortIcon";
import classes from "./OrderBook.module.css";
import { Container } from "../TradePageContainer/Container";
// import { NegativeTrendIcon } from "../icon/NegativeTrendIcon";
// import { PositiveTrendIcon } from "../icon/PositiveTrendIcon";

const header = ["Price USD", "Qty BTC", "Qty BTC","Price USD",];
const rows = [
  {
    id: 1,
    fill: 60,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 2,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 3,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 4,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 5,
    fill: 50,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 6,
    fill: 80,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 7,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 8,
    fill: 0,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 9,
    fill: 20,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 10,
    fill: 95,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 11,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993"],
  },
];
const fullRows = [
  ...rows,
  {
    id: 12,
    fill: 77,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 13,
    fill: 88,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 14,
    fill: 55,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 15,
    fill: 33,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 16,
    fill: 22,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 17,
    fill: 46,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 18,
    fill: 37,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 19,
    fill: 54,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 20,
    fill: 66,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 21,
    fill: 99,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 22,
    fill: 10,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 23,
    fill: 16,
    cells: ["$ 38,555.19", "0.299993"],
  },
  {
    id: 24,
    fill: 45,
    cells: ["$ 38,555.19", "0.299993"],
  },
];

export const OrderBookMobile = ({ activeCategory,addScroll,direction="row" }: { activeTab: string; activeCategory: string,addScroll?: boolean,direction?:StyleProp<'row' |'column' | undefined> }) => {


  return (
    <div className={classes.tableContainer}>

      <div className={classes.tableTHead}>
        <Flex style={activeCategory !== "All" ? {gap:"48px"}:{justifyContent:"space-between"}}>
          {(activeCategory !== "All" ? ["Qty BTC","Price USD"] : header).map((head,i) => (
            <div key={i} className={classes.tableTh}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </div>
          ))}
        </Flex>
      </div>


    <Flex


      gap="xs"
      justify="flex-start"
      align="center"
      direction={direction}
    >

  
    <div style={addScroll ? { height: "195px", overflow: "auto",flexGrow:1 } : {flexGrow:1}}>
      <div className={classes.table}>
        <div className={classes.tableBody}>
          {(activeCategory === "All" ? rows : fullRows.slice(0,11)).map((row) => (
            <div
              key={row.id}
              className={clsx(
                classes.tableRow,
                activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative,
                classes.tabelRowNegative
              )}
              style={activeCategory === "All" ? {
                background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
                  activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
                } ${100 - row.fill}%)`,
              } : {
                background: `linear-gradient(90deg,  ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"} ${100 - row.fill}%, rgba(12,13,16,1) ${100 - row.fill}%)`,
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
    

    {activeCategory === "All"?

    <div style={addScroll ? { height: "195px", overflow: "auto",flexGrow:1 } : {flexGrow:1}}>
      <div className={classes.table}>
        <div className={classes.tableBody}>
          {activeCategory === "All" &&
            rows.map((row) => (
              <div
                key={row.id}
                className={clsx(classes.tableRow, classes.negativeText,classes.tabelRowNegative)}
                style={{
                  background: `linear-gradient(90deg, rgba(244, 74, 74, 0.8) ${100 - row.fill}%, rgba(12,13,16,1)${
                    100 - row.fill
                  }%)`,
                }}
              >
                {row.cells.map((td) => (
                  <div key={td}                 className={clsx(classes.tableCell, classes.negativeText)}
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
    </Flex>
  </div>
  );
};



export const OrderBookMobileTradeTab = ({ activeCategory,addScroll }: { activeTab: string; activeCategory: string,addScroll?: boolean}
) => {


  return (
    <Container className={classes.tableContainer}>

      <div className={classes.tableTHead}>
        <Flex style={ {gap:"120px"}}>
          {["Price USD", "Qty BTC"].map((head,i) => (
            <div key={i} className={classes.tableTh}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </div>
          ))}
        </Flex>
      </div>


    <Flex


      gap="xs"
      justify="flex-start"
      align="center"
      direction="column-reverse"
    >

  
    <div style={addScroll ? { height: "195px", overflow: "auto",flexGrow:1,width:"100%" } : {flexGrow:1}}>
      <div className={classes.table}>
        <div className={classes.tableBody}>
          {(activeCategory === "All" ? rows : fullRows.slice(0,11)).map((row) => (
            <div
              key={row.id}
              className={clsx(
                classes.tableRow,
                activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative,
                classes.tabelRowNegative
              )}
              style={activeCategory === "All" ? {
                background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
                  activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
                } ${100 - row.fill}%)`,
              } : {
                background: `linear-gradient(90deg,  ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"} ${100 - row.fill}%, rgba(12,13,16,1) ${100 - row.fill}%)`,
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
    

 
    

    <div className={classes.tableTHead} style={{alignSelf:"flex-start"}}>
        <Flex style={ {gap:"120px"}}>
          {["Price USD", "Qty BTC"].map((head,i) => (
            <div key={i} className={classes.tableTh}>
              <div>
                <p>{head}</p>
                <SortIcon />
              </div>
            </div>
          ))}
        </Flex>
      </div>

      <div className={classes.number}>
      38,555.19
    </div>
    <div style={addScroll ? { height: "195px", overflow: "auto",flexGrow:1,width:"100%" } : {flexGrow:1}}>
      <div className={classes.table}>
        <div className={classes.tableBody}>
          {activeCategory === "All" &&
            rows.map((row) => (
              <div
                key={row.id}
                className={clsx(classes.tableRow, classes.negativeText,classes.tabelRowNegative)}
                style={{
                  background: `linear-gradient(90deg, rgba(244, 74, 74, 0.8) ${100 - row.fill}%, rgba(12,13,16,1)${
                    100 - row.fill
                  }%)`,
                }}
              >
                {row.cells.map((td) => (
                  <div key={td}                 className={clsx(classes.tableCell, classes.negativeText)}
                  >
                    <p>{td}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>

    </Flex>
  </Container>
  );
};
