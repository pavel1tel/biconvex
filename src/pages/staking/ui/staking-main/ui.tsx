import {
  Box,
  Button,
  Combobox,
  Container,
  Divider,
  Flex,
  Image,
  InputBase,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  rem,
  useCombobox
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

import { BitcoinIcon } from "@/shared/ui";

import { createStakeRequest, requestBalance, requestStaking } from "@/shared/api/staking/request";
import { InvestResponse } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { useUnit } from "effector-react";
import { $balanceResponse, $investReponse, changeCoin } from "../../model";
import { LightningIcon, SelectArrowIcon } from "../icons/index";
import classes from "./styles.module.css";

interface PerDayInfo {
  days: number;
  perDay: number;
}

let coins = [
  { text: "BTC", icon: <BitcoinIcon width={"21px"} height={"21px"} /> },
];

const defaultPlan: PerDayInfo[] =
  [{
    days: 10,
    perDay: 10
  },
  {
    days: 30,
    perDay: 20
  },
  {
    days: 60,
    perDay: 30
  },
  {
    days: 90,
    perDay: 40
  },
  {
    days: 180,
    perDay: 50
  },
  {
    days: 365,
    perDay: 60
  }
  ];
export const StakingMain = (
  {
    amount,
    setAmount,
    setPercent,
    value1,
    setValue1
  }: {
    amount: string;
    setAmount: any;
    setPercent: any;
    value1: string;
    setValue1: any;
  }
) => {
  const matches = useMediaQuery("(min-width: 1366px)");
  const combobox1 = useCombobox({
    onDropdownClose: () => combobox1.resetSelectedOption(),
  });
  const investReponse = useUnit<InvestResponse>($investReponse);
  const investReponsePending = useUnit(requestStaking.pending);
  const balanceResponse = useUnit($balanceResponse);
  const FindIcon = coins.find((item) => item.text === value1);
  const [data, setData] = useState<PerDayInfo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const isLoading = useUnit(createStakeRequest.pending);
  const [plan, setPlan] = useState(2);
  const stake = () => {
    if (amount === "" || parseFloat(amount) <= 0) {
      setError(true);
      showErrorNotification("Incorrect amount");
      return;
    }
    createStakeRequest({
      invest_amount: amount,
      invest_coin: value1,
      invest_plan: plan + 1 + ""
    })
  }

  useEffect(() => {
    setError(false);

  }, [amount])

  const selectPlan = useCallback((percent: number) => {
    setPercent(percent);
  }, [])

  useEffect(() => {
    if (!investReponsePending) {
      coins = [];
      if (investReponse.plans_percents!["BTC"] !== undefined) {
        const mappedArray = Object.entries(investReponse.plans_percents!["BTC"]).map(([key, value]) => {
          const days = parseInt(key.split('_')[1], 10);
          return {
            days: days,
            perDay: value
          };
        });
        setData(mappedArray);
        setPercent(mappedArray[2].perDay)
      } else {
        setData(defaultPlan);
      }
      Object.keys(investReponse.invest_coins!).forEach(function (key) {
        coins.push({
          text: investReponse.invest_coins![key].symbol,
          icon: <Image src={investReponse.invest_coins![key].image} h={21} w={21} />
        })
      });
    }
  }, [investReponse, investReponsePending])

  useEffect(() => {
    if (!investReponsePending) {
      if (investReponse.plans_percents![value1] !== undefined) {
        const mappedArray = Object.entries(investReponse.plans_percents![value1]).map(([key, value]) => {
          const days = parseInt(key.split('_')[1], 10);
          return {
            days: days,
            perDay: value
          };
        });
        setData(mappedArray);
      } else {
        setData(defaultPlan);
      }
    }
  }, [value1])

  const options = coins.map((item) => (
    <Combobox.Option classNames={{ option: classes.option }} value={item.text} key={item.text}>
      <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
        {item.icon}
        <Text fw={500}>{item.text}</Text>
      </Flex>
    </Combobox.Option>
  ));
  return (
    <Stack className={classes.wrapper}>
      <Flex gap={rem("32px")} justify={"space-between"} className={classes.box}>
        <Stack className={classes.col1}>
          <Title className={classes.staking}>Staking</Title>
          <Text className={clsx(classes.text, classes.text16)} mb={rem("41px")} ta={"center"}>
            Select a coin and enter the number of desired coins for steaking, then select a plan and confirm start.
          </Text>
          <Stack>
            <Stack mb={rem("20px")}>
              <Text className={classes.label}>Select coin</Text>
              <Combobox
                withinPortal={false}
                classNames={{
                  option: classes.option,
                }}
                store={combobox1}
                onOptionSubmit={(val) => {
                  requestBalance(val);
                  setValue1(val);
                  changeCoin(val);
                  combobox1.closeDropdown();
                }}
              >
                <Combobox.Target>
                  <InputBase
                    component="div"
                    defaultValue={value1}
                    classNames={{
                      input: classes.input,
                    }}
                    pointer
                    onClick={() => combobox1.toggleDropdown()}
                  >
                    <Flex h={29} w={"100%"} justify={"space-between"} align={"center"} gap={"10px"}>
                      <Flex align={"center"} gap={"10px"}>
                        {FindIcon?.icon}
                        <Text fw={500} className={classes.inputValue}>
                          {value1}
                        </Text>
                      </Flex>
                      <SelectArrowIcon />
                    </Flex>
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown classNames={{ dropdown: classes.dropdown }}>
                  <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
            </Stack>
            <Stack>
              <TextInput
                error={error}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                classNames={{
                  input: classes.input,
                  label: clsx(classes.label, classes.labelMargin),
                }}
                type={"number"}
                label="Enter amount"
                placeholder={"Available: " + balanceResponse + " " + value1}
              />
            </Stack>
          </Stack>
        </Stack>
        {matches ? <Divider className={classes.divider} orientation={"vertical"} size={"1px"} /> : <></>}
        <Container p={0} m={0}>
          <Title className={classes.staking} mb={rem("32px")} order={3}>
            Select a staking plan
          </Title>
          <SimpleGrid className={classes.gridCols} w={{ 0: "100%", md: "727px" }} spacing={rem("16px")} cols={{ base: 2, md: 3 }}>
            {data.map((item, index) => (
              <Box
                w={rem(231)}
                h={rem(93)}
                onClick={() => {
                  selectPlan(item.perDay);
                  setPlan(index)
                }}
                key={item.perDay}
                className={clsx(index === plan && classes.selectedBoxBg)}
              >
                <Flex gap={rem("20px")} className={clsx(classes.selectBox, index === plan && classes.selectedBox)}>
                  <Stack gap={rem("4px")}>
                    <Text c={"white"} className={classes.value}>
                      {item.days} days
                    </Text>
                    <Text className={classes.text}>Duration</Text>
                  </Stack>
                  <Divider className={classes.divider} orientation={"vertical"} size={"1px"} />
                  <Stack gap={rem("4px")}>
                    <Text className={clsx(classes.value, classes.greenText)}>{item.perDay}</Text>
                    <Text className={classes.text}>Per day</Text>
                  </Stack>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
          <Button loading={isLoading} onClick={stake} size="xxl" variant="radial-gradient" className={classes.btn} rightSection={<LightningIcon />}>
            STAKE
          </Button>
        </Container>
      </Flex>
    </Stack>
  );
};
