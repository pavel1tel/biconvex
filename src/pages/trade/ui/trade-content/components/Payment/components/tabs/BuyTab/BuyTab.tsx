/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Group, Image, Stack, Text, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";

import { USDIcon } from "@/shared/ui/icon/USDIcon";
import { WalletIcon } from "@/shared/ui/icon/WalletIcon";

import { $profileReponse } from "@/pages/my-profile/model";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { createOrder } from "@/shared/api/trading/requests";
import { Crypto, ProfileReponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
import { MarketSwitch } from "../../MarketSwitch/MarketSwitch";
import classes from "./BuyTab.module.css";

export const BuyTab = ({ currentPair }: { currentPair: string }) => {
  const [activeSwitch, setActiveSwitch] = useState<1 | 2>(1);
  const profileResponse = useUnit<ProfileReponse>($profileReponse);
  const profileResponsePending = useUnit<boolean>(getStakingHistoryFx.pending);
  const [currentCoin, setCurrentCoin] = useState<Crypto>();
  const [coinAmount, setCoinAmount] = useState<number | undefined>(undefined);
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [recalculateCoin, setRecalculateCoin] = useState<boolean>(false);
  const [recalculateTotal, setRecalculateTotal] = useState<boolean>(false);

  useEffect(() => {
    if (!profileResponsePending) {
      setCurrentCoin(profileResponse.coins!.filter((coin) => coin.symbol === currentPair.split("/")[0])[0])
    }
  })

  useEffect(() => {
    if (price && coinAmount) {
      setTotal(coinAmount * price)
    } else {
    }
  }, [recalculateCoin, price])

  useEffect(() => {
    if (price && total) {
      setCoinAmount(parseFloat((total / price).toFixed(5)))
    } else {
    }
  }, [recalculateTotal])

  const handleBuy = () => {
    if (activeSwitch == 1 && coinAmount && price) {
      createOrder({
        pair_price: price,
        crypto: currentCoin!.symbol,
        amount: coinAmount,
        type: 0,
        category: "LIMIT"
      })
    }
  }

  return (
    <Stack gap={32}>
      <MarketSwitch onSwitch={setActiveSwitch} />
      <Group justify="space-between">
        <Group gap={8}>
          <WalletIcon />
          <Text className={classes.text}>${profileResponse.usdt_balance}</Text>
        </Group>
        <Group gap={8}>
          <div className={classes.iconWrapper}>
            <Image src={currentCoin?.image}></Image>
          </div>
          <Text className={classes.text}>{currentCoin?.balance.toFixed(5)}</Text>
        </Group>
      </Group>
      <Stack gap={16}>
        <label className={classes.text}>
          {activeSwitch === 1 ? "Amount" : "Amount / For the amount of"}
          <TextInput
            classNames={{ input: classes.textInput, section: classes.section }}
            placeholder="0"
            type="number"
            value={coinAmount}
            onChange={e => { setCoinAmount(parseFloat(e.target.value)); setRecalculateCoin(prev => !prev) }}
            rightSectionWidth="fit-content"
            rightSection={
              <Group gap={8} wrap="nowrap">
                <div className={classes.btcIcon}>
                  <Image src={currentCoin?.image}></Image>
                </div>
                {currentCoin?.symbol}
              </Group>
            }
          />
        </label>
        {activeSwitch === 1 && (
          <label className={classes.text}>
            Price
            <TextInput
              value={price}
              onChange={e => setPrice(parseFloat(e.target.value))}
              classNames={{ input: classes.textInput, section: classes.section }}
              placeholder="$0"
              type="number"
              rightSectionWidth="fit-content"
              rightSection={
                <Group gap={8} wrap="nowrap">
                  <USDIcon />
                  USDT
                </Group>
              }
            />
          </label>
        )}
        <label className={classes.text}>
          Total
          <TextInput
            value={total}
            onChange={e => { setTotal(parseFloat(e.target.value)); setRecalculateTotal(prev => !prev) }}
            classNames={{ input: classes.textInput, section: classes.section }}
            placeholder="$0"
            type="number"
            rightSectionWidth="fit-content"
            rightSection={
              <Group gap={8} wrap="nowrap">
                <USDIcon />
                USDT
              </Group>
            }
          />
        </label>
      </Stack>
      <Button onClick={handleBuy} className={classes.button} variant="radial-gradient">
        Buy {currentCoin?.symbol}
      </Button>
    </Stack>
  );
};
