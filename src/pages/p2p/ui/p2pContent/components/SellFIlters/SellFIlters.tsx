import { Select, Stack, Text } from "@mantine/core";

import { BitcoinIcon } from "@/shared/ui";
import { USDIcon } from "@/shared/ui/icon/USDIcon";
import { WhiteTriangle } from "@/shared/ui/icon/WhiteTriangle";

import { InputWithDropdown } from "../InputWithDropdown/InputWithDropdown";
import classes from "./SellFIlters.module.css";

const coins = [
  {
    label: "BTC",
    value: "BTC",
    icon: <BitcoinIcon width={21} height={21} />,
  },
  {
    label: "USD",
    value: "USD",
    icon: <USDIcon />,
  },
];

export const SellFIlters = () => {
  return (
    <Stack gap={16}>
      <InputWithDropdown options={coins} />
      <InputWithDropdown options={coins} />
      <Stack gap={8}>
        <Text className={classes.label}>Payment</Text>
        <Select
          data={["All payment methods", "Card to card", "PayPal", "Mastercard", "Visa", "Google Pay", "Apple Pay"]}
          rightSection={<WhiteTriangle />}
          allowDeselect={false}
          withCheckIcon={false}
          defaultValue={"All payment methods"}
          defaultChecked
          classNames={{ root: classes.rootSelect, dropdown: classes.selectDropdown, options: classes.selectOptions, option: classes.selectOption }}
        />
      </Stack>
    </Stack>
  );
};
