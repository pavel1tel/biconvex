/* eslint-disable jsx-a11y/label-has-associated-control */
import { useResize } from "@/hooks/useResize";
import { Button, Checkbox, Divider, Group, Stack, Text, TextInput } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { BitcoinIcon } from "@/shared/ui";
import { TradeChartTitle } from "@/shared/ui/TradeChartTitle";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { USDIcon } from "@/shared/ui/icon/USDIcon";
import { WalletIcon } from "@/shared/ui/icon/WalletIcon";

import classes from "./Payment.module.css";
import { AdjustLeverage } from "./components/AdjustLeverage/AdjustLeverage";
import { MarketSwitch } from "./components/MarketSwitch/MarketSwitch";

export const Payment = ({ currentPairName, setCurrentPair }) => {
  const [activeSwitch, setActiveSwitch] = useState<1 | 2>(1);
  const [tpSiChecked, setTpSiChecked] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<"Cross" | "Isolated">("Cross");
  const { isAdaptive: md } = useResize(1200);

  return (
    <Stack className={classes.payment}>
      <Container className={classes.container}>
        {md && <TradeChartTitle currentPairName={currentPairName} setCurrentPair={setCurrentPair} className="withBottomIndent" />}
        <Stack gap={32}>
          <Stack gap={16}>
            <Group>
              <button
                className={clsx(classes.switchButton, { [classes.active]: activeCategory === "Cross" })}
                onClick={() => setActiveCategory("Cross")}
              >
                Cross
              </button>
              <button
                className={clsx(classes.switchButton, { [classes.active]: activeCategory === "Isolated" })}
                onClick={() => setActiveCategory("Isolated")}
              >
                Isolated
              </button>
            </Group>
            <AdjustLeverage />
          </Stack>
          <Divider opacity={"0.12"} color={"white"} />
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
          <Divider opacity={"0.12"} color={"white"} />
          <Stack gap={24}>
            <Checkbox checked={tpSiChecked} onChange={() => setTpSiChecked(!tpSiChecked)} c="white" label={<Text variant="text-4">TP/SI</Text>} />
            {tpSiChecked && (
              <Stack gap={16}>
                <TextInput
                  classNames={{ wrapper: classes.tpsiInputWrapper, input: classes.tpsiInput, section: classes.tpsiInputSecton }}
                  type="number"
                  leftSection={<p>Take Profit</p>}
                />
                <TextInput
                  classNames={{ wrapper: classes.tpsiInputWrapper, input: classes.tpsiInput, section: classes.tpsiInputSecton }}
                  type="number"
                  leftSection={<p>Stop Loss</p>}
                />
              </Stack>
            )}
          </Stack>
          <Group gap={16}>
            <Button className={classes.button} variant="success">
              Buy/Long
            </Button>
            <Button className={classes.button} variant="danger">
              Sell/Short
            </Button>
          </Group>
        </Stack>
      </Container>
    </Stack>
  );
};
