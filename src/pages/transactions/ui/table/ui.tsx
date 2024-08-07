import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { useResize } from "@/hooks/useResize";
import { Box, CloseButton, Combobox, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, rem, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { DepositIcon, InvestIcon, PromoIcon } from "@/pages/transactions/ui";

import { getTransactions } from "@/shared/api/transactions/requests";
import { Transaction, TransactionsResponse } from "@/shared/api/types";
import { ArrowDown, LoadingScreen, NextIcon, NoRecords, PreviousIcon, SearchIcon } from "@/shared/ui";
import { TransferIcon, WithdrawIcon } from "@/shared/ui/sidebar/Icons";

import { $transactionsReponse } from "../../model";
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

export const TransactionTable = () => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Amount");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const [COINS, setCOINS] = useState<Transaction[]>();
  const isTransactionsPending = useUnit<boolean>(getTransactions.pending);
  const transactionsResponse = useUnit<TransactionsResponse>($transactionsReponse);
  const [page, setPage] = useState(1);
  const [searchFunc, setSearchFunc] = useState<any>(() => (a: Transaction) => true);
  const [search, setSearch] = useState("");
  const { isAdaptive } = useResize(500);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");

  const calculatePage = (searchFn: (a: Transaction) => boolean, filterFunc: (a: Transaction) => boolean) => {
    if (!isTransactionsPending) {
      const temp: any[] = [];
      const startIndex = (page - 1) * 6;
      const endIndex = startIndex + 6;
      transactionsResponse
        .transactions!.filter(searchFn)
        .filter(filterFunc)
        .slice(startIndex, endIndex)
        .forEach((trans) => {
          temp.push(trans);
        });
      setTotalPage(transactionsResponse.transactions!.filter(searchFn).filter(filterFunc).length);
      setCOINS(temp);
    }
  };

  useEffect(() => {
    let filterFunc = (a: Transaction) => true;
    if (value) {
      filterFunc = (a: Transaction) => statusById[a.status] == value;
    }
    calculatePage(searchFunc, filterFunc);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [isTransactionsPending, transactionsResponse, page, totalPage, searchFunc, value]);

  useEffect(() => {
    setPage(1);
    if (search !== "") {
      setSearchFunc(() => (a: Transaction) => a.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()));
    } else {
      setSearchFunc(() => (a: Transaction) => true);
    }
  }, [search]);

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
    Bonus: <PromoIcon />,
    Transfer: <TransferIcon />,
    Invest: <InvestIcon />,
  };

  const classNamesByStatus: Record<string, string> = {
    0: classes.pending,
    1: classes.completed,
    2: classes.failed,
  };

  const statusById: Record<number, string> = {
    0: "Pending",
    1: "Completed",
    2: "Failed",
  };

  // const adaptiveHeight = () => {
  //   if( COINS && COINS?.length < 6 && isAdaptive) {
  //     return '550px';
  //   }
  //   else if(COINS && COINS?.length <)
  // }

  const tableCoins = useMemo(() => {
    return (COINS ? COINS : []).map((coin: Transaction) => {
      return (
        <Table.Tr key={coin.id}>
          <Table.Td w={224} className={classes.tbodyTdWithIcon}>
            <Flex gap={rem(8)}>
              <Image src={coin.image} w="25" h="24" />
              <Text c="white" className={classes.text}>
                {coin.name}
              </Text>
              <Text ff={"ProximaNova"} className={classes.pill}>
                {coin.symbol}
              </Text>
            </Flex>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span style={{ paddingLeft: "7px", paddingRight: "15px" }}>
              {coin.time.slice(0, 10).replaceAll("/", ".")}
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span>
              <Flex align={"center"} gap={rem(4)}>
                <span className={classes.iconByType}> {iconsByType[coin.type]}</span>
                <span className={classes.coinTypeText}>{coin.type}</span>
              </Flex>
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span>
              {parseFloat(parseFloat(coin.amount).toFixed(8))}
            </Text>
          </Table.Td>
          <Table.Td w={"135"}>
            <Text c="white" variant="text-3" span className={clsx(classes.status, classNamesByStatus[coin.status])}>
              {statusById[coin.status]}
            </Text>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [COINS]);
  const SHOW_ROWS_OPTIONS = ["Pending", "Completed", "Failed"];

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

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
      <Stack pos="relative">
        {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
        <Stack className={classes.box} gap={32} h={loading ? "800.95px" : "auto"}>
          <Group className={classes.boxHeader} justify="space-between" align={"center"}>
            <TextInput
              h={51}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
                setPage(1);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <Group gap={rem(4)} className={classes.showFilterWrapper} onClick={() => combobox.toggleDropdown()}>
                  <Text variant="text-3" className={classes.greyText}>
                    {value || "Type"}
                  </Text>
                  {value ? (
                    <CloseButton
                      size="sm"
                      style={{ background: "none" }}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => setValue("")}
                      aria-label="Clear value"
                    />
                  ) : (
                    <ArrowDown />
                  )}
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
                {COINS && COINS.length > 0 && tableCoins}
                {COINS && COINS.length < 6 && COINS.length !== 0 && (
                  <>
                    {new Array(6 - COINS.length).fill("").map((item, i) => (
                      <Table.Tr key={item + i}>
                        <Table.Td w={224} className={classes.tbodyTdWithIcon}>
                          <Flex gap={rem(8)}>
                            <Box w="25" h="24"></Box>
                          </Flex>
                        </Table.Td>
                        <Table.Td w={"135"}>
                          <Text c="white" variant="text-3" span style={{ paddingLeft: "7px", paddingRight: "15px" }}>
                            {""}
                          </Text>
                        </Table.Td>
                        <Table.Td w={"135"}>
                          <Text c="white" variant="text-3" span>
                            <Flex align={"center"} gap={rem(4)}>
                              <span className={classes.iconByType}>{""}</span>
                              <span className={classes.coinTypeText}>{""}</span>
                            </Flex>
                          </Text>
                        </Table.Td>
                        <Table.Td w={"135"}>
                          <Text c="white" variant="text-3" span>
                            {""}
                          </Text>
                        </Table.Td>
                        <Table.Td w={"135"}>
                          <Text c="white" variant="text-3" span className={clsx(classes.status)}>
                            {""}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </>
                )}
                {COINS && COINS.length === 0 && (
                  <>
                    <Table.Tr pos="relative" h={468}>
                      <Table.Td className={classes.tableTdNoRecords}>
                        <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="35%" gap="10px">
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
          </Box>
          <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

          <Group justify={"space-between"}>
            <Text className={classes.greyText}>
              {" "}
              {(page - 1) * 6 + 1}-{(page - 1) * 6 + (COINS ? COINS?.length : 0)} of {totalPage}
            </Text>
            <Pagination value={page} onChange={setPage} total={totalPage ? Math.ceil(totalPage / 6) : 1} defaultValue={1} {...{ siblings }}>
              <Group gap={rem("8px")} justify="center">
                <Pagination.Previous icon={PreviousIcon} />
                <Pagination.Items />
                <Pagination.Next icon={NextIcon} />
              </Group>
            </Pagination>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
};
