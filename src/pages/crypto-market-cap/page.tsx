import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { useResize } from "@/hooks/useResize";
import { Box, Divider, Grid, Group, Image, Pagination, Stack, Text, UnstyledButton, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  BitcoinIcon,
  CardanoIcon,
  Container,
  Footer,
  Header,
  NextIcon,
  PolkadotIcon,
  PolygonIcon,
  PreviousIcon,
  ShowRowsCount,
  Wrapper,
} from "@/shared/ui";
import { TableSelectionHeader } from "@/shared/ui/tableSelectionHeader";
import { TitleWithIcon } from "@/shared/ui/titleWithIcon/ui";

import { SELECTORS } from "./MarketCapCoinsSelectors";
import classes from "./styles.module.css";
import { CoinsTable, TopRate } from "./ui";
import { CoinsTableFixedColumn } from "./ui/coins-table/CoinsTableFixedColumn";

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
        <title>Crypto Market Cap | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/1.png`} alt="light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/2.png`} alt="light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/3.png`} alt="light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/4.png`} alt="light-4" className={classes.lightFour} />

      <Header />

      <Stack gap={rem("32px")} className={classes.contentWrapper}>
        <Container>
          <Stack gap={rem("32px")}>
            <Stack gap={"clamp(1rem, 2vw,2rem)"}>
              <TitleWithIcon title="Crypto Market Cap" iconSrc={`${import.meta.env.BASE_URL}assets/crypto-market-cap-icon.png`} alt="privacyNotice" />

              <Text variant="text-2" className={classes.greyText}>
                View the latest cryptocurrency prices for the hundreds of digital assets listed on BitConvex, alongside their daily price change and
                market cap statistics. You can also select "Trade" for any cryptocurrency in the list to visit the relevant BitConvex market for
                buying and selling each asset.
              </Text>
            </Stack>

            <Grid className={classes.gridCols} gutter={{ 0: 8, md: 32 }}>
              <Grid.Col className={classes.gridColsItem} span={{ 0: 6, md: 3 }}>
                <TopRate icon={<BitcoinIcon />} name="Bitcoin" subTitle="TOP VOL" price={44.034} percent={+5.00432} />
              </Grid.Col>
              <Grid.Col className={classes.gridColsItem} span={{ 0: 6, md: 3 }}>
                <TopRate icon={<CardanoIcon />} name="Cardano" subTitle="TOP NEW" price={243.2} percent={+79.22} />
              </Grid.Col>
              <Grid.Col className={classes.gridColsItem} span={{ 0: 6, md: 3 }}>
                <TopRate icon={<PolygonIcon />} name="Polygon" subTitle="TOP GAINER" price={553.3} percent={+12.3} />
              </Grid.Col>
              <Grid.Col className={classes.gridColsItem} span={{ 0: 6, md: 3 }}>
                <TopRate icon={<PolkadotIcon />} name="Polkadot" subTitle="LOW 24h" price={24.2} percent={-24.7} />
              </Grid.Col>
            </Grid>

            <Stack gap={rem("32px")} className={classes.ratesTableWrapper}>
              <TableSelectionHeader selectors={SELECTORS} />

              <Stack gap={0}>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
                <Group justify={"space-between"}>
                  <Group gap={rem(32)} className={classes.categoriesWrapper}>
                    <Box data-active className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>All</UnstyledButton>
                    </Box>
                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>USDT</UnstyledButton>
                    </Box>
                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>AI</UnstyledButton>
                    </Box>
                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>DeFi</UnstyledButton>
                    </Box>
                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>NFT</UnstyledButton>
                    </Box>
                    <Box className={classes.categoryButtonWrapper}>
                      <UnstyledButton classNames={{ root: classes.categoryButton }}>FIAT</UnstyledButton>
                    </Box>
                  </Group>
                  <ShowRowsCount />
                </Group>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
                {md ? <CoinsTableFixedColumn /> : <CoinsTable />}
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

        {/*<Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/5.png`} alt="light-5" className={classes.lightFive}/>*/}
      </Stack>

      <Footer />
    </Wrapper>
  );
}
