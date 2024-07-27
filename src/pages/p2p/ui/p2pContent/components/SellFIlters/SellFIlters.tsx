import { Select, Stack, Text } from "@mantine/core";

import { BitcoinIcon } from "@/shared/ui";
import { USDIcon } from "@/shared/ui/icon/USDIcon";
import { WhiteTriangle } from "@/shared/ui/icon/WhiteTriangle";

import { $p2pResponse } from "@/pages/p2p/model";
import { P2pResponse } from "@/shared/api/types";
import { useUnit } from "effector-react";
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
  const p2pResponse = useUnit<P2pResponse | null>($p2pResponse);

  function getUniquePaymentMethods(response: P2pResponse) {
    const paymentMethods = response.sellers.map(seller => seller.payment_method);
    const uniquePaymentMethods = [...new Set(paymentMethods)];
    return ["All payment methods", ...uniquePaymentMethods];
  }
  return (
    <Stack gap={16}>
      <InputWithDropdown options={coins} />
      <InputWithDropdown options={coins} />
      <Stack gap={8}>
        <Text className={classes.label}>Payment</Text>
        <Select
          data={p2pResponse ? getUniquePaymentMethods(p2pResponse) : []}
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
