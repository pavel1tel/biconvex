import { Button, Grid, Group, Image, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import { motion } from "framer-motion";

import { routes } from "@/shared/routing";
import { Container, StartStakingIcon } from "@/shared/ui";

import classes from "./styles.module.css";

export const HighestAprs = () => {
  const handleRedirection = () => window.scrollTo(0, 0);

  return (
    <Stack className={classes.highestAprsWrapper}>
      <Container>
        <Stack
          style={{
            gap: "clamp(1.5rem,4vw,4rem)",
          }}
        >
          <Stack
            style={{
              gap: "clamp(1rem,2vw,rem)",
            }}
            align="center"
          >
            <Title ta={"center"} order={2} fz={{ 0: 40, md: 54 }} className={classes.highestAprsTitle}>
              Highest APRs, <br />
              <Text span className={classes.highestAprsTitleHighlighted}>
                Zero Loss
              </Text>{" "}
              Concerns!
            </Title>
            <Text ta="center" fz={{ 0: 16, md: 20 }} className={classes.highestAprsSubTitle}>
              Maximize Gains with Top APRs and Zero Loss Worries!
            </Text>
          </Stack>

          <Grid className={classes.grid} gutter={{ 0: 16, md: 32 }}>
            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      ETH
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 3.07K
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" order={3} fw={700} fz={{ 0: 21, md: 32 }}>
                      27.8%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/tron-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/tron-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/tron.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      SOL
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 58.8K
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" order={3} fw={700} fz={{ 0: 21, md: 32 }}>
                      68.6%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/sol-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/sol-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/sol.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      TRX
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 8.5M
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" order={3} fw={700} fz={{ 0: 21, md: 32 }}>
                      56.1%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/trx-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/trx-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/trx.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      BTC
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 263.8
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" order={3} fw={700} fz={{ 0: 21, md: 32 }}>
                      33.7%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/btc-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/btc-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/btc.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      USDT
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 5.37M
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" order={3} fw={700} fz={{ 0: 21, md: 32 }}>
                      55.3%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/usdt-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/usdt-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/usdt.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
              <motion.div
                className={classes.rateWrap}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-50%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Stack justify={"space-between"} className={classes.highestAprWrapper}>
                  <Group justify={"space-between"}>
                    <Title c="white" order={4} className={classes.highestAprTitle}>
                      FTM
                    </Title>
                    <Text c="white" fz={{ 0: 12, md: 20 }} className={classes.highestAprSubTitle}>
                      Total locked: 675.4К
                    </Text>
                  </Group>
                  <Group gap={rem("8px")} justify={"flex-start"}>
                    <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.startIcon}>
                      <g filter="url(#filter0_d_1299_889)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.3492 30.2257C25.6191 30.2257 25.889 30.2903 26.1352 30.4176L32.5334 33.7618L31.3162 26.7049C31.2195 26.1515 31.4045 25.5879 31.8085 25.1958L36.9624 20.2117L29.8274 19.1727C29.2757 19.093 28.7987 18.7484 28.5509 18.2493L25.3492 11.8086L22.1475 18.2493C21.8997 18.7484 21.4227 19.093 20.871 19.1727L13.736 20.2117L18.8899 25.1958C19.2939 25.5879 19.4789 26.1515 19.3822 26.7049L18.165 33.7618L24.5632 30.4176C24.8094 30.2903 25.0793 30.2257 25.3492 30.2257ZM34.7921 38.5528C34.5222 38.5528 34.2523 38.49 34.0061 38.3609L25.3501 33.8386L16.6941 38.3609C16.1203 38.6597 15.4277 38.6071 14.9099 38.2268C14.3871 37.8466 14.1274 37.2032 14.236 36.5666L15.8861 27.0126L8.892 20.2477C8.42516 19.7978 8.25879 19.1222 8.45741 18.506C8.65433 17.8897 9.18738 17.4416 9.82737 17.3482L19.5053 15.9426L23.8291 7.24077C24.4029 6.08641 26.2974 6.08641 26.8711 7.24077L31.1949 15.9426L40.8729 17.3482C41.5128 17.4416 42.0459 17.8897 42.2428 18.506C42.4414 19.1222 42.2751 19.7978 41.8082 20.2477L34.8142 27.0126L36.4642 36.5666C36.5729 37.2032 36.3131 37.8466 35.7903 38.2268C35.4966 38.4441 35.1452 38.5528 34.7921 38.5528Z"
                          fill="url(#paint0_linear_1299_889)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1299_889"
                          x="-5"
                          y="-5"
                          width="59"
                          height="59"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1299_889" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1299_889" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1299_889" x1="25.3501" y1="6.375" x2="25.3501" y2="38.5533" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#625FF4" />
                          <stop offset="1" stopColor="#625FF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Title c="white" fz={{ 0: 21, md: 32 }} fw={700} order={3}>
                      7.80%
                    </Title>
                  </Group>
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/phm-noise-2.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img
                    draggable="false"
                    src={`${import.meta.env.BASE_URL}assets/aprs/phm-noise-1.png`}
                    alt="tron"
                    className={classes.highestAprImage}
                  />
                  <img draggable="false" src={`${import.meta.env.BASE_URL}assets/aprs/phm.png`} alt="tron" className={classes.highestAprImageLogo} />
                </Stack>
              </motion.div>
            </Grid.Col>
          </Grid>

          <Group justify="center">
            <Link
              to={routes.staking}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Button
                variant="radial-gradient"
                size="extra-large"
                rightSection={<StartStakingIcon />}
                classNames={{
                  root: classes.highestAprsButton,
                  label: classes.highestAprsButtonLabel,
                }}
                onClick={handleRedirection}
              >
                START STAKING
              </Button>
            </Link>
          </Group>

          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/5.png`} alt="main-light-5" className={classes.lightFive} />
          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/6.png`} alt="main-light-6" className={classes.lightSix} />
        </Stack>
      </Container>
    </Stack>
  );
};
