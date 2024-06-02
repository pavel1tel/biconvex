import { Combobox, Group, Text, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect } from "react";

import { ArrowDown } from "@/shared/ui";

import classes from "./Select.module.css";

type SelectProps = {
  activeValue: number;
  setActiveValue: Dispatch<SetStateAction<number>>;
  backgroundTransparent?: boolean;
  bordered?: boolean;
  defaultFirst?: boolean;
};
const options = [
  { title: "24h", value: 1440 },
  { title: "48h", value: 2880 },
  { title: "72h", value: 4320 },
  { title: "96h", value: 5760 },
];
export const Select = ({ activeValue, setActiveValue, backgroundTransparent, bordered, defaultFirst }: SelectProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const label = (() => options.find((opt) => opt.value === activeValue)?.title)();
  useEffect(() => {
    if (defaultFirst) setActiveValue(options[0].value);
  }, [defaultFirst]);
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
          gap={4}
          style={{ background: backgroundTransparent ? "transparent" : undefined }}
          className={clsx(
            classes.showFilterWrapper,
            bordered && classes.bordered,
            options.find((opt) => opt.value === activeValue) && classes.active,
          )}
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
