import { useResize } from "@/hooks/useResize";
import { Carousel, Embla } from "@mantine/carousel";
import { Box, Flex, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/shared/ui/container/ui";

import commonClasses from "../../styles.module.css";
import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle/ui";
import { SelectCoin } from "./SelectCoin";
import { TradeTypeWrapper } from "./TradeTypeWrapper";
import { TRADE_TYPES } from "./TradeTypes";
import classes from "./styles.module.css";

export const TradeType = () => {
  const [_, setSelectedBot] = useState(0);
  const botRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = botRefs.current.indexOf(entry.target as HTMLDivElement);
            setSelectedBot(index);
          }
        });
      },
      {
        root: document.querySelector(`.${classes.tradeTypesWrapper}`),
        threshold: 0.5,
      },
    );

    botRefs.current.forEach((bot) => {
      if (bot) observer.observe(bot);
    });

    return () => {
      botRefs.current.forEach((bot) => {
        if (bot) observer.unobserve(bot);
      });
    };
  }, []);

  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)} className={commonClasses.section}>
          <HighlightedBlueTitle title="Trade" subTitle="type" />

          <Flex gap={rem("32px")} className={classes.tradeTypesFlex}>
            <SelectCoin className="selectTradeOptionsWrapper" />
            <DesktopViewCarousel />
            <MobileViewCarousel />
          </Flex>
        </Stack>
      </Container>
    </Stack>
  );
};

const DesktopViewCarousel = () => {
  const viewport = useResize(720);

  if (viewport.isAdaptive) return null;
  return (
    <Box className={classes.tradeTypesWrapper}>
      {TRADE_TYPES.map((type, index) => (
        <motion.div
          className={classes.tradeType}
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
          <TradeTypeWrapper title={type.title} profit={type.profit} minInvestment={type.minInvestment} risk={type.risk} selected={type.selected} />
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
      <Carousel className={classes.tradeTypesWrapper} withControls={false} getEmblaApi={setEmbla}>
        {TRADE_TYPES.map((type, index) => (
          <Carousel.Slide className={classes.tradeType} key={index}>
            <>
              <TradeTypeWrapper
                title={type.title}
                profit={type.profit}
                minInvestment={type.minInvestment}
                risk={type.risk}
                selected={type.selected}
              />
            </>
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className={classes.indicators}>
        {TRADE_TYPES.map((_, index) => (
          <div key={index} className={`${classes.indicator} ${index === selectedIndex ? classes.active : ""}`} />
        ))}
      </div>
    </div>
  );
};
