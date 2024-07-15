import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Button, Center, CloseButton, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { $historyResponse } from "@/pages/staking/model";
import { getSortingFunc } from "@/pages/staking/ui/staking-table/utils";

import { createUnstakeRequest, getStakingHistory } from "@/shared/api/staking/request";
import { InvestmentHistory, StakingHistoryResponse } from "@/shared/api/types";
import { MarketSortIcon, NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";

import classes from "./styles.module.css";

type SortingLabel = "Coin" | "Plane" | "Expires" | "Realtime profit" | "Invested";
type SortingDirection = "ASC" | "DESC";

export const StakingTable = ({
  usedForTradingBot,
  tableHeaders,
  value1,
  tableData,
}: {
  usedForTradingBot: boolean;
  tableHeaders: Array<any>;
  value1: string;
  tableData: {
    icon: JSX.Element;
    name: string;
    qty: string;
    bot: string;
    tradeType: string;
    activationTime: string;
    pl: number;
    earned: number;
  }[];
}) => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Coin");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const historyResponse = useUnit<StakingHistoryResponse>($historyResponse);
  const historyResponsePending = useUnit<boolean>(getStakingHistory.pending);
  const [investHistory, setInvestHistory] = useState<Array<any>>([]);
  const [siblings, setSiblings] = useState(getSiblings());
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState<number>(1);
  const [searchFunc, setSearchFunc] = useState<any>(() => (a: Crypto) => true);
  const defaultSortingFunc = () => (a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => {
    return parseInt(b[0]) - parseInt(a[0]);
  };
  const [sortFunc, setSortFunc] = useState<any>(defaultSortingFunc);

  let calculatePage = (sortFn: ((a: [string, InvestmentHistory], b: [string, InvestmentHistory]) => number) | undefined, searchFn: any) => {
    if (!historyResponsePending) {
      const startIndex = (page - 1) * 5;
      const endIndex = startIndex + 5;
      let temp = Object.entries(historyResponse.history ? historyResponse.history : [])
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
            Invested: val.invested,
            cancel: <CloseButton className={classes.closeButton} />,
          };
        });
      let pages = Object.entries(historyResponse.history ? historyResponse.history : []).filter(searchFn).length;
      setTotalPage(Math.ceil(pages / 5));
      setInvestHistory(temp);
    }
  };

  const unstake = useCallback((id: string) => {
    createUnstakeRequest(id);
  }, []);

  useEffect(() => {
    calculatePage(sortFunc, searchFunc);
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
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);
  const tableCoins = useMemo(() => {
    return tableData.map((coin: any) => {
      // fix type
      return (
        <Table.Tr key={coin.id}>
          <Table.Td w={"225"} px={15} className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)} wrap="nowrap">
              {coin.icon}
              <Title c="white" order={4} className={classes.cellWithIconText}>
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
          {usedForTradingBot && (
            <>
              <Table.Td w={"225"}>
                <Text c="white" variant="text-3" span className={classes.plAmount}>
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
      <Stack className={classes.box} gap={0}>
        <Flex justify={"space-between"} align={"center"} mb={rem("32px")}>
          <Title order={4}>Active investments</Title>
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
          <Table classNames={{ tr: classes.tableTr, td: classes.tableTd, table: classes.table }} verticalSpacing={rem("16px")} withRowBorders={true}>
            <Table.Thead classNames={{ thead: classes.tableHead }}>
              <Table.Tr>{headers}</Table.Tr>
            </Table.Thead>
            <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
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
