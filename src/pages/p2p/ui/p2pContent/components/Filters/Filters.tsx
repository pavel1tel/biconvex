import { Button, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Dispatch, SetStateAction } from "react";

import { Switch } from "@/shared/ui/switch/Switch";
import { Tabs } from "@/shared/ui/tabs";
import { Tab } from "@/shared/ui/tabs/Tabs.types";

import { BuyFilters } from "../BuyFilters/BuyFilters";
import { SellFIlters } from "../SellFIlters/SellFIlters";
import classes from "./Filters.module.css";

const filterTabs: Tab[] = [
  {
    id: "buy",
    title: "Buy",
    content: <BuyFilters />,
  },
  {
    id: "sell",
    title: "Sell",
    content: <SellFIlters />,
  },
];

export const Filters = ({ setTab }: { setTab: Dispatch<SetStateAction<string>> }) => {
  const form = useForm({
    initialValues: {
      verified: false,
      active: false,
    },
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log("values", values))}>
      <div className={classes.filtersContainer}>
        <Tabs tabs={filterTabs} onTabChange={(tab) => setTab(tab?.title ?? "")} />
        <Divider opacity={0.12} />
        <Switch label="Verified users" description="Show ads of verified traders only" {...form.getInputProps("verified", { type: "checkbox" })} />
        <Switch label="Active users" description="Show traders who are online only" {...form.getInputProps("active", { type: "checkbox" })} />
        <Button type="submit" className={classes.searchButton} variant="radial-gradient">
          Search
        </Button>
      </div>
    </form>
  );
};
