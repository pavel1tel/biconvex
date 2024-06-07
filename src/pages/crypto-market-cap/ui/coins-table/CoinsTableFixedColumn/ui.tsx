import { Group, Pill, Table, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { SortingDirection, SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon, RateChart, RateIcon, RateType } from "@/shared/ui";

import { HEADERS_MOB } from "../cryptoMarketTableData";
import { Coin } from "../ui";
import classes from "./styles.module.css";

const formatNumber = (num: number) => {
  if (num === 0) return "0.00";
  if (num < 0.01 && num > 0) {
    return num.toFixed(5);
  }
  return num.toFixed(2);
};

interface CoinsTableFixedColumnProps {
  data: Coin[];
}

export const CoinsTableFixedColumn: React.FC<CoinsTableFixedColumnProps> = ({ data }) => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("#");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  // const { isAdaptive: md } = useResize(1200);

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

  const tableCoins = useMemo(() => {
    return data.map((coin) => {
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

      return (
        <Table.Tr key={coin.symbol}>
          <Table.Td className={clsx(classes.tbodyTdWithIcon, classes.fixedColumn)}>
            <Group gap={rem(8)}>
              <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt={coin.name} width={32} height={32} />
              <Title c="white" order={4} fz={20} className={classes.coinFullName}>
                {coin.name}
              </Title>
              <Pill classNames={{ root: classes.coinShortName, label: classes.coinShortNameLabel }}>{coin.symbol}</Pill>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.price)}
            </Text>
          </Table.Td>
          <Table.Td w={250}>
            <Group gap={rem(4)}>
              <RateIcon type={type} size={22} />
              <Text c="white" variant="text-4" span>
                {coin.price_change_percent.toFixed(2)}%
              </Text>
            </Group>
          </Table.Td>
          <Table.Td w={250}>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.high_price)}
            </Text>
          </Table.Td>
          <Table.Td w={250}>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.low_price)}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${formatNumber(coin.market_cap)}
            </Text>
          </Table.Td>
          <Table.Td className={classes.coinChartCell}>
            <Group justify={"flex-end"} className={classes.coinChartWrapper}>
              <RateChart type={type} data={coin.history.map((value, index) => ({ name: `P-${index}`, value: value }))} />
            </Group>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [data]);

  return (
    <div className={classes.tableContainer}>
      <Table
        classNames={{ table: classes.scrollableTable, tr: classes.tableTr, td: classes.tableTd }}
        verticalSpacing={rem("16px")}
        withRowBorders={true}
      >
        <Table.Thead className={classes.tableHead}>
          <Table.Tr>
            {HEADERS_MOB.map((header, index) => {
              return (
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
                    {header.sortable ? <MarketSortIcon /> : null}
                  </Group>
                </Table.Th>
              );
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className={classes.tableBody}>{tableCoins}</Table.Tbody>
      </Table>
    </div>
  );
};
