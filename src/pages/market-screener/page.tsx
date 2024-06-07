import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { useResize } from "@/hooks/useResize";
import { Box, Divider, Group, Image, Pagination, Stack, Text, UnstyledButton, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { Container, Footer, Header, NextIcon, PreviousIcon, ShowRowsCount, Wrapper } from "@/shared/ui";
import { TableSelectionHeader } from "@/shared/ui/tableSelectionHeader";
import { TitleWithIcon } from "@/shared/ui/titleWithIcon";

import { SELECTORS } from "./MarketScreenerCoinsSelectors";
import classes from "./styles.module.css";
import { CoinsTableFixedColumn } from "./ui/coins-table/CoinsTableFixedColumn";
import { CoinsTable } from "./ui/coins-table/ui";

export function Page() {
  const [siblings, setSiblings] = useState(getSiblings());
  const { isAdaptive: md } = useResize(1200);

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Helmet>
        <title>Market Screener | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/1.png`} alt="light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/2.png`} alt="light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/3.png`} alt="light-3" className={classes.lightThree} />

      <Header />
      <Stack className={classes.contentWrapper}>
        <Container>
          <Stack gap={rem("32px")}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/market-screener/4.png`}
              alt="light-4"
              className={classes.lightFour}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/market-screener/5.png`}
              alt="light-5"
              className={classes.lightFive}
            />
            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <TitleWithIcon title="Market Screener" iconSrc={`${import.meta.env.BASE_URL}assets/market-screener-icon.png`} alt="market-screener" />

              <Text className={classes.description} c="grey" variant="text-2">
                Market screener on cryptocurrency exchanges is a tool that allows users to filter and sort through a wide range of cryptocurrency{" "}
                trading pairs based on specific criteria, such as trading volume, price changes, market capitalization, or other metrics.
              </Text>
            </Stack>
            <Stack gap={"clamp(12px, 1vw, 1rem)"} className={classes.ratesTableWrapper}>
              <TableSelectionHeader selectors={SELECTORS} headerClassName="alignFromStart" />

              <Stack gap={0}>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
                <Group justify={"space-between"}>
                  <Group gap={rem(32)} className={classes.categoriesWrapper}>
                    <Box data-active className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>Overview</UnstyledButton>
                    </Box>

                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>Performance</UnstyledButton>
                    </Box>

                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>Oscillators</UnstyledButton>
                    </Box>

                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>Trend-Following</UnstyledButton>
                    </Box>
                  </Group>
                  <ShowRowsCount />
                </Group>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

                <div className={classes.tableContainer}>{!md ? <CoinsTable /> : <CoinsTableFixedColumn />}</div>
              </Stack>

              <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

              <Group justify={"space-between"}>
                <Text variant="text-4" className={classes.greyText}>
                  1-20 of 9,383 assets
                </Text>
                <Pagination total={20} defaultValue={1} {...{ siblings }}>
                  <Group gap={rem("8px")} justify="center">
                    <Pagination.Previous icon={PreviousIcon} />
                    <Pagination.Items />
                    <Pagination.Next icon={NextIcon} />
                  </Group>
                </Pagination>
              </Group>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
