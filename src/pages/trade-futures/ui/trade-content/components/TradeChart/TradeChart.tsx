import { Group, Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import LightWeightChart from "@/shared/ui/LightWeightChart";
import { TradeChartTitle } from "@/shared/ui/TradeChartTitle";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { FlashMarketIcon } from "@/shared/ui/icon/FlashMarketIcon";

import { Select } from "../Select/Select";
import "./TradeChart.css";
import classes from "./TradeChart.module.css";

const period = [
  { title: "1m", value: 1 },
  { title: "5m", value: 5 },
  { title: "15m", value: 15 },
  { title: "30m", value: 30 },
  { title: "1h", value: 60 },
  { title: "3h", value: 180 },
  { title: "12h", value: 720 },
];
const series = [
  {
    data: [
      {
        x: new Date("01.01.2024 00:00:00"),
        y: [36629.81, 36650.5, 36623.04, 36633.33],
      },
      {
        x: new Date("01.01.2024 06:00:00"),
        y: [36632.01, 36643.59, 36620, 36630.11],
      },
      {
        x: new Date("01.01.2024 12:00:00"),
        y: [36630.71, 36648.95, 36623.34, 36635.65],
      },
      {
        x: new Date("01.01.2024 18:00:00"),
        y: [36635.65, 36651, 36629.67, 36638.24],
      },
      {
        x: new Date("01.02.2024 00:00:00"),
        y: [36638.24, 36640, 36620, 36624.47],
      },
      {
        x: new Date("01.02.2024 06:00:00"),
        y: [36624.53, 36636.03, 36621.68, 36624.31],
      },
      {
        x: new Date("01.02.2024 12:00:00"),
        y: [36624.61, 36632.2, 36617, 36626.02],
      },
      {
        x: new Date("01.02.2024 18:00:00"),
        y: [36627, 36627.62, 36584.22, 36603.02],
      },
      {
        x: new Date("01.03.2024 00:00:00"),
        y: [36605, 36608.03, 36598.95, 36604.01],
      },
      {
        x: new Date("01.03.2024 06:00:00"),
        y: [36604.5, 36614.4, 36602.26, 36608.02],
      },
      {
        x: new Date("01.03.2024 12:00:00"),
        y: [36608.02, 36610.68, 36601.99, 36608.91],
      },
      {
        x: new Date("01.03.2024 18:00:00"),
        y: [36608.91, 36618.99, 36608.01, 36612],
      },
      {
        x: new Date("01.04.2024 00:00:00"),
        y: [36612, 36615.13, 36605.09, 36612],
      },
      {
        x: new Date("01.04.2024 06:00:00"),
        y: [36612, 36624.12, 36608.43, 36622.95],
      },
      {
        x: new Date("01.04.2024 12:00:00"),
        y: [36623.91, 36623.91, 36615, 36615.67],
      },
      {
        x: new Date("01.04.2024 18:00:00"),
        y: [36618.69, 36618.74, 36610, 36610.4],
      },
      {
        x: new Date("01.05.2024 00:00:00"),
        y: [36611, 36622.78, 36610.4, 36614.9],
      },
      {
        x: new Date("01.05.2024 06:00:00"),
        y: [36614.9, 36626.2, 36613.33, 36623.45],
      },
      {
        x: new Date("01.05.2024 12:00:00"),
        y: [36623.48, 36627, 36618.38, 36620.35],
      },
      {
        x: new Date("01.05.2024 18:00:00"),
        y: [36619.43, 36620.35, 36610.05, 36615.53],
      },
      {
        x: new Date("01.06.2024 00:00:00"),
        y: [36615.53, 36617.93, 36610, 36615.19],
      },
      {
        x: new Date("01.06.2024 06:00:00"),
        y: [36615.19, 36621.6, 36608.2, 36620],
      },
      {
        x: new Date("01.06.2024 12:00:00"),
        y: [36619.54, 36625.17, 36614.15, 36620],
      },
      {
        x: new Date("01.06.2024 18:00:00"),
        y: [36620.33, 36634.15, 36617.24, 36624.61],
      },
      {
        x: new Date("01.07.2024 00:00:00"),
        y: [36625.95, 36626, 36611.36, 36617.58],
      },
      {
        x: new Date("01.07.2024 06:00:00"),
        y: [36619, 36625.97, 36595.27, 36598.86],
      },
      {
        x: new Date("01.07.2024 12:00:00"),
        y: [36598.86, 36598.88, 36570, 36587.16],
      },
      {
        x: new Date("01.07.2024 18:00:00"),
        y: [36588.86, 36600, 36580, 36593.4],
      },
      {
        x: new Date("01.08.2024 00:00:00"),
        y: [36593.99, 36598.89, 36585, 36587.81],
      },
      {
        x: new Date("01.08.2024 06:00:00"),
        y: [36587.81, 36592.73, 36567.14, 36578],
      },
      {
        x: new Date("01.08.2024 12:00:00"),
        y: [36578.35, 36581.72, 36567.39, 36579],
      },
      {
        x: new Date("01.08.2024 18:00:00"),
        y: [36579.38, 36580.92, 36566.77, 36575.96],
      },
      {
        x: new Date("01.09.2024 00:00:00"),
        y: [36575.96, 36589, 36571.77, 36588.92],
      },
      {
        x: new Date("01.09.2024 06:00:00"),
        y: [36588.92, 36594, 36577.55, 36589.22],
      },
      {
        x: new Date("01.09.2024 12:00:00"),
        y: [36589.3, 36598.89, 36589.1, 36596.08],
      },
      {
        x: new Date("01.09.2024 18:00:00"),
        y: [36597.5, 36600, 36588.39, 36596.25],
      },
      {
        x: new Date("01.10.2024 00:00:00"),
        y: [36598.1, 36600, 36588.73, 36595.97],
      },
      {
        x: new Date("01.10.2024 06:00:00"),
        y: [36595.97, 36602.01, 36588.17, 36602],
      },
      {
        x: new Date("01.10.2024 12:00:00"),
        y: [36602, 36607, 36596.51, 36599.95],
      },
      {
        x: new Date("01.10.2024 18:00:00"),
        y: [36600.63, 36601.21, 36590.39, 36591.02],
      },
      {
        x: new Date("01.11.2024 00:00:00"),
        y: [36591.02, 36611.08, 36591, 36591],
      },
      {
        x: new Date("01.11.2024 06:00:00"),
        y: [36591, 36601.32, 36585, 36592],
      },
      {
        x: new Date("01.11.2024 12:00:00"),
        y: [36593.13, 36596.01, 36590, 36593.34],
      },
      {
        x: new Date("01.11.2024 18:00:00"),
        y: [36593.34, 36604.76, 36582.63, 36593.86],
      },
      {
        x: new Date("01.12.2024 00:00:00"),
        y: [36593.86, 36604.28, 36586.57, 36600.01],
      },
      {
        x: new Date("01.12.2024 06:00:00"),
        y: [36601.81, 36612.21, 36592.78, 36596.25],
      },
      {
        x: new Date("01.12.2024 12:00:00"),
        y: [36596.25, 36604.2, 36590, 36602.99],
      },
      {
        x: new Date("01.12.2024 18:00:00"),
        y: [36602.99, 36606, 36584.99, 36587.81],
      },
      {
        x: new Date("01.13.2024 00:00:00"),
        y: [36587.81, 36595, 36583.27, 36591.96],
      },
      {
        x: new Date("01.13.2024 06:00:00"),
        y: [36591.97, 36596.07, 36585, 36588.39],
      },
      {
        x: new Date("01.13.2024 12:00:00"),
        y: [36587.6, 36598.21, 36587.6, 36594.27],
      },
      {
        x: new Date("01.13.2024 18:00:00"),
        y: [36596.44, 36601, 36590, 36596.55],
      },
      {
        x: new Date("01.14.2024 00:00:00"),
        y: [36598.91, 36605, 36596.61, 36600.02],
      },
      {
        x: new Date("01.14.2024 06:00:00"),
        y: [36600.55, 36605, 36589.14, 36593.01],
      },
      {
        x: new Date("01.14.2024 12:00:00"),
        y: [36593.15, 36605, 36592, 36614.06],
      },
      {
        x: new Date("01.14.2024 18:00:00"),
        y: [36603.07, 36604.5, 36599.09, 36603.89],
      },
      {
        x: new Date("01.15.2024 00:00:00"),
        y: [36604.44, 36604.44, 36600, 36615.5],
      },
      {
        x: new Date("01.15.2024 06:00:00"),
        y: [36615.5, 36615.99, 36597.5, 36615.86],
      },
      {
        x: new Date("01.15.2024 12:00:00"),
        y: [36615.85, 36605, 36600, 36604.07],
      },
      {
        x: new Date("01.15.2024 18:00:00"),
        y: [36604.98, 36606, 36604.07, 36606],
      },
    ],
  },
];
export const TradeChart = ({
  currentPair,
  setCurrentPair,
  currentPairName,
  priceWs
}) => {
  const [activePeriod, setActivePeriod] = useState("1m");
  const [minZoomIndex, setMinZoomIndex] = useState(0);
  const [maxZoomIndex, setMaxZoomIndex] = useState(series[0].data.length - 1);
  const ref = useRef<any>(null);
  useEffect(() => {
    const refElement = ref?.current;
    const zoomInHandler = (e: WheelEvent, sectionOrderNumber: number) => {
      if (e.deltaY < 0) {
        const min = minZoomIndex + sectionOrderNumber - 1;
        const max = maxZoomIndex - (5 - sectionOrderNumber);
        setMinZoomIndex(max - min <= 0 ? minZoomIndex : min);
        setMaxZoomIndex(max - min <= 0 ? maxZoomIndex : max);
      }
    };
    const zoomOutHandler = (e: WheelEvent, sectionOrderNumber: number) => {
      const dataLength = series[0].data.length - 1;
      if (e.deltaY > 0) {
        const min = minZoomIndex - (sectionOrderNumber - 1);
        const max = maxZoomIndex + 5 - sectionOrderNumber;
        if (min >= 0 && max <= dataLength) setMinZoomIndex(min);
        if (min >= 0 && max >= dataLength) setMinZoomIndex(min - 4 < 0 ? 0 : min - 4);

        if (min < 0) setMinZoomIndex(0);
        if (max <= dataLength && min > 0) setMaxZoomIndex(max);
        if (max <= dataLength && min <= 0) setMaxZoomIndex(max + 4 > dataLength ? dataLength : max + 4);
        if (max > dataLength) setMaxZoomIndex(dataLength);
      }
    };
    const zoomHandler = (e: WheelEvent, sectionWidth?: number) => {
      if (!sectionWidth) return;
      e.preventDefault();
      const sectionOrderNumber = Math.ceil(e.offsetX / sectionWidth);
      zoomInHandler(e, sectionOrderNumber);
      zoomOutHandler(e, sectionOrderNumber);
    };
    if (refElement?.chartRef?.current) {
      const chartWidth = (refElement.chartRef.current as HTMLElement).clientWidth;
      const sectionWidth = chartWidth / 5;
      refElement?.chartRef?.current?.addEventListener("wheel", (e: WheelEvent) => zoomHandler(e, sectionWidth));
    }
    return () => {
      refElement?.chartRef?.current?.removeEventListener("wheel", zoomHandler);
    };
  }, [minZoomIndex, maxZoomIndex]);

  return (
    <Container padding={48} className={classes.chartContainer}>
      <Group justify="space-between">
        <TradeChartTitle setCurrentPair={setCurrentPair} currentPairName={currentPairName} />
        <Stack gap={4}>
          <Text className={classes.subtitle}>Funding Rate / Countdown</Text>
          <Group gap={2} ml={14}>
            <FlashMarketIcon width={12} height={12} fill={"#625ff4"} />
            <Text className={classes.subtitle} fw={700}>
              <Text className={classes.subtitleMarked} component="span" fw={600}>
                0.0100%
              </Text>{" "}
              / 03:40:34
            </Text>
          </Group>
        </Stack>
      </Group>
      <Group mt={20} mb={32}>
        {period.map((item) => (
          <button
            key={item.value}
            className={clsx(classes.periodButton, { [classes.active]: item.title === activePeriod })}
            onClick={() => setActivePeriod(item.title)}
          >
            {item.title}
          </button>
        ))}
        <Select bordered activeValue={activePeriod} setActiveValue={setActivePeriod} />
      </Group>
      <LightWeightChart priceWs={priceWs} currentPair={currentPair} period={activePeriod} />
    </Container>
  );
};
