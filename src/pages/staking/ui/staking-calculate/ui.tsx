import { Container, Divider, Flex, Group, SimpleGrid, Stack, Text, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";

import classes from "./styles.module.css";

const data = [
  {
    title: "Expected profit",
    dash: "+ 14.490000 DASH",
    cash: 432.95,
  },
  {
    title: "Total",
    dash: "37.20000 DASH",
    cash: 1171.95,
  },
];

export const StakingCalculate = () => {
  const matches = useMediaQuery("(min-width: 1366px)");

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
            {data.map((item) => (
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
