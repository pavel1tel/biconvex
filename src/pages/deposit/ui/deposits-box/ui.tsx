import { useResize } from "@/hooks/useResize";
import { Box, Button, Flex, Stack, Text, TextInput, rem, Image } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BitcoinIcon, SearchIcon } from "@/shared/ui";

import { getDepostFx } from "@/shared/api/deposit/request";
import { useUnit } from "effector-react";
import { $depositResponse } from "../../model";
import classes from "./styles.module.css";
import { DepositCoin, DepositCoinsResponse } from "@/shared/api/types";

export const DepositsBox = ({ height, coin, setCoin, setCurrentCoin }: { height?: number; coin?: number; setCoin?: Dispatch<SetStateAction<number>>; setCurrentCoin : any }) => {
  const [selectedDeposit, setSelectedDeposit] = useState(1);
  const { isAdaptive: md } = useResize(1200);
  const [showOthersHidden, setShowOthersHidden] = useState<boolean>(true);
  const depositReponse = useUnit<DepositCoinsResponse>($depositResponse);
  const depositResposePending = useUnit(getDepostFx.pending)
  const [arr, setArr] = useState<DepositCoin[]>([])
  const [search, setSearch] = useState<string>("")
  const loadMore = () => {
    setShowOthersHidden(!showOthersHidden);
  };

  useEffect(() => {
    if(!depositResposePending){
      console.log(coin)
      setCurrentCoin(depositReponse.deposit_coins![coin!])
      setArr(depositReponse.deposit_coins!);
    }
  }, [depositResposePending, depositReponse])

  return (
    <Stack className={classes.container}>
      <Stack>
        <Stack className={classes.wrapDepositItems} style={{ height }}>
          <Box>
            <TextInput
              value={search}
              onChange={e => setSearch(e.target.value)}
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
                section: classes.icon,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search Crypto"
            />
          </Box>
          {arr.filter(i => i.name.includes(search)).map((item, itemIndex) => (
            <Box
              onClick={() => {
                setCurrentCoin(item);
                (setCoin ? setCoin(itemIndex) : setSelectedDeposit(itemIndex))
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
                <Text className={clsx(classes.value, itemIndex === (coin ?? selectedDeposit) && classes.activeValue)}>{parseFloat(parseFloat(item.balance).toFixed(4))} {item.symbol}</Text>
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
