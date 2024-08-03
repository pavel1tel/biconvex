import { Button, Stack, rem } from "@mantine/core";

import { Container, StartTradingIcon } from "@/shared/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle";
import { ProfitChart } from "./ProfitChart/ui";
import classes from "./styles.module.css";

export const CalculateProfit = () => {
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)}>
          <HighlightedBlueTitle title="Calculate" subTitle="Your Profit" />
          <ProfitChart />
          <Button size="extra-large" variant="radial-gradient" className={classes.mainButton} rightSection={<StartTradingIcon />}>
            ACTIVATE BOT
          </Button>
        </Stack>
      </Container>
      {/* <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/trading-bots/cube_2.png`} alt="cube-2" className={classes.cubeTwo} />
      <Image
        draggable={false}
        src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_cube.png`}
        alt="light-cube-2"
        className={classes.lightCubeTwo}
      /> */}
    </Stack>
  );
};
