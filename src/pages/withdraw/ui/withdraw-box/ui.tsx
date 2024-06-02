import { Box, Button, Combobox, Divider, Flex, Group, List, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import clsx from "clsx";
import { useState } from "react";

import { ArrowIcon } from "@/pages/deposit/ui";

import classes from "./styles.module.css";

type FormProperties = {
  bitcoinAddress: string;
  amount: string;
};

export const WithdrawBox = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("BTC");
  const combobox = useCombobox();
  const { onSubmit, getInputProps } = useForm<FormProperties>({
    initialValues: {
      bitcoinAddress: "",
      amount: "",
    },
  });
  return (
    <Stack gap={rem(32)} className={classes.wrapper} id="withdrawBitcoin">
      <Flex justify={"space-between"}>
        <Text className={classes.title}>
          Withdraw
          <Text component={"span"} className={classes.span}>
            Bitcoin
          </Text>
        </Text>
        <Combobox
          width={140}
          store={combobox}
          onOptionSubmit={(val) => {
            setSelectedItem(val);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <Group className={classes.selectWrap} w={140} justify="center" gap={0} onClick={() => combobox.toggleDropdown()}>
              <span>{selectedItem}</span>
              <ArrowIcon />
            </Group>
          </Combobox.Target>
          <Combobox.Dropdown className={classes.dropdown}>
            {["BTC", "ETH", "SOL"].map((item) => (
              <Combobox.Option className={clsx(classes.option, { [classes.active]: item === selectedItem })} value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Dropdown>
        </Combobox>
      </Flex>
      <Divider opacity={"0.12"} color={"white"} />
      <form onSubmit={onSubmit((values) => console.log("values", values))}>
        <Stack gap={rem(32)}>
          <TextInput
            classNames={{
              input: classes.textInput,
              label: clsx(classes.label, classes.labelMargin),
            }}
            label="Destination Bitcoin address"
            placeholder="Please double check this address"
            {...getInputProps("bitcoinAddress")}
          />
          <TextInput
            classNames={{
              input: classes.textInput,
              label: clsx(classes.label, classes.labelMargin),
            }}
            label="Amount Bitcoin"
            type="number"
            min={0}
            placeholder="Maximum amount withdrawable: 0 Bitcoin"
            {...getInputProps("amount")}
          />
          <Flex className={classes.bottomFlex} align={"center"} justify={"space-between"}>
            <Stack gap={rem(4)}>
              <Text className={classes.label}>Bitcoin Network Fee</Text>
              <Text className={classes.text}>Transactions on the Bitcoin network are priorirized by fees</Text>
            </Stack>
            <Stack>
              <Text className={classes.title2}>0.000045 BTC</Text>
            </Stack>
          </Flex>
          <Button type="submit" variant="radial-gradient" className={classes.btn}>
            <Text className={classes.inputValue}>Withdraw now</Text>
          </Button>
        </Stack>
      </form>

      <Divider opacity={"0.12"} color={"white"} />
      <Box>
        <Text className={classes.info} mb={rem(16)}>
          Important Information
        </Text>
        <List ml={rem(6)} className={classes.list}>
          <List.Item className={classes.listItem}>
            We strongly recommend that you copy & paste the address to help avoid errors. Please note that we are not responsible for coins mistakenly
            sent to the wrong address.
          </List.Item>
          <List.Item className={classes.listItem}>
            Transactions normally take about 30 to 60 minutes to send, on occasion it can take a few hours if the crypto network is slow.
          </List.Item>
        </List>
      </Box>
    </Stack>
  );
};
