import { Flex, Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

import { LoadingScreen } from "@/shared/ui";

import { Filters } from "./components/Filters/Filters";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { Trade } from "./components/Trade/Trade";
import classes from "./styles.module.css";

export const P2PContent = () => {
  const [tab, setTab] = useState("Buy");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className={classes.wrapper}>
      <PageHeader />
      {loading ? (
        <Flex className={classes.flex} gap={32} align="start">
          <Filters setTab={setTab} />

          <Stack className={classes.flex} w="100%" gap={32}>
            <Trade tabName={tab} />
          </Stack>
        </Flex>
      ) : (
        <Group className={classes.flex} gap={32} align="start">
          <Filters setTab={setTab} />

          <Trade tabName={tab} />
          {/* <Stack pos="relative">
        {loading && <LoadingScreen type="block" opened={loading} />}
         
        </Stack> */}
        </Group>
      )}
    </div>
  );
};
