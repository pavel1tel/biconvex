import { Combobox, Group, Text, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

import { ArrowDown } from "@/shared/ui";

import classes from "./Select.module.css";

type SelectProps = {
  activeValue: number | string;
  setActiveValue: Dispatch<SetStateAction<number | string>>;
};
const options = [
  // { title: "2h", value: 120 },
  { title: "4h", value: 240 },
  { title: "1 week", value: "1W" },
  { title: "1 month", value: "1M" },
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
<<<<<<< HEAD
          gap={2}
          display="flex"
          justify="center"
=======
          gap={0}
          justify="space-around"
>>>>>>> 9e4698fe887e8d6e3b273130c6e3dc20a4fe6a44
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
