import { Combobox, Group, Text, useCombobox } from "@mantine/core";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect } from "react";

import { ArrowDown } from "@/shared/ui";

import classes from "./Select.module.css";

type SelectProps = {
  activeValue: string;
  setActiveValue: Dispatch<SetStateAction<string>>;
  backgroundTransparent?: boolean;
  bordered?: boolean;
  defaultFirst?: boolean;
  customOptions?: any;
  defaultIndex?: number;
};
let options = [
  { title: "1d", value: 1440 },
  { title: "3d", value: 4320 },
  { title: "1w", value: 10080 },
  { title: "1M", value: 43829 },
];
export const Select = ({ activeValue, setActiveValue, backgroundTransparent, bordered, defaultFirst, customOptions, defaultIndex }: SelectProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  options = customOptions ? customOptions : options;
  const label = (() => options.find((opt) => opt.title === activeValue)?.title)();
  useEffect(() => {
    if (defaultFirst) {
      setActiveValue(options[0].title)
    } else if (defaultIndex) {
      setActiveValue(options[defaultIndex].title)
    }
  }, [defaultFirst, defaultIndex]);
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
            options.find((opt) => opt.title === activeValue) && classes.active,
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
              className={clsx({ [classes.dropdownOptionSelected]: activeValue === item.title })}
              classNames={{ option: classes.dropdownOption }}
              onClick={() => setActiveValue(item.title)}
            >
              {item.title}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
