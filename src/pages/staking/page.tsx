import { Image } from "@mantine/core";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { StakingCalculate, StakingHeader, StakingMain, StakingTable } from "@/pages/staking/ui";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import { COINS, HEADERS } from "./StakeData";
import classes from "./styles.module.css";

export function Page() {
  const [amount, setAmount] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);
  const [value1, setValue1] = useState("BTC");

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
        <StakingCalculate amount={amount} percent={percent} value1={value1} />
        <StakingMain amount={amount} setAmount={setAmount} setPercent={setPercent} value1={value1} setValue1={setValue1} />
        {/* <StakingTable usedForTradingBot={false} tableHeaders={HEADERS} value1={value1} /> */}
      </Container>
      <Footer />
    </Wrapper>
  );
}
