import { Box, Button, Combobox, Flex, Input, InputBase, Stack, Text, rem, useCombobox } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

import { ChangeIcon, SelectArrowIcon, SwapIcon } from "@/pages/finance/ui";

import { BitcoinIcon, EthereumIcon, USDCoinIcon } from "@/shared/ui";

import classes from "./styles.module.css";

const coins = [
  { text: "BTC", icon: <BitcoinIcon width={"24px"} /> },
  { text: "USTD", icon: <USDCoinIcon width={"24px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"24px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"24px"} /> },
  { text: "USTD", icon: <USDCoinIcon width={"24px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"24px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"24px"} /> },
];

export const SwapBox = () => {
  const combobox1 = useCombobox({
    onDropdownClose: () => combobox1.resetSelectedOption(),
  });
  const combobox2 = useCombobox({
    onDropdownClose: () => combobox2.resetSelectedOption(),
  });
  const [isActive, setIsActive] = useState(false);

  const [value1, setValue1] = useState("BTC");
  const [value2, setValue2] = useState("ETH");
  const changeValue = () => {
    setValue1(value2);
    setValue2(value1);
    setIsActive(!isActive);
  };
  const FindIcon = coins.find((item) => item.text === value1);
  const FindIcon2 = coins.find((item) => item.text === value2);

  const options = coins.map((item) => (
    <Combobox.Option value={item.text} key={item.text}>
      <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
        {item.icon}
        <Text fw={600}>{item.text}</Text>
      </Flex>
    </Combobox.Option>
  ));

  return (
    <Stack gap={rem("32px")} align="center">
      <Flex className={classes.swapBoxWrapper}>
        <Stack className={classes.swapWrapper}>
          <Box>
            <Flex justify={"space-between"}>
              <Text className={classes.swapHave}>From</Text>
              <Text c={"white"} className={classes.value}>
                Balance: 0.12000 BTC
              </Text>
            </Flex>
          </Box>
          <Flex justify={"space-between"}>
            <Combobox
              classNames={{
                option: classes.option,
              }}
              store={combobox1}
              onOptionSubmit={(val) => {
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
                    {FindIcon?.icon}
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
            <Input type={"number"} classNames={{ input: classes.amount }} placeholder={"Enter amount"} />
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
                Balance: 12.000 USDT
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
                    {FindIcon2?.icon}
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
            <Input type={"number"} classNames={{ input: classes.amount }} placeholder={"Enter amount"} />
          </Flex>
        </Stack>
      </Flex>

      <Button size="xxl" variant="radial-gradient" className={classes.btn} rightSection={<SwapIcon />}>
        SWAP
      </Button>
      <Text className={classes.exchange}>Exchange rate: 1 BTC ~ 37403.98</Text>
    </Stack>
  );
};
