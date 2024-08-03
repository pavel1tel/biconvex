import { Flex, Group, Title } from "@mantine/core";

import classes from "./styles.module.css";

export interface TitleProps {
  title: string;
  iconSrc: string;
  alt: string;
}
export const TitleWithIcon = ({ title, iconSrc, alt }: TitleProps) => {
  return (
    <Group className={classes.headerRow}>
      <Flex justify="center" align="center" className={classes.iconWrapper}>
        <img draggable="false" src={iconSrc} {...{ alt }} />
      </Flex>
      <Title c="white" order={2} className={classes.title}>
        {title}
      </Title>
    </Group>
  );
};
