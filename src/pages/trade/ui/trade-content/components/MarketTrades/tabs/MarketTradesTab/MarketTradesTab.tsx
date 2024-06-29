import { Table } from "@mantine/core";

import { $tradesResponse } from "@/pages/trade/model";
import { getTrades } from "@/shared/api/trading/requests";
import { Trade } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import classes from "./MarketTradesTab.module.css";

export const MarketTradesTab = ({ currentPair }) => {
  const trades = useUnit<Trade[]>($tradesResponse);
  const tradesPending = useUnit<boolean>(getTrades.pending);
  const [tableBody, setTableBody] = useState<any>({})
  const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@trade');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const epochToFormattedTime = (epochTime: number): string => {
    const date = new Date(epochTime);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (!tradesPending) {
      let temp: any = []
      trades.map(trade => {
        temp.push([
          <p className={trade.isBuyerMaker ? classes.red : classes.green}>{parseFloat(trade.price)}</p>,
          parseFloat(trade.qty),
          epochToFormattedTime(trade.time)
        ])
      })
      setTableBody({
        head: ["Price", "Amount", "Time"],
        body: temp
      })
    }
  }, [tradesPending, trades])

  useEffect(() => {
    if (lastMessage !== null) {
      let temp = JSON.parse(lastMessage.data)
      setTableBody((prev) => {
        let n = prev;
        n.body.pop();
        n.body.unshift([
          <p className={temp["m"] ? classes.red : classes.green}>{parseFloat(temp["p"])}</p>,
          parseFloat(temp["q"]),
          epochToFormattedTime(temp["T"])
        ])
        return n;
      })
    }
  }, [lastMessage]);

  useEffect(() => {
    setSocketUrl('wss://stream.binance.com:9443/ws/' + currentPair.split("/").join("").toLocaleLowerCase() + '@trade')
  }, [currentPair])

  return (
    <div className={classes.tableContainer}>
      <Table
        data={tableBody}
        withRowBorders={false}
        classNames={{ th: classes.tableTh, td: classes.tableTd, thead: classes.tableTHead, tbody: classes.tableBody }}
        stickyHeader
      ></Table>
    </div>
  );
};
