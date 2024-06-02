import { getSiblings } from "@/helpers/getResponsivePaginationSiblings";
import { Button, Divider, Flex, Group, Pagination, Stack, Table, Text, TextInput, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import { MarketSortIcon, NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";

import classes from "./styles.module.css";

type SortingLabel = "Coin" | "Plane" | "Expires" | "Realtime profit" | "Invested";
type SortingDirection = "ASC" | "DESC";

export const StakingTable = ({
  usedForTradingBot,
  tableHeaders,
  tableData,
}: {
  usedForTradingBot: boolean;
  tableHeaders: Array<any>;
  tableData: Array<any>;
}) => {
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
    return tableData.map((coin) => {
      return (
        <Table.Tr key={coin.name}>
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
  }, []);
  return (
    <Stack className={classes.wrapper}>
      <Stack className={classes.box} gap={0}>
        <Flex justify={"space-between"} align={"center"} mb={rem("32px")}>
          <Title order={4}>Active investments</Title>
          <TextInput
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
            <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
          </Table>
        </div>
        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={rem("32px")} />

        <Group justify={"space-between"} mt={rem("32px")}>
          <Text variant="text-4" className={classes.greyText}>
            1-20 of 9,383 assets
          </Text>
          <Pagination total={20} defaultValue={1} {...{ siblings }}>
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
