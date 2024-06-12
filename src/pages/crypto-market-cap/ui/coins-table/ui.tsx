import { trimLongName } from "@/helpers/trimLongName";
import { useResize } from "@/hooks/useResize";
import { Group, Pill, Table, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { SortingDirection, SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon, RateChart, RateIcon, RateType } from "@/shared/ui";

import { HEADERS } from "./cryptoMarketTableData";
import classes from "./styles.module.css";

const formatNumber = (num: number) => {
  if (num === 0) return "0.00";
  if (num < 0.01 && num > 0) {
    return num.toFixed(5);
  }
  return num.toFixed(2);
};

const formatBigNumber = (num: number) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(3) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(3) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(3) + "K";
  } else {
    return num.toFixed(3);
  }
};

export interface Coin {
  symbol: string;
  name: string;
  price: number;
  price_change_percent: number;
  high_price: number;
  low_price: number;
  market_cap: number;
  id: number;
  history: number[];
  tags: string[];
}

export interface CoinHeader {
  label: string;
  sortable: boolean;
  className?: string;
}

interface CoinsTableProps {
  data: Coin[];
}

export const CoinsTable: React.FC<CoinsTableProps> = ({ data }) => {
  const [sortingLabel, setSortingLabel] = useState<string>("#");
  console.log(data);

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

  const sortedData = useMemo(() => {
    let sorted = [...data];
    switch (sortingLabel) {
      case "name":
        sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case "market_cap":
        sorted.sort((a, b) => a.market_cap - b.market_cap);
        break;
      case "price":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price_change_percent":
        sorted.sort((a, b) => a.price_change_percent - b.price_change_percent);
        break;
      case "high_price":
        sorted.sort((a, b) => a.high_price - b.high_price);
        break;
      case "low_price":
        sorted.sort((a, b) => a.low_price - b.low_price);
        break;
      default:
        break;
    }
    if (sortingDirection === "DESC") {
      sorted.reverse();
    }
    return sorted;
  }, [data, sortingDirection, sortingLabel]);

  const headers = useMemo(() => {
    return HEADERS.map((header) => (
      <Table.Th
        key={header.label}
        className={clsx({ [classes.tableHeadThSortable]: header.sortable }, header.className)}
        onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
      >
        <Group gap={rem("2px")} justify={header.sortable ? "flex-start" : "center"} className={classes.tableHeadSortLabel}>
          <Text c="inherit" variant="text-5" span>
            {header.label}
          </Text>
          {header.sortable ? <MarketSortIcon /> : null}
        </Group>
      </Table.Th>
    ));
  }, [onTableHeadSortLabelClick]);

  const tableCoins = useMemo(() => {
    return sortedData.map((coin, index) => {
      const type: RateType = match(coin.price_change_percent)
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
        <Table.Tr key={coin.symbol}>
          <Table.Td w={70}>
            <Group gap={rem(16)} className={classes.firstTdWrapper}>
              <Text variant="text-3" className={classes.greyText} span>
                №{index + 1}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)}>
              <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt={coin.name} width={32} height={32} />
              <Title c="white" order={4} fz={20} className={classes.coinFullName}>
                {adaptiveFullCoinName}
              </Title>
              <Pill classNames={{ root: classes.coinShortName, label: classes.coinShortNameLabel }}>{coin.symbol}</Pill>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.price)}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group gap={rem(4)}>
              <RateIcon type={type} size={22} />
              <Text c="white" variant="text-4" span>
                {coin.price_change_percent.toFixed(2)}%
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.high_price)}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.low_price)}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatBigNumber(coin.market_cap)}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group justify={"flex-end"} className={classes.coinChartWrapper}>
              <RateChart type={type} data={coin.history.map((value, index) => ({ name: `P-${index}`, value: value }))} />
            </Group>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [md, data, sortingDirection, sortingLabel]);

  return (
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>{headers}</Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
    </Table>
  );
};
