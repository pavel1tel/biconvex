import { Box, Button, Center, Combobox, Divider, Flex, Group, Image, List, Stack, Text, rem, useCombobox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { ArrowIcon } from "@/pages/deposit/ui";

import copyIcon from "../../../../../public/assets/copyIcon.svg";
import classes from "./styles.module.css";
import { DepositCoin } from "@/shared/api/types";
import { QRCode } from 'react-qrcode-logo';
import { showSuccessNotification } from "@/shared/lib/notification";

export const DepositsAddress = ({
  currentCoin,
}: {
  currentCoin: DepositCoin | undefined;
}) => {
  const lg = useMediaQuery("(max-width: 1200px)");
  const [selectedItem, setSelectedItem] = useState<string>(Object.keys(currentCoin?.address ? currentCoin?.address : [])[0]);
  const combobox = useCombobox();

  useEffect(() => {
    currentCoin?.address ? setSelectedItem(Object.keys(currentCoin?.address)[0]) : "";
  }, [currentCoin])

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
            {Object.keys(currentCoin?.address ? currentCoin?.address : []).map((item) => (
              <Combobox.Option className={clsx(classes.option, { [classes.active]: item === selectedItem })} value={item} key={item}>
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Dropdown>
        </Combobox>
      </Flex>
      <Divider opacity={"0.12"} color={"white"} />
      <Center>
        <Text className={classes.title3}>{currentCoin?.symbol} Address</Text>
      </Center>

      <Center className={classes.qrcodeContainer}>
        <Box id={"animation"} className={classes.animate}>
          <Box className={classes.line}></Box>
          <Box className={classes.shadow}></Box>
        </Box>
        <QRCode
          value={(currentCoin?.address ? currentCoin?.address : {})[selectedItem]}
          logoImage={currentCoin?.image}
          logoPaddingStyle="circle"
          eyeRadius={10}
          size={300}
          bgColor="#0C0D10"
          fgColor="#FFF"
          removeQrCodeBehindLogo={true}
          logoPadding={3}
        />
        {/* <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/Qrcode.png`} alt="Qrcode" className={classes.qrcode} /> */}

      </Center>
      <Divider opacity={"0.12"} color={"white"} />
      <Box>
        <List className={classes.list}>
          <List.Item className={classes.listItem}>Coins will be deposited after 3 network confirmations</List.Item>
          <List.Item className={classes.listItem}>
            Send only {currentCoin?.symbol} to this deposit address. Sending coin or token other than <br /> {currentCoin?.symbol} to this address may result in the loss of your deposit.
          </List.Item>
          <List.Item className={classes.listItem}>Minimum deposit amount: {currentCoin?.min_deposit_amount}</List.Item>
        </List>
      </Box>
      <Flex align={"center"} justify={"space-between"} className={classes.copy}>
        <Text className={classes.listItem}>{(currentCoin?.address ? currentCoin?.address : {})[selectedItem]}</Text>
        {!lg ? (
          <Button onClick={() => {
            navigator.clipboard.writeText((currentCoin?.address ? currentCoin?.address : {})[selectedItem]);
            showSuccessNotification("Copied!")
          }} variant="radial-gradient" className={classes.btn}>
            <Text className={classes.btnText}>Copy</Text>
          </Button>
        ) : (
          <button onClick={() => {
            navigator.clipboard.writeText((currentCoin?.address ? currentCoin?.address : {})[selectedItem]);
            showSuccessNotification("Copied!")
          }}>
            <img src={copyIcon} alt="" />
          </button>
        )}
      </Flex>
    </Stack>
  );
};
