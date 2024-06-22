import { CrosshairMode, IChartApi, ISeriesApi, createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import useWebSocket from 'react-use-websocket';

import classes from "./TradeChart.module.css";

const LightWeightChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
  const [seriesData, setSeriesData] = useState<any[]>([])
  const [prevDate, setPrevDate] = useState(0)
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      let temp = JSON.parse(lastMessage.data)
      let date = new Date(temp["k"]["t"])
      console.log(date);
      if (prevDate != temp["k"]["t"]) {
        setSeriesData((prev) => prev.concat({
          time: temp["k"]["t"],
          open: parseFloat(temp["k"]["o"]),
          high: parseFloat(temp["k"]["h"]),
          low: parseFloat(temp["k"]["l"]),
          close: parseFloat(temp["k"]["c"]),
        }));
      } else {
        setSeriesData((prev) => {
          let index = prev.findIndex((val) => val.time == prevDate);
          prev.pop()
          return prev.concat({
            time: temp["k"]["t"],
            open: parseFloat(temp["k"]["o"]),
            high: parseFloat(temp["k"]["h"]),
            low: parseFloat(temp["k"]["l"]),
            close: parseFloat(temp["k"]["c"]),
          })
        });
      }
      setPrevDate(temp["k"]["t"])
    }
  }, [lastMessage]);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 405,
        layout: {
          background: {
            color: "#0C0D10",
          },
          textColor: "#6C7080",
        },
        grid: {
          vertLines: {
            color: "rgba(255, 255, 255, 0.12)",
          },
          horzLines: {
            color: "rgba(255, 255, 255, 0.12)",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: "rgba(255, 255, 255, 0.12)",
        },
        timeScale: {
          borderColor: "rgba(255, 255, 255, 0.12)",
        },
      });

      seriesRef.current = chartRef.current.addCandlestickSeries({
        upColor: "#0ECB7B",
        downColor: "#E42222",
        borderUpColor: "#0ECB7B",
        borderDownColor: "#E42222",
        wickUpColor: "#0ECB7B",
        wickDownColor: "#E42222",
      });

      seriesRef.current.setData(seriesData);

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          chartRef.current?.applyOptions({ width, height });
        }
      });

      resizeObserver.observe(chartContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        chartRef.current?.remove();
      };
    }
  }, [seriesData]);

  return <div ref={chartContainerRef} className={classes.chart} />;
};

export default LightWeightChart;
