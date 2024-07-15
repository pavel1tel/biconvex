import { Flex, StyleProp } from "@mantine/core";
import clsx from "clsx";

import { $coinPrice, $orderBookResponse } from "@/pages/trade/model";
import { getOrderBook } from "@/shared/api/trading/requests";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { Container } from "../TradePageContainer/Container";
import { NegativeTrendIcon } from "../icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "../icon/PositiveTrendIcon";
import { SortIcon } from "../icon/SortIcon";
import classes from "./OrderBook.module.css";

const header = ["Price USD", "Qty BTC", "Qty BTC", "Price USD",];

export const OrderBookMobile = ({ activeCategory, addScroll, direction = "row", currentPair, priceWs }: { activeTab: string; activeCategory: string, addScroll?: boolean, direction?: StyleProp<'row' | 'column' | undefined>; currentPair: string; priceWs: any }) => {
  const orderBookReponse = useUnit<any>($orderBookResponse);
  const orderBookResponsePending = useUnit(getOrderBook.pending);
  const [asks, setAsks] = useState<any[]>([])
  const [bids, setBids] = useState<any[]>([])
  const [reverseBids, setreverseBids] = useState<any[]>([])
  const coinPriceReponse = useUnit<any>($coinPrice);
  const [price, setPrice] = useState<any>({
    price: 0,
    up: false,
  })

  useEffect(() => {
    if (!orderBookResponsePending && orderBookReponse.asks) {
      {
        let max = Math.max.apply(Math, orderBookReponse.asks.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        orderBookReponse.asks.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: 100 - parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5)]
          })
        })
        setAsks(tempAsks.slice(0, 11))
      }
      {
        let max = Math.max.apply(Math, orderBookReponse.bids.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        let tempReverseBids: any[] = []
        orderBookReponse.bids.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5)]
          })
        })
        orderBookReponse.bids.forEach((ask) => {
          tempReverseBids.push({
            id: ask[0],
            fill: parseFloat(ask[1]) / (max / 2) * 100,
            cells: [parseFloat(ask[1]).toFixed(5), "$" + parseFloat(ask[0]).toFixed(2)]
          })
        })
        setBids(tempAsks.slice(0, 11))
        setreverseBids(tempReverseBids.slice(0, 11));
      }
    }
  }, [orderBookReponse, orderBookReponse]);

  useEffect(() => {
    let interval = setInterval(() => {
      getOrderBook(currentPair.split("/").join(""));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentPair]);

    useEffect(() => {
    setPrice({ price: parseFloat(coinPriceReponse?.price), up: false })
  }, [coinPriceReponse, currentPair])

  useEffect(() => {
    if (priceWs !== null) {
      let temp = JSON.parse(priceWs.data)
      setPrice((prev) => {
        return {
          price: parseFloat(temp["k"]["c"]),
          up: parseFloat(temp["k"]["c"]) > prev["price"]
        }
      })
    }
  }, [priceWs])

  return (
    <div className={classes.tableContainer}>

      <div className={classes.tableTHead}>
        <Flex style={activeCategory !== "All" ? { gap: "48px" } : { justifyContent: "space-between" }}>
          {(activeCategory !== "All" ? ["Qty BTC", "Price USD"] : header).map((head, i) => (
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


        <div style={addScroll ? { height: "195px", overflow: "auto", flexGrow: 1 } : { flexGrow: 1 }}>
          <div className={classes.table}>
            <div className={classes.tableBody}>
              {(activeCategory === "All" ? reverseBids : (activeCategory === "Bids" ? bids : asks)).map((row) => (
                <div
                  key={row.id}
                  className={clsx(
                    classes.tableRow,
                    activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative,
                    classes.tabelRowNegative
                  )}
                  style={activeCategory === "All" ? {
                    background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
                      } ${100 - row.fill}%)`,
                  } : {
                    background: `linear-gradient(90deg,  ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"} ${activeCategory === "Asks" ? 100 - row.fill : row.fill}%, rgba(12,13,16,1) ${activeCategory === "Asks" ? 100 - row.fill : row.fill}%)`,
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


        {activeCategory === "All" ?

          <div style={addScroll ? { height: "195px", overflow: "auto", flexGrow: 1 } : { flexGrow: 1 }}>
            <div className={classes.table}>
              <div className={classes.tableBody}>
                {activeCategory === "All" &&
                  asks.map((row) => (
                    <div
                      key={row.id}
                      className={clsx(classes.tableRow, classes.negativeText, classes.tabelRowNegative)}
                      style={{
                        background: `linear-gradient(90deg, rgba(244, 74, 74, 0.8) ${100 - row.fill}%, rgba(12,13,16,1)${100 - row.fill}%)`,
                      }}
                    >
                      {row.cells.map((td) => (
                        <div key={td} className={clsx(classes.tableCell, classes.negativeText)}
                        >
                          <p>{td}</p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          : null}
      </Flex>
    </div>
  );
};



export const OrderBookMobileTradeTab = ({ activeCategory, addScroll, currentPair, priceWs }: { activeTab: string; activeCategory: string, addScroll?: boolean, currentPair: string; priceWs: any }
) => {
  const orderBookReponse = useUnit<any>($orderBookResponse);
  const orderBookResponsePending = useUnit(getOrderBook.pending);
  const [asks, setAsks] = useState<any[]>([])
  const [bids, setBids] = useState<any[]>([])
  const coinPriceReponse = useUnit<any>($coinPrice);
  const [price, setPrice] = useState<any>({
    price: 0,
    up: false,
  })

  useEffect(() => {
    if (!orderBookResponsePending && orderBookReponse.asks) {
      {
        let max = Math.max.apply(Math, orderBookReponse.asks.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        orderBookReponse.asks.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: 100 - parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5)]
          })
        })
        setAsks(tempAsks.slice(0, 11).reverse())
      }
      {
        let max = Math.max.apply(Math, orderBookReponse.bids.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        orderBookReponse.bids.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5)]
          })
        })
        setBids(tempAsks.slice(0, 11))
      }
    }
  }, [orderBookReponse, orderBookReponse]);

  useEffect(() => {
    let interval = setInterval(() => {
      getOrderBook(currentPair.split("/").join(""));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentPair]);

  useEffect(() => {
    setPrice({ price: parseFloat(coinPriceReponse?.price), up: false })
  }, [coinPriceReponse, currentPair])

  useEffect(() => {
    if (priceWs !== null) {
      let temp = JSON.parse(priceWs.data)
      setPrice((prev) => {
        return {
          price: parseFloat(temp["k"]["c"]),
          up: parseFloat(temp["k"]["c"]) > prev["price"]
        }
      })
    }
  }, [priceWs])

  return (
    <Container className={classes.tableContainer}>

      <div className={classes.tableTHead}>
        <Flex style={{ gap: "120px" }}>
          {["Qty BTC", "Price USD"].map((head, i) => (
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


        <div style={addScroll ? { height: "195px", overflow: "auto", flexGrow: 1, width: "100%" } : { flexGrow: 1 }}>
          <div className={classes.table}>
            <div className={classes.tableBody}>
              {(activeCategory === "All" ? bids : (activeCategory === "Bids" ? bids : asks)).map((row) => (
                <div
                  key={row.id}
                  className={clsx(
                    classes.tableRow,
                    activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative,
                    classes.tabelRowNegative
                  )}
                  style={activeCategory === "All" ? {
                    background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
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





        <div className={classes.tableTHead} style={{ alignSelf: "flex-start" }}>
          <Flex style={{ gap: "120px" }}>
            {["Qty BTC", "Price USD"].map((head, i) => (
              <div key={i} className={classes.tableTh}>
                <div>
                  <p>{head}</p>
                  <SortIcon />
                </div>
              </div>
            ))}
          </Flex>
        </div>

        <div className={price.up ? classes.Upnumber : classes.Downnumber}>
          $ {price.price} {!price.up ? <NegativeTrendIcon fill="rgba(244, 74, 74, 0.8)" /> : <PositiveTrendIcon fill="#5adea7cc" />}
        </div>
        <div style={addScroll ? { height: "195px", overflow: "auto", flexGrow: 1, width: "100%" } : { flexGrow: 1 }}>
          <div className={classes.table}>
            <div className={classes.tableBody}>
              {activeCategory === "All" &&
                asks.map((row) => (
                  <div
                    key={row.id}
                    className={clsx(classes.tableRow, classes.negativeText, classes.tabelRowNegative)}
                    style={{
                      background: `linear-gradient(90deg, rgba(244, 74, 74, 0.8) ${100 - row.fill}%, rgba(12,13,16,1)${100 - row.fill
                        }%)`,
                    }}
                  >
                    {row.cells.map((td) => (
                      <div key={td} className={clsx(classes.tableCell, classes.negativeText)}
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
