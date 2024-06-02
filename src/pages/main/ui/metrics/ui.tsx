import { Flex, Grid, Group, Stack, Text, Title, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui";

import classes from "./styles.module.css";

export const Metrics = () => {
  return (
    <Stack className={classes.metricsWrapper}>
      <Container>
        <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
          <Stack
            style={{
              gap: "clamp(1rem, 2vw, 2rem)",
            }}
            align="center"
            className={classes.metricsTitleContainer}
          >
            <Title ta={"center"} order={2} className={classes.metricsTitle}>
              Unrivaled Exchange
              <Text span className={classes.metricsTitleHighlighted} ml={rem(15)}>
                Metrics
              </Text>
            </Title>
            <Text ta="center" color="#6C7080" fz={{ 0: 16, md: 20 }} classNames={{ root: classes.metricsSubTitle }}>
              Trade confidently on our robust cryptocurrency exchange with 3M+ deals, $91M+ volume, <br />
              and 4,000,000+ users. Stable platform, 5%+ volatility. Elevate your trading.
            </Text>
          </Stack>

          <Grid gutter={{ 0: 16, md: 32 }}>
            <Grid.Col span={{ md: 6, lg: 3, xl: 3 }} className={classes.metricColumn}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-40%",
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
                <Stack gap={rem("16px")} className={classes.metricWrapper}>
                  <Group style={{ gap: "clamp(.5rem, 1vw, 1rem)" }} align={"center"} justify={"flex-start"}>
                    <Flex align={"center"} justify={"center"} p={{ 0: 4, md: 8 }} className={classes.metricIconWrapper}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 11C11.206 11 13 9.206 13 7C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7C5 9.206 6.794 11 9 11ZM17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13ZM22 19C22 19.552 21.553 20 21 20H16C16 20.552 15.553 21 15 21H3C2.447 21 2 20.552 2 20C2 16.14 5.141 13 9 13C10.927 13 12.673 13.783 13.94 15.046C14.809 14.374 15.879 14 17 14C19.757 14 22 16.243 22 19Z"
                          fill="white"
                        />
                      </svg>
                    </Flex>
                    <Text c="white" variant="text-2" className={classes.metricTitle}>
                      Users
                    </Text>
                  </Group>
                  <Title c="white" order={1} className={classes.metricAmount}>
                    4M+
                  </Title>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ md: 6, lg: 3, xl: 3 }} className={classes.metricColumn}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-40%",
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
                <Stack gap={rem("16px")} className={classes.metricWrapper}>
                  <Group style={{ gap: "clamp(.5rem, 1vw, 1rem)" }} align={"center"} justify={"flex-start"}>
                    <Flex align={"center"} justify={"center"} p={{ 0: 4, md: 8 }} className={classes.metricIconWrapper}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.89062 18.625H4.67188V18.7969C4.67188 19.0126 4.84676 19.1875 5.0625 19.1875C5.27824 19.1875 5.45312 19.0126 5.45312 18.7969V18.625H6.23438C6.45012 18.625 6.625 18.4501 6.625 18.2344V11.2031C6.625 10.9874 6.45012 10.8125 6.23438 10.8125H5.45312V8.64062C5.45312 8.42488 5.27824 8.25 5.0625 8.25C4.84676 8.25 4.67188 8.42488 4.67188 8.64062V10.8125H3.89062C3.67488 10.8125 3.5 10.9874 3.5 11.2031V18.2344C3.5 18.4501 3.67488 18.625 3.89062 18.625Z"
                          fill="white"
                        />
                        <path
                          d="M9.01562 14.3281H9.79688V16.5C9.79688 16.7157 9.97176 16.8906 10.1875 16.8906C10.4032 16.8906 10.5781 16.7157 10.5781 16.5V14.3281H11.3594C11.5751 14.3281 11.75 14.1532 11.75 13.9375V6.90625C11.75 6.69051 11.5751 6.51562 11.3594 6.51562H10.5781V4.34375C10.5781 4.12801 10.4032 3.95312 10.1875 3.95312C9.97176 3.95312 9.79688 4.12801 9.79688 4.34375V6.51562H9.01562C8.79988 6.51562 8.625 6.69051 8.625 6.90625V13.9375C8.625 14.1532 8.79988 14.3281 9.01562 14.3281Z"
                          fill="white"
                        />
                        <path
                          d="M14.1406 16.6719H14.9219V18.8438C14.9219 19.0595 15.0968 19.2344 15.3125 19.2344C15.5282 19.2344 15.7031 19.0595 15.7031 18.8438V16.6719H16.4844C16.7001 16.6719 16.875 16.497 16.875 16.2812V9.25C16.875 9.03426 16.7001 8.85938 16.4844 8.85938H15.7031V6.6875C15.7031 6.47176 15.5282 6.29688 15.3125 6.29688C15.0968 6.29688 14.9219 6.47176 14.9219 6.6875V8.85938H14.1406C13.9249 8.85938 13.75 9.03426 13.75 9.25V16.2812C13.75 16.497 13.9249 16.6719 14.1406 16.6719Z"
                          fill="white"
                        />
                        <path
                          d="M19.2656 12.375H20.0469V14.5469C20.0469 14.7626 20.2218 14.9375 20.4375 14.9375C20.6532 14.9375 20.8281 14.7626 20.8281 14.5469V12.375H21.6094C21.8251 12.375 22 12.2001 22 11.9844V4.95312C22 4.73738 21.8251 4.5625 21.6094 4.5625H20.8281V2.39062C20.8281 2.17488 20.6532 2 20.4375 2C20.2218 2 20.0469 2.17488 20.0469 2.39062V4.5625H19.2656C19.0499 4.5625 18.875 4.73738 18.875 4.95312V11.9844C18.875 12.2001 19.0499 12.375 19.2656 12.375Z"
                          fill="white"
                        />
                        <path
                          d="M21.4655 20H3.53448C3.26012 20 2.997 20.1054 2.80299 20.2929C2.60899 20.4804 2.5 20.7348 2.5 21C2.5 21.2652 2.60899 21.5196 2.80299 21.7071C2.997 21.8946 3.26012 22 3.53448 22H21.4655C21.7399 22 22.003 21.8946 22.197 21.7071C22.391 21.5196 22.5 21.2652 22.5 21C22.5 20.7348 22.391 20.4804 22.197 20.2929C22.003 20.1054 21.7399 20 21.4655 20Z"
                          fill="white"
                        />
                      </svg>
                    </Flex>

                    <Text c="white" variant="text-2" className={classes.metricTitle}>
                      Deals
                    </Text>
                  </Group>
                  <Title c="white" order={1} className={classes.metricAmount}>
                    3M+
                  </Title>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ md: 6, lg: 3, xl: 3 }} className={classes.metricColumn}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-40%",
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
                <Stack gap={rem("16px")} className={classes.metricWrapper}>
                  <Group style={{ gap: "clamp(.5rem, 1vw, 1rem)" }} align={"center"} justify={"flex-start"}>
                    <Flex align={"center"} justify={"center"} p={{ 0: 4, md: 8 }} className={classes.metricIconWrapper}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.997 10.974H21C21.551 10.974 21.999 11.42 22 11.971C22.008 14.642 20.975 17.157 19.091 19.051C17.208 20.945 14.7 21.992 12.029 22H12C9.33905 22 6.83605 20.968 4.94905 19.091C3.05505 17.208 2.00805 14.7 2.00005 12.029C1.99205 9.357 3.02505 6.843 4.90905 4.949C6.79205 3.055 9.30005 2.008 11.971 2C12.766 2.012 13.576 2.092 14.352 2.278C14.888 2.408 15.219 2.948 15.089 3.485C14.96 4.021 14.417 4.351 13.883 4.223C13.262 4.073 12.603 4.01 11.977 4C9.84005 4.006 7.83305 4.844 6.32705 6.359C4.82005 7.874 3.99405 9.886 4.00005 12.023C4.00605 14.16 4.84405 16.166 6.35905 17.673C7.86905 19.174 9.87105 20 12 20H12.023C14.16 19.994 16.167 19.156 17.673 17.641C19.18 16.125 20.006 14.114 20 11.977C19.999 11.425 20.445 10.975 20.997 10.974ZM8.29325 11.2931C8.68425 10.9021 9.31625 10.9021 9.70725 11.2931L11.9513 13.5371L18.2482 6.34111C18.6122 5.92811 19.2432 5.88411 19.6593 6.24811C20.0743 6.61111 20.1162 7.24311 19.7523 7.65911L12.7523 15.6591C12.5703 15.8671 12.3103 15.9901 12.0332 16.0001H12.0002C11.7352 16.0001 11.4812 15.8951 11.2933 15.7071L8.29325 12.7071C7.90225 12.3161 7.90225 11.6841 8.29325 11.2931Z"
                          fill="white"
                        />
                      </svg>
                    </Flex>

                    <Text c="white" variant="text-2" className={classes.metricTitle}>
                      Volatility
                    </Text>
                  </Group>
                  <Title c="white" order={1} className={classes.metricAmount}>
                    5%+
                  </Title>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ md: 6, lg: 3, xl: 3 }} className={classes.metricColumn}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-40%",
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
                <Stack gap={rem("16px")} className={classes.metricWrapper}>
                  <Group style={{ gap: "clamp(.5rem, 1vw, 1rem)" }} align={"center"} justify={"flex-start"} className={classes.metricTitleWrapper}>
                    <Flex align={"center"} justify={"center"} p={{ 0: 4, md: 8 }} className={classes.metricIconWrapper}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.5899 9.91667C17.9215 9.91667 18.2394 9.78497 18.4738 9.55055C18.7082 9.31613 18.8399 8.99819 18.8399 8.66667V8.09417C18.8384 6.92039 18.3714 5.79514 17.5414 4.96516C16.7115 4.13517 15.5862 3.66821 14.4124 3.66667H13.4233V3.25C13.4233 2.91848 13.2916 2.60054 13.0572 2.36612C12.8227 2.1317 12.5048 2 12.1733 2C11.8418 2 11.5238 2.1317 11.2894 2.36612C11.055 2.60054 10.9233 2.91848 10.9233 3.25V3.66667H9.93411C8.87117 3.66508 7.84314 4.04595 7.03782 4.7397C6.23249 5.43344 5.70363 6.39375 5.54783 7.44521C5.39203 8.49667 5.6197 9.56908 6.18925 10.4665C6.75881 11.364 7.63222 12.0266 8.64994 12.3333L10.9233 12.955V17.8333H9.93411C9.4231 17.8327 8.93322 17.6294 8.57189 17.2681C8.21056 16.9067 8.00727 16.4168 8.00661 15.9058V15.3333C8.00661 15.0018 7.87491 14.6839 7.64049 14.4494C7.40607 14.215 7.08813 14.0833 6.75661 14.0833C6.42509 14.0833 6.10715 14.215 5.87273 14.4494C5.6383 14.6839 5.50661 15.0018 5.50661 15.3333V15.9058C5.50815 17.0796 5.97512 18.2049 6.8051 19.0348C7.63508 19.8648 8.76033 20.3318 9.93411 20.3333H10.9233V20.75C10.9233 21.0815 11.055 21.3995 11.2894 21.6339C11.5238 21.8683 11.8418 22 12.1733 22C12.5048 22 12.8227 21.8683 13.0572 21.6339C13.2916 21.3995 13.4233 21.0815 13.4233 20.75V20.3333H14.4124C15.4754 20.3349 16.5034 19.954 17.3087 19.2603C18.1141 18.5666 18.6429 17.6062 18.7987 16.5548C18.9545 15.5033 18.7268 14.4309 18.1573 13.5335C17.5877 12.636 16.7143 11.9734 15.6966 11.6667L13.4233 11.0467V6.16667H14.4124C14.9234 6.16733 15.4133 6.37062 15.7747 6.73195C16.136 7.09328 16.3393 7.58317 16.3399 8.09417V8.66667C16.3399 8.99819 16.4716 9.31613 16.7061 9.55055C16.9405 9.78497 17.2584 9.91667 17.5899 9.91667ZM14.9916 14.0658C15.4312 14.2044 15.8067 14.4958 16.0499 14.8873C16.2932 15.2788 16.3882 15.7445 16.3176 16.2001C16.2471 16.6556 16.0158 17.0707 15.6655 17.3704C15.3152 17.67 14.8692 17.8342 14.4083 17.8333H13.4233V13.6375L14.9916 14.0658ZM10.9233 10.3625L9.35494 9.93417C8.91566 9.79573 8.54044 9.50464 8.29716 9.11356C8.05388 8.72248 7.95861 8.25723 8.0286 7.802C8.09858 7.34678 8.32918 6.93163 8.67869 6.63168C9.0282 6.33172 9.47353 6.16677 9.93411 6.16667H10.9233V10.3625Z"
                          fill="white"
                        />
                      </svg>
                    </Flex>

                    <Text c="white" variant="text-2" className={classes.metricTitle}>
                      Trading volume
                    </Text>
                  </Group>
                  <Title c="white" order={1} className={classes.metricAmount}>
                    <span className={classes.dollarSign}>$</span>
                    91M
                    <span className={classes.plusSign}>+</span>
                  </Title>
                </Stack>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
