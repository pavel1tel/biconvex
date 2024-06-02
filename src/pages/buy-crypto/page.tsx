import { Image } from "@mantine/core";
import { Helmet } from "react-helmet-async";

import { BuyWith, HowToBuyCrypto, SwiperPayments } from "@/pages/buy-crypto/ui";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> Buy Crypto | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/1.png`} alt="light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/2.png`} alt="light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/3.png`} alt="light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/4.png`} alt="light-4" className={classes.lightFour} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/3.png`} alt="light-5" className={classes.lightFive} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/4.png`} alt="light-6" className={classes.lightSix} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/5.png`} alt="light-3" className={classes.lightSeven} />

      <Header />
      <SwiperPayments />
      <Container>
        <HowToBuyCrypto />
        <BuyWith />
      </Container>
      <Footer />
    </Wrapper>
  );
}
