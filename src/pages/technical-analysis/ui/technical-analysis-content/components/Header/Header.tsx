import { Group, Stack, Text } from "@mantine/core";

import { TechAnalysisIcon } from "@/shared/ui/icon/TechAnalysisIcon";

import classes from "./Header.module.css";

export const Header = () => {
  return (
    <Stack className={classes.headerFlex} gap={32} w="80%">
      <Group gap={"clamp(8px, 1vw, 1rem)"}>
        <div className={classes.iconWrapper}>
          <TechAnalysisIcon />
        </div>
        <Text className={classes.headerTitle}>Technical Analysis</Text>
      </Group>
      <Text className={classes.headerDescription}>
        Technical Analysis Screener is a tool that enables users to filter and identify specific cryptocurrencies or trading pairs based on various
        technical indicators and chart patterns, aiding traders in their technical analysis and decision-making.
      </Text>
    </Stack>
  );
};
