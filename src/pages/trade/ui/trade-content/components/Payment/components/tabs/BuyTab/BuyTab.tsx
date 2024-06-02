/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";

import { BitcoinIcon } from "@/shared/ui";
import { USDIcon } from "@/shared/ui/icon/USDIcon";
import { WalletIcon } from "@/shared/ui/icon/WalletIcon";

import { MarketSwitch } from "../../MarketSwitch/MarketSwitch";
import classes from "./BuyTab.module.css";

export const BuyTab = () => {
  const [activeSwitch, setActiveSwitch] = useState<1 | 2>(1);
  return (
    <Stack gap={32}>
      <MarketSwitch onSwitch={setActiveSwitch} />
      <Group justify="space-between">
        <Group gap={8}>
          <WalletIcon />
          <Text className={classes.text}>$38,447.54</Text>
        </Group>
        <Group gap={8}>
          <div className={classes.iconWrapper}>
            <BitcoinIcon />
          </div>
          <Text className={classes.text}>$38,447.54</Text>
        </Group>
      </Group>
      <Stack gap={16}>
        <label className={classes.text}>
          {activeSwitch === 1 ? "Amount" : "Amount / For the amount of"}
          <TextInput
            classNames={{ input: classes.textInput, section: classes.section }}
            placeholder="$0"
            type="number"
            rightSectionWidth="fit-content"
            rightSection={
              <Group gap={8} wrap="nowrap">
                <div className={classes.btcIcon}>
                  <BitcoinIcon />
                </div>
                BTC
              </Group>
            }
          />
        </label>
        {activeSwitch === 1 && (
          <label className={classes.text}>
            Price
            <TextInput
              classNames={{ input: classes.textInput, section: classes.section }}
              placeholder="$0"
              type="number"
              rightSectionWidth="fit-content"
              rightSection={
                <Group gap={8} wrap="nowrap">
                  <USDIcon />
                  USD
                </Group>
              }
            />
          </label>
        )}
        <label className={classes.text}>
          Total
          <TextInput
            classNames={{ input: classes.textInput, section: classes.section }}
            placeholder="$0"
            type="number"
            rightSectionWidth="fit-content"
            rightSection={
              <Group gap={8} wrap="nowrap">
                <USDIcon />
                USD
              </Group>
            }
          />
        </label>
      </Stack>
      <Button className={classes.button} variant="radial-gradient">
        Buy BTC
      </Button>
    </Stack>
  );
};
