import { Divider, Group, Stack, Text, Title, rem } from "@mantine/core";
import React from "react";
import { P, match } from "ts-pattern";

import { RateChart, RateType } from "@/shared/ui";

import classes from "./styles.module.css";

interface TopRateProps {
  icon: React.ReactNode;
  name: string;
  price: number;
  percent: number;
  data?: any;
}

export const TopRate = ({ icon, name, price, percent, data }: TopRateProps) => {
  const transformedData = data?.history.map((value: any, index: number) => ({
    name: `P-${index}`,
    value: parseFloat(value),
  }));

  const type: RateType = match(percent)
    .with(
      P.when((value) => value === 0),
      () => "zero" as RateType,
    )
    .with(
      P.when((value) => value > 0),
      () => "positive" as RateType,
    )
    .with(
      P.when((value) => value < 0),
      () => "negative" as RateType,
    )
    .otherwise(() => "zero" as RateType);

  return (
    <Stack className={classes.topRate}>
      <Group justify={"space-between"} className={classes.topRateHeader} wrap="nowrap">
        <Group justify={"space-between"} gap={rem("12px")} wrap="nowrap">
          <div className={classes.iconWrap}>{icon}</div>

          <Stack align={"flex-start"} gap={rem("4px")}>
            <Title c="white" fz={20} order={4}>
              {name}
            </Title>
          </Stack>
        </Group>

        <Divider orientation="vertical" classNames={{ root: classes.dividerRoot }} />

        <Stack gap={rem("4px")} className={classes.topRateFooter}>
          <Title c="white" order={4} fz={18}>
            ${price}
          </Title>
          <Group gap={rem("4px")} justify="flex-end">
            <Text variant="text-5" className={classes[type]}>
              {type === "positive" ? "+" : ""}
              {percent}%
            </Text>
          </Group>
        </Stack>
      </Group>

      <Group className={classes.topRateChartWrapper}>
        <RateChart type={type} data={transformedData} />
      </Group>
    </Stack>
  );
};
