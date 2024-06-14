import { Flex, Image, rem } from "@mantine/core";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet-async";

import { DepositsBox } from "@/pages/deposit/ui";
import { TransferBox } from "@/pages/transfer/ui";

import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";

export function Page() {
  const [selectedDeposit, setSelectedDeposit] = useState(1);

  const goToTransfer = () => {
    const transferBox = document.getElementById("transferBox");

    if (!!transferBox) {
      transferBox.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title> Transfer | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Header />
      <Container>
        <Sidebar>
          <Flex className={classes.flexContainer} gap={rem(32)}>
            <DepositsBox
              height={694}
              coin={selectedDeposit}
              setCoin={(selected) => {
                setSelectedDeposit(selected);
                goToTransfer();
              }}
              setCurrentCoin={() => {}}
            />
            <TransferBox />
          </Flex>
        </Sidebar>
      </Container>
      <Footer />
    </Wrapper>
  );
}
