import { useResize } from "@/hooks/useResize";
import { Stack, rem } from "@mantine/core";

import { Container } from "@/shared/ui";
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
          <div></div>
          // <StakingTable usedForTradingBot={true} tableHeaders={INVESTMENT_TABLE_HEADERS} tableData={INVESTMENTS} />
        )}
      </Container>
    </Stack>
  );
};
