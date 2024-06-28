
import clsx from "clsx";

import { $orderBookResponse } from "@/pages/trade/model";
import { getOrderBook } from "@/shared/api/trading/requests";
import { Table } from "@mantine/core";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { NegativeTrendIcon } from "../icon/NegativeTrendIcon";
import { PositiveTrendIcon } from "../icon/PositiveTrendIcon";
import { SortIcon } from "../icon/SortIcon";
import classes from "./OrderBook.module.css";

const header = ["Price USD", "Qty BTC", "Total USD"];

export const OrderBookDesktop = ({ isFullRows, activeCategory, addScroll, currentPair }: { isFullRows?: boolean, activeCategory: string; addScroll?: boolean; currentPair: string; }) => {
  const orderBookReponse = useUnit<any>($orderBookResponse);
  const orderBookResponsePending = useUnit(getOrderBook.pending);
  const [asks, setAsks] = useState<any[]>([])
  const [bids, setBids] = useState<any[]>([])
  const [fullAsks, setFullAsks] = useState<any[]>([]);
  const [fullBids, setFullBids] = useState<any[]>([])

  const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [price, setPrice] = useState<any>({
    price: 0,
    up: false,
  })

  useEffect(() => {
    if (!orderBookResponsePending) {
      {
        let max = Math.max.apply(Math, orderBookReponse.asks.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        orderBookReponse.asks.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5), "$" + (parseFloat(ask[0]) * parseFloat(ask[1])).toFixed(2)]
          })
        })
        setAsks(tempAsks.slice(0, 11))
        setFullAsks(tempAsks)
      }
      {
        let max = Math.max.apply(Math, orderBookReponse.bids.map(function (o) { return parseFloat(o[1]); }))
        let tempAsks: any[] = [];
        orderBookReponse.bids.forEach((ask) => {
          tempAsks.push({
            id: ask[0],
            fill: parseFloat(ask[1]) / (max / 2) * 100,
            cells: ["$" + parseFloat(ask[0]).toFixed(2), parseFloat(ask[1]).toFixed(5), "$" + (parseFloat(ask[0]) * parseFloat(ask[1])).toFixed(2)]
          })
        })
        setBids(tempAsks.slice(0, 11).reverse())
        setFullBids(tempAsks)
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
    if (lastMessage !== null) {
      let temp = JSON.parse(lastMessage.data)
      setPrice((prev) => {
        return {
          price: parseFloat(temp["k"]["c"]),
          up: parseFloat(temp["k"]["c"]) > prev["price"]
        }
      })
    }
  }, [lastMessage])

  useEffect(() => {
    setSocketUrl('wss://stream.binance.com:9443/ws/' + currentPair.split("/").join("").toLocaleLowerCase() + '@kline_1m')
    setPrice({ price: "...", up: false })
  }, [currentPair])

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
            {(activeCategory === "All" ? bids : isFullRows ? (activeCategory === "Bids" ? fullBids : fullAsks) : (activeCategory === "Bids" ? bids : asks)).map((row) => (
              <div
                key={row.id}
                className={clsx(
                  classes.tableRow,
                  activeCategory === "All" || activeCategory === "Bids" ? classes.positive : classes.negative
                )}
                style={{
                  background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${activeCategory === "All" || activeCategory === "Bids" ? "#5adea7cc" : "rgba(244, 74, 74, 0.8)"
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
            <div className={clsx(classes.tableCell, classes.totalCell)} style={{ width: '100%' }}>
              <p
                className={clsx(classes.orderBookInfo, {
                  [classes.negative]: !price.up,
                  [classes.positive]: price.up,
                })}
              >
                $ {price.price} {!price.up ? <NegativeTrendIcon fill="#fff" /> : <PositiveTrendIcon fill="#fff" />}
              </p>
            </div>
          </div>
        </div>
      </div>
      {activeCategory === 'All' ?

        <div style={addScroll ? { height: "210px", overflow: "auto" } : {}}>
          <div className={classes.table}>
            <div className={classes.tableBody}>
              {activeCategory === "All" &&
                asks.map((row) => (
                  <div
                    key={row.id}
                    className={clsx(classes.tableRow, classes.negative)}
                    style={{
                      background: `linear-gradient(90deg, rgba(12,13,16,1) ${100 - row.fill}%, rgba(244, 74, 74, 0.8) ${100 - row.fill}%)`,
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
    </div>
  );
};
