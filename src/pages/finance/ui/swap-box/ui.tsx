import { useSwrFastSwapCoins } from "@/hooks/useSwrFastSwap";
import { ChangeIcon, SelectArrowIcon, SwapIcon } from "@/pages/finance/ui";
import { showErrorNotification, showSuccessNotification } from "@/shared/lib/notification";
import { BASE_API_URL } from "@/swr";
import { Box, Button, Combobox, Flex, Input, InputBase, rem, Stack, Text, useCombobox } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import classes from "./styles.module.css";

async function getCurrencyBalance(url: string, { arg }: { arg: string }) {
  return await fetch(url, {
    method: "POST",
    credentials: 'include',
    body: `action=GET_CURRENCY_BALANCE&crypto=${arg}`,
  }).then(r => r.json());
}


async function exchange(url: string, { arg }: { arg: string[] }) {
  return await fetch(url, {
    method: "POST",
    credentials: 'include',
    body: `amount=${arg[2]}&exchange=${arg[0]}&for=${arg[1]}&action=EXCHANGE`,
  }).then(r => {
    if (r.status != 200) {
      return Promise.reject(r);
    }
    showSuccessNotification("Swapped succesfully")
    return r.json()
  }).catch((err) => {
    err.text().then((json: any) => {
      showErrorNotification(json)
    })
  });
}

async function refreshAmount(url: string, { arg }: { arg: string[] }) {
  return await fetch(url, {
    method: "POST",
    credentials: 'include',
    body: `amount=${arg[2]}&exchange=${arg[0]}&for=${arg[1]}&action=CALC_EXCHANGE`,
  }).then(r => r.json());
}

export const SwapBox = () => {
  const [currentCurrencyFromBalance, setCurrentCurrencyFromBalance] = useState<number>();
  const [currentCurrencyToBalance, setCurrentCurrencyToBalance] = useState<number>();
  const { coins, rates } = useSwrFastSwapCoins();
  const { trigger: getCurrencyBalanceTrigger } = useSWRMutation(`${BASE_API_URL}/profile`, getCurrencyBalance);
  const { trigger: exchangeTrigger } = useSWRMutation(`${BASE_API_URL}/exchange`, exchange);
  const { trigger: refreshAmountTrigger } = useSWRMutation(`${BASE_API_URL}/exchange`, refreshAmount);

  const combobox1 = useCombobox({
    onDropdownClose: () => combobox1.resetSelectedOption(),
  });
  const combobox2 = useCombobox({
    onDropdownClose: () => combobox2.resetSelectedOption(),
  });
  const [isActive, setIsActive] = useState(false);

  const [value1, setValue1] = useState("BTC");
  const [value2, setValue2] = useState("ETH");

  useEffect(() => {
    (async () => {
      setCurrentCurrencyFromBalance(await getCurrencyBalanceTrigger(value1));
      await refreshAmountHandler()
    })();
  }, [value1]);

  useEffect(() => {
    (async () => {
      setCurrentCurrencyToBalance(await getCurrencyBalanceTrigger(value2));
      await refreshAmountHandler()
    })();
  }, [value2]);

  const refreshAmountHandler = async () => {
    const from = document.getElementById("from") as HTMLInputElement | null;
    if (!from) {
      return
    }
    const fromValue = parseFloat(from.value);
    if (!fromValue) {
      return
    }
    const toValue = await refreshAmountTrigger([value1, value2, String(fromValue)]);
    const to = document.getElementById("to") as HTMLInputElement | null;
    if (!to) {
      return
    }
    if (toValue > 0) {
      to.value = Number(toValue).toFixed(4)
    }
  };

  const changeValue = () => {
    setValue1(value2);
    setValue2(value1);
    setIsActive(!isActive);
  };
  const options = Object.entries(coins || {}).map(([key, { symbol, name, image }]) =>
    <Combobox.Option value={key} key={symbol}>
      <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
        <img src={image} alt={symbol} width={24} />
        <Text fw={600}>{name}</Text>
      </Flex>
    </Combobox.Option>,
  );

  const currentRate = Object.values(rates?.find((rate) => Object.keys(rate)[0] === value1) || {})[0];
  const currentCoinFrom = coins && coins[value1];
  const currentCoinTo = coins && coins[value2];

  const exchangeCurrencyHandler = async () => {
    const from = document.getElementById("from") as HTMLInputElement | null;
    if (!from) {
      return
    }
    const fromValue = parseFloat(from.value);
    if (!fromValue) {
      return
    }
    await exchangeTrigger([value1, value2, String(fromValue)]);
    setCurrentCurrencyFromBalance(await getCurrencyBalanceTrigger(value1));
    setCurrentCurrencyToBalance(await getCurrencyBalanceTrigger(value2));
  };


  return (
    <Stack gap={rem("32px")} align="center">
      <Flex className={classes.swapBoxWrapper}>
        <Stack className={classes.swapWrapper}>
          <Box>
            <Flex justify={"space-between"}>
              <Text className={classes.swapHave}>From</Text>
              <Text c={"white"} className={classes.value}>
                Balance: {currentCurrencyFromBalance?.toFixed(4)} {currentCoinFrom?.symbol}
              </Text>
            </Flex>
          </Box>
          <Flex justify={"space-between"}>
            <Combobox
              classNames={{
                option: classes.option,
              }}
              store={combobox1}
              onOptionSubmit={async (val) => {
                setValue1(val);
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
                  <Flex h={29} w={"118px"} align={"center"} gap={"10px"}>
                    <img src={currentCoinFrom?.image} alt={currentCoinFrom?.symbol} width={24} />
                    <Text fw={600} className={classes.option}>
                      {value1}
                    </Text>
                    <SelectArrowIcon />
                  </Flex>
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown classNames={{ dropdown: classes.dropdown }}>
                <Combobox.Options classNames={{ options: classes.option }}>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <Input type={"number"} classNames={{ input: classes.amount }} placeholder={"Enter amount"} onChange={refreshAmountHandler} id={'from'} />
          </Flex>
        </Stack>

        <motion.span
          animate={{
            rotate: isActive ? 360 : 0,
          }}
          onClick={() => changeValue()}
          draggable={false}
          className={classes.img}
        >
          <ChangeIcon />
        </motion.span>
        <Stack className={classes.swapWrapper}>
          <Box>
            <Flex justify={"space-between"}>
              <Text className={classes.swapHave}>To</Text>
              <Text c={"white"} className={classes.value}>
                Balance: {currentCurrencyToBalance?.toFixed(4)} {currentCoinTo?.symbol}
              </Text>
            </Flex>
          </Box>
          <Flex justify={"space-between"}>
            <Combobox
              classNames={{
                option: classes.option,
              }}
              store={combobox2}
              onOptionSubmit={(val) => {
                setValue2(val);
                combobox2.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="div"
                  defaultValue={value2}
                  classNames={{
                    input: classes.input,
                  }}
                  pointer
                  onClick={() => combobox2.toggleDropdown()}
                >
                  <Flex h={29} w={"118px"} align={"center"} gap={"10px"}>
                    <img src={currentCoinTo?.image} alt={currentCoinFrom?.symbol} width={24} />
                    <Text fw={600} className={classes.option}>
                      {value2}
                    </Text>
                    <SelectArrowIcon />
                  </Flex>
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown classNames={{ dropdown: classes.dropdown }}>
                <Combobox.Options classNames={{ options: classes.option }}>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
            <Input type={"number"} classNames={{ input: classes.amount }} placeholder={"Enter amount"} id={'to'} />
          </Flex>
        </Stack>
      </Flex>

      <Button size="xxl" variant="radial-gradient" className={classes.btn} rightSection={<SwapIcon />}
        onClick={exchangeCurrencyHandler}>
        SWAP
      </Button>
      <Text className={classes.exchange}>Exchange rate: 1 {currentCoinFrom?.symbol} ~ {currentRate}</Text>
    </Stack>
  );
};
