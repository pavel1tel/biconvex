import { Group, Image, Progress, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { Container } from "@/shared/ui/TradePageContainer/Container";
import { ClockIcon } from "@/shared/ui/icon/ClockIcon";
import { FavoriteStarFilledIcon } from "@/shared/ui/icon/FavoriteStarFilledIcon";
import { InfoIcon } from "@/shared/ui/icon/InfoIcon";
import { MarketCapCurveIcon } from "@/shared/ui/icon/MarketCapCurveIcon";
import { PositiveTrandIcon } from "@/shared/ui/icon/PositiveTrandIcon";
import { SwapIcon } from "@/shared/ui/icon/SwapIcon";

import { $profileReponse } from "@/pages/my-profile/model";
import { $coinInfoResponse, $coinPrice } from "@/pages/trade/model";
import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { Crypto, CryptoTicker, ProfileReponse } from "@/shared/api/types";
import { NegativeTrendIcon } from "@/shared/ui/icon/NegativeTrendIcon";
import { useUnit } from "effector-react";
import { Select } from "../Select/Select";
import classes from "./MarketStats.module.css";
import "./Progress.css";

export const MarketStats = ({
  currentPair
}) => {
  const [activePeriodValue, setActivePeriodValue] = useState("1d");
  const profileResponse = useUnit<ProfileReponse>($profileReponse);
  const profileResponsePending = useUnit<boolean>(getStakingHistoryFx.pending);
  const [currentCoin, setCurrentCoin] = useState<Crypto>();
  const coinInfoResponse = useUnit<CryptoTicker[]>($coinInfoResponse);
  const coinPriceReponse = useUnit<any>($coinPrice);

  const formatNumberWithCommas = (number) => {
    if (isNaN(number)) {
      return null; // or throw an error if you prefer
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const scaleValue = (value: number, originalMin: number, originalMax: number, newMin: number = 1, newMax: number = 100): number => {
    const originalRange: number = originalMax - originalMin;
    const newRange: number = newMax - newMin;
    const scaledValue: number = newMin + ((value - originalMin) * newRange) / originalRange;

    return scaledValue;
  }

  useEffect(() => {
    if (!profileResponsePending) {
      setCurrentCoin(profileResponse.coins!.filter((coin) => coin.symbol === currentPair.split("/")[0])[0])
    }
  })
  return (
    <div style={{ flex: 1 }}>
      <Container className={classes.container} padding={48}>
        <Group h={"100%"} align="center">
          <div style={{ flex: 1 }}>
            <Stack gap={"clamp(24px, 2vw, 2rem)"}>
              <Group className={classes.headeContainer}>
                <Group align="center">
                  <Group gap={8} align="center">
                    <div className={classes.coinIconWrapper}>
                      <Image src={currentCoin?.image}></Image>
                    </div>
                    <Text className={classes.coinName}>{currentCoin?.name}</Text>
                    <Text className={classes.coinBadge}>{currentCoin?.symbol}</Text>
                  </Group>
                  <FavoriteStarFilledIcon />
                </Group>
                <Group>
                  <Text className={classes.grayText}>Rank #1</Text>
                  <Text className={classes.grayText}>Coin</Text>
                  <Text className={classes.grayText}>On 2,771,773 watchlists</Text>
                </Group>
              </Group>
              <Group justify="space-between">
                <Group gap={12}>
                  <Text className={classes.priceText}>${parseFloat(coinPriceReponse?.price)}</Text>
                  <Group gap={3}>
                    <Text className={parseFloat(coinInfoResponse[0]?.priceChangePercent) > 0 ? classes.trandText : classes.negativeTrandText}>{coinInfoResponse[0]?.priceChangePercent}</Text>
                    {parseFloat(coinInfoResponse[0]?.priceChangePercent) > 0 ? <PositiveTrandIcon /> : <NegativeTrendIcon fill="rgba(244, 74, 74, 0.8)" />}
                  </Group>
                </Group>
                <Group gap={8}>
                  <Text className={classes.grayText}>{currentCoin?.name} Price(USD)</Text>
                  <InfoIcon />
                </Group>
              </Group>
              <Stack>
                <Group justify="space-between">
                  <Group gap={8}>
                    <SwapIcon />
                    <Text className={classes.grayText}>High / Low Price</Text>
                  </Group>
                  <Select defaultFirst activeValue={activePeriodValue} setActiveValue={setActivePeriodValue} />
                </Group>
                <Progress value={scaleValue(parseFloat(coinPriceReponse?.price), parseFloat(coinInfoResponse[0]?.lowPrice), parseFloat(coinInfoResponse[0]?.highPrice))} radius={5} color={"#625FF8"} />
                <Group justify="space-between">
                  <Text className={classes.grayText}>Low : {parseFloat(coinInfoResponse[0]?.lowPrice)}</Text>
                  <Text className={classes.grayText}>High : {parseFloat(coinInfoResponse[0]?.highPrice)}</Text>
                </Group>
              </Stack>
            </Stack>
            <Group className={classes.adaptive} mt={64}>
              <div className={classes.statBlockContainer}>
                <Group gap={4} mb={16} className={classes.statBlockHeader}>
                  <MarketCapCurveIcon />
                  <Text className={classes.grayText}>Market Cap</Text>
                </Group>
                <Text className={classes.statBlockText} mb={4}>
                  $826,445,951,378
                </Text>
                <Group gap={4} className={classes.statBlockTrandWrapper}>
                  <Text className={classes.trandText}>+2%</Text>
                  <PositiveTrandIcon />
                </Group>
              </div>
              <div className={classes.statBlockContainer}>
                <Group gap={4} mb={16} className={classes.statBlockHeader}>
                  <ClockIcon />
                  <Text className={classes.grayText}>24 Volume</Text>
                </Group>
                <Text className={classes.statBlockText} mb={4}>
                  {"$" + formatNumberWithCommas(parseFloat(coinInfoResponse[0]?.quoteVolume).toFixed(2))}
                </Text>
                <Group gap={4} className={classes.statBlockTrandWrapper}>
                  <Text className={classes.trandText}>+2%</Text>
                  <PositiveTrandIcon />
                </Group>
              </div>
              <div className={classes.statBlockContainer}>
                <Group gap={4} mb={16} className={classes.statBlockHeader}>
                  <InfoIcon />
                  <Text className={classes.grayText}>Circulating Supply</Text>
                </Group>
                <Text className={classes.statBlockText} mb={4}>
                  18,958,437.00 BTC
                </Text>
                <Text className={classes.smallGrayText}>Max supply 21,000,000</Text>
              </div>
            </Group>
          </div>
        </Group>
      </Container>
    </div>
  );
};
