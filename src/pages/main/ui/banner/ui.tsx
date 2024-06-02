import { useResize } from "@/hooks/useResize";
import { Box, Group, Stack, Text, Title, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { routes } from "@/shared/routing";
import { Container } from "@/shared/ui";
import { BannerButton } from "@/shared/ui/bannerButton/ui";

import classes from "./styles.module.css";

export const Banner = () => {
  const handleRedirection = () => window.scrollTo(0, 0);

  const { isAdaptive: md } = useResize(1200);
  return (
    <Container>
      <Group gap={rem(48)} className={classes.bannerWrapper}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
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
            <Title c="white" order={1} fz={79} className={classes.bannerTitle}>
              The World's <br />
              Premier Crypto <br />
              <Text span className={classes.bannerTitleColoredPart}>
                Trading Platform
              </Text>
            </Title>
            {md && (
              <Box className={classes.bannerRightSide}>
                <img
                  className={classes.bannerBuildingImage}
                  draggable="false"
                  src={`${import.meta.env.BASE_URL}assets/main/banner/building.png`}
                  alt="banner"
                  width="100%"
                />

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
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <Box className={classes.bitcoinOne}>
                    <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_coin_1.png`} alt="banner" />
                  </Box>
                </motion.div>

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
                  transition={{ duration: 1, delay: 0.35 }}
                >
                  <Box className={classes.bitcoinTwo}>
                    <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_etherium_2.png`} alt="banner" />
                  </Box>
                </motion.div>

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
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Box className={classes.bitcoinThree}>
                    <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_monero_2.png`} alt="banner" />
                  </Box>
                </motion.div>

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
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Box className={classes.bitcoinFour}>
                    <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_bitcoin_1.png`} alt="banner" />
                  </Box>
                </motion.div>
              </Box>
            )}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
            >
              <Stack gap={"clamp(2rem, 4vw, 4rem)"} className={classes.bannerBottomContainer}>
                <Text c="white" className={classes.bannerSubTitle}>
                  Join the Rapidly Expanding Global Crypto Exchange
                </Text>
                <BannerButton size="extra-large" text="START TRADING" route={routes.trade} {...{ handleRedirection }} />
              </Stack>
            </motion.div>
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
            transition={{ duration: 1 }}
          >
            <Box className={classes.bannerRightSide}>
              <img
                className={classes.mainBannerImg}
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/main/banner/building.png`}
                alt="banner"
              />

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
                transition={{ duration: 1, delay: 0.1 }}
              >
                <Box className={classes.bitcoinOne}>
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_coin_1.png`} alt="banner" />
                </Box>
              </motion.div>

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
                transition={{ duration: 1, delay: 0.25 }}
              >
                <Box className={classes.bitcoinTwo}>
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_etherium_2.png`} alt="banner" />
                </Box>
              </motion.div>

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
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Box className={classes.bitcoinThree}>
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_monero_2.png`} alt="banner" />
                </Box>
              </motion.div>

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
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Box className={classes.bitcoinFour}>
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/main/banner/build_bitcoin_1.png`} alt="banner" />
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        )}
      </Group>
    </Container>
  );
};
