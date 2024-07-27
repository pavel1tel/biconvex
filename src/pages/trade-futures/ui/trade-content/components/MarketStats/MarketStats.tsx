import { Group, Progress, Stack, Text } from "@mantine/core";
import { useState } from "react";

import { BitcoinIcon } from "@/shared/ui";
import { Container } from "@/shared/ui/TradePageContainer/Container";
import { ClockIcon } from "@/shared/ui/icon/ClockIcon";
import { FavoriteStarFilledIcon } from "@/shared/ui/icon/FavoriteStarFilledIcon";
import { InfoIcon } from "@/shared/ui/icon/InfoIcon";
import { MarketCapCurveIcon } from "@/shared/ui/icon/MarketCapCurveIcon";
import { PositiveTrandIcon } from "@/shared/ui/icon/PositiveTrandIcon";
import { SwapIcon } from "@/shared/ui/icon/SwapIcon";

import { Select } from "../Select/Select";
import classes from "./MarketStats.module.css";
import "./Progress.css";

export const MarketStats = () => {
  const [activePeriodValue, setActivePeriodValue] = useState("1d");

  return (
    <div style={{ flex: 1 }}>
      <Container padding={48}>
        <Group h={"100%"} align="center">
          <div style={{ flex: 1 }}>
            <Stack gap={32}>
              <Group className={classes.headeContainer}>
                <Group align="center">
                  <Group gap={8} align="center">
                    <div className={classes.coinIconWrapper}>
                      <BitcoinIcon />
                    </div>
                    <Text className={classes.coinName}>Bitcoin</Text>
                    <Text className={classes.coinBadge}>btc</Text>
                  </Group>
                  <FavoriteStarFilledIcon type="click" />
                </Group>
                <Group>
                  <Text className={classes.grayText}>Rank #1</Text>
                  <Text className={classes.grayText}>Coin</Text>
                  <Text className={classes.grayText}>On 2,771,773 watchlists</Text>
                </Group>
              </Group>
              <Group justify="space-between">
                <Group gap={12}>
                  <Text className={classes.priceText}>$43,975.72</Text>
                  <Group gap={3}>
                    <Text className={classes.trandText}>+2%</Text>
                    <PositiveTrandIcon />
                  </Group>
                </Group>
                <Group gap={8}>
                  <Text className={classes.grayText}>Bitcoin Price(USD)</Text>
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
                <Progress value={29} radius={5} color={"#625FF8"} />
                <Group justify="space-between">
                  <Text className={classes.grayText}>Low : $37,005.19</Text>
                  <Text className={classes.grayText}>High : $37,005.19</Text>
                </Group>
              </Stack>
              <Group className={classes.adaptive}>
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
                    $22,822,762,169
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
            </Stack>
          </div>
        </Group>
      </Container>
    </div>
  );
};
