import { Box, Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { HeaderMyProfile, TableProfile } from "@/pages/my-profile/ui";
import { Promocode } from "@/pages/my-profile/ui/promo-code";

import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> My Profile | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Header />
      <Container>
        <Sidebar>
          <Box className={classes.box}>
            <HeaderMyProfile />
            <Promocode />
            <TableProfile />
          </Box>
        </Sidebar>
      </Container>

      <Footer />
    </Wrapper>
  );
}
