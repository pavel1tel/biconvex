import { Divider, Group, Pill, Stack, Text, Title, rem } from "@mantine/core";
import React, { useMemo } from "react";
import { P, match } from "ts-pattern";

import { randomChartData } from "@/shared/lib/random-chart-data";
import { RateChart, RateType } from "@/shared/ui";

import classes from "./styles.module.css";

interface TopRateProps {
  icon: React.ReactNode;
  name: string;
  price: number;
  subTitle: string;
  percent: number;
  data?: any;
}

export const TopRate = ({ icon, name, price, subTitle, percent, data }: TopRateProps) => {
  const transformedData = data?.history.map((value: any, index: number) => ({
    name: `P-${index}`,
    value: parseFloat(value),
  }));

  console.log(transformedData);

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
            <Pill classNames={{ root: classes.topRateSubTitle, label: classes.topRateSubTitleLabel }} fz={12}>
              {subTitle}
              {/*<Text variant='text-5' span></Text>*/}
            </Pill>
          </Stack>
        </Group>

        <Divider orientation="vertical" classNames={{ root: classes.dividerRoot }} />

        <Stack gap={rem("4px")} className={classes.topRateFooter}>
          <Title c="white" order={4} fz={20}>
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
