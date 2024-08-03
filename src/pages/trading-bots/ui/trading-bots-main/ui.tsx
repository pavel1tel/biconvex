import { Stack } from "@mantine/core";

import { TradingResults } from "../trading-results";
import { Banner } from "./banner";

export const TradingBotsMain = () => {
  return (
    <Stack gap={32} py={64}>
      <Banner />
      <TradingResults />
    </Stack>
  );
};
