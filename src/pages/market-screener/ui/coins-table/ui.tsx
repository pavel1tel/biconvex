import { useResize } from "@/hooks/useResize";
import { Group, Table, Text, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import { SortingLabel } from "@/shared/types/CoinsTable";
import { LoadingScreen, MarketSortIcon } from "@/shared/ui";

import classes from "./styles.module.css";

type CoinData = {
  name: string;
  price: number;
  change: number;
  changePrice: number;
  high: number;
  low: number;
  vol: number;
  volDayUsd: number;
  volDayChgPercent: number;
  icon: string;
};

type CoinsTableProps = {
  data: any[];
  currentPage: number;
  rowsPerPage: number;
  headers: typeof HEADERS;
  transformData: any;
  sortingLabel: string;
  sortingDirection: string;
  setSortingLabel: any;
  setSortingDirection: any;
};

const formatNumber = (num: number) => {
  if (num === 0) return "0.00";
  if (num < 0.01 && num > 0) {
    return num.toFixed(5);
  }
  return num.toFixed(2);
};

const HEADERS = [
  { label: "#", className: classes.tableHeadCell, sortable: false },
  { label: "Coin Name", className: classes.tableHeadCell, sortable: true },
  { label: "Price", className: classes.tableHeadCell, sortable: true },
  { label: "CHG%", className: classes.tableHeadCell, sortable: true },
  { label: "CHG", className: classes.tableHeadCell, sortable: true },
  { label: "HIGH", className: classes.tableHeadCell, sortable: true },
  { label: "LOW", className: classes.tableHeadCell, sortable: true },
  { label: "VOL", className: classes.tableHeadCell, sortable: true },
  { label: "VOL 24 USD", className: classes.tableHeadCell, sortable: true },
  { label: "VOL 24 CHG%", className: classes.tableHeadCell, sortable: true },
  { label: "TR", className: classes.tableHeadCell, sortable: false },
];

export const CoinsTable = ({
  data,
  currentPage,
  rowsPerPage,
  headers,
  transformData,
  sortingLabel,
  sortingDirection,
  setSortingLabel,
  setSortingDirection,
}: CoinsTableProps) => {
  const { isAdaptive: md } = useResize(1200);

  const onTableHeadSortLabelClick = useCallback(
    (label: SortingLabel) => {
      if (sortingLabel !== label) {
        setSortingLabel(label);
        setSortingDirection("ASC");
      } else {
        setSortingDirection(sortingDirection === "ASC" ? "DESC" : "ASC");
      }
    },
    [sortingDirection, sortingLabel],
  );

  const hdrs = useMemo(() => {
    return headers.map((header) => (
      <Table.Th key={header.label} className={header.className}>
        <Group
          gap={rem("2px")}
          justify={header.sortable ? "flex-start" : "center"}
          className={clsx(classes.tableHeadSortLabel, {
            [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
          })}
          onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
        >
          <Text c="inherit" variant="text-5" span>
            {header.label}
          </Text>
          {header.sortable ? <MarketSortIcon /> : null}
        </Group>
      </Table.Th>
    ));
  }, [onTableHeadSortLabelClick, sortingDirection, headers]);

  return (
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true} pos="relative">
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>{hdrs}</Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>{transformData(data, currentPage, rowsPerPage)}</Table.Tbody>
    </Table>
  );
};
