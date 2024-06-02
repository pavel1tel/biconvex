import { Group, Text } from "@mantine/core";
import clsx from "clsx";

import { Coins } from "../Coins/Coins";
import classes from "./styles.module.css";

export const TradeChartTitle = ({ className = "" }: { className?: string }) => {
  return (
    <Group gap={8} className={clsx(classes.tradeChartWrapper, classes[className])}>
      <Text className={classes.tradeChartTitle}>Bitcoin/USDT Chart</Text>
      <Coins />
    </Group>
  );
};
