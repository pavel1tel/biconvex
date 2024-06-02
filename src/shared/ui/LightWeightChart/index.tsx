import { CrosshairMode, IChartApi, ISeriesApi, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

import classes from "./TradeChart.module.css";

const seriesData = [
  { time: "2024-01-01", open: 36629.81, high: 36650.5, low: 36623.04, close: 36633.33 },
  { time: "2024-01-02", open: 36632.01, high: 36643.59, low: 36620, close: 36630.11 },
  { time: "2024-01-03", open: 36630.71, high: 36648.95, low: 36623.34, close: 36635.65 },
  { time: "2024-01-04", open: 36635.65, high: 36651, low: 36629.67, close: 36638.24 },
  { time: "2024-01-05", open: 36638.24, high: 36640, low: 36620, close: 36624.47 },
  { time: "2024-01-06", open: 36624.53, high: 36636.03, low: 36621.68, close: 36624.31 },
  { time: "2024-01-07", open: 36624.61, high: 36632.2, low: 36617, close: 36626.02 },
  { time: "2024-01-08", open: 36627, high: 36627.62, low: 36584.22, close: 36603.02 },
  { time: "2024-01-09", open: 36605, high: 36608.03, low: 36598.95, close: 36604.01 },
  { time: "2024-01-10", open: 36604.5, high: 36614.4, low: 36602.26, close: 36608.02 },
  { time: "2024-01-11", open: 36608.02, high: 36610.68, low: 36601.99, close: 36608.91 },
  { time: "2024-01-12", open: 36608.91, high: 36618.99, low: 36608.01, close: 36612 },
  { time: "2024-01-13", open: 36612, high: 36615.13, low: 36605.09, close: 36612 },
  { time: "2024-01-14", open: 36612, high: 36624.12, low: 36608.43, close: 36622.95 },
  { time: "2024-01-15", open: 36623.91, high: 36623.91, low: 36615, close: 36615.67 },
  { time: "2024-01-16", open: 36618.69, high: 36618.74, low: 36610, close: 36610.4 },
  { time: "2024-01-17", open: 36611, high: 36622.78, low: 36610.4, close: 36614.9 },
  { time: "2024-01-18", open: 36614.9, high: 36626.2, low: 36613.33, close: 36623.45 },
  { time: "2024-01-19", open: 36623.48, high: 36627, low: 36618.38, close: 36620.35 },
  { time: "2024-01-20", open: 36619.43, high: 36620.35, low: 36610.05, close: 36615.53 },
  { time: "2024-01-21", open: 36615.53, high: 36617.93, low: 36610, close: 36615.19 },
  { time: "2024-01-22", open: 36615.19, high: 36621.6, low: 36608.2, close: 36620 },
  { time: "2024-01-23", open: 36619.54, high: 36625.17, low: 36614.15, close: 36620 },
  { time: "2024-01-24", open: 36620.33, high: 36634.15, low: 36617.24, close: 36624.61 },
  { time: "2024-01-25", open: 36625.95, high: 36626, low: 36611.36, close: 36617.58 },
  { time: "2024-01-26", open: 36619, high: 36625.97, low: 36595.27, close: 36598.86 },
  { time: "2024-01-27", open: 36598.86, high: 36598.88, low: 36570, close: 36587.16 },
  { time: "2024-01-28", open: 36588.86, high: 36600, low: 36580, close: 36593.4 },
  { time: "2024-01-29", open: 36593.99, high: 36598.89, low: 36585, close: 36587.81 },
  { time: "2024-01-30", open: 36587.81, high: 36592.73, low: 36567.14, close: 36578 },
  { time: "2024-01-31", open: 36578.35, high: 36581.72, low: 36567.39, close: 36579 },
];
const LightWeightChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

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
  }, []);

  return <div ref={chartContainerRef} className={classes.chart} />;
};

export default LightWeightChart;
