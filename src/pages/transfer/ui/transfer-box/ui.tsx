import { Box, Button, Divider, List, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { DepositCoin, TransferResponse } from "@/shared/api/types";
import { $transferResponse } from "../../model";
import { useUnit } from "effector-react";
import { useState } from "react";
import { requestTransfer } from "@/shared/api/transfer/requests";

export const TransferBox = ({
  currentCoin,
} : {
  currentCoin : DepositCoin | undefined
}) => {
  const transferResponse = useUnit<TransferResponse>($transferResponse);
  const [amount, setAmount] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const submitTransfer = () => {
    requestTransfer({
      amount : amount,
      crypto : currentCoin!.symbol,
      to : to
    })
  }
  return (
    <Stack gap={rem(32)} className={classes.wrapper} id="transferBox">
      <Text className={classes.title}>Transfer funds</Text>

      <Divider opacity={"0.12"} color={"white"} />
      <Stack gap={rem("clamp(12px,2vw, 2rem)")}>
        <TextInput
        value={to}
        onChange={e => setTo(e.target.value)}
          classNames={{
            input: classes.textInput,
            label: clsx(classes.label, classes.labelMargin),
          }}
          label="Account"
          placeholder="Enter ID or Email"
        />
        <TextInput
        value={amount}
        onChange={e => setAmount(e.target.value)}
          classNames={{
            wrapper: classes.inputWrapper,
            input: classes.textInput,
            label: clsx(classes.label, classes.labelMargin),
          }}
          label="Amount"
          type="number"
          placeholder={"Available "+ parseFloat(parseFloat(((transferResponse.coins_balances ? transferResponse.coins_balances![currentCoin ? currentCoin.symbol : "BTC"] : "0") ? (transferResponse.coins_balances ? transferResponse.coins_balances![currentCoin ? currentCoin.symbol : "BTC"] : "0") : "0.00").toString()).toFixed(4)) + " " + currentCoin?.name}
          />
      </Stack>
      <Button onClick={submitTransfer} variant="radial-gradient" className={classes.btn}>
        <Text className={classes.inputValue}>Transfer funds</Text>
      </Button>

      <Divider opacity={"0.12"} color={"white"} />
      <Box>
        <Text className={classes.info} mb={rem(16)}>
          Important Information
        </Text>
        <List ml={rem(6)} className={classes.list}>
          <List.Item className={classes.listItem}>The Transfer funds function works exclusively between exchange accounts.</List.Item>
          <List.Item className={classes.listItem}>
            The user can find the user ID in the left panel when going to the profile, near the avatar.
          </List.Item>
        </List>
      </Box>
    </Stack>
  );
};
