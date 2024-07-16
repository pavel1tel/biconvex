import { Container, Divider, Flex, Group, SimpleGrid, Stack, Text, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { useUnit } from "effector-react";
import bigDecimal from "js-big-decimal";
import { useEffect, useState } from "react";

import { requestStaking } from "@/shared/api/staking/request";
import { Course, InvestResponse } from "@/shared/api/types";

import { $investReponse } from "../../model";
import classes from "./styles.module.css";

export const StakingCalculate = ({ amount, percent, value1 }: { amount: string; percent: number; value1: string }) => {
  const matches = useMediaQuery("(min-width: 1366px)");
  const [data, setData] = useState<any>([{}]);
  const investReponse = useUnit<InvestResponse>($investReponse);
  const investReponsePending = useUnit<boolean>(requestStaking.pending);

  const getValueByKey = (courses: Course[], key: string) => {
    const course = courses.find((course) => course.hasOwnProperty(key));
    return course ? course[key] : undefined;
  };

  useEffect(() => {
    if (!investReponsePending) {
      const course = getValueByKey(investReponse.courses!, value1);
      setData([
        {
          key: 1,
          title: "Expected profit",
          dash: new bigDecimal(parseFloat(amount ? amount : "0")).multiply(new bigDecimal(percent)).multiply(new bigDecimal(0.01)).getValue(),
          cash: new bigDecimal(parseFloat(amount ? amount : "0"))
            .multiply(new bigDecimal(percent))
            .multiply(new bigDecimal(0.01))
            .multiply(new bigDecimal(course))
            .round(2)
            .getValue(),
        },
        {
          key: 2,
          title: "Total",
          dash: new bigDecimal(parseFloat(amount ? amount : "0"))
            .multiply(new bigDecimal(percent))
            .multiply(new bigDecimal(0.01))
            .add(new bigDecimal(amount))
            .getValue(),
          cash: new bigDecimal(parseFloat(amount ? amount : "0"))
            .multiply(new bigDecimal(percent))
            .multiply(new bigDecimal(0.01))
            .add(new bigDecimal(amount))
            .multiply(new bigDecimal(course))
            .round(2)
            .getValue(),
        },
      ]);
    }
  }, [amount, percent, value1]);
  return (
    <Stack className={classes.wrapper}>
      <Flex gap={rem("32px")} justify={"space-between"} align={"center"} className={clsx(classes.box)}>
        <Group className={classes.col1}>
          <div>
            <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/usdt3.png`} alt="tron" className={classes.image} />
          </div>
          <Stack>
            <Text className={classes.title}>Estimated earnings</Text>
            <Text className={clsx(classes.text, classes.text16)}>Calculate your profit</Text>
          </Stack>
        </Group>
        {matches ? <Divider className={classes.divider} orientation={"vertical"} size={"1px"} /> : <></>}
        <Container p={0} m={0}>
          <SimpleGrid className={classes.grid} spacing={rem("46px")} cols={{ base: 2, md: 2 }}>
            {data.map((item: any) => (
              <Group justify="space-between" gap={rem("30px")} wrap={"nowrap"} className={classes.expectedProfitWrapper}>
                <Stack gap={rem("4px")} pr={{ 0: 0, md: 20 }} w={130} className={classes.expectedProfitTitle}>
                  <Text c={"white"} className={classes.value}>
                    {item.title}
                  </Text>
                </Stack>
                <Stack gap={rem("4px")} align={"flex-end"} className={classes.cashWrapper}>
                  <Text className={clsx(classes.text, classes.text16)}>{item.dash}</Text>
                  <Text className={clsx(classes.text, classes.greenText)}>≈{item.cash}$</Text>
                </Stack>
              </Group>
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </Stack>
  );
};
