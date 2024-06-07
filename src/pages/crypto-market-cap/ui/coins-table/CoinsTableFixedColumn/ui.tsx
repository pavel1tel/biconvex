import { useResize } from "@/hooks/useResize";
import { Group, Pill, Table, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { randomChartData } from "@/shared/lib/random-chart-data";
import { SortingDirection, SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon, RateChart, RateIcon, RateType } from "@/shared/ui";

import { COINS, HEADERS_MOB } from "../cryptoMarketTableData";
import classes from "./styles.module.css";

export const CoinsTableFixedColumn = () => {
  const [sortingLabel, setSortingLabel] = useState<SortingLabel>("#");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const { isAdaptive: md } = useResize(1200);

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

  const tableCoins = useMemo(() => {
    return COINS.map((coin) => {
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

      // const adaptiveFullCoinName = trimLongName(coin.name, md);

      return (
        <Table.Tr key={coin.name}>
          <Table.Td className={clsx(classes.tbodyTdWithIcon, classes.fixedColumn)}>
            <Group gap={rem(8)}>
              {coin.icon}
              <Title c="white" order={4} fz={20} className={classes.coinFullName}>
                {coin.name}
              </Title>
              <Pill classNames={{ root: classes.coinShortName, label: classes.coinShortNameLabel }}>{coin.shortName}</Pill>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.price}
            </Text>
          </Table.Td>
          <Table.Td w={250}>
            <Group gap={rem(4)}>
              <RateIcon type={type} size={22} />
              <Text c="white" variant="text-4" span>
                {coin.change}%
              </Text>
            </Group>
          </Table.Td>
          <Table.Td w={250}>
            <Text c="white" variant="text-4" span>
              ${coin.dayHighPrice}
            </Text>
          </Table.Td>
          <Table.Td w={250}>
            <Text c="white" variant="text-4" span>
              ${coin.dayLowPrice}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.marketCap}
            </Text>
          </Table.Td>
          <Table.Td className={classes.coinChartCell}>
            <Group justify={"flex-end"} className={classes.coinChartWrapper}>
              <RateChart type={type} data={randomChartData()} />
            </Group>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [md]);

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
