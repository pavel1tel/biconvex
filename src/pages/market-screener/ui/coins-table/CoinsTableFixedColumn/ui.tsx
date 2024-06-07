import { trimLongName } from "@/helpers/trimLongName";
import { useResize } from "@/hooks/useResize";
import { Group, Pill, Table, Text, Title, UnstyledButton, rem } from "@mantine/core";
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
    name: dataItem.d[2] || "",
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
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("#");
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
    const key = sortingLabel.toLowerCase() as keyof CoinData;
    sorted.sort((a, b) => {
      if (a[key] < b[key]) return sortingDirection === "ASC" ? -1 : 1;
      if (a[key] > b[key]) return sortingDirection === "ASC" ? 1 : -1;
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
                  <Group gap={rem(8)}>
                    <img src={coin.icon} alt={`${coin.name} icon`} />
                    <Title c="white" order={4} fz={20} className={classes.coinFullName}>
                      {adaptiveFullCoinName}
                    </Title>
                    <Pill classNames={{ root: classes.coinShortName, label: classes.coinShortNameLabel }}>{coin.shortName}</Pill>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.price.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td w={250}>
                  <Group gap={rem(4)}>
                    <RateIcon type={type} />
                    <Text c="white" variant="text-4" span>
                      {coin.change.toFixed(2)}%
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.changePrice.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.high.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.low.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.vol.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.volDayUsd.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="white" variant="text-4" span>
                    ${coin.volDayChgPercent.toFixed(2)}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </div>
  );
};
