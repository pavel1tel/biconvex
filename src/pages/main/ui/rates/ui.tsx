import { Flex, Grid, Group, Image, Pill, rem, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { match, P } from "ts-pattern";
import { Container, RateChart, RateType } from "@/shared/ui";
import classes from "./styles.module.css";
import { SwrHomepage, useSwrHomepage } from "@/hooks/useSwrHomepage";
import { getCoinIcon, getCoinVol24 } from "@/pages/main/ui";

const Rate = ({ name, price,price_change_percent,symbol,volume24h, history }: SwrHomepage) => {
  const type: RateType = match(price_change_percent)
    .with(
      P.when((value) => value > 0),
      () => "positive" as RateType,
    )
    .with(
      P.when((value) => value < 0),
      () => "negative" as RateType,
    )
    .otherwise(() => "zero" as RateType);

  const icon = getCoinIcon(symbol);

  const volume = getCoinVol24(volume24h,price)

  return (
    <Stack gap={rem("16px")} className={classes.rateWrapper} justify={"space-between"}>
      <Stack gap={rem("32px")} className={classes.rateHeader}>
        <Group gap={rem("12px")}>
          <div className={classes.iconWrap}>{icon}</div>

          <Stack align={"flex-start"} gap={rem("4px")}>
            <Title order={5} c="white">
              {name == "BNB BEP-2" ? "BNB" : name}
            </Title>
            <Pill className={classes.rateShortName} classNames={{ root: classes[type] }}>
              <Text variant="text-5" span>
                {symbol}
              </Text>
            </Pill>
          </Stack>
        </Group>
        <Group align="flex-end" justify="space-between">
          <Title order={3} fz={{ 0: 24, md: 32 }} fw={700} c="white">
            ${price}
          </Title>
          <Group gap={rem("4px")}>
            {/* <RateIcon type={type}/> */}
            <Title order={4} className={classes[`${type}Text`]} fz={{ 0: 18, md: 20 }}>
              {type !== "negative" ? "+" : ""}
              {/*{percent.toString()}%*/}
            </Title>
          </Group>
        </Group>
      </Stack>
      <Stack className={classes.rateContent}>
        <RateChart type={type} data={history.map((value, index) => {
          return { name: `P${index}`, value: Number(value) };
        })} />
        <Flex align="center" justify="center" className={classes.rateButton}>
          <Text c="white" fz={{ 0: 12, md: 14 }} className={classes.rateButtonLabel}>
            24h Volume: {volume}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export const Rates = () => {
  const { coins } = useSwrHomepage();
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Grid gutter={{ 0: 16, md: 30 }} align={"stretch"}>
          {coins?.filter(({symbol})=>['BTC', 'ETH', 'SOL', 'BNB'].includes(symbol)).map((coin, i) => {
            return (
              <Grid.Col key={coin.name} span={{ md: 3, lg: 3, xl: 3 }} className={classes.col}>
                <motion.div
                  className={classes.rateWrap}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: "-70%",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (i + 1) * 0.2 }}
                >
                  {/* <Link to={routes.trade} params={{ coin: rate.name }} className={classes.rateLink}> */}
                  <Rate {...coin} />
                  {/* </Link> */}
                </motion.div>
              </Grid.Col>
            );
          })}
          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/4.png`} alt="main-light-4" className={classes.lightFour} />
        </Grid>
      </Container>
    </Stack>
  );
};
