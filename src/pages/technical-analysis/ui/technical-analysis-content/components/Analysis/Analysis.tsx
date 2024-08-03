import { Group, Stack, Text } from "@mantine/core";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { AnalysisButton } from "../AnalysisButton/AnalysisButton";
import { AnalysisGraph } from "../AnalysisGraph/AnalysisGraph";
import { Select } from "../Select/Select";
import classes from "./Analysis.module.css";
import { AnalysisProps } from "./Analysis.types";

type Period = {
  title: string;
  value: number;
};

const period: Period[] = [
  { title: "1m", value: 1 },
  { title: "5m", value: 5 },
  { title: "15m", value: 15 },
  { title: "30m", value: 30 },
  { title: "1h", value: 60 },
];

const fetchAnalysisData = async (currency: string, period: number | string): Promise<number | null> => {
  try {
    const response = await axios.get(`https://scanner.tradingview.com/symbol?symbol=CRYPTOCAP:${currency}&fields=Recommend.All|${period}`);
    return response.data[`Recommend.All|${period}`];
  } catch (error) {
    console.error("Error fetching analysis data:", error);
    return null;
  }
};

export const Analysis = ({ currency }: AnalysisProps) => {
  const [activePeriod, setActivePeriod] = useState<number | string>(1);
  const [recommendation, setRecommendation] = useState<number | null>(null);

  useEffect(() => {
    const getRecommendation = async () => {
      const data = await fetchAnalysisData(currency, activePeriod);
      setRecommendation(data);
    };
    getRecommendation();
  }, [currency, activePeriod]);

  const handlePeriodClick = async (value: number) => {
    setActivePeriod(value);
    const data = await fetchAnalysisData(currency, value);
    setRecommendation(data);
  };

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
                onClick={() => handlePeriodClick(item.value)}
              >
                {item.title}
              </button>
            ))}
            <Select activeValue={activePeriod} setActiveValue={setActivePeriod} />
          </Group>
        </Stack>
        {recommendation !== null && (
          <>
            <AnalysisGraph recommendation={recommendation} />
            <AnalysisButton recommendation={recommendation} />
          </>
        )}
      </Stack>
    </div>
  );
};
