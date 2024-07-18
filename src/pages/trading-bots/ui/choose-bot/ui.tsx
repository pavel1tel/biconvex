import { useResize } from "@/hooks/useResize";
import { Carousel, Embla } from "@mantine/carousel";
import { Box, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/shared/ui";

import commonClasses from "../../styles.module.css";
import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle/ui";
import { BotInfo } from "./BotInfo/ui";
import classes from "./styles.module.css";

export interface BotProps {
  title: string;
  description: string;
  benefit: string;
  selected: boolean;
}

const BOTS = [
  {
    title: "AI Trading \nBot",
    description:
      "Operating on the principle of continuous data collection and experience from major players, our bot automatically adapts to market dynamics, ensuring optimal trading strategies. Trust your investments to a professional approach and enjoy the growth of your portfolio hassle-free. ",
    benefit: "185%",
    selected: false,
  },
  {
    title: "Smart Money Trading Bot",
    description:
      "Utilizing the Smart Money concept and possessing extensive market cycle statistics, it trades taking into account indicators such as OB, BOS, FVG, SSL/BSL, and other entry factors. Rely on our bot to achieve consistent profits and confidently manage your cryptocurrency portfolio. ",
    benefit: "60%",
    selected: false,
  },
  {
    title: "Technical Analysis Trading Bot",
    description:
      "It operates based on finding valid entry zones, including structure breakout, analysis of key levels, classical chart patterns, and formations. Trust our bot to identify optimal entry points in the market and manage your cryptocurrency portfolio with confidence. ",
    benefit: "48%",
    selected: false,
  },
  {
    title: "Scalping Trading Bot",
    description:
      "It operates on the principle of scalping, where each trade takes only a few minutes. Utilizing Smart Money methods and technical analysis, the script seeks the optimal entry point, which will be open for up to 30 minutes. Trust our bot to achieve consistent profits and confidently manage your cryptocurrency portfolio. ",
    benefit: "83%",
    selected: false,
  },
] as BotProps[];

export const ChooseBot = () => {
  return (
    <Stack className={classes.wrapper} id="choose-bot">
      <Container>
        <Stack gap={rem(64)} className={commonClasses.section}>
          <HighlightedBlueTitle title="Choose" subTitle="Your Bot" />

          <DesktopViewCarousel />
          <MobileViewCarousel />
        </Stack>
      </Container>
    </Stack>
  );
};

const DesktopViewCarousel = () => {
  const viewport = useResize(720);

  if (viewport.isAdaptive) return null;
  return (
    <Box className={classes.botsWrapper}>
      {BOTS.map((bot, index) => (
        <motion.div
          key={index}
          className={`${classes.bot} ${index ? classes.activeBot : ""}`}
          variants={{
            hidden: {
              opacity: 0,
              y: "-70%",
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + (index + 1) * 0.2 }}
        >
          <BotInfo {...bot} />
        </motion.div>
      ))}
    </Box>
  );
};
const MobileViewCarousel = () => {
  const viewport = useResize(720);

  const [_, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
    const index = embla.selectedScrollSnap();
    setSelectedIndex(index);
  }, [embla, setScrollProgress, setSelectedIndex]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      embla.on("select", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);
  if (!viewport.isAdaptive) return null;

  return (
    <div>
      <Carousel className={classes.botsWrapper} withControls={false} getEmblaApi={setEmbla}>
        {BOTS.map((bot, index) => (
          <Carousel.Slide className={`${classes.bot}`} key={index}>
            <div>
              <BotInfo {...bot} />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className={classes.indicators}>
        {BOTS.map((_, index) => (
          <div key={index} className={`${classes.indicator} ${index === selectedIndex ? classes.active : ""}`} />
        ))}
      </div>
    </div>
  );
};
