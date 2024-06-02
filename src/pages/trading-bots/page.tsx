import { Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { ActiveInvestments } from "./ui/active-investments";
import { CalculateProfit } from "./ui/calculate-profit/ui";
import { ChooseBot } from "./ui/choose-bot/ui";
import { TradeType } from "./ui/trade-type/ui";
import { Banner } from "./ui/trading-bots-main/banner/ui";
import { TradingResults } from "./ui/trading-results/ui";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> Trading Bots | BitConvex </title>
      </Helmet>
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_3.png`}
        alt="light-3"
        className={classes.lightThree}
      />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_cube.png`}
        alt="cube-1-light"
        className={classes.cubeOneLight}
      />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/left_cube_1.png`}
        alt="cube-1"
        className={classes.cubeOne}
      />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_cube.png`}
        alt="light-3"
        className={classes.lightFour}
      />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_3.png`}
        alt="light-3"
        className={classes.columnLightThree}
      />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/trading-bots/shape.png`} alt="column" className={classes.lightColumn} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/trading-bots/cube_2.png`} alt="cube-2" className={classes.cubeTwo} />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_cube.png`}
        alt="light-cube-2"
        className={classes.lightCubeTwo}
      />
      <Header />
      <Container className="tradeBotsContainer">
        <Banner />
        <TradingResults />
        <ChooseBot />
        <TradeType />
        <CalculateProfit />
        <ActiveInvestments />
      </Container>
      <Footer />
    </Wrapper>
  );
}
