import { useResize } from "@/hooks/useResize";
import { Box, Button, Flex, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { BitcoinIcon, SearchIcon } from "@/shared/ui";

import classes from "./styles.module.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const DepositsBox = ({ height, coin, setCoin }: { height?: number; coin?: number; setCoin?: Dispatch<SetStateAction<number>> }) => {
  const [selectedDeposit, setSelectedDeposit] = useState(1);
  const { isAdaptive: md } = useResize(1200);
  const [showOthersHidden, setShowOthersHidden] = useState<boolean>(true);

  const loadMore = () => {
    setShowOthersHidden(!showOthersHidden);
  };

  return (
    <Stack className={classes.container}>
      <Stack>
        <Stack className={classes.wrapDepositItems} style={{ height }}>
          <Box>
            <TextInput
              classNames={{
                input: classes.searchInput,
                wrapper: classes.searchInputWrapper,
                section: classes.icon,
              }}
              leftSection={<SearchIcon />}
              placeholder="Search Crypto"
            />
          </Box>
          {arr.map((item, itemIndex) => (
            <Box
              onClick={() => (setCoin ? setCoin(item) : setSelectedDeposit(item))}
              key={item}
              className={clsx(
                classes.depositItem,
                item === (coin ?? selectedDeposit) && classes.depositItemActive,
                showOthersHidden && itemIndex > 5 ? classes.hidden : classes.shown,
              )}
            >
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={rem(8)}>
                  <BitcoinIcon width={24} height={24} />
                  <Text className={classes.label}>Bitcoin</Text>
                </Flex>
                <Text className={clsx(classes.value, item === (coin ?? selectedDeposit) && classes.activeValue)}>0 BTC</Text>
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
