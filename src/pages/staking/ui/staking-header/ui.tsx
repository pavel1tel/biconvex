import { Box, Flex, Image, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useState } from "react";

import { CloseEyeIcon, EyeIcon } from "@/pages/staking/ui";

import { InvestResponse } from "@/shared/api/types";

import { $investReponse } from "../../model";
import classes from "./styles.module.css";

export const StakingHeader = () => {
  const stakingResponse = useUnit<InvestResponse>($investReponse);
  const [value, setValue] = useState("");
  const [isHide, setIsHide] = useState(false);
  const [hiddenValue, setHiddenValue] = useState("");
  const hideValue = () => {
    setHiddenValue("*".repeat(stakingResponse.total_balance!.length));
    setIsHide(true);
  };
  const showValue = () => {
    setValue(value);
    setIsHide(false);
  };
  return (
    <Stack className={classes.wrapper}>
      <Flex className={classes.mainFlex} gap={rem("48px")} justify={"space-between"}>
        <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
          <Title order={1} w={{ 0: "100%", md: 636 }} className={classes.title}>
            <Text span className={classes.titleColoredPart}>
              Earn your crypto
            </Text>
            <Text c="white" span className={classes.title}>
              daily in a trusted space
            </Text>
          </Title>
          <Flex align={"center"} gap={rem("16px")}>
            <Box>
              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/coins.png`} alt="coins" className={classes.coins} />
            </Box>
            <Text span className={classes.coinsText}>
              Join the revolution and earn in 100+ diverse tokens. <br />
              HODL and maximize your crypto gains today!
            </Text>
          </Flex>
        </Stack>
        <Box className={classes.box}>
          <Box c={"white"}>
            <Text className={classes.total}>Total Earnings</Text>
            <Flex align={"center"} gap={rem("16px")} className={classes.inner}>
              <Text fw={600} className={clsx(classes.title, classes.value)}>
                {isHide ? hiddenValue : "$" + (stakingResponse.total_balance ? stakingResponse.total_balance : "0")}
              </Text>
              <Box className={classes.hide}>
                {isHide ? (
                  <Box onClick={() => showValue()}>
                    <CloseEyeIcon width="35" height="35" />
                  </Box>
                ) : (
                  <Flex onClick={() => hideValue()}>
                    <EyeIcon width="48" height="49" />
                  </Flex>
                )}
              </Box>
            </Flex>
          </Box>
          <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/usdt2.png`} alt="tron" className={classes.image} />
        </Box>
      </Flex>
    </Stack>
  );
};
