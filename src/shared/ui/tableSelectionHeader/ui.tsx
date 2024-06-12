import { Button, Group, TextInput } from "@mantine/core";
import clsx from "clsx";

import { Selector } from "@/pages/crypto-market-cap/page";

import { SearchIcon } from "..";
import classes from "./styles.module.css";

interface TableSelectionHeaderProps {
  selectors: Array<Selector>;
  headerClassName?: string;
  handleTabClick: (selector: Selector) => void;
  activeTab: Selector;
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableSelectionHeader = ({
  selectors,
  headerClassName = "",
  handleTabClick,
  activeTab,
  searchQuery,
  onSearchChange,
}: TableSelectionHeaderProps) => {
  return (
    <Group justify={"space-between"} className={clsx(classes.tableHeader, headerClassName && classes[headerClassName])}>
      <Group className={classes.coinButtons}>
        {selectors.map((selector: Selector) => (
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
        value={searchQuery}
        onChange={onSearchChange}
      />
    </Group>
  );
};
