import { Button, Group, TextInput } from "@mantine/core";
import clsx from "clsx";

import { Selector } from "@/pages/crypto-market-cap/page";

import { SearchIcon } from "..";
import classes from "./styles.module.css";

export const TableSelectionHeader = ({
  selectors,
  headerClassName = "",
  handleTabClick,
  activeTab,
}: {
  selectors: Array<Selector> | any;
  headerClassName?: string;
  handleTabClick: (selector: Selector) => void;
  activeTab: Selector;
}) => {
  return (
    <Group justify={"space-between"} className={clsx(classes.tableHeader, headerClassName && classes[headerClassName])}>
      <Group className={classes.coinButtons}>
        {selectors.map((selector: any) => (
          <Button
            key={selector.label}
            size="xl"
            variant="outline"
            className={clsx({ [classes.ratesButtonRootActive]: selector.label === activeTab.label })}
            classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}
            onClick={() => handleTabClick(selector)}
          >
            {selector.label}
          </Button>
        ))}
      </Group>
      <TextInput
        size="lg"
        classNames={{
          input: classes.searchInput,
          wrapper: classes.searchInputWrapper,
        }}
        leftSection={<SearchIcon />}
        placeholder="Search Crypto"
      />
    </Group>
  );
};
