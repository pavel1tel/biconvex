import { Group } from "@mantine/core";
import { useState } from "react";

import { Filters } from "./components/Filters/Filters";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { Trade } from "./components/Trade/Trade";
import classes from "./styles.module.css";

export const P2PContent = () => {
  const [tab, setTab] = useState("Buy");
  return (
    <div className={classes.wrapper}>
      <PageHeader />
      <Group className={classes.flex} gap={32} align="start">
        <Filters setTab={setTab} />
        <Trade tabName={tab} />
      </Group>
    </div>
  );
};
