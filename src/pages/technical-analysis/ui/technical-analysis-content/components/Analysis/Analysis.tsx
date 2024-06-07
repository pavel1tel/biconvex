import { Group, Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { AnalysisButton } from "../AnalysisButton/AnalysisButton";
import { AnalysisGraph } from "../AnalysisGraph/AnalysisGraph";
import { Select } from "../Select/Select";
import classes from "./Analysis.module.css";
import { AnalysisProps } from "./Analysis.types";

const period = [
  { title: "1m", value: 1 },
  { title: "5m", value: 5 },
  { title: "15m", value: 15 },
  { title: "30m", value: 30 },
  { title: "1h", value: 60 },
];

export const Analysis = ({ currency, percents }: AnalysisProps) => {
  const [activePeriod, setActivePeriod] = useState(1);
  return (
    <div className={classes.analysisWrapper}>
      <Stack gap={0} align="center">
        <Stack className={classes.analysisHeader} gap={16}>
          <Text className={classes.analysisTitle}>
            Technical Analysis for <span>{currency}</span>
          </Text>
          <Group className={classes.periods} justify="center">
            {period.map((item) => (
              <button
                key={item.value}
                className={clsx(classes.periodButton, { [classes.active]: item.value === activePeriod })}
                onClick={() => setActivePeriod(item.value)}
              >
                {item.title}
              </button>
            ))}
            <Select activeValue={activePeriod} setActiveValue={setActivePeriod} />
          </Group>
        </Stack>
        <AnalysisGraph percents={percents} />
        <AnalysisButton percents={percents} />
      </Stack>
    </div>
  );
};
