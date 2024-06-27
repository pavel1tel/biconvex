import { Group, Text } from "@mantine/core";
import clsx from "clsx";

import { $profileReponse } from "@/pages/my-profile/model";
import { ProfileReponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { Dispatch, SetStateAction } from "react";
import { Coins } from "../Coins/Coins";
import classes from "./styles.module.css";

export const TradeChartTitle = ({ className = "", currentPairName, setCurrentPair }: { className?: string, currentPairName: string, setCurrentPair: Dispatch<SetStateAction<string>> }) => {
  const profileResponse = useUnit<ProfileReponse>($profileReponse);

  return (
    <Group gap={8} className={clsx(classes.tradeChartWrapper, classes[className])}>
      <Text className={classes.tradeChartTitle}>{currentPairName} Chart</Text>
      <Coins setCurrentPair={setCurrentPair} coins={profileResponse.coins} />
    </Group>
  );
};
