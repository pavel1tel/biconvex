import { Group, Image, Text } from "@mantine/core";
import clsx from "clsx";

import classes from "./PageHeader.module.css";

export const PageHeader = () => {
  return (
    <Group className={classes.headerFlex} gap={"clamp(28px, 2vw, 2rem)"}>
      <Text className={classes.headerTitle}>P2P</Text>
      <div className={classes.headerBannerWrapper}>
        <div className={classes.headerBannerRadius}>
          <div className={classes.headerBanner}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/bitcoin.png`}
              className={clsx(classes.headerBannerBitcoin, classes.headerBannerCoin)}
            />
            <Text className={classes.headerBannerText}>Buy and Sell cryptocurrencies with preferred payment methods</Text>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/tether.png`}
              className={clsx(classes.headerBannerTether, classes.headerBannerCoin)}
            />
          </div>
        </div>
      </div>
    </Group>
  );
};
