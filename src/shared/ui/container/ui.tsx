import { Box } from "@mantine/core";
import clsx from "clsx";
import { ReactNode } from "react";

import classes from "./styles.module.css";

type TProps = {
  children: ReactNode;
  width?: number;
  position?: "static" | "relative" | "absolute" | "sticky";
  className?: string;
};

export const Container = ({ children, position = "static", className = "" }: TProps) => {
  return (
    <Box style={{ position }} className={clsx(classes.container, classes[className])}>
      {children}
    </Box>
  );
};
