import { Group, Pill, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";

import { TradeResultProps } from "../ui";
import classes from "./styles.module.css";

export const TradingResult = ({ name, icon, percent, shortName, instruments }: TradeResultProps) => {
  return (
    <Stack gap={rem("16px")} className={classes.rateWrapper} justify={"space-between"}>
      <Stack gap={rem("32px")} className={classes.rateHeader}>
        <Group className={classes.rateCoinNameWrapper}>
          <div className={classes.iconWrap}>{icon}</div>

          <Stack align={"flex-start"} gap={rem("4px")}>
            <Title fz={{ 0: 20, md: 24 }} order={4} c="white">
              {name}
            </Title>

            <Pill className={classes.rateShortName} classNames={{ root: classes.positive }}>
              <Text variant="text-5" span>
                {shortName}
              </Text>
            </Pill>
          </Stack>
        </Group>
        <Group className={classes.instrumentsWrap} gap={rem("4px")}>
          {instruments.map((ins: string) => (
            <Title order={4} fz={{ 0: 18, md: 20 }} c="white">
              {ins}
            </Title>
          ))}
        </Group>
        <Stack className={classes.rateContent}>
          <Text className={clsx(classes.rateButtonLabel, classes.blue)}>ROI:</Text>
          <Text className={clsx(classes.rateButtonLabel, classes.green)}>{percent}%</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
