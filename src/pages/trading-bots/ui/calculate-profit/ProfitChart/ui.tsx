import { Stack, Text, rem } from "@mantine/core";
import Chart from "react-apexcharts";

import { CalculationSlider } from "../calculationSlider/ui";
import { chart } from "./Chart";
import classes from "./styles.module.css";

export const ProfitChart = () => {
  return (
    <div>
      <div className={classes.calculationsWrapper}>
        <CalculationSlider name="Your deposit" min={20} max={5000} minLabel="20$" maxLabel="5000$" />
        <CalculationSlider name="Length of investment" min={1} max={50} minLabel="1 day" maxLabel="50 days" />

        <Text className={classes.profitMain} variant="text-1">
          Profit: <Text className={classes.profit}>140$</Text>
        </Text>
      </div>
      <Stack gap={rem("27px")}>
        <div id="chart" className={classes.chartTable}>
          <Chart options={chart.options} series={chart.series}></Chart>
        </div>
        <div id="html-dist"></div>
      </Stack>
    </div>
  );
};
