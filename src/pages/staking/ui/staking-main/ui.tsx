import {
  Box,
  Button,
  Combobox,
  Container,
  Divider,
  Flex,
  InputBase,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  rem,
  useCombobox,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { useState } from "react";

import { BitcoinIcon, EthereumIcon, USDCoinIcon } from "@/shared/ui";

import { LightningIcon, SelectArrowIcon } from "../icons/index";
import classes from "./styles.module.css";

const data = [
  {
    days: 10,
    perDay: 1.16,
  },
  {
    days: 30,
    perDay: 3.49,
  },
  {
    days: 10,
    perDay: 1.16,
  },
  {
    days: 30,
    perDay: 3.49,
  },
  {
    days: 10,
    perDay: 1.16,
  },
  {
    days: 30,
    perDay: 3.49,
  },
];
const coins = [
  { text: "BTC", icon: <BitcoinIcon width={"21px"} height={"21px"} /> },

  { text: "USTD", icon: <USDCoinIcon width={"21px"} height={"21px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "USTD", icon: <USDCoinIcon width={"21px"} height={"21px"} /> },
  { text: "ETH", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
  { text: "Nano", icon: <EthereumIcon width={"21px"} height={"21px"} /> },
];
export const StakingMain = () => {
  const matches = useMediaQuery("(min-width: 1366px)");
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
  const [plan, setPlan] = useState(2);
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
                onClick={() => setPlan(index)}
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
          <Button size="xxl" variant="radial-gradient" className={classes.btn} rightSection={<LightningIcon />}>
            STAKE
          </Button>
        </Container>
      </Flex>
    </Stack>
  );
};
