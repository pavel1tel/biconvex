import { Box, Button, Divider, Flex, Group, Pagination, Stack, Table, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useCallback, useState } from "react";

import { MarketSortIcon, NextIcon, NoRecords, PreviousIcon, SearchIcon } from "@/shared/ui";
import { PersonIcon } from "@/shared/ui/icon/PersonIcon";
import { ProfitIcon } from "@/shared/ui/icon/ProfitIcon";
import { ProfileIcon } from "@/shared/ui/sidebar/Icons";

import classes from "./styles.module.css";

type SortingDirection = "ASC" | "DESC";
const data = [
  {
    id: "2343424",
    reg_time: "20.12.2023 14:45",
  },
  {
    id: "2356424",
    reg_time: "20.12.2023 14:45",
  },
  {
    id: "0943424",
    reg_time: "20.12.2023 14:45",
  },
  {
    id: "2341564",
    reg_time: "20.12.2023 14:45",
  },
  {
    id: "2343422",
    reg_time: "20.12.2023 14:45",
  },
  {
    id: "2388424",
    reg_time: "20.12.2023 14:45",
  },
];

export const AffiliateBox = () => {
  const [sortingLabel, setSortingLabel] = useState("");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const onTableHeadSortLabelClick = useCallback(
    (label: string) => {
      if (sortingLabel != label) {
        setSortingLabel(label);
        setSortingDirection("ASC");
      } else {
        setSortingDirection(sortingDirection === "ASC" ? "DESC" : "ASC");
      }
    },
    [sortingDirection, sortingLabel],
  );
  return (
    <Stack gap={"clamp(2rem, 3vw, 48px)"}>
      <Group gap={rem(32)} wrap="nowrap" className={classes.contentFlex}>
        <Stack gap={rem(16)}>
          <Text className={classes.title}>
            <Text component="span">Up to 40% Rebates</Text> with Our Referral Program
          </Text>
          <Text className={classes.subTitle}>
            If you want more, you can also join the alliance special plan to share the growth benefits of Bitconvex.
          </Text>
        </Stack>
        <Stack className={classes.cardFlex} gap={rem(16)} style={{ alignSelf: "stretch" }}>
          <div className={classes.cardWrapper}>
            <ProfitIcon />
            <Group gap={rem(8)} wrap="nowrap">
              <Text className={classes.cardText}>Total Profit</Text>
              <Text className={classes.cardValue}>0.00</Text>
            </Group>
          </div>
          <div className={classes.cardWrapper}>
            <PersonIcon />
            <Group gap={rem(8)} wrap="nowrap">
              <Text className={classes.cardText}>People invited</Text>
              <Text className={classes.cardValue}>0</Text>
            </Group>
          </div>
        </Stack>
      </Group>
      <Group gap={rem(32)} className={classes.refRow} wrap="nowrap">
        <Stack gap={rem(16)} className={classes.copyRefContainer}>
          <Text className={classes.copyRefTitle}>Referral Link</Text>
          <div className={classes.copyRefWrapper}>
            <TextInput variant="unstyled" value="http://bitconvex.com/_/?rh=11049d1abf" className={classes.refLink} />
            <Button className={classes.btn} h={rem("54px")} variant="radial-gradient">
              Copy
            </Button>
          </div>
        </Stack>
        <Stack gap={rem(16)} className={classes.copyRefContainer}>
          <Text className={classes.copyRefTitle}>Referral Code</Text>
          <div className={classes.copyRefWrapper}>
            <TextInput value="11049d1abf" className={classes.refLink} />
            <Button className={classes.btn} h={rem("54px")} variant="radial-gradient">
              Copy
            </Button>
          </div>
        </Stack>
      </Group>
      <Divider opacity={"0.12"} color={"white"} />

      <Stack className={classes.box} gap={0}>
        <Flex className={classes.tableHeader} justify={"space-between"} align={"center"} mb={rem("32px")}>
          <Text className={classes.tableTitle}>Referral Overview</Text>
          <TextInput
            classNames={{
              wrapper: classes.searchInputWrapper,
              section: classes.searchInputSection,
              input: classes.searchInput,
            }}
            leftSection={<SearchIcon />}
            placeholder="Search"
          />
        </Flex>

        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
        <Box className={classes.scrollContainer}>
          <Table withRowBorders={false}>
            <Table.Thead>
              <Table.Tr className={classes.tableHeaderTr}>
                <Table.Th className={classes.tableTh}>
                  <Group
                    gap={rem("2px")}
                    justify={"flex-start"}
                    className={clsx(classes.tableHeadSortLabel, {
                      [classes.tableHeadSortLabelSortingDesc]: sortingLabel === "id" && sortingDirection === "DESC",
                    })}
                    onClick={() => onTableHeadSortLabelClick("id")}
                  >
                    <Text c="inherit" variant="text-4" span>
                      Account ID
                    </Text>
                    <MarketSortIcon width={24} height={24} />
                  </Group>
                </Table.Th>
                <Table.Th className={classes.tableTh}>
                  <Group
                    className={clsx(classes.tableHeadSortLabel, {
                      [classes.tableHeadSortLabelSortingDesc]: sortingLabel === "time" && sortingDirection === "DESC",
                    })}
                    gap={rem("2px")}
                    justify={"flex-start"}
                    onClick={() => onTableHeadSortLabelClick("time")}
                  >
                    <Text c="inherit" variant="text-4" span>
                      Registration time
                    </Text>
                    <MarketSortIcon width={24} height={24} />
                  </Group>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.length > 0 &&
                data.map((data) => (
                  <Table.Tr key={data.id} className={classes.tableBodyTr}>
                    <Table.Td className={classes.tableTd}>
                      <Group gap={rem(8)}>
                        <div className={classes.iconWrapper}>
                          <ProfileIcon />
                        </div>
                        <Text className={classes.accIDCol}>{`ID: ${data.id}`}</Text>
                      </Group>
                    </Table.Td>
                    <Table.Td className={classes.tableTd}>
                      <Text variant="text-3">{data.reg_time}</Text>
                    </Table.Td>
                  </Table.Tr>
                ))}
              {data.length === 0 && (
                <>
                  <Table.Tr pos="relative" h={400}>
                    <Table.Td className={classes.tableTdNoRecords}>
                      <Flex direction="column" align="center" pos="absolute" left="0" right="0" top="120px" gap="10px">
                        <NoRecords />
                        <Text className={classes.noRecords}>
                          No records
                          <br />
                          found
                        </Text>
                      </Flex>
                    </Table.Td>
                  </Table.Tr>
                </>
              )}
            </Table.Tbody>
          </Table>
        </Box>
        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={rem("32px")} />

        <Group justify={"space-between"} mt={rem("32px")}>
          <Text variant="text-4" className={classes.greyText}>
            1-6 of 300 assets
          </Text>
          <Pagination total={20} defaultValue={1}>
            <Group gap={rem("8px")} justify="center">
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
