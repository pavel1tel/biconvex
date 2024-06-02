import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Box, Combobox, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, rem, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import { DepositIcon, PromoIcon } from "@/pages/transactions/ui";

import { ArrowDown, BitcoinIcon, NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";
import { WithdrawIcon } from "@/shared/ui/sidebar/Icons";

import classes from "./styles.module.css";

type SortingLabel = "Ticker" | "Date" | "Type" | "Amount" | "Status";
type SortingDirection = "ASC" | "DESC";
const HEADERS = [
  {
    label: "Ticker",
    sortable: true,
  },
  {
    label: "Date",
    sortable: true,
    className: classes.coinTh,
  },
  {
    label: "Type ",
    sortable: true,
  },
  {
    label: "Amount",
    sortable: true,
  },
  {
    label: "Status",
    sortable: true,
  },
];
const COINS = [
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Deposit",
    Amount: "1 BTC",
    Status: "Pending",
  },
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Deposit",
    Amount: "1 BTC",
    Status: "Completed",
  },
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Deposit",
    Amount: "1 BTC",
    Status: "Failed",
  },
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Withdraw",
    Amount: "1 BTC",
    Status: "Pending",
  },
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Withdraw",
    Amount: "1 BTC",
    Status: "Completed",
  },
  {
    icon: <BitcoinIcon />,
    short_name: "BTC",
    name: "Bitcoin",
    Data: "20.20.2020",
    Type: "Promo",
    Amount: "1 BTC",
    Status: "Failed",
  },
];
export const TransactionTable = () => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Amount");
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
            {/* {header.sortable ? <MarketSortIcon /> : null} */}
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);
  const iconsByType: Record<string, React.ReactNode> = {
    Deposit: <DepositIcon />,
    Withdraw: <WithdrawIcon />,
    Promo: <PromoIcon />,
  };
  const classNamesByStatus: Record<string, string> = {
    Pending: classes.pending,
    Completed: classes.completed,
    Failed: classes.failed,
  };
  const tableCoins = useMemo(() => {
    return COINS.map((coin) => {
      return (
        <Table.Tr key={coin.name}>
          <Table.Td w={224} className={classes.tbodyTdWithIcon}>
            <Flex gap={rem(8)}>
              {coin.icon}
              <Text c="white" className={classes.text}>
                {coin.name}
              </Text>
              <Text ff={"ProximaNova"} className={classes.pill}>
                {coin.short_name}
              </Text>
            </Flex>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span style={{paddingLeft:"7px"}}>
              {coin.Data}
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span>
              <Flex align={"center"} gap={rem(4)}>
                {iconsByType[coin.Type]}
                {coin.Type}
              </Flex>
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span>
              {coin.Amount}
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span className={clsx(classes.status, classNamesByStatus[coin.Status])}>
              {coin.Status}
            </Text>
            {/* <Image
              src={`${import.meta.env.BASE_URL}assets/statusIcons/Icon-${coin.Status.toLowerCase()}-status.svg`}
              className={classes.statusIcon}
            /> */}
          </Table.Td>
        </Table.Tr>
      );
    });
  }, []);
  const SHOW_ROWS_OPTIONS = ["Pending", "Completed", "Failed"];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [value, setValue] = useState<string>("");
  const options = SHOW_ROWS_OPTIONS.map((item) => (
    <Combobox.Option
      value={item.toString()}
      key={item}
      className={clsx({ [classes.dropdownOptionSelected]: value === item })}
      classNames={{ option: classes.dropdownOption }}
    >
      {item}
    </Combobox.Option>
  ));

  const [siblings, setSiblings] = useState(getSiblings());

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
    <Stack gap={rem(32)} className={classes.wrapper}>
      <Text className={classes.title}>Transaction history</Text>
      <Stack className={classes.box} gap={32}>
        <Group className={classes.boxHeader} justify="space-between" align={"center"}>
          <TextInput
            h={51}
            classNames={{
              input: classes.searchInput,
              wrapper: classes.searchInputWrapper,
            }}
            leftSection={<SearchIcon />}
            placeholder="Search Transaction"
          />
          <Combobox
            store={combobox}
            withinPortal={false}
            transitionProps={{ duration: 200, transition: "pop" }}
            onOptionSubmit={(val) => {
              setValue(val);
              combobox.closeDropdown();
            }}
          >
            <Combobox.Target>
              <Group gap={rem(4)} className={classes.showFilterWrapper} onClick={() => combobox.toggleDropdown()}>
                <Text variant="text-3" className={classes.greyText}>
                  {value || "Type"}
                </Text>
                <ArrowDown />
              </Group>
            </Combobox.Target>
            <Combobox.Dropdown className={classes.dropdown}>
              <Combobox.Options classNames={{ options: classes.dropdownOptions }}>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
        </Group>
        <Box className={classes.tableWrapper}>
          <Table
            classNames={{ tr: classes.tableTr, td: classes.tableTd }}
            horizontalSpacing={rem(24)}
            verticalSpacing={rem("24px")}
            withRowBorders={true}
          >
            <Table.Thead classNames={{ thead: classes.tableHead }}>
              <Table.Tr>{headers}</Table.Tr>
            </Table.Thead>
            <Table.Tbody classNames={{ tbody: classes.tableBody }}>
              {tableCoins ? (
                tableCoins
              ) : (
                <Stack align={"center"} ml={323} my={137}>
                  <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/notes.png`} alt="notes" className={classes.img} />
                  <Text className={classes.noData}>No records found</Text>
                </Stack>
              )}
            </Table.Tbody>
          </Table>
        </Box>
        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

        <Group justify={"space-between"}>
          <Text className={classes.greyText}>1-6 of 300 transactions</Text>
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
  );
};
