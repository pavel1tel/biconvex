import { Group, Text } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { FlagIcon } from "@/shared/ui/icon/FlagIcon";
import { FlashMarketIcon } from "@/shared/ui/icon/FlashMarketIcon";

import classes from "./MarketSwitch.module.css";

const options = [
  { id: 1, text: "Limit", icon: <FlagIcon /> },
  { id: 2, text: "Market", icon: <FlashMarketIcon /> },
] as const;
export const MarketSwitch = ({ onSwitch }: { onSwitch: Dispatch<SetStateAction<1 | 2>> }) => {
  const [activePosition, setActivePosition] = useState<1 | 2>(1);
  const onSwitchHandle = (switchID: 1 | 2) => {
    onSwitch(switchID);
    setActivePosition(switchID);
  };
  return (
    <Group>
      {options.map((opt) => (
        <Group key={opt.id} className={clsx(classes.button, { [classes.active]: activePosition === opt.id })} onClick={() => onSwitchHandle(opt.id)}>
          <div className={clsx(classes.radio, { [classes.active]: activePosition === opt.id })}></div>
          <Group gap={4}>
            <div className={clsx(classes.iconWrapper, { [classes.active]: activePosition === opt.id })}>{opt.icon}</div>
            <Text className={clsx(classes.text, { [classes.active]: activePosition === opt.id })}>{opt.text}</Text>
          </Group>
        </Group>
      ))}
    </Group>
  );
};
