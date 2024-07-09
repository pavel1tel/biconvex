import { useResize } from "@/hooks/useResize";
import { Group, Table, Text, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo } from "react";

import { SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon } from "@/shared/ui";

import classes from "./styles.module.css";

type CoinsTableFixedColumnProps = {
  data: any[];
  currentPage: number;
  rowsPerPage: number;
  headers: (typeof HEADERS),
  transformData: any;
  sortingLabel: string;
  sortingDirection: string;
  setSortingLabel: any;
  setSortingDirection: any;
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


export const CoinsTableFixedColumn = ({ data, currentPage, rowsPerPage, headers, transformData, sortingLabel, sortingDirection, setSortingLabel, setSortingDirection }: CoinsTableFixedColumnProps) => {
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
    return headers.map((header, index) => (
      <Table.Th
        key={header.label}
        className={clsx({ [classes.tableHeadThSortable]: header.sortable }, header.className, index === 0 ? classes.fixedColumn : "")}
      >
        <Group
          gap={rem("2px")}
          justify={header.sortable ? "flex-start" : "center"}
          className={clsx(classes.tableHeadSortLabel, {
            [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
          })}
          onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
          wrap="nowrap"
        >
          <Text c="inherit" variant="text-5" span style={{ flexShrink: 0 }}>
            {header.label}
          </Text>
          {header.sortable ? <MarketSortIcon style={{ flexShrink: 0 }} /> : null}
        </Group>
      </Table.Th>
    ));
  }, [onTableHeadSortLabelClick, sortingDirection, headers]);


  return (
    <div className={classes.tableContainer}>
      <Table
        classNames={{ table: classes.scrollableTable, tr: classes.tableTr, td: classes.tableTd }}
        verticalSpacing={rem("16px")}
        withRowBorders={true}
      >
        <Table.Thead className={classes.tableHead}>
          <Table.Tr>{hdrs}</Table.Tr>
        </Table.Thead>
        <Table.Tbody classNames={{ tbody: classes.tableBody }}>
          {transformData(data, currentPage, rowsPerPage)}
        </Table.Tbody>
      </Table>
    </div>
  );
};
