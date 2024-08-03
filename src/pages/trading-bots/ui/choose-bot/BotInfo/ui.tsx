import { Box, Group, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import commonClasses from "../../../styles.module.css";
import { BotProps } from "../ui";
import classes from "./styles.module.css";

export const BotInfo = ({ title, description, benefit, selected }: BotProps) => {
  const [isActive, setIsActive] = useState<boolean>(selected);

  const selectBot = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack
      gap={rem("16px")}
      className={clsx(classes.botWrapper, selected ? classes.active : classes.inactive)}
      justify={"space-between"}
      onClick={selectBot}
      h={"100%"}
    >
      <Group gap={rem("12px")}>
        <Title
          fz={{ 0: 22, md: 24 }}
          order={4}
          className={clsx(classes.botTitle, commonClasses.userSelectForbidden, { [classes.long]: title === "Technical Analysis Trading Bot" })}
        >
          {title}
        </Title>
        <Text
          className={clsx(classes.botInfoText, commonClasses.userSelectForbidden, { [classes.scalpingBotInfo]: title === "Scalping Trading Bot" })}
        >
          {description}
        </Text>
        <Box className={classes.botBenefitContainer}>
          <Text className={clsx(commonClasses.userSelectForbidden, classes.botInfoText)}>Profit for last month amounted to {benefit}</Text>
        </Box>
      </Group>
    </Stack>
  );
};
