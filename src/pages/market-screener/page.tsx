import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { useResize } from "@/hooks/useResize";
import { Selector } from "@/pages/crypto-market-cap/page";
import { Box, Divider, Group, Image, Pagination, Stack, Table, Text, Title, UnstyledButton, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  FetchFunc,
  fetchOscillatorsData,
  fetchOverviewData,
  fetchPerformanceData,
  fetchTrendFollowingData
} from "@/shared/api/market-screene/request";
import { Container, Footer, Header, NextIcon, PreviousIcon, RateIcon, ShowRowsCount, Wrapper } from "@/shared/ui";
import { TableSelectionHeader } from "@/shared/ui/tableSelectionHeader";
import { TitleWithIcon } from "@/shared/ui/titleWithIcon";

import { SortingDirection } from "@/shared/types/CoinsTable";
import { Link } from "atomic-router-react";
import classes from "./styles.module.css";
import { CoinsTableFixedColumn } from "./ui/coins-table/CoinsTableFixedColumn";
import { CoinsTable } from "./ui/coins-table/ui";

const formatNumber = (num: number) => {
  if (num === 0) return "0.00";
  if (num < 0.01 && num > 0) {
    return num.toFixed(5);
  }
  return num.toFixed(2);
};

const SELECTORS1 = [
  {
    label: "Overview",
    fetchData: fetchOverviewData,
    headers: [
      { label: "#", className: classes.tableHeadCell, sortable: false },
      {
        label: "Coin Name", className: classes.tableHeadCell, sortable: true,
        sortFunc: (direction) => {
          if (direction == "ASC") {
            return (a, b) => a.d[2] < b.d[2] ? 1 : -1
          } else {
            return (a, b) => a.d[2] < b.d[2] ? -1 : 1
          }
        }
      },
      { label: "Price", className: classes.tableHeadCell, sortable: true },
      { label: "CHG%", className: classes.tableHeadCell, sortable: true },
      { label: "CHG", className: classes.tableHeadCell, sortable: true },
      { label: "HIGH", className: classes.tableHeadCell, sortable: true },
      { label: "LOW", className: classes.tableHeadCell, sortable: true },
      { label: "VOL", className: classes.tableHeadCell, sortable: true },
      { label: "VOL 24 USD", className: classes.tableHeadCell, sortable: true },
      { label: "VOL 24 CHG%", className: classes.tableHeadCell, sortable: true },
      { label: "TR", className: classes.tableHeadCell, sortable: false },
    ],
    transformData: (data, currentPage, rowsPerPage) => {
      return (
        data.map((coin, index) => {
          return (
            <Table.Tr key={coin.d[2]}>
              <Table.Td w={70}>
                <Group gap={rem(16)} className={classes.firstTdWrapper}>
                  <Text variant="text-3" className={classes.greyText} span>
                    №{(currentPage - 1) * rowsPerPage + index + 1}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td className={classes.tbodyTdWithIcon}>
                <Group gap={rem(8)}>
                  <img src={"https://s3-symbol-logo.tradingview.com/crypto/" + (coin.d[0]?.split("crypto/")[1] || "") + ".svg"} alt={`${coin.d[2]} icon`} className={classes.tokenIcon} />
                  <Title c="white" fz={20} order={4}>
                    {coin.d[2].length > 15 ? coin.d[2].slice(0, 12).concat("...") : coin.d[2]}
                  </Title>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[3]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Group gap={rem(4)}>
                  <RateIcon type={coin.d[4] > 0 ? 'positive' : 'negative'} />
                  <Text c="white" variant="text-4" span>
                    {coin.d[4].toFixed(2)}%
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[5]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[6]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[7]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[8]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[11]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${formatNumber(parseFloat(coin.d[12]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <UnstyledButton className={classes.buyButton}>
                  <Link to={"#/trade/" + coin.d[0]?.split("crypto/XTVC")[1] + "-USDT"}>
                    BUY
                  </Link>
                </UnstyledButton>
              </Table.Td>
            </Table.Tr>
          )
        }
        )
      )
    }
  },
  {
    label: "Performance",
    fetchData: fetchPerformanceData,
    headers: [
      { label: "#", className: classes.tableHeadCell, sortable: false },
      {
        label: "Coin Name", className: classes.tableHeadCell, sortable: true,
        sortFunc: (direction) => {
          if (direction == "ASC") {
            return (a, b) => a.d[2] < b.d[2] ? 1 : -1
          } else {
            return (a, b) => a.d[2] < b.d[2] ? -1 : 1
          }
        }
      },
      { label: "Market cap", className: classes.tableHeadCell, sortable: true },
      { label: "CHG%24H", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%24H", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%1M", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%3M", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%6M", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%1Y", className: classes.tableHeadCell, sortable: true },
      { label: "PERF%ALL", className: classes.tableHeadCell, sortable: true },
      { label: "Volatility", className: classes.tableHeadCell, sortable: true },
      { label: "TR", className: classes.tableHeadCell, sortable: false },
    ],
    transformData: (data, currentPage, rowsPerPage) => {
      const getMarketCap = (marketCap: number) => {
        let mc = String(marketCap);
        if (marketCap >= 1000000 && marketCap < 1000000000) {
          mc = `${Math.round(marketCap / 1000000)}M`;
        } else if (marketCap >= 1000000000) {
          mc = `${Math.round(marketCap / 1000000000)}B`;
        }
        return mc;
      };

      return (
        data.map((coin, index) => {
          return (
            <Table.Tr key={coin.d[2]}>
              <Table.Td w={70}>
                <Group gap={rem(16)} className={classes.firstTdWrapper}>
                  <Text variant="text-3" className={classes.greyText} span>
                    №{(currentPage - 1) * rowsPerPage + index + 1}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td className={classes.tbodyTdWithIcon}>
                <Group gap={rem(8)}>
                  <img src={"https://s3-symbol-logo.tradingview.com/crypto/" + (coin.d[0]?.split("crypto/")[1] || "") + ".svg"} alt={`${coin.d[2]} icon`} className={classes.tokenIcon} />
                  <Title c="white" fz={20} order={4}>
                    {coin.d[2].length > 15 ? coin.d[2].slice(0, 12).concat("...") : coin.d[2]}
                  </Title>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${getMarketCap(parseFloat(formatNumber(parseFloat(coin.d[3]) || 0)))}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[4]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[4]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[5]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[5]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[6]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[6]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[7]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[7]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[8]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[8]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[9]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[9]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c={parseFloat(coin.d[10]) > 0 ? "var(--color-green)" : " var(--color-red)"} variant="text-4" span>
                  %{formatNumber(parseFloat(coin.d[10]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" span>
                  %{formatNumber(parseFloat(coin.d[11]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
              </Table.Td>
            </Table.Tr>
          )
        }
        )
      )
    }
  },
  {
    label: "Oscillators",
    fetchData: fetchOscillatorsData,
    headers: [
      { label: "#", className: classes.tableHeadCell, sortable: false },
      {
        label: "Name", className: classes.tableHeadCell, sortable: true,
        sortFunc: (direction) => {
          if (direction == "ASC") {
            return (a, b) => a.d[2] < b.d[2] ? 1 : -1
          } else {
            return (a, b) => a.d[2] < b.d[2] ? -1 : 1
          }
        },
      },
      { label: "Oscillator Rating", className: classes.tableHeadCell, sortable: true },
      { label: "ADX", className: classes.tableHeadCell, sortable: true },
      { label: "AO", className: classes.tableHeadCell, sortable: true },
      { label: "ATR", className: classes.tableHeadCell, sortable: true },
      { label: "CCI20", className: classes.tableHeadCell, sortable: true },
      { label: "MACD Level", className: classes.tableHeadCell, sortable: true },
      { label: "MACD Signal", className: classes.tableHeadCell, sortable: true },
      { label: "MOM", className: classes.tableHeadCell, sortable: true },
      { label: "RSI14", className: classes.tableHeadCell, sortable: true },
      { label: "TR", className: classes.tableHeadCell, sortable: false },
    ],
    transformData: (data, currentPage, rowsPerPage) => {
      const getRating = (recommendation) => {
        if (recommendation < -0.5) {
          return (<Text c={"red"}>Strong sell</Text>)
        } else if (recommendation >= -0.5 && recommendation < -0.1) {
          return (<Text c="lightcoral">Sell</Text>)
        } else if (recommendation >= -0.1 && recommendation < 0.1) {
          return (<Text c="grey">Neutral</Text>)
        } else if (recommendation >= 0.1 && recommendation < 0.5) {
          return (<Text c="lightgreen">Buy</Text>)
        } else {
          return (<Text c="green">Strong Buy</Text>)
        }
      }
      return (
        data.map((coin, index) => {
          return (
            <Table.Tr key={coin.d[2]}>
              <Table.Td w={70}>
                <Group gap={rem(16)} className={classes.firstTdWrapper}>
                  <Text variant="text-3" className={classes.greyText} span>
                    №{(currentPage - 1) * rowsPerPage + index + 1}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td className={classes.tbodyTdWithIcon}>
                <Group gap={rem(8)}>
                  <img src={"https://s3-symbol-logo.tradingview.com/crypto/" + (coin.d[0]?.split("crypto/")[1] || "") + ".svg"} alt={`${coin.d[2]} icon`} className={classes.tokenIcon} />
                  <Title c="white" fz={20} order={4}>
                    {coin.d[2].length > 15 ? coin.d[2].slice(0, 12).concat("...") : coin.d[2]}
                  </Title>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {getRating(parseFloat(coin.d[3]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[4]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[5]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[6]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[7]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[8]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[9]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[10]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[11]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
              </Table.Td>
            </Table.Tr>
          )
        }
        )
      )
    }
  },
  {
    label: "Trend-Following",
    fetchData: fetchTrendFollowingData,
    headers: [
      { label: "#", className: classes.tableHeadCell, sortable: false },
      {
        label: "Name", className: classes.tableHeadCell, sortable: true,
        sortFunc: (direction) => {
          if (direction == "ASC") {
            return (a, b) => a.d[2] < b.d[2] ? 1 : -1
          } else {
            return (a, b) => a.d[2] < b.d[2] ? -1 : 1
          }
        }
      },
      { label: "Moving Avarage Rating", className: classes.tableHeadCell, sortable: true },
      { label: "Price", className: classes.tableHeadCell, sortable: true },
      { label: "SMA20", className: classes.tableHeadCell, sortable: true },
      { label: "SMA50", className: classes.tableHeadCell, sortable: true },
      { label: "SMA200", className: classes.tableHeadCell, sortable: true },
      { label: "BB UP", className: classes.tableHeadCell, sortable: true },
      { label: "BB LOW", className: classes.tableHeadCell, sortable: true },
      { label: "TR", className: classes.tableHeadCell, sortable: false },
    ],
    transformData: (data, currentPage, rowsPerPage) => {
      const getRating = (recommendation) => {
        if (recommendation < -0.5) {
          return (<Text c={"red"}>Strong sell</Text>)
        } else if (recommendation >= -0.5 && recommendation < -0.1) {
          return (<Text c="lightcoral">Sell</Text>)
        } else if (recommendation >= -0.1 && recommendation < 0.1) {
          return (<Text c="grey">Neutral</Text>)
        } else if (recommendation >= 0.1 && recommendation < 0.5) {
          return (<Text c="lightgreen">Buy</Text>)
        } else {
          return (<Text c="green">Strong Buy</Text>)
        }
      }
      return (
        data.map((coin, index) => {
          return (
            <Table.Tr key={coin.d[2]}>
              <Table.Td w={70}>
                <Group gap={rem(16)} className={classes.firstTdWrapper}>
                  <Text variant="text-3" className={classes.greyText} span>
                    №{(currentPage - 1) * rowsPerPage + index + 1}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td className={classes.tbodyTdWithIcon}>
                <Group gap={rem(8)}>
                  <img src={"https://s3-symbol-logo.tradingview.com/crypto/" + (coin.d[0]?.split("crypto/")[1] || "") + ".svg"} alt={`${coin.d[2]} icon`} className={classes.tokenIcon} />
                  <Title c="white" fz={20} order={4}>
                    {coin.d[2].length > 15 ? coin.d[2].slice(0, 12).concat("...") : coin.d[2]}
                  </Title>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {getRating(parseFloat(coin.d[3]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[4]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[5]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[6]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[7]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[8]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  {formatNumber(parseFloat(coin.d[9]) || 0)}
                </Text>
              </Table.Td>
              <Table.Td>
                <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
              </Table.Td>
            </Table.Tr>
          )
        }
        )
      )
    }
  },
];

export const SELECTORS: Selector[] = [
  {
    label: "General",
    isSelected: true,
    sort: { sortBy: "crypto_total_rank", sortOrder: "asc" },
    filter: [],
    fetchData: () => (null),
  },
  {
    label: "Top gainers",
    isSelected: false,
    sort: {},
    filter: [],
    preset: "coin_gainers",
    fetchData: () => (null),
  },
  {
    label: "All-time high",
    isSelected: false,
    sort: {},
    preset: "coin_all_time_high",
    filter: [],
    fetchData: () => (null),
  },
  {
    label: "All-time low",
    isSelected: false,
    sort: {},
    filter: [],
    preset: "coin_all_time_low",
    fetchData: () => (null),
  },
  {
    label: "New monthly high",
    isSelected: false,
    sort: { sortBy: "crypto_total_rank", sortOrder: "asc" },
    filter: [{ left: "High.1M", operation: "eless", right: "high" }],
    fetchData: () => (null),
  },
  {
    label: "Most volatile",
    preset: "coin_most_volatile",
    sort: {},
    filter: [],
    fetchData: () => (null),
  },
];

const determineActiveTab = (activeTab: { label: string }) => {
  const generalTabs = ["Overview", "Performance", "Oscillators", "Trend-Following"];
  return generalTabs.includes(activeTab.label) ? "General" : "";
};

export function Page() {
  const [_, setSiblings] = useState(getSiblings());
  const { isAdaptive: md } = useResize(1200);
  const [activeTopTab, setActiveTopTab] = useState(SELECTORS[0]);
  const [activeBottomTab, setActiveBottomTab] = useState(SELECTORS1[0]);
  const [allData, setAllData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortingLabel, setSortingLabel] = useState<string>("#");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadData = async (fetchFunc: FetchFunc, sort, filter, preset) => {
    try {
      const result = await fetchFunc(sort, filter, preset);
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
    loadData(activeBottomTab.fetchData, activeTopTab.sort, activeTopTab.filter, activeTopTab.preset);
  }, [activeBottomTab]);

  useEffect(() => {
    updateDisplayData(allData, 1, rowsPerPage);
  }, [searchQuery, allData, rowsPerPage]);

  useEffect(() => {
    let index = activeBottomTab.headers.findIndex(a => a.label === sortingLabel);
    console.log(activeBottomTab.headers[index].sortFunc)
    let defaultSortingFunc = sortingDirection === "DESC" ? (a, b) => b.d[index + 1] - a.d[index + 1] : (a, b) => a.d[index + 1] - b.d[index + 1]
    allData.sort(activeBottomTab.headers[index].sortFunc ? activeBottomTab.headers[index].sortFunc!(sortingDirection) : defaultSortingFunc)
    updateDisplayData(allData, 1, rowsPerPage);
  }, [sortingLabel, sortingDirection])

  const updateDisplayData = (data: any[], page: number, rows: number) => {
    const filteredData = data.filter((item) => item.d[2]?.toLowerCase().includes(searchQuery.toLowerCase()));
    setTotalItems(filteredData.length || 0);
    const start = (page - 1) * rows;
    const end = start + rows;
    setDisplayData(filteredData.slice(start, end));
    setCurrentPage(1);
  };

  const handleBottomTabClick = (selector: (typeof SELECTORS1)[0]) => {
    setActiveBottomTab(selector);
    setCurrentPage(1);
    loadData(selector.fetchData, activeTopTab.sort, activeTopTab.filter, activeTopTab.preset);
  };

  const handleTopTabClick = (selector: Selector) => {
    setActiveTopTab(selector);
    setCurrentPage(1);
    loadData(activeBottomTab.fetchData, selector.sort, selector.filter, selector.preset);
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
                handleTabClick={handleTopTabClick}
                activeTab={activeTopTab}
                isGeneralTab={determineActiveTab(activeTopTab)}
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
                        data-active={selector.label === activeBottomTab.label ? 1 : 0}
                        className={classes.categoryButtonWrapper}
                        onClick={() => handleBottomTabClick(selector)}
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
                      <CoinsTable sortingLabel={sortingLabel} sortingDirection={sortingDirection} setSortingDirection={setSortingDirection} setSortingLabel={setSortingLabel} headers={activeBottomTab.headers} data={displayData} transformData={activeBottomTab.transformData} rowsPerPage={rowsPerPage} currentPage={currentPage} />
                    ) : (
                      <CoinsTableFixedColumn sortingLabel={sortingLabel} sortingDirection={sortingDirection} setSortingDirection={setSortingDirection} setSortingLabel={setSortingLabel} headers={activeBottomTab.headers} data={displayData} transformData={activeBottomTab.transformData} rowsPerPage={rowsPerPage} currentPage={currentPage} />
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
