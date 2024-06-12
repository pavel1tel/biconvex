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

import classes from "./styles.module.css";
import { CoinsTable, TopRate } from "./ui";
import { CoinsTableFixedColumn } from "./ui/coins-table/CoinsTableFixedColumn";
import { Coin } from "./ui/coins-table/ui";

export type Selector = {
  label: string;
  fetchData: any;
};

const TAG_FILTERS: Record<string, (coin: Coin) => boolean> = {
  All: () => true,
  USDT: (coin) => coin.tags.includes("usd-stablecoin"),
  FIAT: (coin) => coin.tags.includes("fiat-stablecoin"),
  DeFi: (coin) => coin.tags.includes("defi"),
  AI: (coin) => coin.tags.includes("ai-big-data"),
  NFT: (coin) => coin.tags.includes("collectibles-nfts"),
};

const SELECTORS: Selector[] = [
  { label: "Top Volume", fetchData: () => fetchMarketData("vol") },
  { label: "Top Gain", fetchData: () => fetchMarketData("gain") },
  { label: "Top Loss", fetchData: () => fetchMarketData("loss") },
  { label: "New in Market", fetchData: () => fetchMarketData("new") },
];

async function fetchMarketData(type: string): Promise<Record<string, Coin>> {
  const response = await fetch(`http://20.79.188.227:8081/market?type=${type}`);
  const data: Record<string, Coin> = await response.json();
  return data;
}

export function Page() {
  const [_, setSiblings] = useState(getSiblings());
  const { isAdaptive: md } = useResize(1200);
  const [activeTab, setActiveTab] = useState<Selector>(SELECTORS[0]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [data, setData] = useState<Coin[]>([]);
  const [filteredData, setFilteredData] = useState<Coin[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadData = async (fetchFunc: () => Promise<Record<string, Coin>>) => {
    try {
      const result = await fetchFunc();
      const resultData = Object.values(result);
      setData(resultData);
      filterData(resultData, activeFilter, searchQuery);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setFilteredData([]);
      setTotalItems(0);
    }
  };

  const filterData = (data: Coin[], filter: string, query: string) => {
    const filtered = data.filter((coin) => TAG_FILTERS[filter](coin) && coin.name.toLowerCase().includes(query.toLowerCase()));
    const paginatedData = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    setFilteredData(paginatedData);
    setTotalItems(filtered.length);
  };

  useEffect(() => {
    loadData(activeTab.fetchData);
  }, [activeTab]);

  useEffect(() => {
    filterData(data, activeFilter, searchQuery);
  }, [data, activeFilter, currentPage, rowsPerPage, searchQuery]);

  const handleTabClick = (selector: Selector) => {
    setCurrentPage(1);
    setActiveTab(selector);
    loadData(selector.fetchData);
  };

  const handleFilterClick = (filter: string) => {
    setCurrentPage(1);
    setActiveFilter(filter);
    filterData(data, filter, searchQuery);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    filterData(data, activeFilter, searchQuery);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
    filterData(data, activeFilter, searchQuery);
  };
  console.log(activeTab);

  return (
    <Wrapper>
      <Helmet>
        <title>Crypto Market Cap | BitConvex</title>
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
              <TableSelectionHeader
                activeTab={activeTab}
                selectors={SELECTORS}
                handleTabClick={handleTabClick}
                searchQuery={searchQuery}
                onSearchChange={(e) => setSearchQuery(e.target.value)}
              />

              <Stack gap={0}>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
                <Group justify={"space-between"}>
                  <Group gap={rem(32)} className={classes.categoriesWrapper}>
                    {Object.keys(TAG_FILTERS).map((filter) => {
                      return (
                        <Box
                          key={filter}
                          data-active={filter === activeFilter ? "1" : "0"}
                          className={classes.categoryButtonWrapper}
                          onClick={() => handleFilterClick(filter)}
                        >
                          <UnstyledButton classNames={{ root: classes.categoryButton }}>{filter}</UnstyledButton>
                        </Box>
                      );
                    })}
                  </Group>
                  <ShowRowsCount onRowsChange={handleRowsPerPageChange} />
                </Group>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
                {md ? <CoinsTableFixedColumn data={filteredData} /> : <CoinsTable data={filteredData} />}
              </Stack>

              <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

              <Group justify={"space-between"}>
                <Text variant="text-4" className={classes.greyText}>
                  {currentPage * rowsPerPage - rowsPerPage + 1}-{Math.min(currentPage * rowsPerPage, totalItems)} of {totalItems} assets
                </Text>
                <Pagination total={Math.ceil(totalItems / rowsPerPage)} value={currentPage} onChange={handlePageChange}>
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
