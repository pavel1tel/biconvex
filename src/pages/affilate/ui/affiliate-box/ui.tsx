import { Box, Button, Divider, Flex, Group, Image, Pagination, Stack, Table, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useCallback, useEffect, useState } from "react";

import { $profileReponse } from "@/pages/my-profile/model";

import { getRef } from "@/shared/api/ref/requests";
import { ProfileReponse, Refs } from "@/shared/api/types";
import { showSuccessNotification } from "@/shared/lib/notification";
import { LoadingScreen, MarketSortIcon, NextIcon, NoRecords, PreviousIcon, SearchIcon } from "@/shared/ui";
import { PersonIcon } from "@/shared/ui/icon/PersonIcon";
import { ProfitIcon } from "@/shared/ui/icon/ProfitIcon";
import { ProfileIcon } from "@/shared/ui/sidebar/Icons";

import { $refResponse } from "../../model";
import classes from "./styles.module.css";

type SortingDirection = "ASC" | "DESC";

export const AffiliateBox = () => {
  const [sortingLabel, setSortingLabel] = useState("");
  const [sortingDirection, setSortingDirection] = useState<SortingDirection>("ASC");
  const [loading, setLoading] = useState(true);
  const refResponse = useUnit($refResponse);
  const refResponsePending = useUnit(getRef.pending);
  const [data, setData] = useState<Refs[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCoins, setCurrentPageCoins] = useState(1);
  const [search, setSearch] = useState("");
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
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

  useEffect(() => {
    if (!refResponsePending) {
      const startIndex = (currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      setData(refResponse["users"].filter((e: Refs) => e.id.toString().includes(search)).slice(startIndex, endIndex) as Refs[]);
      setCurrentPageCoins(refResponse["users"].filter((e: Refs) => e.id.toString().includes(search)).slice(startIndex, endIndex).length);
      setTotalPage(refResponse["users"].length);
    }
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  }, [refResponse, refResponsePending, currentPage, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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
              <Text className={classes.cardValue}>${refResponse["users"] ? refResponse["users"].length * 10 : 0}</Text>
            </Group>
          </div>
          <div className={classes.cardWrapper}>
            <PersonIcon />
            <Group gap={rem(8)} wrap="nowrap">
              <Text className={classes.cardText}>People invited</Text>
              <Text className={classes.cardValue}>{refResponse["users"] ? refResponse["users"].length : 0}</Text>
            </Group>
          </div>
        </Stack>
      </Group>
      <Group gap={rem(32)} className={classes.refRow} wrap="nowrap">
        <Stack gap={rem(16)} className={classes.copyRefContainer}>
          <Text className={classes.copyRefTitle}>Referral Link</Text>
          <div className={classes.copyRefWrapper}>
            <TextInput
              variant="unstyled"
              value={window.location.origin + "/#/?ref=" + (profileReponse ? profileReponse.id : 0)}
              className={classes.refLink}
            />
            <Button
              className={classes.btn}
              h={rem("54px")}
              variant="radial-gradient"
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin + "/#/?ref=" + (profileReponse ? profileReponse.id : 0));
                showSuccessNotification("Copied!");
              }}
            >
              Copy
            </Button>
          </div>
        </Stack>
        <Stack gap={rem(16)} className={classes.copyRefContainer}>
          <Text className={classes.copyRefTitle}>Referral Code</Text>
          <div className={classes.copyRefWrapper}>
            <TextInput value={profileReponse ? profileReponse.id : 0} className={classes.refLink} />
            <Button
              className={classes.btn}
              h={rem("54px")}
              variant="radial-gradient"
              onClick={() => {
                navigator.clipboard.writeText((profileReponse ? profileReponse.id : 0)!.toString());
                showSuccessNotification("Copied!");
              }}
            >
              Copy
            </Button>
          </div>
        </Stack>
      </Group>
      <Divider opacity={"0.12"} color={"white"} />
      <Stack pos="relative">
        {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
        <Stack className={classes.box} gap={0}>
          <Flex className={classes.tableHeader} justify={"space-between"} align={"center"} mb={rem("32px")}>
            <Text className={classes.tableTitle}>Referral Overview</Text>
            <TextInput
              classNames={{
                wrapper: classes.searchInputWrapper,
                section: classes.searchInputSection,
                input: classes.searchInput,
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
                  data.reverse().map((data) => (
                    <Table.Tr key={data.id} className={classes.tableBodyTr}>
                      <Table.Td className={classes.tableTd}>
                        <Group gap={rem(8)}>
                          {data.avatar.startsWith("data:image") ? (
                            <Image h="29" w="29" src={data.avatar} className={classes.iconWrapper} />
                          ) : (
                            <div className={classes.iconWrapper}>
                              <ProfileIcon />
                            </div>
                          )}
                          <Text className={classes.accIDCol}>{`ID: ${data.id}`}</Text>
                        </Group>
                      </Table.Td>
                      <Table.Td className={classes.tableTd}>
                        <Text variant="text-3">{new Date(data.regDate).toISOString().split(".")[0].replace("T", " ")}</Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                {data.length < 6 && data.length !== 0 && (
                  <>
                    {new Array(6 - data.length).fill("").map((item, idx) => (
                      <Table.Tr key={idx} className={classes.tableBodyTr}>
                        <Table.Td className={classes.tableTd}>
                          <Group gap={rem(8)}>
                            <div className={classes.iconWrapperPlaceholder}>{``}</div>
                            <Text className={classes.accIDCol}>{``}</Text>
                          </Group>
                        </Table.Td>
                        <Table.Td className={classes.tableTd}>
                          <Text variant="text-3">{``}</Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </>
                )}
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
              {(currentPage - 1) * 5 + 1}-{(currentPage - 1) * 5 + (currentPageCoins ? currentPageCoins : 0)} of {totalPage}
            </Text>
            <Pagination value={currentPage} onChange={setCurrentPage} total={Math.ceil(totalPage / 5)} defaultValue={1}>
              <Group gap={rem("8px")} justify="center">
                <Pagination.Previous icon={PreviousIcon} />
                <Pagination.Items />
                <Pagination.Next icon={NextIcon} />
              </Group>
            </Pagination>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
};
