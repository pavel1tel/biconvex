import { useResize } from "@/hooks/useResize";
import { Stack, rem } from "@mantine/core";

import { StakingTable } from "@/pages/staking/ui";

import { Container } from "@/shared/ui";

import { INVESTMENTS, INVESTMENT_TABLE_HEADERS } from "./Investments";
import { StakingTableVerticalHeadings } from "./StakingTableVerticalHeadings";
import classes from "./styles.module.css";

export const ActiveInvestments = () => {
  const { isAdaptive: md } = useResize(1200);

  return (
    <Stack className={classes.wrapper} gap={rem(64)}>
      <Container>
        {md ? (
          <StakingTableVerticalHeadings />
        ) : (
          <StakingTable usedForTradingBot={true} tableHeaders={INVESTMENT_TABLE_HEADERS} tableData={INVESTMENTS} value1={""} />
        )}
      </Container>
    </Stack>
  );
};
