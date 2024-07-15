import { Box, ScrollArea, Stack } from "@mantine/core";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import classes from "./styles.module.css";

interface WrapperProps extends PropsWithChildren {
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return (
    <ScrollArea h={"100vh"} type="auto" scrollbarSize={8} scrollbars="y">
      <Stack gap={0} className={clsx(classes.wrapper, className)}>
        <Box className={classes.box}>{children}</Box>
      </Stack>
    </ScrollArea>
  );
};
