import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Button, Center, CloseButton, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { createUnstakeRequest, getStakingHistory } from "@/shared/api/staking/request";
import { InvestmentHistory, StakingHistoryResponse } from "@/shared/api/types";
import { LoadingScreen, MarketSortIcon, NextIcon, NoRecords, PreviousIcon, SearchIcon } from "@/shared/ui";

import { $historyResponse } from "../../model";
import classes from "./styles.module.css";
import { getSortingFunc } from "./utils";

type SortingLabel = "Coin" | "Plane" | "Expires" | "Realtime profit" | "Invested";
type SortingDirection = "ASC" | "DESC";

export const StakingTable = ({
  usedForTradingBot,
  tableHeaders,
  value1,
}: {
  usedForTradingBot: boolean;
  tableHeaders: Array<any>;
  value1: string;
}) => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Coin");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const historyResponse = useUnit<StakingHistoryResponse>($historyResponse);
  const historyResponsePending = useUnit<boolean>(getStakingHistory.pending);
  const [investHistory, setInvestHistory] = useState<Array<any>>([]);
  const [siblings, setSiblings] = useState(getSiblings());
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState<number>(1);
  const [searchFunc, setSearchFunc] = useState<any>(() => (a: Crypto) => true);
  const defaultSortingFunc = () => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
    return parseInt(b[0]) - parseInt(a[0]);
  };
  const [sortFunc, setSortFunc] = useState<any>(defaultSortingFunc);

  const calculatePage = (sortFn: ((a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => number) | undefined, searchFn: any) => {
    if (!historyResponsePending) {
      const startIndex = (page - 1) * 6;
      const endIndex = startIndex + 6;
      const temp = Object.entries(historyResponse.history ? historyResponse.history : [])
        .filter(searchFn)
        .sort(sortFn)
        .slice(startIndex, endIndex)
        .map(([key, val]) => {
          return {
            id: key,
            icon: <Image src={val.image} h={29} w={29} />,
            name: val.name,
            Plane: val.plan,
            Expires: val.expires,
            Realtime_profit: val.profit + " " + val.symbol,
            Invested: val.invested + " " + val.symbol,
            cancel: <CloseButton className={classes.closeButton} />,
          };
        });
      const pages = Object.entries(historyResponse.history ? historyResponse.history : []).filter(searchFn).length;
      setTotalPage(Math.ceil(pages / 5));
      setInvestHistory(temp);
    }
  };

  const unstake = useCallback((id: string) => {
    createUnstakeRequest(id);
  }, []);

  useEffect(() => {
    calculatePage(sortFunc, searchFunc);
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  }, [historyResponse, historyResponsePending, page, sortFunc, searchFunc]);

  useEffect(() => {
    setPage(1);
    if (search !== "") {
      setSearchFunc(() => (a: [string, InvestmentHistory]) => {
        return a[1].name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
      });
    } else {
      setSearchFunc(() => (a: [string, InvestmentHistory]) => true);
    }
  }, [search]);

  const onTableHeadSortLabelClick = useCallback(
    (label: SortingLabel) => {
      let direction;
      if (sortingLabel != label) {
        setSortingLabel(label);
        direction = "ASC";
        setSortingDirection("ASC");
      } else {
        direction = sortingDirection === "ASC" ? "DESC" : "ASC";
        setSortingDirection(sortingDirection === "ASC" ? "DESC" : "ASC");
      }
      setSortFunc(getSortingFunc(label, direction));
    },
    [sortingDirection, sortingLabel, historyResponsePending],
  );

  useEffect(() => {
    const handleResize = () => {
      setSiblings(getSiblings());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headers = useMemo(() => {
    return tableHeaders.map((header) => {
      return (
        <Table.Th key={header.label} className={header.className}>
          <Group
            gap={rem("2px")}
            justify={header.sortable ? "flex-start" : "center"}
            className={clsx(classes.tableHeadSortLabel, {
              [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
            })}
            onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
            wrap="nowrap"
          >
            <Text c="inherit" variant="text-4" span>
              {header.label}
            </Text>
            {header.sortable ? <MarketSortIcon /> : null}
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);
  const tableCoins = useMemo(() => {
    return investHistory.map((coin) => {
      return (
        <Table.Tr key={coin.id}>
          <Table.Td w={"225"} px={15} className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)} wrap="nowrap">
              {coin.icon}
              <Title c="white" order={4}>
                {coin.name}
              </Title>
            </Group>
          </Table.Td>
          <Table.Td w={"225"}>
            <Text c="white" variant="text-3" span>
              {coin.Plane || coin.qty}
            </Text>
          </Table.Td>
          <Table.Td w={"225"}>
            <Text c="white" variant="text-3" span>
              {coin.Expires || coin.bot}
            </Text>
          </Table.Td>
          <Table.Td w={"225"}>
            <Text c="white" variant="text-3" span>
              {coin.Realtime_profit || coin.tradeType}
            </Text>
          </Table.Td>
          <Table.Td w={"225"}>
            <Text c="white" variant="text-3" span>
              {coin.Invested || coin.activationTime}
            </Text>
          </Table.Td>
          <Table.Td w={"225"}>
            <Center maw={255}>
              <CloseButton onClick={() => unstake(coin.id)} className={classes.closeButton} />
            </Center>
          </Table.Td>
          {usedForTradingBot && (
            <>
              <Table.Td w={"225"}>
                <Text variant="text-3" span className={classes.plAmount}>
                  {coin.pl}%
                </Text>
              </Table.Td>
              <Table.Td w={"225"}>
                <Text c="white" variant="text-3" span>
                  {coin.earned}$
                </Text>
              </Table.Td>
              <Table.Td w={"225"}>
                <Button className={classes.linkButton}>Stop</Button>
              </Table.Td>
            </>
          )}
        </Table.Tr>
      );
    });
  }, [investHistory]);
  return (
    <Stack className={classes.wrapper}>
      <Stack className={classes.box} gap={0} pos="relative">
        {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
        <Flex justify={"space-between"} align={"center"} mb={rem("32px")}>
          <Title order={4}>Investments</Title>
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="lg"
            classNames={{
              input: classes.searchInput,
              wrapper: classes.searchInputWrapper,
            }}
            leftSection={<SearchIcon />}
            placeholder="Search"
          />
        </Flex>

        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
        <div className={classes.tableContainer}>
          <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
            <Table.Thead classNames={{ thead: classes.tableHead }}>
              <Table.Tr>{headers}</Table.Tr>
            </Table.Thead>
            <Table.Tbody classNames={{ tbody: classes.tableBody }}>
              {investHistory.length > 0 && tableCoins}
              {investHistory.length < 6 && investHistory.length !== 0 && (
                <>
                  {new Array(6 - investHistory.length).fill("").map((item, idx) => (
                    <Table.Tr key={idx}>
                      <Table.Td h={61} w={"225"} px={15} className={classes.tbodyTdWithIcon}>
                        <Group gap={rem(8)} wrap="nowrap">
                          <>{""}</>
                          <Title c="white" order={4}>
                            {""}
                          </Title>
                        </Group>
                      </Table.Td>
                      <Table.Td h={61} w={"225"}>
                        <Text c="white" variant="text-3" span>
                          {""}
                        </Text>
                      </Table.Td>
                      <Table.Td h={61} w={"225"}>
                        <Text c="white" variant="text-3" span>
                          {""}
                        </Text>
                      </Table.Td>
                      <Table.Td h={61} w={"225"}>
                        <Text c="white" variant="text-3" span>
                          {""}
                        </Text>
                      </Table.Td>
                      <Table.Td h={61} w={"225"}>
                        <Text c="white" variant="text-3" span>
                          {""}
                        </Text>
                      </Table.Td>
                      <Table.Td h={61} w={"225"}>
                        <Center maw={255}>
                          <div className={classes.closeButtonPlaceholder}>{""}</div>
                        </Center>
                      </Table.Td>
                      {usedForTradingBot && (
                        <>
                          <Table.Td h={61} w={"225"}>
                            <Text variant="text-3" span className={classes.plAmount}>
                              {""}
                            </Text>
                          </Table.Td>
                          <Table.Td h={61} w={"225"}>
                            <Text c="white" variant="text-3" span>
                              {""}
                            </Text>
                          </Table.Td>
                          <Table.Td h={61} w={"225"}>
                            <div className={classes.linkButton}>{""}</div>
                          </Table.Td>
                        </>
                      )}
                    </Table.Tr>
                  ))}
                </>
              )}
              {investHistory.length === 0 && (
                <>
                  <Table.Tr pos="relative" h={400}>
                    <Table.Td className={classes.tableTdNoRecords}>
                      <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="120px" gap="10px">
                        <NoRecords />
                        <Text className={classes.noRecords}>
                          No records
                          <br />
                          found
                        </Text>
                      </Flex>
                    </Table.Td>
                  </Table.Tr>
                </>
              )}
            </Table.Tbody>
          </Table>
        </div>
        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={rem("32px")} />

        <Group justify={"space-between"} mt={rem("32px")}>
          <Text variant="text-4" className={classes.greyText}>
            {historyResponse.history && Object.entries(historyResponse.history!).length > 5
              ? "1-5 of " + Object.entries(historyResponse.history!).length + " assets"
              : "1-5 assets"}
          </Text>
          <Pagination value={page} onChange={setPage} total={totalPage ? totalPage : 1} defaultValue={1} {...{ siblings }}>
            <Group gap={0} justify="center">
              <Pagination.Previous icon={PreviousIcon} />
              <Pagination.Items />
              <Pagination.Next icon={NextIcon} />
            </Group>
          </Pagination>
        </Group>
      </Stack>
    </Stack>
  );
};
