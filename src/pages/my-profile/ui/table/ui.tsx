import downloadIcon from "@/../public/assets/downloadIcon.svg";
import withdrawIcon from "@/../public/assets/exportIcon.svg";
import { useResize } from "@/hooks/useResize";
import { Box, Checkbox, Divider, Flex, Group, Pagination, Stack, Table, Text, TextInput, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";

import { routes } from "@/shared/routing";
import { BNBIcon, BitcoinIcon, EthereumIcon, MarketSortIcon, NextIcon, PreviousIcon, SearchIcon, XRPIcon } from "@/shared/ui";

import classes from "./styles.module.css";

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
    label: "Equivalent ",
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
const COINS = [
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Balance: "0",
    Equivalent: "0 USD",
  },
  {
    icon: <EthereumIcon />,
    short_name: "ETH",
    name: "Ethereum",
    Balance: "0",
    Equivalent: "0 USD",
  },
  {
    icon: <XRPIcon />,
    short_name: "XRP",
    name: "XRP",
    Balance: "0",
    Equivalent: "0 USD",
  },
  {
    icon: <BNBIcon />,
    short_name: "BNB",
    name: "BNB",
    Balance: "0",
    Equivalent: "0 USD",
  },
];
export const TableProfile = () => {
  const { isAdaptive: laptop } = useResize(1200);
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Coin");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const onTableHeadSortLabelClick = useCallback(
    (label: SortingLabel) => {
      if (sortingLabel != label) {
        setSortingLabel(label);
        setSortingDirection("ASC");
      } else {
        setSortingDirection(sortingDirection === "ASC" ? "DESC" : "ASC");
      }
    },
    [sortingDirection, sortingLabel],
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
              {coin.Balance}
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
  }, [laptop]);
  return (
    <Box my={{ 0: 32, md: 64 }}>
      <Text className={classes.title}>My Coins</Text>
      <Box className={classes.scrollContainer}>
        <Stack className={classes.box} gap={0}>
          <Flex className={classes.boxHeader} gap={rem(32)} align={"center"} mb={rem("32px")}>
            <TextInput
              size="lg"
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search Crypto"
            />
            <Checkbox
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
              1-20 of 9,383 assets
            </Text>
            <Pagination total={20} defaultValue={1}>
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
