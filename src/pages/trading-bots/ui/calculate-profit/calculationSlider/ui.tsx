import { Slider, Text } from "@mantine/core";

import classes from "./styles.module.css";

interface SliderProps {
  name: string;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
}
export const CalculationSlider = ({ name, min, max, minLabel, maxLabel }: SliderProps) => {
  return (
    <div className={classes.sliderWrap}>
      <Slider
        classNames={{
          trackContainer: classes.sliderTrack,
          label: classes.sliderThumbLabel,
          mark: classes.sliderMark,
          markWrapper: classes.sliderMarkWrapper,
          markLabel: classes.sliderMarkLabel,
          root: classes.slider,
        }}
        size="xl"
        marks={[
          { value: min, label: minLabel },
          { value: max, label: maxLabel },
        ]}
        {...{ min, max }}
        labelAlwaysOn
      />
      <Text variant="text-2" className={classes.sliderName}>
        {name}
      </Text>
    </div>
  );
};
