import { Box, Button, Center, Combobox, Divider, Flex, Group, Image, List, Stack, Text, rem, useCombobox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { useState } from "react";

import { ArrowIcon } from "@/pages/deposit/ui";

import copyIcon from "../../../../../public/assets/copyIcon.svg";
import classes from "./styles.module.css";

export const DepositsAddress = () => {
  const lg = useMediaQuery("(max-width: 1200px)");
  const [selectedItem, setSelectedItem] = useState<string | null>("BTC");
  const combobox = useCombobox();
  return (
    <Stack gap={rem(32)} className={classes.wrapper} id="depositQR">
      <Flex className={classes.header} justify={"space-between"}>
        <Text className={classes.title}>Deposit Address</Text>
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
      <Center>
        <Text className={classes.title3}>BTC Address</Text>
      </Center>

      <Center className={classes.qrcodeContainer}>
        <Box id={"animation"} className={classes.animate}>
          <Box className={classes.line}></Box>
          <Box className={classes.shadow}></Box>
        </Box>
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/Qrcode.png`} alt="Qrcode" className={classes.qrcode} />
      </Center>
      <Divider opacity={"0.12"} color={"white"} />
      <Box>
        <List className={classes.list}>
          <List.Item className={classes.listItem}>Coins will be deposited after 3 network confirmations</List.Item>
          <List.Item className={classes.listItem}>
            Send only BTC to this deposit address. Sending coin or token other than <br /> BTC to this address may result in the loss of your deposit.
          </List.Item>
          <List.Item className={classes.listItem}>Minimum deposit amount: 0.002665876856216731</List.Item>
        </List>
      </Box>
      <Flex align={"center"} justify={"space-between"} className={classes.copy}>
        <Text className={classes.listItem}>bc1qhq3n0aauaavz555ty080v9frqj2ykv05f37wqn</Text>
        {!lg ? (
          <Button variant="radial-gradient" className={classes.btn}>
            <Text className={classes.btnText}>Copy</Text>
          </Button>
        ) : (
          <button>
            <img src={copyIcon} alt="" />
          </button>
        )}
      </Flex>
    </Stack>
  );
};
