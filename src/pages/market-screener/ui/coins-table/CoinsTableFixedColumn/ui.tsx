import { trimLongName } from "@/helpers/trimLongName";
import { useResize } from "@/hooks/useResize";
import { Group, Table, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { SortingDirection, SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon, RateIcon, RateType } from "@/shared/ui";

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
  shortName: string;
};

type CoinsTableFixedColumnProps = {
  data: CoinData[];
};

const formatNumber = (num: number) => {
  if (num === 0) return "0.00";
  if (num < 0.01 && num > 0) {
    return num.toFixed(5);
  }
  return num.toFixed(2);
};

const HEADERS_MOB = [
  { label: "Coin Name", className: classes.tableHeadCell, sortable: true },
  { label: "Price", className: classes.tableHeadCell, sortable: true },
  { label: "CHG%", className: classes.tableHeadCell, sortable: true },
  { label: "CHG", className: classes.tableHeadCell, sortable: true },
  { label: "HIGH", className: classes.tableHeadCell, sortable: true },
  { label: "LOW", className: classes.tableHeadCell, sortable: true },
  { label: "VOL", className: classes.tableHeadCell, sortable: true },
  { label: "VOL 24 USD", className: classes.tableHeadCell, sortable: true },
  { label: "VOL 24 CHG%", className: classes.tableHeadCell, sortable: true },
  { label: "TR", className: classes.tableHeadCell, sortable: true },
];

const extractData = (dataItem: any): CoinData => {
  const symbol = dataItem.d[0]?.split("crypto/")[1] || "";

  return {
    name: dataItem.d[13] || "",
    price: parseFloat(dataItem.d[3]) || 0,
    change: parseFloat(dataItem.d[4]) || 0,
    changePrice: parseFloat(dataItem.d[5]) || 0,
    high: parseFloat(dataItem.d[6]) || 0,
    low: parseFloat(dataItem.d[7]) || 0,
    vol: parseFloat(dataItem.d[9]) || 0,
    volDayUsd: parseFloat(dataItem.d[11]) || 0,
    volDayChgPercent: parseFloat(dataItem.d[12]) || 0,
    icon: `https://s3-symbol-logo.tradingview.com/crypto/${symbol}.svg`,
    shortName: symbol.toUpperCase(),
  };
};

export const CoinsTableFixedColumn = ({ data }: CoinsTableFixedColumnProps) => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("Coin Name");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
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

  const headers = useMemo(() => {
    return HEADERS_MOB.map((header, index) => (
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
  }, [onTableHeadSortLabelClick, sortingDirection]);

  const tableData = useMemo(() => {
    return data.map(extractData);
  }, [data]);

  const sortedData = useMemo(() => {
    if (!tableData.length) return [];
    const sorted = [...tableData];
    let key: keyof CoinData = sortingLabel.replace(" ", "").toLowerCase() as keyof CoinData;

    if (sortingLabel === "Coin Name") {
      key = "name";
    }

    sorted.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortingDirection === "ASC" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortingDirection === "ASC" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    return sorted;
  }, [tableData, sortingDirection, sortingLabel]);

  return (
    <div className={classes.tableContainer}>
      <Table
        classNames={{ table: classes.scrollableTable, tr: classes.tableTr, td: classes.tableTd }}
        verticalSpacing={rem("16px")}
        withRowBorders={true}
      >
        <Table.Thead className={classes.tableHead}>
          <Table.Tr>{headers}</Table.Tr>
        </Table.Thead>
        <Table.Tbody className={classes.tableBody}>
          {sortedData.map((coin) => {
            const type: RateType = match(coin.change)
              .with(
                P.when((value) => value > 0),
                () => "positive" as RateType,
              )
              .with(
                P.when((value) => value < 0),
                () => "negative" as RateType,
              )
              .otherwise(() => "zero" as RateType);

            const adaptiveFullCoinName = trimLongName(coin.name, md);

            return (
              <Table.Tr key={coin.name}>
                <Table.Td className={clsx(classes.tbodyTdWithIcon, classes.fixedColumn)}>
                  <Group gap={rem(8)} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <img src={coin.icon} alt={`${coin.name} icon`} className={classes.tokenIcon} />
                    <Title c="white" order={4} fz={20} className={classes.coinFullName}>
                      {coin.name}
                    </Title>
                    {/* <Pill classNames={{ root: classes.coinShortName, label: classes.coinShortNameLabel }}>{coin.shortName}</Pill> */}
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.price)}
                  </Text>
                </Table.Td>
                <Table.Td w={250}>
                  <Group gap={rem(4)}>
                    <RateIcon type={type} />
                    <Text c="white" variant="text-4" span>
                      {formatNumber(coin.change)}%
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.changePrice)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.high)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.low)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.vol)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.volDayUsd)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${formatNumber(coin.volDayChgPercent)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    {formatNumber(coin.vol)}
                  </Text>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
};
