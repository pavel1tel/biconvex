import { Button, Group, TextInput } from "@mantine/core";
import clsx from "clsx";

import { TableSelectionButton } from "@/shared/types/TableSelectionButton";

import { SearchIcon } from "..";
import classes from "./styles.module.css";

export const TableSelectionHeader = ({ selectors, headerClassName = "" }: { selectors: Array<TableSelectionButton>; headerClassName?: string }) => {
  return (
    <Group justify={"space-between"} className={clsx(classes.tableHeader, classes[headerClassName])}>
      <Group className={classes.coinButtons}>
        {selectors.map((selector) => (
          <Button
            size="xl"
            variant="outline"
            className={clsx({ [classes.ratesButtonRootActive]: selector.isSelected })}
            classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}
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
