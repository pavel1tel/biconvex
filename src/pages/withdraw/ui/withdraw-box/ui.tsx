import { Box, Button, Combobox, Divider, Flex, Group, List, Stack, Text, TextInput, rem, useCombobox } from "@mantine/core";
import { useForm } from "@mantine/form";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { ArrowIcon } from "@/pages/deposit/ui";

import classes from "./styles.module.css";
import { useUnit } from "effector-react";
import { DepositCoin, FeesRequest } from "@/shared/api/types";
import { getFees, requestWithdraw } from "@/shared/api/withdraw/requests";
import { $feesResponse } from "../../model";


export const WithdrawBox = ({
  currentCoin,
} : {
  currentCoin : DepositCoin | undefined;
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(Object.keys(currentCoin?.address ? currentCoin?.address : [])[0]);
  const combobox = useCombobox();
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const feesReponse = useUnit<FeesRequest>($feesResponse);
  const feesReponsePending = useUnit(getFees.pending);

  const submitHandler = () => {
    requestWithdraw({
     amount : amount,
     crypto : currentCoin!.symbol,
     address : address
    })
  }

  useEffect(() => {
    if(!feesReponsePending) {
    console.log(feesReponse.coins_balances!["BTC"])
    }
  }, [feesReponse])

  useEffect(() => {
    currentCoin?.address ? setSelectedItem(Object.keys(currentCoin?.address)[0]) : "";
  }, [currentCoin])
  
  return (
    <Stack gap={rem(32)} className={classes.wrapper} id="withdrawBitcoin">
      <Flex justify={"space-between"}>
        <Text className={classes.title}>
          Withdraw
          <Text component={"span"} className={classes.span}>
            {currentCoin?.name}
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
            {Object.keys(currentCoin?.address ? currentCoin?.address : []).map((item) => (
              <Combobox.Option className={clsx(classes.option, { [classes.active]: item === selectedItem })} value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Dropdown>
        </Combobox>
      </Flex>
      <Divider opacity={"0.12"} color={"white"} />
        <Stack gap={rem(32)}>
          <TextInput
             value={address}
             onChange={e => setAddress(e.target.value)}
            classNames={{
              input: classes.textInput,
              label: clsx(classes.label, classes.labelMargin),
            }}
            label={"Destination " + currentCoin?.name + " address"}
            placeholder="Please double check this address"
          />
          <TextInput
          value={amount}
          onChange={e => setAmount(e.target.value)}
            classNames={{
              input: classes.textInput,
              label: clsx(classes.label, classes.labelMargin),
            }}
            label={"Amount " + currentCoin?.name}
            type="number"
            min={0}
            placeholder={"Maximum amount "+((feesReponse.coins_balances ? feesReponse.coins_balances![currentCoin ? currentCoin.symbol : "BTC"] : "0") ? (feesReponse.coins_balances ? feesReponse.coins_balances![currentCoin ? currentCoin.symbol : "BTC"] : "0") : "0.00") + " " + currentCoin?.name}
          />
          <Flex className={classes.bottomFlex} align={"center"} justify={"space-between"}>
            <Stack gap={rem(4)}>
              <Text className={classes.label}>{currentCoin?.name} Network Fee</Text>
              <Text className={classes.text}>Transactions on the Bitcoin network are priorirized by fees</Text>
            </Stack>
            <Stack>
              <Text className={classes.title2}>{feesReponse.withdraw_coins ? feesReponse.withdraw_coins![currentCoin ? currentCoin.symbol : "BTC"].gas_fee : ""}</Text>
            </Stack>
          </Flex>
          <Button onClick={submitHandler} type="submit" variant="radial-gradient" className={classes.btn}>  
            <Text className={classes.inputValue}>Withdraw now</Text>
          </Button>
        </Stack>  

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
