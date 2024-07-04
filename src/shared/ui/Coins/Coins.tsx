import { useResize } from "@/hooks/useResize";
import { Button, CloseButton, Popover, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { Crypto } from "@/shared/api/types";
import { getCoinTabs } from "@/shared/config/Coins.config";
import { ArrowDown, SearchIcon } from "@/shared/ui";
import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../TradePageContainer/Container";
import classes from "./Coins.module.css";

export const Coins = ({ coins, setCurrentPair }: { coins: Crypto[] | undefined; setCurrentPair: Dispatch<SetStateAction<string>> }) => {
  const { isAdaptive: md } = useResize(1200);
  const [opened, { close, toggle }] = useDisclosure(false);
  const [search, setSearch] = useState<string>("");
  return (
    <Popover keepMounted opened={opened} position="top">
      <Popover.Target>
        <Button bg={"transparent"} px={8} className={classes.target} onClick={toggle}>
          <ArrowDown />
        </Button>
      </Popover.Target>
      <Popover.Dropdown className={clsx(classes.dropdown, classes.searchPopover)}>
        <div className={classes.coinsContainer}>
          <Container>
            <Stack gap={32} h={"100%"}>
              <div className={classes.searchContainer}>
                <TextInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  h={51}
                  classNames={{
                    input: classes.searchInput,
                    wrapper: classes.searchInputWrapper,
                    section: classes.searchInputSection,
                  }}
                  leftSection={<SearchIcon />}
                  placeholder="Search Coin Name"
                />
                <CloseButton className={classes.closeSearchWndowIcon} onClick={close} />
              </div>
              <Tabs tabs={getCoinTabs(coins ? coins : [], setCurrentPair, search)} showTrack={false} indicatorRadius={8} tabControllFontSize={16} />
            </Stack>
          </Container>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
