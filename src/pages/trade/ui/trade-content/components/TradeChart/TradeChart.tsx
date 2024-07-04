import { Group } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import LightWeightChart from "@/shared/ui/LightWeightChart";
import { TradeChartTitle } from "@/shared/ui/TradeChartTitle";
import { Container } from "@/shared/ui/TradePageContainer/Container";

import { Select } from "../Select/Select";
import "./TradeChart.css";
import classes from "./TradeChart.module.css";

const period = [
  { title: "1m", value: 1 },
  { title: "5m", value: 5 },
  { title: "15m", value: 15 },
  { title: "30m", value: 30 },
  { title: "1h", value: 60 },
  { title: "4h", value: 240 },
  { title: "12h", value: 720 },
];

export const TradeChart = ({ currentPairName, setCurrentPair, currentPair }) => {
  const [activePeriod, setActivePeriod] = useState("1m");

  return (
    <Container padding={48} className={classes.chartContainer}>
      <TradeChartTitle currentPairName={currentPair} setCurrentPair={setCurrentPair} />
      <Group className={classes.buttonFlex} mt={20} mb={32}>
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

      <LightWeightChart currentPair={currentPair} period={activePeriod} />
    </Container>
  );
};
