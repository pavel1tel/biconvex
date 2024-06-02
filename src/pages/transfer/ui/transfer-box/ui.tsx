import { Box, Button, Divider, List, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";

export const TransferBox = () => {
  return (
    <Stack gap={rem(32)} className={classes.wrapper} id="transferBox">
      <Text className={classes.title}>Transfer funds</Text>

      <Divider opacity={"0.12"} color={"white"} />
      <Stack gap={rem("clamp(12px,2vw, 2rem)")}>
        <TextInput
          classNames={{
            input: classes.textInput,
            label: clsx(classes.label, classes.labelMargin),
          }}
          label="Account"
          placeholder="Enter ID or Email"
        />
        <TextInput
          classNames={{
            wrapper: classes.inputWrapper,
            input: classes.textInput,
            label: clsx(classes.label, classes.labelMargin),
          }}
          label="Amount"
          type="number"
          placeholder="Available: 0 BTC"
        />
      </Stack>
      <Button variant="radial-gradient" className={classes.btn}>
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
