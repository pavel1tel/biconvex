import { trimLongName } from "@/helpers/trimLongName";
import { useResize } from "@/hooks/useResize";
import { Group, Table, Text, Title, UnstyledButton, rem } from "@mantine/core";
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
};

type CoinsTableProps = {
  data: any[];
  currentPage: number;
  rowsPerPage: number;
};

const HEADERS = [
  { label: "#", className: classes.tableHeadCell, sortable: true },
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
  // const toFixedSafe = (num: any, digits: number): string => {
  //   const n = parseFloat(num);
  //   return isNaN(n) ? "-" : n.toFixed(digits);
  // };

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
  };
};

export const CoinsTable = ({ data, currentPage, rowsPerPage }: CoinsTableProps) => {
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
    return HEADERS.map((header) => (
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
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>{headers}</Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>
        {sortedData.map((coin, index) => {
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
              <Table.Td w={70}>
                <Group gap={rem(16)} className={classes.firstTdWrapper}>
                  <Text variant="text-3" className={classes.greyText} span>
                    №{(currentPage - 1) * rowsPerPage + index + 1}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td className={classes.tbodyTdWithIcon}>
                <Group gap={rem(8)}>
                  <img src={coin.icon} alt={`${coin.name} icon`} />
                  <Title c="white" fz={20} order={4}>
                    {adaptiveFullCoinName}
                  </Title>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="white" variant="text-4" span>
                  ${coin.price.toFixed(2)}
                </Text>
              </Table.Td>
              <Table.Td>
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
  );
};
