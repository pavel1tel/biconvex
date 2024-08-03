import { Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { TradeContent } from "./ui";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title>Spot Trading | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />
      <Header className="headerTradePage" />
      <Container className={"tradeContainer"}>
        <TradeContent />
      </Container>
      <Footer width={1460} />
    </Wrapper>
  );
}
