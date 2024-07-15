import { Combobox, Stack, Text, TextInput, useCombobox } from "@mantine/core";
import { ReactNode, useState } from "react";

import { WhiteTriangle } from "@/shared/ui/icon/WhiteTriangle";

import classes from "./InputWithDropdown.module.css";

type InputWithDropdownProps = {
  options: Array<{
    label: string;
    value: string;
    icon?: ReactNode;
  }>;
};

export const InputWithDropdown = ({ options }: InputWithDropdownProps) => {
  const [selectedValue, setElectedValue] = useState(options[0].value);
  const combobox = useCombobox();

  return (
    <Stack gap={8}>
      <Text className={classes.label}>{`Amount (${selectedValue})`}</Text>
      <div className={classes.inputWrapper}>
        <TextInput className={`${classes.input}`} placeholder={`0 ${selectedValue}`} />
        <Combobox
          store={combobox}
          onOptionSubmit={(val) => {
            setElectedValue(val);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <button className={classes.selectTarget} onClick={() => combobox.toggleDropdown()}>
              <div>{options.find((coin) => coin.value === selectedValue)?.icon}</div>
              <p>{selectedValue}</p>
              <div>
                <WhiteTriangle className={classes.selectIcon} />
              </div>
            </button>
          </Combobox.Target>
          <Combobox.Dropdown className={classes.selectDropdown}>
            <Combobox.Options className={classes.selectOptions}>
              {options.map(({ label, value, icon }) => (
                <Combobox.Option className={classes.selectOption} value={value} active={value === selectedValue} key={value}>
                  {icon}
                  {label}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </div>
    </Stack>
  );
};
