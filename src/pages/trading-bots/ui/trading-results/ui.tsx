import { useResize } from "@/hooks/useResize";
import { Carousel, Embla } from "@mantine/carousel";
import { Grid, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { BitcoinIcon, Container } from "@/shared/ui";

import commonClasses from "../../styles.module.css";
import classes from "./styles.module.css";
import { TradingResult } from "./tradingResult/ui";

export interface TradeResultProps {
  name: string;
  icon: React.ReactNode;
  instruments: Array<string>;
  percent: number;
  shortName: string;
}

const TRADING_RESULTS = [
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 180,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 190,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 188,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 178,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
] as TradeResultProps[];

export const TradingResults = () => {
  const viewport = useResize(720);
  const sm = useResize(500);

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
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack className={commonClasses.section}>
          <Title c="white" order={1} className={classes.tradingTitle}>
            Best trading results in
            <Text span className={classes.tradingTitleColored}>
              24 hours
            </Text>
          </Title>

          <Grid gutter={{ 0: 16, md: 30 }} align={"stretch"} justify="center">
            {sm && viewport.isAdaptive ? (
              <>
                <Carousel className={classes.tradingResultsWrapper} withControls={false} getEmblaApi={setEmbla}>
                  {TRADING_RESULTS.map((TRADING_RESULT, index) => (
                    <Carousel.Slide className={`${classes.tradingResult}`} key={index}>
                      <div style={{ width: "97%" }}>
                        <TradingResult {...TRADING_RESULT} />
                      </div>
                    </Carousel.Slide>
                  ))}
                </Carousel>
                <div className={classes.indicators}>
                  {TRADING_RESULTS.map((_, index) => (
                    <div key={index} className={`${classes.indicator} ${index === selectedIndex ? classes.active : ""}`} />
                  ))}
                </div>
              </>
            ) : (
              <>
                {TRADING_RESULTS.map((result, i) => {
                  return (
                    <Grid.Col key={i} span={{ md: 3, lg: 3, xl: 3 }} className={classes.col}>
                      <motion.div
                        className={classes.rateWrap}
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
                        transition={{ duration: 0.8, delay: 0.4 + (i + 1) * 0.2 }}
                      >
                        <TradingResult {...result} />
                      </motion.div>
                    </Grid.Col>
                  );
                })}
              </>
            )}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
