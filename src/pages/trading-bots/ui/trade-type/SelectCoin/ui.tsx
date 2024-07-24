import { Combobox, Flex, InputBase, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { SelectArrowIcon } from "@/pages/finance/ui";

import { BitcoinIcon, EthereumIcon, USDCoinIcon } from "@/shared/ui";

import classes from "./styles.module.css";

const coins = [
  { text: "BTC", icon: <BitcoinIcon width={"21px"} height={"21px"} /> },
  { text: "USTD", icon: <USDCoinIcon width={"21px"} height={"21px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "USTD", icon: <USDCoinIcon width={"21px"} height={"21px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
];

export const SelectCoin = ({ className }: { className: string }) => {
  const combobox1 = useCombobox({
    onDropdownClose: () => combobox1.resetSelectedOption(),
  });

  const [value1, setValue1] = useState("BTC");

  const FindIcon = coins.find((item) => item.text === value1);

  const options = coins.map((item) => (
    <Combobox.Option classNames={{ option: classes.option }} value={item.text} key={item.text}>
      <Flex align={"center"} miw={"100px"} h={29} gap={rem("8px")}>
        {item.icon}
        <Text fw={500}>{item.text}</Text>
      </Flex>
    </Combobox.Option>
  ));

  return (
    <Stack className={classes[className]}>
      <Stack mb={rem("20px")}>
        <Text className={classes.label}>Select coin</Text>
        <Combobox
          withinPortal={false}
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
          classNames={{
            input: classes.input,
            label: clsx(classes.label, classes.labelMargin),
          }}
          type={"number"}
          label="Enter amount"
          placeholder="Available: 0 BTC"
        />
      </Stack>
      <div id="choose-bot"></div>
    </Stack>
  );
};
