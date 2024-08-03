import { Stack, Text, Title, rem } from "@mantine/core";

import { Carousel } from "../carousel";
import classes from "./styles.module.css";

export const SwiperPayments = () => {
  return (
    <Stack className={classes.collaboratorsWrapper}>
      <Stack gap={"clamp(1rem, 2vw, 2rem)"} className={classes.bannerWrapper} align="center">
        <Title order={2} className={classes.metricsTitle}>
          <Title ta={"center"} order={2} className={classes.metricsTitle}>
            <Text span className={classes.metricsTitleHighlighted} mr={rem(15)}>
              Buy crypto
            </Text>
            in one click
          </Title>
        </Title>
        <Text ta="center" variant="text-2" classNames={{ root: classes.metricsSubTitle }}>
          Pay with currency and payment method of your choice
        </Text>
      </Stack>
      <Carousel />
    </Stack>
  );
};
