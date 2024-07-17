import { useResize } from "@/hooks/useResize";
import { Group, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { motion } from "framer-motion";

import { routes } from "@/shared/routing";
import { Container } from "@/shared/ui";
import { BannerButton } from "@/shared/ui/bannerButton";

import { BannerImage } from "./bannerImage/ui";
import classes from "./styles.module.css";

export const Banner = () => {
  const { isAdaptive: md } = useResize(1200);

  const handleRedirection = () => {
    const chooseBotSection = document.getElementById("choose-bot");
    if (chooseBotSection) {
      chooseBotSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <Container>
      <Group gap={rem(32)} className={classes.bannerWrapper}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: "-100%",
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Stack gap={"clamp(2rem, 3vw, 3rem)"} className={classes.bannerLeftSide}>
            <Title c="white" order={1} fz={70} className={classes.bannerTitle}>
              Trade cryptocurrencies <br />
              like a pro with <br />
              <Text span className={classes.bannerTitleColoredPart}>
                automation tools
              </Text>
            </Title>

            {md && <BannerImage />}

            <Stack gap={"clamp(2rem, 4vw, 4rem)"}>
              <Text size={md ? "18px" : "24px"} c="white" className={classes.bannerSubTitle}>
                Discover and replicate popular trading strategies on the largest exchange with unrivaled liquidity. Choose your tariff and start
                earning money, but don’t forget about risk management.
              </Text>
              <Group align={"center"} justify={"flex-start"} className={classes.tradeActions}>
                <BannerButton size="extra-large" text="START TRADING" route={routes.tradingBots} {...{ handleRedirection }} />
                <div className={classes.activeStatistics}>
                  <Text variant={md ? "text-2" : "text-1"}>
                    <b>Active Strategies:</b> 56.150
                  </Text>
                  <Text variant={md ? "text-2" : "text-1"}>
                    <b>Total cost:</b> $48.692.023
                  </Text>
                </div>
              </Group>
            </Stack>
          </Stack>
        </motion.div>
        {!md && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "100%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className={clsx(classes.motionContainer, classes.right)}
          >
            <BannerImage />
          </motion.div>
        )}
      </Group>
    </Container>
  );
};
