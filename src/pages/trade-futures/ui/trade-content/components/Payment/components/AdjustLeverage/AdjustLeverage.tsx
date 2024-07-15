/* eslint-disable jsx-a11y/no-autofocus */
import { Group, Input, Stack, Text } from "@mantine/core";
import { ChangeEvent, useCallback, useState } from "react";

import classes from "./AdjustLeverage.module.css";

const minValue = 1;
const maxValue = 125;
const step = 1;
export const AdjustLeverage = () => {
  const [count, setCount] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeCount = useCallback(
    (num: number) => {
      const newCount = (+count || 1) + num;
      if (newCount >= minValue && newCount <= maxValue) {
        setCount(newCount.toString());
      }
    },
    [count],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if ((+value >= minValue && +value <= maxValue) || value === "") {
      setCount(value);
    }
  };

  return (
    <Stack gap={12}>
      <Text ta={"center"} className={classes.title}>
        Adjust Leverage
      </Text>
      <Group justify={"space-between"} className={classes.counterWrap}>
        <button className={classes.counterButton} onClick={() => handleChangeCount(-step)}>
          <svg width="7.667969" height="1.547852" viewBox="0 0 7.66797 1.54785" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="-" d="M7.66797 1.54785L0 1.54785L0 0L7.66797 0L7.66797 1.54785Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd" />
          </svg>
        </button>
        {isEdit ? (
          <Input
            type="number"
            className={classes.input}
            autoFocus
            value={count}
            min={minValue}
            max={maxValue}
            step={step}
            onChange={onChange}
            onBlur={() => setIsEdit(false)}
            variant="unstyled"
          />
        ) : (
          <Text className={classes.count} onClick={() => setIsEdit(true)}>
            {count || 1}x
          </Text>
        )}
        <button className={classes.counterButton} onClick={() => handleChangeCount(step)}>
          <svg width="10.187500" height="10.187988" viewBox="0 0 10.1875 10.188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="+"
              d="M10.1875 4.35596L10.1875 5.83203L5.83203 5.83203L5.83203 10.188L4.35547 10.188L4.35547 5.83203L0 5.83203L0 4.35596L4.35547 4.35596L4.35547 0L5.83203 0L5.83203 4.35596L10.1875 4.35596Z"
              fill="#FFFFFF"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </Group>
    </Stack>
  );
};
