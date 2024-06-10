import { useResize } from "@/hooks/useResize";
import { Group, Image, Pill, Stack, Table, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { routes } from "@/shared/routing";
import {
  ArrowRightCircleIcon,
  BNBIcon,
  BitcoinIcon,
  Container,
  EthereumIcon,
  MarketSortIcon,
  PolygonIcon,
  RateChart,
  RateIcon,
  RateType,
  SolanaIcon,
  XRPIcon,
} from "@/shared/ui";

import classes from "./styles.module.css";
import { useSwrCoins } from "@/hooks/useSwrCoins";

export const getCoinIcon = (symbol: string) => {
  let icon = <></>;
  switch (symbol) {
    case "BTC":
      icon = <BitcoinIcon width="40px" height="40px" />;
      break;
    case "ETH":
      icon = <EthereumIcon width="40px" height="40px" />;
      break;
    case "BNB":
      icon = <BNBIcon width="40px" height="40px" />;
      break;
    case "XRP":
      icon = <XRPIcon width="40px" height="40px" />;
      break;
    case "SOL":
      icon = <SolanaIcon width="40px" height="40px" />;
      break;
    case "MATIC":
      icon = <PolygonIcon width="40px" height="40px" />;
      break;
  }
  return icon;
};

export const getCoinVol24 = (volume24h: number, price: number) => {
  const volume24 = volume24h * price;
  let volume = String(volume24);
  if (volume24 >= 1000000 && volume24 < 1000000000) {
    volume = `${Math.round(volume24 / 1000000)}M`;
  } else if (volume24 >= 1000000000) {
    volume = `${Math.round(volume24 / 1000000000)}B`;
  }
  return volume;
};

export const Markets = () => {
  const { isAdaptive: md } = useResize(1200);
  const [sortState, setSortState] = useState<{ sortCol: string; sortFunc: 1 | 2 | 3 }>({ sortCol: "", sortFunc: 1 });
  const sortHandler = (cell: string) => {
    if (cell !== sortState.sortCol) setSortState({ sortCol: cell, sortFunc: 2 });
    if (cell === sortState.sortCol) setSortState({
      ...sortState,
      sortFunc: sortState.sortFunc === 3 ? 1 : ((sortState.sortFunc + 1) as 2 | 3),
    });
  };
  const { coins } = useSwrCoins();
  const markets = useMemo(() => {
    return coins?.map((coin) => {
      const type: RateType = match(coin.price_change_percent)
        .with(
          P.when((value) => value > 0),
          () => "positive" as RateType,
        )
        .with(
          P.when((value) => value < 0),
          () => "negative" as RateType,
        )
        .otherwise(() => "zero" as RateType);

      const icon = getCoinIcon(coin.symbol);

      const volume = getCoinVol24(coin.volume24h, coin.price);

      return (
        <Table.Tr className={classes.marketsTable} key={coin.name}>
          <Table.Td>
            <Group>
              {icon}
              <Group gap={rem(4)} align={"center"}>
                <Title c="white" order={4}>
                  {coin.name}
                </Title>
                <Pill size="md"
                      classNames={{ root: classes.marketShortNameWrapper, label: classes.marketShortNameLabel }}>
                  {coin.symbol}
                </Pill>
              </Group>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-2">
              ${coin.price}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group gap={rem(11)}>
              <RateIcon type={type} />
              <Text c="white" variant="text-2">
                {coin.price_change_percent}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-2">
              {volume}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group justify={"flex-end"} className={classes.marketChartWrapper}>
              <RateChart type={type} data={coin.history.map((value, index) => {
                return { name: `P${index}`, value: Number(value) };
              })} />
            </Group>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [coins]);

  const handleRedirection = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className={classes.rateWrap}
      variants={{
        hidden: {
          opacity: 0,
          y: "50%",
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Stack className={classes.marketsWrapper}>
        <Container>
          <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
            <Group justify={"space-between"} align={"flex-end"}>
              <Title c="white" fz={{ 0: 40, md: 54 }} order={2}>
                Markets
              </Title>
              <Link
                to={routes.cryptoMarketCap}
                className={classes.marketsSeeAllMarketsText}
                onClick={handleRedirection}
                style={{
                  fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                }}
              >
                See all markets
                <ArrowRightCircleIcon />
              </Link>
            </Group>

            <Group className={classes.marketsTableWrapper}>
              <Table classNames={{ tr: classes.marketsTableTr }} withRowBorders={true}>
                <Table.Thead classNames={{ thead: classes.marketsTableHead }}>
                  <Table.Tr>
                    <Table.Th onClick={() => sortHandler("Token")} className={classes.marketsTHeadTokenName}>
                      <Group gap={rem("2px")}>
                        <Text c="inherit" variant="text-3" span>
                          Token
                        </Text>
                        <div
                          className={clsx(
                            classes.sortArrowWrapper,
                            sortState.sortCol === "Token" && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                            sortState.sortCol === "Token" && sortState.sortFunc === 3 && classes.rotate,
                          )}
                        >
                          <MarketSortIcon />
                        </div>
                      </Group>
                    </Table.Th>
                    <Table.Th onClick={() => sortHandler("Last Price (USDT)")} miw={rem(155)}>
                      <Group gap={rem("2px")}>
                        <Text c="inherit" variant="text-3">
                          Last Price (USDT)
                        </Text>
                        <div
                          className={clsx(
                            classes.sortArrowWrapper,
                            sortState.sortCol === "Last Price (USDT)" && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                            sortState.sortCol === "Last Price (USDT)" && sortState.sortFunc === 3 && classes.rotate,
                          )}
                        >
                          <MarketSortIcon />
                        </div>
                      </Group>
                    </Table.Th>
                    <Table.Th onClick={() => sortHandler("24h%")} miw={rem(130)}>
                      <Group gap={rem("2px")}>
                        <Text c="inherit" variant="text-3">
                          24h%
                        </Text>
                        <div
                          className={clsx(
                            classes.sortArrowWrapper,
                            sortState.sortCol === "24h%" && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                            sortState.sortCol === "24h%" && sortState.sortFunc === 3 && classes.rotate,
                          )}
                        >
                          <MarketSortIcon />
                        </div>
                      </Group>
                    </Table.Th>
                    <Table.Th onClick={() => sortHandler("24h Vol")} miw={rem(80)}>
                      <Group gap={rem("2px")}>
                        <Text c="inherit" variant="text-3">
                          24h Vol
                        </Text>
                        <div
                          className={clsx(
                            classes.sortArrowWrapper,
                            sortState.sortCol === "24h Vol" && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                            sortState.sortCol === "24h Vol" && sortState.sortFunc === 3 && classes.rotate,
                          )}
                        >
                          <MarketSortIcon />
                        </div>
                      </Group>
                    </Table.Th>
                    {!md && (
                      <Table.Th onClick={() => sortHandler("Markets")} w={"50px"}>
                        <Group gap={rem("2px")}>
                          <Text c="inherit" variant="text-3">
                            Markets
                          </Text>
                          <div
                            className={clsx(
                              classes.sortArrowWrapper,
                              sortState.sortCol === "Markets" && (sortState.sortFunc === 2 || sortState.sortFunc === 3) && classes.active,
                              sortState.sortCol === "Markets" && sortState.sortFunc === 3 && classes.rotate,
                            )}
                          >
                            <MarketSortIcon />
                          </div>
                        </Group>
                      </Table.Th>
                    )}
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody classNames={{ tbody: classes.marketsTableBody }}>{markets}</Table.Tbody>
              </Table>
            </Group>

            <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/7.png`} alt="main-light-7"
                   className={classes.lightSeven} />
          </Stack>
        </Container>
      </Stack>
    </motion.div>
  );
};
