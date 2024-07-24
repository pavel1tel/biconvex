import { useResize } from "@/hooks/useResize";
import { Box, Button, Flex, Image, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getDepostFx } from "@/shared/api/deposit/request";
import { DepositCoin, DepositCoinsResponse } from "@/shared/api/types";
import { SearchIcon } from "@/shared/ui";

import { $depositResponse, currentRoute } from "../../model";
import classes from "./styles.module.css";

export const DepositsBox = ({
  height,
  coin,
  setCoin,
  setCurrentCoin,
}: {
  height?: number;
  coin?: number;
  setCoin: Dispatch<SetStateAction<number>>;
  setCurrentCoin: any;
}) => {
  const [selectedDeposit, setSelectedDeposit] = useState(1);
  const { isAdaptive: md } = useResize(1200);
  const [showOthersHidden, setShowOthersHidden] = useState<boolean>(true);
  const depositReponse = useUnit<DepositCoinsResponse>($depositResponse);
  const depositResposePending = useUnit(getDepostFx.pending);
  const [arr, setArr] = useState<DepositCoin[]>([]);
  const [search, setSearch] = useState<string>("");
  const routeParams = useUnit(currentRoute.$params);
  const loadMore = () => {
    setShowOthersHidden(!showOthersHidden);
  };

  useEffect(() => {
    if (!depositResposePending) {
      let index = depositReponse.deposit_coins!.findIndex(c => c.symbol === routeParams.coin)
      if (index == -1) {
        currentRoute.navigate({
          params: { coin: "BTC" },
          query: {},
          replace: true,
        })
      }
      setCoin(index)
      setCurrentCoin(depositReponse.deposit_coins![index]);
      setArr(depositReponse.deposit_coins!)
    }
  }, [depositResposePending, depositReponse]);

  return (
    <Stack className={classes.container}>
      <Stack>
        <Stack className={classes.wrapDepositItems} style={{ height }}>
          <Box>
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
                section: classes.icon,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search Crypto"
            />
          </Box>
          {arr
            .filter((i) => i.name.includes(search))
            .map((item, itemIndex) => (
              <Box
                onClick={() => {
                  currentRoute.navigate({
                    params: { coin: item.symbol },
                    query: {},
                    replace: true,
                  })
                  setCurrentCoin(item);
                  setCoin ? setCoin(itemIndex) : setSelectedDeposit(itemIndex);
                }}
                key={item.symbol}
                className={clsx(
                  classes.depositItem,
                  itemIndex === (coin ?? selectedDeposit) && classes.depositItemActive,
                  showOthersHidden && itemIndex > 5 ? classes.hidden : classes.shown,
                )}
              >
                <Flex justify={"space-between"} align={"center"}>
                  <Flex gap={rem(8)}>
                    <Image src={item.image} w={24} h={24}></Image>
                    <Text className={classes.label}>{item.name}</Text>
                  </Flex>
                  <Text className={clsx(classes.value, itemIndex === (coin ?? selectedDeposit) && classes.activeValue)}>
                    {parseFloat(parseFloat(item.balance).toFixed(4))} {item.symbol}
                  </Text>
                </Flex>
              </Box>
            ))}

          {md && (
            <Button variant="radial-gradient" className={classes.loadMoreAction} onClick={loadMore}>
              {showOthersHidden ? "Load more" : "Hide"}
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
