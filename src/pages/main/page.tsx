import { useResize } from "@/hooks/useResize";
import { Box, Button, Group, Image, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { routes } from "@/shared/routing";
import { Container, Footer, Header, StartTradingDarkIcon, Wrapper } from "@/shared/ui";
import { ErrorModal } from "@/shared/ui/error-modal/ui";

import { TradeHistory } from "../trade/ui/trade-content/components/TradeHistory/TradeHistory";
import classes from "./styles.module.css";
import { Banner, Collaborators, Faq, HighestAprs, Markets, Metrics, Rates } from "./ui";

export function Page() {
  const { isAdaptive: md } = useResize(1200);
  const [opened, setOpened] = useState<boolean>(true);

  const handleRedirection = () => window.scrollTo(0, 0);

  return (
    <Wrapper>
      <Helmet>
        <title>Home Page | BitConvex</title>
      </Helmet>
      <Box pos={"relative"}>
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/2.png`} alt="main-light-2" className={classes.lightTwo} />
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/3.png`} alt="main-light-3" className={classes.lightThree} />
        <Header />
        <Banner />
        <Rates />
        <Metrics />
        {/* <ErrorModal opened={opened} handleClose={() => setOpened(false)} handleProceed={() => console.log("proceed")} /> */}
        <HighestAprs />
        <Markets />
        <Collaborators />
        <Stack className={classes.textWrapper}>
          <Container>
            <Stack gap={"clamp(1.5rem, 4vw, 4rem)"} className={classes.cryptoTextContainer}>
              <Group justify={"center"} grow style={{ gap: "clamp(1.5rem, 4vw, 64px" }} wrap="wrap">
                <motion.div
                  className={classes.textImageWrap}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "-50%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {!md && (
                    <Image
                      draggable={false}
                      src={`${import.meta.env.BASE_URL}assets/main-pill.png`}
                      alt="main-pill"
                      style={{ maxWidth: "clamp(250px, 28.1875vw, 451px)" }}
                    />
                  )}
                </motion.div>
                <motion.div
                  className={classes.textContainer}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "50%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Stack gap={rem("clamp(1.5rem, 4vw, 4rem)")} style={{ flex: 1, maxWidth: "100%" }} className={classes.cryptoSectionContainer}>
                    <Title order={2} fz={{ 0: 40, md: 54 }} className={classes.textTitle}>
                      <Text span className={classes.textTitleHighlighted}>
                        Elevate
                      </Text>{" "}
                      Your Crypto
                      <br /> Experience{" "}
                      <Text span className={classes.textTitleHighlighted}>
                        With
                      </Text>
                      <br />{" "}
                      <Text span className={classes.textTitleHighlighted}>
                        BitConvex
                      </Text>
                    </Title>
                    {md && (
                      <Image
                        draggable={false}
                        src={`${import.meta.env.BASE_URL}assets/main-pill.png`}
                        alt="main-pill"
                        style={{ maxWidth: "clamp(250px, 28.1875vw, 451px)" }}
                        className={classes.cryptoAdaptiveImage}
                      />
                    )}
                    <Text variant="text-2" className={classes.textSubTitle}>
                      Dive into the dynamic world of cryptocurrency trading with BitConvex—a platform crafted for the modern investor. Our
                      user-centric design and cutting-edge technology empower you to navigate the crypto sphere seamlessly.
                      <br />
                      <br />
                      Join us on this exciting journey, where innovation meets opportunity, and your financial aspirations find their perfect match.
                      Welcome to BitConvex, where the future of crypto unfolds at your fingertips.
                    </Text>
                  </Stack>
                </motion.div>
              </Group>
            </Stack>
            <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/8.png`} alt="main-light-8" className={classes.lightEight} />
          </Container>
        </Stack>
        <Faq />
        <Group className={classes.tradingBannerWrapper}>
          <Container>
            <Group align={"stretch"} justify={"space-between"} className={classes.tradingBannerInnerWrapper}>
              <Stack justify={"center"} gap={rem("20px")} ta={{ 0: "center", md: "initial" }}>
                <Title c="white" fz={32} order={3} fw={700}>
                  Your Gateway to Crypto Wealth
                </Title>
                <Text c="white" variant="text-2">
                  Unlock the Future of Finance with BitConvex
                </Text>
              </Stack>

              <Link
                to={routes.tradeFutures}
                className={classes.bannerButton}
                style={{
                  width: "100%",
                  maxWidth: "344px",
                }}
                onClick={handleRedirection}
              >
                <Button
                  h={{ 0: 92, md: 125 }}
                  w={"100%"}
                  fz={{ 0: 18, md: 24 }}
                  variant="light-radial-gradient"
                  className={classes.btn}
                  rightSection={<StartTradingDarkIcon />}
                >
                  START TRADING
                </Button>
              </Link>

              <img
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/trading-bg-1.png`}
                alt="welcome"
                className={classes.tradingBannerImage}
              />
              <img
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/trading-bg-2.png`}
                alt="welcome"
                className={clsx(classes.tradingBannerImage, classes.tradingBannerSecondImage)}
              />
              <img
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/trading-bg-3.png`}
                alt="welcome"
                className={clsx(classes.tradingBannerImage, classes.tradingBannerThirdImage)}
              />
            </Group>
          </Container>

          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/10.png`} alt="main-light-10" className={classes.lightTen} />
        </Group>
        <Footer />
      </Box>
    </Wrapper>
  );
}
