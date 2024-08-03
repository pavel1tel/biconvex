import { Box, Flex, Stack, rem } from "@mantine/core";
import clsx from "clsx";

import { payments } from "../icons";
import classes from "./styles.module.css";

export const Carousel = () => {
  const collaboratorsSlides = payments.map((item, index) => <li key={index}>{item.icon}</li>);
  return (
    <Stack gap={rem("64px")} className={classes.collaboratorsWrapper}>
      <Box className={classes.collaboratorsCarouselWrapper}>
        <div className={classes.scroller} data-animated="true">
          <Flex gap={"clamp(2rem, 3.75vw, 3.75rem)"} className={clsx(classes.imagesList, classes.scrollerInner)}>
            {collaboratorsSlides}
          </Flex>
        </div>
      </Box>
    </Stack>
  );
};
