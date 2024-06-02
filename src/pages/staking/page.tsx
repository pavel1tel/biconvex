import { Image } from "@mantine/core";
import { Helmet } from "react-helmet-async";

import { StakingCalculate, StakingHeader, StakingMain, StakingTable } from "@/pages/staking/ui";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import { COINS, HEADERS } from "./StakeData";
import classes from "./styles.module.css";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> Staking | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/1.png`} alt="light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/2.png`} alt="light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/staking/3.png`} alt="light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/staking/4.png`} alt="light-4" className={classes.lightFour} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/5.png`} alt="light-3" className={classes.lightFive} />

      <Header />
      <Container>
        <StakingHeader />
        <StakingCalculate />
        <StakingMain />
        <StakingTable usedForTradingBot={false} tableHeaders={HEADERS} tableData={COINS} />
      </Container>
      <Footer />
    </Wrapper>
  );
}
