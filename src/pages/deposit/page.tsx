import { Flex, Image, rem } from "@mantine/core";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { DepositsAddress, DepositsBox } from "@/pages/deposit/ui";

import { DepositCoin } from "@/shared/api/types";
import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { currentRoute } from "./model";

export function Page() {
  const [selectedDeposit, setSelectedDeposit] = useState(0);
  const [currentCoin, setCurrentCoin] = useState<DepositCoin>();

  const goToQR = () => {
    const depositQRSection = document.getElementById("depositQR");

    if (depositQRSection) {
      depositQRSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title> Deposit | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Header />
      <Container className={classes.container}>
        <Sidebar>
          <Flex className={classes.wrapper} gap={rem(32)}>
            <DepositsBox
              currentRoute={currentRoute}
              height={819}
              coin={selectedDeposit}
              setCoin={(selected) => {
                setSelectedDeposit(selected);
                goToQR();
              }}
              setCurrentCoin={setCurrentCoin}
            />
            <DepositsAddress currentCoin={currentCoin} key={selectedDeposit} />
          </Flex>
        </Sidebar>
      </Container>
      <Footer />
    </Wrapper>
  );
}
