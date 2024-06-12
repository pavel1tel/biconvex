import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { useResize } from "@/hooks/useResize";
import { Box, Divider, Group, Image, Pagination, Stack, Text, UnstyledButton, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  FetchFunc,
  Range,
  fetchData,
  fetchOscillatorsData,
  fetchOverviewData,
  fetchPerformanceData,
  fetchTrendFollowingData,
} from "@/shared/api/market-screene/request";
import { Container, Footer, Header, NextIcon, PreviousIcon, ShowRowsCount, Wrapper } from "@/shared/ui";
import { TableSelectionHeader } from "@/shared/ui/tableSelectionHeader";
import { TitleWithIcon } from "@/shared/ui/titleWithIcon";

import classes from "./styles.module.css";
import { CoinsTableFixedColumn } from "./ui/coins-table/CoinsTableFixedColumn";
import { CoinsTable } from "./ui/coins-table/ui";

const SELECTORS1 = [
  { label: "Overview", fetchData: fetchOverviewData },
  { label: "Performance", fetchData: fetchPerformanceData },
  { label: "Oscillators", fetchData: fetchOscillatorsData },
  { label: "Trend-Following", fetchData: fetchTrendFollowingData },
];

export const SELECTORS = [
  {
    label: "General",
    isSelected: true,
    fetchData: fetchOverviewData,
    sort: { sortBy: "crypto_total_rank", sortOrder: "asc" },
  },
  {
    label: "Top gainers",
    isSelected: false,
    fetchData: (range: Range) =>
      fetchData(
        [
          "base_currency_logoid",
          "currency_logoid",
          "name",
          "close",
          "change",
          "change_abs",
          "high",
          "low",
          "volume",
          "24h_vol|5",
          "24h_vol_change|5",
          "Recommend.All",
          "exchange",
          "description",
          "type",
          "subtype",
          "update_mode",
          "pricescale",
          "minmov",
          "fractional",
          "minmove2",
        ],
        { sortBy: "24h_close_change|5", sortOrder: "desc" },
        [],
        range,
      ),
  },
  {
    label: "All-time high",
    isSelected: false,
    fetchData: (range: Range) =>
      fetchData(
        [
          "base_currency_logoid",
          "currency_logoid",
          "name",
          "close",
          "change",
          "change_abs",
          "high",
          "low",
          "volume",
          "24h_vol|5",
          "24h_vol_change|5",
          "Recommend.All",
          "exchange",
          "description",
          "type",
          "subtype",
          "update_mode",
          "pricescale",
          "minmov",
          "fractional",
          "minmove2",
        ],
        { sortBy: "Perf.All", sortOrder: "desc" },
        [],
        range,
      ),
  },
  {
    label: "All-time low",
    isSelected: false,
    fetchData: (range: Range) =>
      fetchData(
        [
          "base_currency_logoid",
          "currency_logoid",
          "name",
          "close",
          "change",
          "change_abs",
          "high",
          "low",
          "volume",
          "24h_vol|5",
          "24h_vol_change|5",
          "Recommend.All",
          "exchange",
          "description",
          "type",
          "subtype",
          "update_mode",
          "pricescale",
          "minmov",
          "fractional",
          "minmove2",
        ],
        { sortBy: "Perf.All", sortOrder: "asc" },
        [],
        range,
      ),
  },
  {
    label: "New monthly high",
    isSelected: false,
    fetchData: (range: Range) =>
      fetchData(
        [
          "base_currency_logoid",
          "currency_logoid",
          "name",
          "close",
          "change",
          "change_abs",
          "high",
          "low",
          "volume",
          "24h_vol|5",
          "24h_vol_change|5",
          "Recommend.All",
          "exchange",
          "description",
          "type",
          "subtype",
          "update_mode",
          "pricescale",
          "minmov",
          "fractional",
          "minmove2",
        ],
        { sortBy: "crypto_total_rank", sortOrder: "asc" },
        [{ left: "High.1M", operation: "eless", right: "high" }],
        range,
      ),
  },
  {
    label: "Most volatile",
    fetchData: (range: Range) =>
      fetchData(
        [
          "base_currency_logoid",
          "currency_logoid",
          "name",
          "close",
          "change",
          "change_abs",
          "high",
          "low",
          "volume",
          "24h_vol|5",
          "24h_vol_change|5",
          "Recommend.All",
          "exchange",
          "description",
          "type",
          "subtype",
          "update_mode",
          "pricescale",
          "minmov",
          "fractional",
          "minmove2",
        ],
        { sortBy: "Volatility.D", sortOrder: "desc" },
        [],
        range,
      ),
  },
];

export function Page() {
  const [_, setSiblings] = useState(getSiblings());
  const { isAdaptive: md } = useResize(1200);
  const [activeTab, setActiveTab] = useState(SELECTORS[0]);
  const [allData, setAllData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadData = async (fetchFunc: FetchFunc) => {
    try {
      const result = await fetchFunc([0, 50]);
      setAllData(result || []);
      setTotalItems(result.length || 0);
      updateDisplayData(result, 1, rowsPerPage);
    } catch (error) {
      console.error("Error fetching data:", error);
      setAllData([]);
      setDisplayData([]);
      setTotalItems(0);
    }
  };

  useEffect(() => {
    loadData(activeTab.fetchData);
  }, [activeTab]);

  useEffect(() => {
    updateDisplayData(allData, 1, rowsPerPage);
  }, [searchQuery, allData, rowsPerPage]); // Update display data when search query changes

  const updateDisplayData = (data: any[], page: number, rows: number) => {
    const filteredData = data.filter((item) => item.d[13]?.toLowerCase().includes(searchQuery.toLowerCase()));
    const start = (page - 1) * rows;
    const end = start + rows;
    setDisplayData(filteredData.slice(start, end));
  };

  const handleTabClick = (selector: (typeof SELECTORS)[0]) => {
    setActiveTab(selector);
    setCurrentPage(1);
    loadData(selector.fetchData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateDisplayData(allData, page, rowsPerPage);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing rows per page
    updateDisplayData(allData, 1, value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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
              <TableSelectionHeader
                selectors={SELECTORS}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />{" "}
              {/* Pass search query and change handler */}
              <Stack gap={0}>
                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

                <Group justify={"space-between"}>
                  <Group gap={rem(32)} className={classes.categoriesWrapper}>
                    {SELECTORS1.map((selector) => (
                      <Box
                        key={selector.label}
                        data-active={selector.label === activeTab.label ? 1 : 0}
                        className={classes.categoryButtonWrapper}
                        onClick={() => handleTabClick(selector)}
                      >
                        <UnstyledButton classNames={{ root: classes.categoryButton }}>{selector.label}</UnstyledButton>
                      </Box>
                    ))}
                  </Group>
                  <ShowRowsCount onRowsChange={handleRowsPerPageChange} />
                </Group>

                <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

                {displayData && displayData.length > 0 ? (
                  <div className={classes.tableContainer}>
                    {!md ? (
                      <CoinsTable data={displayData} rowsPerPage={rowsPerPage} currentPage={currentPage} />
                    ) : (
                      <CoinsTableFixedColumn data={displayData} />
                    )}
                  </div>
                ) : (
                  <Text>No data available.</Text>
                )}
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
