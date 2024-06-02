import { Combobox, Group, Text, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

import { ArrowDown } from "@/shared/ui";

import classes from "./Select.module.css";

type SelectProps = {
  activeValue: number;
  setActiveValue: Dispatch<SetStateAction<number>>;
};
const options = [
  { title: "1.5h", value: 90 },
  { title: "2h", value: 120 },
];
export const Select = ({ activeValue, setActiveValue }: SelectProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const label = (() => options.find((opt) => opt.value === activeValue)?.title)();
  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      transitionProps={{ duration: 200, transition: "pop" }}
      onOptionSubmit={() => {
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Group
          gap={0}
          justify="space-around"
          className={clsx(classes.showFilterWrapper, { [classes.active]: !!label })}
          onClick={() => combobox.toggleDropdown()}
        >
          <Text variant="text-5" className={classes.greyText}>
            {label || "Other"}
          </Text>
          <ArrowDown />
        </Group>
      </Combobox.Target>
      <Combobox.Dropdown className={classes.dropdown}>
        <Combobox.Options classNames={{ options: classes.dropdownOptions }}>
          {options.map((item) => (
            <Combobox.Option
              value={item.toString()}
              key={item.value}
              className={clsx({ [classes.dropdownOptionSelected]: activeValue === item.value })}
              classNames={{ option: classes.dropdownOption }}
              onClick={() => setActiveValue(item.value)}
            >
              {item.title}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
