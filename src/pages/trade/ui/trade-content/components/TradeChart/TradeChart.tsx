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
  { title: "3h", value: 180 },
  { title: "12h", value: 720 },
];

export const TradeChart = () => {
  const [activePeriod, setActivePeriod] = useState(1);

  return (
    <Container padding={48} className={classes.chartContainer}>
      <TradeChartTitle />
      <Group className={classes.buttonFlex} mt={20} mb={32}>
        {period.map((item) => (
          <button
            key={item.value}
            className={clsx(classes.periodButton, { [classes.active]: item.value === activePeriod })}
            onClick={() => setActivePeriod(item.value)}
          >
            {item.title}
          </button>
        ))}
        <Select bordered activeValue={activePeriod} setActiveValue={setActivePeriod} />
      </Group>

      <LightWeightChart />
    </Container>
  );
};
