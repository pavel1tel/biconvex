import { Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { AffiliateBox } from "./ui";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> Affiliate | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Header />
      <Container>
        <Sidebar verticalPadding={"clamp(2rem, 4vw, 4rem)"}>
          <AffiliateBox />
        </Sidebar>
      </Container>
      <Footer />
    </Wrapper>
  );
}
