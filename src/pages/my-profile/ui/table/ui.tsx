import downloadIcon from "@/../public/assets/downloadIcon.svg";
import withdrawIcon from "@/../public/assets/exportIcon.svg";
import { useResize } from "@/hooks/useResize";
import { Box, Checkbox, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { Crypto, ProfileReponse } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { MarketSortIcon, NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";

import { $profileReponse } from "../../model";
import classes from "./styles.module.css";
import { getSortingFunc } from "./utils";

type SortingLabel = "Coin" | "Plane" | "Expires" | "Realtime profit" | "Invested";
type SortingDirection = "ASC" | "DESC";
const HEADERS = [
  {
    label: "Coin Name",
    sortable: true,
  },
  {
    label: "Balance",
    sortable: true,
    className: classes.coinTh,
  },
  {
    label: "Equivalent",
    sortable: true,
  },
  {
    label: " ",
    sortable: false,
  },
  {
    label: " ",
    sortable: false,
  },
];
const defaultC = [{}];
export const TableProfile = () => {
  const { isAdaptive: laptop } = useResize(1200);
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Coin");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const [hideZeros, setHideZeros] = useState<boolean>(false);
  const [hideZerosTotalPage, setHideZerosTotalPage] = useState<number>(1);
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const profileReponsepending = useUnit<boolean>(getStakingHistoryFx.pending);
  const [COINS, setCOINS] = useState<any[]>(defaultC);
  const [page, setPage] = useState(1);
  const [sortFunc, setSortFunc] = useState<any>(() => (a: Crypto, b: Crypto) => true);
  const [searchFunc, setSearchFunc] = useState<any>(() => (a: Crypto) => true);
  const [search, setSearch] = useState("");

  const calculatePage = (sortFn: ((a: Crypto, b: Crypto) => number) | undefined, searchFn: (a: Crypto) => boolean) => {
    if (!profileReponsepending) {
      const temp: any[] = [];
      const startIndex = (page - 1) * 5;
      const endIndex = startIndex + 5;
      profileReponse
        .coins!.filter(searchFn)
        .filter((coin) => {
          if (hideZeros) {
            return coin.balance > 0;
          }
          return true;
        })
        .sort(sortFn)
        .slice(startIndex, endIndex)
        .forEach((coin) => {
          temp.push({
            icon: <Image src={coin.image} h={29} w={29} />,
            short_name: coin.symbol,
            name: coin.name,
            Balance: coin.balance,
            Equivalent: "$" + (coin.price * coin.balance).toFixed(2),
          });
        });
      setHideZerosTotalPage(
        profileReponse.coins!.filter(searchFn).filter((coin) => {
          if (hideZeros) {
            return coin.balance > 0;
          }
          return true;
        }).length,
      );
      setCOINS(temp);
    }
  };

  useEffect(() => {
    calculatePage(sortFunc, searchFunc);
  }, [profileReponsepending, profileReponse, page, hideZeros, sortFunc, searchFunc]);

  useEffect(() => {
    setPage(1);
    if (search !== "") {
      setSearchFunc(() => (a: Crypto) => a.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()));
    } else {
      setSearchFunc(() => (a: Crypto) => true);
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
    [sortingDirection, sortingLabel, profileReponsepending],
  );
  const handleRedirection = () => {
    window.scrollTo(0, 0);
  };

  const headers = useMemo(() => {
    return HEADERS.map((header) => {
      return (
        <Table.Th key={header.label} className={header.className}>
          <Group
            gap={rem("2px")}
            justify={header.sortable ? "flex-start" : "center"}
            className={clsx(classes.tableHeadSortLabel, {
              [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
            })}
            onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
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
    return COINS.map((coin) => {
      return (
        <Table.Tr key={coin.name}>
          <Table.Td className={classes.tbodyTdWithIcon} w={300}>
            <Group gap={rem(8)} px={12}>
              {coin.icon}
              <Text c="white" className={classes.text}>
                {coin.name}
              </Text>
              <Text ff={"ProximaNova"} className={classes.pill}>
                {coin.short_name}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td w={220}>
            <Text c="white" variant="text-3" span>
              {parseFloat(parseFloat(coin.Balance).toFixed(4))}
            </Text>
          </Table.Td>
          <Table.Td w={230}>
            <Text c="white" variant="text-3" span>
              {coin.Equivalent}
            </Text>
          </Table.Td>
          <Table.Td w={240}>
            <Link to={routes.deposit} params={{ coin: coin.short_name }} className={classes.tableLink} onClick={handleRedirection}>
              {laptop ? <img src={downloadIcon} alt="" /> : "Deposit"}
            </Link>
          </Table.Td>
          <Table.Td w={240}>
            <Link to={routes.withdraw} params={{ coin: coin.short_name }} className={classes.tableLink} onClick={handleRedirection}>
              {laptop ? <img src={withdrawIcon} alt="" /> : "Withdraw"}
            </Link>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [laptop, COINS]);
  return (
    <Box my={{ 0: 32, md: 64 }}>
      <Text className={classes.title}>My Coins</Text>
      <Box className={classes.scrollContainer}>
        <Stack className={classes.box} gap={0}>
          <Flex className={classes.boxHeader} gap={rem(32)} align={"center"} mb={rem("32px")}>
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="lg"
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search Crypto"
            />
            <Checkbox
              checked={hideZeros}
              onChange={(e) => {
                setPage(1);
                setHideZeros(e.currentTarget.checked);
              }}
              ff={"ProximaNova"}
              classNames={{
                label: classes.label,
              }}
              defaultChecked
              label="Hide zero balances"
            />
          </Flex>

          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
          <div className={classes.tableContainer}>
            <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
              <Table.Thead classNames={{ thead: classes.tableHead }}>
                <Table.Tr>{headers}</Table.Tr>
              </Table.Thead>
              <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
            </Table>
          </div>
          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={"clamp(1.5rem, 2vw, 2rem)"} />

          <Group justify={"space-between"} mt={rem("32px")}>
            <Text variant="text-4" className={classes.greyText}>
              {(page - 1) * 5 + 1}-{(page - 1) * 5 + (COINS ? COINS?.length : 0)} of {hideZerosTotalPage}
            </Text>
            <Pagination value={page} onChange={setPage} total={hideZerosTotalPage ? Math.ceil(hideZerosTotalPage / 5) : 1} defaultValue={1}>
              <Group gap={rem("0px")} justify="center">
                <Pagination.Previous icon={PreviousIcon} />
                <Pagination.Items />
                <Pagination.Next icon={NextIcon} />
              </Group>
            </Pagination>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
};
