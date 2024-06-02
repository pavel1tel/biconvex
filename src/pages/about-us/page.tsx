import { Flex, Grid, Group, Image, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import aboutUsOverlay from "../../../public/assets/aboutUsOverlay.png";
import classes from "./styles.module.css";
import { RoadMap } from "./ui";
import { Helmet } from "react-helmet-async";

export function Page() {
  return (
    <Wrapper>
       <Helmet>
        <title> About us | BitConvex
</title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Header />

      <Stack gap={0} pos="relative">
        <Container>
          <Group className={classes.section} pb={{ 0: 32, md: 64 }}>
            <Group align={"stretch"} justify={"space-between"} className={classes.welcomeWrapper}>
              <Stack className={classes.welcomeTextWrapper}>
                <Title c="white" order={2} className={classes.welcomeTitle}>
                  Welcome to BitConvex
                </Title>
                <Text w={{ 0: "100%", md: 700 }} variant="text-2" color="white">
                  Your premier destination for seamless cryptocurrency trading. At BitConvex, we
                  <br /> empower users with cutting-edge technology, a secure trading environment, and a user-friendly platform designed to elevate
                  your crypto experience.
                </Text>
              </Stack>
              <img
                style={{ right: "-30px" }}
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/welcome-image-1.png`}
                alt="welcome"
                className={classes.welcomeImage}
              />
              <img draggable="false" alt="about-us-overlay" className={classes.overlayImage} src={aboutUsOverlay} />
              <img
                draggable="false"
                src={`${import.meta.env.BASE_URL}assets/welcome-image-2.png`}
                alt="welcome"
                className={clsx(classes.welcomeImage, classes.welcomeSecondImage)}
              />
              <img draggable="false" src={`${import.meta.env.BASE_URL}assets/welcome-image-3.png`} alt="welcome" className={classes.welcomeImage} />
            </Group>
          </Group>
        </Container>

        <Stack className={classes.section}>
          <Container>
            <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
              <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
                <Title c="white" fz={{ 0: 40, md: 54 }} ta={"center"} order={2}>
                  Our{" "}
                  <Text c="#625FF4" fw={600} fz={{ 0: 40, md: 54 }} className={classes.coloredTextPart} span>
                    mission
                  </Text>
                </Title>
                <Text color="white" fz={{ 0: 16, md: 20 }} ta={"center"} className={classes.subTitle}>
                  Provide a safe, secure and affordable cryptocurrency exchange for everyone from beginners <br /> to professional traders. can learn,
                  grow and succeed in the cryptocurrency industry
                </Text>
              </Stack>

              <Group gap={rem("64px")} className={classes.grid} justify={"center"}>
                <Group gap={rem("16px")}>
                  <Flex justify="center" align="center" className={classes.missionIconWrapper}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2493 17.4167C17.7422 17.4167 20.5827 14.5762 20.5827 11.0833C20.5827 7.5905 17.7422 4.75 14.2493 4.75C10.7565 4.75 7.91602 7.5905 7.91602 11.0833C7.91602 14.5762 10.7565 17.4167 14.2493 17.4167ZM26.916 20.5833C29.5348 20.5833 31.666 18.4522 31.666 15.8333C31.666 13.2145 29.5348 11.0833 26.916 11.0833C24.2972 11.0833 22.166 13.2145 22.166 15.8333C22.166 18.4522 24.2972 20.5833 26.916 20.5833ZM34.8327 30.0833C34.8327 30.9573 34.1249 31.6667 33.2493 31.6667H25.3327C25.3327 32.5407 24.6249 33.25 23.7493 33.25H4.74935C3.87377 33.25 3.16602 32.5407 3.16602 31.6667C3.16602 25.555 8.13927 20.5833 14.2493 20.5833C17.3004 20.5833 20.0649 21.8231 22.071 23.8228C23.4469 22.7588 25.1411 22.1667 26.916 22.1667C31.2813 22.1667 34.8327 25.7181 34.8327 30.0833Z"
                        fill="white"
                      />
                    </svg>
                  </Flex>
                  <Text c="white" variant="text-1">
                    Over 4m users <br />
                    trust BitConvex
                  </Text>
                </Group>

                <Group gap={rem("16px")}>
                  <Flex justify="center" align="center" className={classes.missionIconWrapper}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.36849 29.4896H6.60547V29.7617C6.60547 30.1032 6.88237 30.3802 7.22396 30.3802C7.56555 30.3802 7.84245 30.1032 7.84245 29.7617V29.4896H9.07943C9.42102 29.4896 9.69792 29.2126 9.69792 28.8711V17.7383C9.69792 17.3967 9.42102 17.1198 9.07943 17.1198H7.84245V13.681C7.84245 13.3394 7.56555 13.0625 7.22396 13.0625C6.88237 13.0625 6.60547 13.3394 6.60547 13.681V17.1198H5.36849C5.0269 17.1198 4.75 17.3967 4.75 17.7383V28.8711C4.75 29.2126 5.0269 29.4896 5.36849 29.4896Z"
                        fill="white"
                      />
                      <path
                        d="M13.4818 22.6868H14.7188V26.1257C14.7188 26.4672 14.9956 26.7441 15.3372 26.7441C15.6788 26.7441 15.9557 26.4672 15.9557 26.1257V22.6868H17.1927C17.5343 22.6868 17.8112 22.4099 17.8112 22.0684V10.9355C17.8112 10.594 17.5343 10.3171 17.1927 10.3171H15.9557V6.87826C15.9557 6.53666 15.6788 6.25977 15.3372 6.25977C14.9956 6.25977 14.7188 6.53666 14.7188 6.87826V10.3171H13.4818C13.1402 10.3171 12.8633 10.594 12.8633 10.9355V22.0684C12.8633 22.4099 13.1402 22.6868 13.4818 22.6868Z"
                        fill="white"
                      />
                      <path
                        d="M21.597 26.3973H22.834V29.8361C22.834 30.1776 23.1109 30.4546 23.4525 30.4546C23.794 30.4546 24.071 30.1776 24.071 29.8361V26.3973H25.3079C25.6495 26.3973 25.9264 26.1203 25.9264 25.7788V14.646C25.9264 14.3044 25.6495 14.0275 25.3079 14.0275H24.071V10.5887C24.071 10.2471 23.794 9.97021 23.4525 9.97021C23.1109 9.97021 22.834 10.2471 22.834 10.5887V14.0275H21.597C21.2554 14.0275 20.9785 14.3044 20.9785 14.646V25.7788C20.9785 26.1203 21.2554 26.3973 21.597 26.3973Z"
                        fill="white"
                      />
                      <path
                        d="M29.7122 19.5941H30.9492V23.0329C30.9492 23.3744 31.2261 23.6514 31.5677 23.6514C31.9092 23.6514 32.1862 23.3744 32.1862 23.0329V19.5941H33.4232C33.7647 19.5941 34.0417 19.3171 34.0417 18.9756V7.84277C34.0417 7.50118 33.7647 7.22428 33.4232 7.22428H32.1862V3.78548C32.1862 3.44389 31.9092 3.16699 31.5677 3.16699C31.2261 3.16699 30.9492 3.44389 30.9492 3.78548V7.22428H29.7122C29.3706 7.22428 29.0938 7.50118 29.0938 7.84277V18.9756C29.0938 19.3171 29.3706 19.5941 29.7122 19.5941Z"
                        fill="white"
                      />
                      <path
                        d="M33.1948 31.667H4.80395C4.36954 31.667 3.95293 31.8338 3.64575 32.1307C3.33858 32.4277 3.16602 32.8304 3.16602 33.2503C3.16602 33.6703 3.33858 34.073 3.64575 34.3699C3.95293 34.6668 4.36954 34.8337 4.80395 34.8337H33.1948C33.6292 34.8337 34.0458 34.6668 34.3529 34.3699C34.6601 34.073 34.8327 33.6703 34.8327 33.2503C34.8327 32.8304 34.6601 32.4277 34.3529 32.1307C34.0458 31.8338 33.6292 31.667 33.1948 31.667Z"
                        fill="white"
                      />
                    </svg>
                  </Flex>
                  <Text c="white" variant="text-1">
                    98M Trading deals <br />
                    within 24 hours
                  </Text>
                </Group>

                <Group gap={rem("16px")}>
                  <Flex justify="center" align="center" className={classes.missionIconWrapper}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.082 15.8333C11.082 14.9593 11.7914 14.25 12.6654 14.25C13.5394 14.25 14.2487 14.9593 14.2487 15.8333C14.2487 16.7073 13.5394 17.4167 12.6654 17.4167C11.7914 17.4167 11.082 16.7073 11.082 15.8333ZM18.9993 14.25C18.1253 14.25 17.416 14.9593 17.416 15.8333C17.416 16.7073 18.1253 17.4167 18.9993 17.4167C19.8733 17.4167 20.5827 16.7073 20.5827 15.8333C20.5827 14.9593 19.8733 14.25 18.9993 14.25ZM25.3314 14.25C24.4574 14.25 23.748 14.9593 23.748 15.8333C23.748 16.7073 24.4574 17.4167 25.3314 17.4167C26.2054 17.4167 26.9147 16.7073 26.9147 15.8333C26.9147 14.9593 26.2054 14.25 25.3314 14.25ZM31.6654 23.7507C31.6654 24.6231 30.9544 25.334 30.082 25.334H13.5425C12.6828 25.334 11.8373 25.5683 11.0979 26.0117L6.33203 28.8712V7.91732C6.33203 7.0449 7.04295 6.33398 7.91536 6.33398H30.082C30.9544 6.33398 31.6654 7.0449 31.6654 7.91732V23.7507ZM30.0827 3.16699H7.91602C5.29718 3.16699 3.16602 5.29816 3.16602 7.91699V31.667C3.16602 32.237 3.47318 32.7642 3.96877 33.0445C4.21102 33.1822 4.48018 33.2503 4.74935 33.2503C5.03118 33.2503 5.31302 33.1759 5.56477 33.0239L12.7278 28.7267C12.9748 28.5779 13.2566 28.5003 13.5432 28.5003H30.0827C32.7015 28.5003 34.8327 26.3692 34.8327 23.7503V7.91699C34.8327 5.29816 32.7015 3.16699 30.0827 3.16699Z"
                        fill="white"
                      />
                    </svg>
                  </Flex>
                  <Text c="white" variant="text-1">
                    24/7 support for prompt <br />
                    query solutions
                  </Text>
                </Group>
              </Group>

              {/*<Image draggable={false} src={`${import.meta.env.BASE_URL}assets/objects/about-us-5.png`} alt='object-5' className={classes.objectFive}/>*/}
            </Stack>
          </Container>
        </Stack>

        <Stack className={classes.section}>
          <Container>
            <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
              <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
                <Title c="white" fz={{ 0: 40, md: 54 }} ta={"center"} order={2}>
                  <Text fz={{ 0: 40, md: 54 }} c="#625FF4" fw={600} className={classes.coloredTextPart} span>
                    Road
                  </Text>
                  map
                </Title>
                <Text fz={{ 0: 16, md: 20 }} ta={"center"} className={classes.subTitle}>
                  Our development plans from 2019 to 2025
                </Text>
              </Stack>

              <RoadMap />
              {/* <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/roadmap.png`} alt="roadmap" w="100%" /> */}

              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/4.png`} alt="light-4" className={classes.lightFour} />
              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/5.png`} alt="light-5" className={classes.lightFive} />
              {/*<Image draggable={false} src={`${import.meta.env.BASE_URL}assets/objects/about-us-1.png`} alt='object-1' className={classes.objectOne}/>*/}
            </Stack>
          </Container>
        </Stack>
        <Stack className={classes.section}>
          <Container>
            <Stack gap={rem("64px")}>
              <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/map.png`} alt="map" w="100%" mih={350} style={{ borderRadius: 10 }} />
              <Grid columns={10} gutter={96} grow justify={"space-between"} className={classes.partnersWrapper}>
                <Grid.Col span={{ base: 5, md: 2 }}>
                  <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/partners/Near.png`} fit="contain" alt="Near" />
                </Grid.Col>
                <Grid.Col span={{ base: 5, md: 2 }}>
                  <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/partners/Metamask.png`} fit="contain" alt="Metamask" />
                </Grid.Col>
                <Grid.Col span={{ base: 5, md: 2 }}>
                  <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/partners/Trust.png`} fit="contain" alt="Trust" />
                </Grid.Col>
                <Grid.Col span={{ base: 5, md: 2 }}>
                  <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/partners/Ledger.png`} fit="contain" alt="Ledger" />
                </Grid.Col>
                <Grid.Col span={{ base: 5, md: 2 }}>
                  <Image draggable="false" src={`${import.meta.env.BASE_URL}assets/partners/Binance Labs.png`} fit="contain" alt="Binance Labs" />
                </Grid.Col>
              </Grid>
              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/6.png`} alt="light-6" className={classes.lightSix} />
              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/about-us/7.png`} alt="light-7" className={classes.lightSeven} />
              {/*<Image draggable={false} src={`${import.meta.env.BASE_URL}assets/objects/about-us-4.png`} alt='object-4' className={classes.objectFour}/>*/}
            </Stack>
          </Container>
        </Stack>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
