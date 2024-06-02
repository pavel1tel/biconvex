import { trimLongName } from "@/helpers/trimLongName";
import { useResize } from "@/hooks/useResize";
import { Group, Table, Text, Title, UnstyledButton, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import { P, match } from "ts-pattern";

import { SortingDirection, SortingLabel } from "@/shared/types/CoinsTable";
import { MarketSortIcon, RateIcon, RateType } from "@/shared/ui";

import { COINS, HEADERS } from "./marketScreenerTableData";
import classes from "./styles.module.css";

export const CoinsTable = () => {
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
            <Text c="inherit" variant="text-5" span>
              {header.label}
            </Text>
            {header.sortable ? <MarketSortIcon /> : null}
          </Group>
        </Table.Th>
      );
    });
  }, [onTableHeadSortLabelClick, sortingDirection]);

  const tableCoins = useMemo(() => {
    return COINS.map((coin, index) => {
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
                №{index + 1}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td className={classes.tbodyTdWithIcon}>
            <Group gap={rem(8)}>
              {coin.icon}
              <Title c="white" fz={20} order={4}>
                {adaptiveFullCoinName}
              </Title>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.price}
            </Text>
          </Table.Td>
          <Table.Td>
            <Group gap={rem(4)}>
              <RateIcon type={type} />
              <Text c="white" variant="text-4" span>
                {coin.change}%
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.changePrice}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.hight}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.low}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.vol}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.volDayUsd}
            </Text>
          </Table.Td>
          <Table.Td>
            <Text c="white" variant="text-4" span>
              ${coin.volDayChgPercent}
            </Text>
          </Table.Td>
          <Table.Td>
            <UnstyledButton className={classes.buyButton}>BUY</UnstyledButton>
          </Table.Td>
        </Table.Tr>
      );
    });
  }, [md]);

  return (
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>{headers}</Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
    </Table>
  );
};
