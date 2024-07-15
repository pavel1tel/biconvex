import { Stack, Text, rem } from "@mantine/core";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> 9e4698fe887e8d6e3b273130c6e3dc20a4fe6a44
import Chart from "react-apexcharts";

import { CalculationSlider } from "../calculationSlider/ui";
import { chart } from "./Chart";
import classes from "./styles.module.css";

export const ProfitChart = () => {
<<<<<<< HEAD
  const [availWidth, setAvailWidth] = useState<number>(0);
  useEffect(() => {
    setAvailWidth(window.screen.availWidth);
  }, []);
  useEffect(() => {
    setAvailWidth(window.screen.availWidth);
  }, [window.screen.availWidth]);
=======
>>>>>>> 9e4698fe887e8d6e3b273130c6e3dc20a4fe6a44
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
<<<<<<< HEAD
          <Chart options={chart.options} series={chart.series} height={availWidth > 1000 ? 512 : undefined} />
=======
          <Chart options={chart.options} series={chart.series}></Chart>
>>>>>>> 9e4698fe887e8d6e3b273130c6e3dc20a4fe6a44
        </div>
        <div id="html-dist"></div>
      </Stack>
    </div>
  );
};
