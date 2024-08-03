import { useResize } from "@/hooks/useResize";
import { Button, Image, Stack } from "@mantine/core";
import { useUnit } from "effector-react";

import { Footer, Header } from "@/shared/ui";
import { FlashIcon } from "@/shared/ui/icon/FlashIcon";

import notFoundImage from "../../../public/assets/404adaptiveImage.png";
import { redirectToHomeClicked } from "./model";
import classes from "./styles.module.css";

export function Page() {
  const { isAdaptive } = useResize(1200);
  const redirectToHome = useUnit(redirectToHomeClicked);

  const backToHome = () => {
    redirectToHome();
  };

  return (
    <div id="container" style={{ position: "relative", overflow: "hidden" }}>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Stack gap={0}>
        <Header />
        <Stack align="center" mb={96} mt={54} gap={20}>
          {!isAdaptive && <Image src={`${import.meta.env.BASE_URL}assets/404.png`} className={classes.image} alt="404" />}
          {isAdaptive && <img src={notFoundImage} alt="notFoundImage" style={{ maxWidth: "100%" }} />}
          <Button className={classes.btn} h={92} variant="radial-gradient" rightSection={<FlashIcon />} onClick={backToHome}>
            home page
          </Button>
        </Stack>
        <Footer />
      </Stack>
    </div>
  );
}
