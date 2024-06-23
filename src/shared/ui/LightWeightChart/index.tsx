import { CrosshairMode, IChartApi, ISeriesApi, UTCTimestamp, createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import useWebSocket from 'react-use-websocket';

import { $candlesReponse } from "@/pages/trade/model";
import { getCandles } from "@/shared/api/trading/requests";
import { useUnit } from "effector-react";
import classes from "./TradeChart.module.css";

const LightWeightChart = ({
  period,
}: {
  period: string;
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const volumeSeries = useRef<ISeriesApi<"Histogram"> | null>(null);

  const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');
  const seriesData = useRef<any>(null)
  const [redraw, setRedraw] = useState(false);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const candelsReponse = useUnit<[any[]]>($candlesReponse);
  const candelsReponsePending = useUnit(getCandles.pending);

  useEffect(() => {
    if (!candelsReponsePending && lastMessage !== null && seriesRef.current && volumeSeries.current) {
      let temp = JSON.parse(lastMessage.data)
      seriesRef.current.update({
        time: (temp["k"]["t"] / 1000) as UTCTimestamp,
        open: parseFloat(temp["k"]["o"]),
        high: parseFloat(temp["k"]["h"]),
        low: parseFloat(temp["k"]["l"]),
        close: parseFloat(temp["k"]["c"]),
      });
      volumeSeries.current.update({
        time: (temp["k"]["t"] / 1000) as UTCTimestamp,
        value: parseFloat(temp["k"]["v"]),
        color: parseFloat(temp["k"]["o"]) > parseFloat(temp["k"]["c"]) ? '#E4222280' : "#0ECB7B80"
      });
    }
  }, [lastMessage]);

  useEffect(() => {
    if (!candelsReponsePending && seriesRef.current && volumeSeries.current) {
      let temp: any[] = []
      let tempVol: any[] = []
      candelsReponse.forEach((candle) => {
        temp.push({
          time: (candle[0] / 1000) as UTCTimestamp,
          open: parseFloat(candle[1]),
          high: parseFloat(candle[2]),
          low: parseFloat(candle[3]),
          close: parseFloat(candle[4]),
        })

        tempVol.push({
          time: (candle[0] / 1000) as UTCTimestamp,
          value: parseFloat(candle[5]),
          color: parseFloat(candle[1]) > parseFloat(candle[4]) ? '#E4222290' : "#0ECB7B90"
        })
      })
      seriesRef.current.setData(temp)
      volumeSeries.current.setData(tempVol)
    }
  }, [candelsReponsePending, candelsReponse])

  useEffect(() => {
    getCandles(period);
    setSocketUrl("wss://stream.binance.com:9443/ws/btcusdt@kline_" + period)
    setRedraw((prev) => !prev)
  }, [period])

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

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          chartRef.current?.applyOptions({ width, height });
        }
      });

      resizeObserver.observe(chartContainerRef.current);
      volumeSeries.current = chartRef.current?.addHistogramSeries({
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: ''
      });

      volumeSeries.current.priceScale().applyOptions({
        scaleMargins: {
          top: 0.85,
          bottom: 0,
        },
      });

      return () => {
        resizeObserver.disconnect();
        chartRef.current?.remove();
      };
    }
  }, [redraw]);

  return <div ref={chartContainerRef} className={classes.chart} />;
};

export default LightWeightChart;
