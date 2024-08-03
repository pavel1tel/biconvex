import { BackgroundImage, Box, Flex, Group, SimpleGrid, Stack, Text, Title, rem } from "@mantine/core";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { CloseEyeIcon, EyeIcon } from "@/pages/staking/ui";

import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ProfileReponse } from "@/shared/api/types";
import { RateChart } from "@/shared/ui";

import { $profileReponse } from "../../model";
import classes from "./styles.module.css";

export const HeaderMyProfile = () => {
  const [value, setValue] = useState("$0");
  const [isHide, setIsHide] = useState(false);
  const [hiddenValue, setHiddenValue] = useState("");
  const [pnlData, setPnlData] = useState<number[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [btcPercent, setBtcPercent] = useState(0);
  const [btcValue, setBtcValue] = useState(0);
  const [ethPercent, setEthPercent] = useState(0);
  const [ethValue, setEthValue] = useState(0);
  const [usdtPercent, setUsdtPercent] = useState(0);
  const [usdtValue, setUsdtValue] = useState(0);
  const [otherPercent, setOtherPercent] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const profileReponsepending = useUnit<boolean>(getStakingHistoryFx.pending);
  const hideValue = () => {
    setHiddenValue("*".repeat(value.length));
    setIsHide(true);
  };
  const showValue = () => {
    setValue(value);
    setIsHide(false);
  };

  useEffect(() => {
    if (!profileReponsepending) {
      setPnlData(profileReponse.pnl!);
      if (profileReponse.pnl!.length >= 2) {
        const t = profileReponse.pnl![0] == 0 ? 1 : profileReponse.pnl![0];
        setPercentage((profileReponse.pnl![profileReponse.pnl!.length - 1] / t - 1) * 100);
      } else {
        setPercentage(0);
      }
      setValue("$" + profileReponse.total_balance!);
      if (parseFloat(profileReponse.total_balance!) == 0) {
        setBtcPercent(0);
        setBtcValue(0);
        setEthPercent(0);
        setEthValue(0);
        setUsdtPercent(0);
        setUsdtValue(0);
        setOtherPercent(0);
        setOtherValue(0);
        return;
      }
      const btcPercent: number = ((profileReponse.btc_balance! * profileReponse.btc_price!) / parseFloat(profileReponse.total_balance!)) * 100;
      const btcValue = parseFloat((profileReponse.btc_balance! * profileReponse.btc_price!).toFixed(2));
      setBtcPercent(Math.floor(btcPercent));
      setBtcValue(btcValue);
      const ethPercent: number = ((profileReponse.eth_balance! * profileReponse.eth_price!) / parseFloat(profileReponse.total_balance!)) * 100;
      const ethValue = parseFloat((profileReponse.eth_balance! * profileReponse.eth_price!).toFixed(2));
      setEthPercent(Math.floor(ethPercent));
      setEthValue(ethValue);
      const usdtPercent: number = ((profileReponse.usdt_balance! * profileReponse.usdt_price!) / parseFloat(profileReponse.total_balance!)) * 100;
      const usdtValue: number = parseFloat((profileReponse.usdt_balance! * profileReponse.usdt_price!).toFixed(2));
      setUsdtPercent(Math.floor(usdtPercent));
      setUsdtValue(usdtValue);
      setOtherPercent(100 - Math.floor(usdtPercent) - Math.floor(ethPercent) - Math.floor(btcPercent));
      setOtherValue(parseFloat((parseFloat(profileReponse.total_balance!) - btcValue - ethValue - usdtValue).toFixed(2)));
    }
  }, [profileReponse, profileReponsepending]);

  return (
    <Box>
      <Flex className={classes.wrapper}>
        <Flex className={classes.imageBlock}>
          <BackgroundImage src={`${import.meta.env.BASE_URL}assets/current-balance-bg.png`} className={classes.current}>
            <Stack gap={rem("8px")}>
              <Text className={classes.title}>Current Balance</Text>
              <Flex align={"center"} gap={rem("8px")}>
                <Text className={classes.amount}>{isHide ? hiddenValue : value}</Text>
                <Box className={classes.hide}>
                  {isHide ? (
                    <Box onClick={() => showValue()}>
                      <CloseEyeIcon width="24" height="24" />
                    </Box>
                  ) : (
                    <Flex onClick={() => hideValue()}>
                      <EyeIcon width="24" height="24" />
                    </Flex>
                  )}
                </Box>
              </Flex>
            </Stack>
          </BackgroundImage>
        </Flex>
        <SimpleGrid cols={2} className={classes.box}>
          <Flex gap={rem("8px")}>
            <Box>
              <CircularProgressbar
                value={btcPercent}
                text={btcPercent + ` %`}
                circleRatio={0.7}
                styles={{
                  root: {
                    height: "45px",
                    width: "50px",
                  },
                  trail: {
                    stroke: "#343434",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    borderRadius: "8px",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: "#F7931A",
                  },
                  text: {
                    fontSize: "28px",
                    fontWeight: 400,
                    fill: "#6C7080",
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem("4px")}>
              <Text className={classes.titleGraph}>Bitcoin</Text>
              <Text className={classes.amountGraph}>${btcValue}</Text>
            </Stack>
          </Flex>
          <Flex gap={rem("8px")}>
            <Box w={50}>
              <CircularProgressbar
                value={ethPercent}
                text={ethPercent + ` %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root: {
                    height: "45px",
                    width: "50px",
                  },
                  trail: {
                    stroke: "#343434",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    borderRadius: "8px",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: "#627EEA",
                  },
                  text: {
                    fontSize: "28px",
                    fontWeight: 500,
                    fill: "#6C7080",
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem("4px")}>
              <Text className={classes.titleGraph}>Ethereum</Text>
              <Text className={classes.amountGraph}>${ethValue}</Text>
            </Stack>
          </Flex>
          <Flex gap={rem("8px")}>
            <Box w={50}>
              <CircularProgressbar
                value={usdtPercent}
                text={usdtPercent + ` %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root: {
                    height: "45px",
                    width: "50px",
                  },
                  trail: {
                    stroke: "#343434",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    borderRadius: "8px",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: "#50AF95",
                  },
                  text: {
                    fontSize: "28px",
                    fontWeight: 500,
                    fill: "#6C7080",
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem("4px")}>
              <Text className={classes.titleGraph}>Tether</Text>
              <Text className={classes.amountGraph}>${usdtValue}</Text>
            </Stack>
          </Flex>
          <Flex gap={rem("8px")}>
            <Box w={50}>
              <CircularProgressbar
                value={otherPercent}
                text={otherPercent + ` %`}
                circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
                styles={{
                  root: {
                    height: "45px",
                    width: "50px",
                  },
                  trail: {
                    stroke: "#343434",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    borderRadius: "8px",
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: "#8247E5",
                  },
                  text: {
                    fontSize: "28px",
                    fontWeight: 500,
                    fill: "#6C7080",
                  },
                }}
                strokeWidth={9}
              />
            </Box>
            <Stack gap={rem("4px")}>
              <Text className={classes.titleGraph}>Others</Text>
              <Text className={classes.amountGraph}>${otherValue}</Text>
            </Stack>
          </Flex>
        </SimpleGrid>
        <Box className={classes.graph}>
          <Stack gap={rem(0)} className={classes.rateWrapper}>
            <Stack className={classes.rateHeader}>
              <Group align="flex-end" justify="space-between">
                <Text className={classes.textGraph} c="white">
                  Today's PnL.
                </Text>
                <Group gap={rem("4px")}>
                  <Title order={5} className={percentage >= 0 ? classes.positiveValue : classes.negativeValue}>
                    {percentage.toFixed(2)}%
                  </Title>
                  <Title order={6} className={classes.text}>
                    /24h
                  </Title>
                </Group>
              </Group>
            </Stack>
            <Stack className={classes.rateContent}>
              <RateChart
                left={0}
                bottom={0}
                top={10}
                right={0}
                type={percentage >= 0 ? "positive" : "negative"}
                data={pnlData.map((value, index) => ({ name: `${index}`, value }))}
              />
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
