import { Box, Button, Center, Flex, Image, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { ReactNode } from "react";

import { routes } from "@/shared/routing";
import {
  AffiliateIcon,
  DepositIcon,
  EmptyIcon,
  ProfileIcon,
  SettingsIcon,
  TransactionsIcon,
  TransferIcon,
  WithdrawIcon,
  WorkerPanelIcon,
} from "@/shared/ui/sidebar/Icons";

import { DownloadAvatar } from "../icon/DownloadAvatar";
import classes from "./styles.module.css";

const LINKS = [
  {
    icon: <ProfileIcon />,
    to: routes.myProfile,
    label: "My Profile",
  },
  {
    icon: <DepositIcon />,
    to: routes.deposit,
    label: "Deposit",
  },
  {
    icon: <WithdrawIcon />,
    to: routes.withdraw,
    label: "Withdraw",
  },
  {
    icon: <TransactionsIcon />,
    to: routes.transactions,
    label: "Transactions",
  },
  {
    icon: <TransferIcon />,
    to: routes.transfer,
    label: "Transfer",
  },
  {
    icon: <AffiliateIcon />,
    to: routes.affiliate,
    label: "Affiliate",
  },
  {
    icon: <SettingsIcon />,
    to: routes.settings,
    label: "Settings",
  },
  {
    icon: <WorkerPanelIcon />,
    to: routes.home,
    label: "Worker Panel",
  },
];
export const Sidebar = ({
  children,
  gap = 32,
  verticalPadding,
}: {
  children: ReactNode;
  gap?: number | string;
  verticalPadding?: number | string;
}) => {
  return (
    <Box className={classes.wrapper} style={{ paddingTop: verticalPadding, paddingBottom: verticalPadding }}>
      <Flex gap={gap} align={"flex-start"}>
        <Flex direction={"column"} gap={rem("32px")} className={classes.box}>
          <Flex align={"center"} gap={rem("16px")}>
            <Center className={classes.avatar}>
              <EmptyIcon />
              <Button className={clsx(classes.pill, classes.downloadAvatarAction)} variant="linear-gradient">
                <DownloadAvatar />
              </Button>
            </Center>
            <Stack gap={rem(8)}>
              <Flex gap={rem(8)} c={"white"}>
                <Title className={classes.name} order={4}>
                  Allie Grater
                </Title>
                <Flex className={classes.pill}>
                  <Image className={classes.img} draggable={false} src={`${import.meta.env.BASE_URL}assets/Diamond.png`} alt="diamod" />
                  <Text className={classes.vip}>VIP</Text>
                </Flex>
              </Flex>
              <Stack gap={rem("4px")} className={classes.text}>
                <Text ff={"ProximaNova"} className={classes.text}>
                  ID: 2343424
                </Text>
                <Text ff={"ProximaNova"} className={classes.text}>
                  Mail: user@gmail.com
                </Text>
              </Stack>
            </Stack>
          </Flex>
          <Stack gap={rem("32px")}>
            <Stack gap={rem("16px")}>
              {LINKS.map((item) => (
                <Link to={item.to} activeClassName={classes.activeLink} className={clsx(classes.link)}>
                  <Flex gap={rem("8px")}>
                    <Box>{item.icon}</Box>
                    <Text ff={"ProximaNova"} className={classes.textBtn}>
                      {item.label}
                    </Text>
                  </Flex>
                </Link>
              ))}
            </Stack>
            <Button className={classes.btn} maw={rem("352px")} h={rem("54px")} variant="radial-gradient">
              Log out
            </Button>
          </Stack>
        </Flex>
        <Box className={classes.contentWrapper}>{children}</Box>
      </Flex>
    </Box>
  );
};
