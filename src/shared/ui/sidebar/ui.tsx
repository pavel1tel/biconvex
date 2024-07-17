import { Box, Button, Center, FileInput, Flex, Image, Stack, Text, Title, rem } from "@mantine/core";
import { redirect } from "atomic-router";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { createEvent, sample } from "effector";
import { useUnit } from "effector-react";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

import { $token } from "@/pages/auth/sign-in/model";
import { $profileReponse } from "@/pages/my-profile/model";

import { getStakingHistoryFx, uploadAvatar } from "@/shared/api/profile/profile";
import { ProfileReponse } from "@/shared/api/types";
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const profileReponsepending = useUnit<boolean>(getStakingHistoryFx.pending);
  const logout = createEvent();
  const inputFile = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const eraseCookie = (name: string) => {
    document.cookie = name + "=; Max-Age=-99999999;";
  };

  sample({
    clock: logout,
    fn: () => "",
    target: $token,
  });

  sample({
    clock: logout,
    fn: () => eraseCookie("session_id"),
  });

  redirect({
    clock: logout,
    route: routes.home,
  });
  useEffect(() => {
    if (!profileReponsepending) {
      setEmail(profileReponse.email!);
      setUsername(profileReponse.username!);
      setId(profileReponse.id!);
    }
  }, [profileReponse, profileReponsepending]);

  useEffect(() => {
    if (file != null) {
      uploadAvatar(file);
    }
  }, [file]);

  const avatar = useMemo(() => {
    return <>{profileReponse.avatar?.startsWith("data:image") ? <Image className={classes.avatar} src={profileReponse.avatar} /> : <EmptyIcon />}</>;
  }, [profileReponsepending]);

  return (
    <Box className={classes.wrapper} style={{ paddingTop: verticalPadding, paddingBottom: verticalPadding }}>
      <Flex gap={gap} style={{ alignItems: "inherit" }}>
        <Flex direction={"column"} gap={rem("32px")} className={classes.box}>
          <Flex align={"center"} gap={rem("16px")}>
            <Center className={classes.avatar}>
              {avatar}
              <Button className={clsx(classes.pill, classes.downloadAvatarAction)} variant="linear-gradient">
                <DownloadAvatar
                  onClick={() => {
                    inputFile.current ? inputFile.current.click() : "";
                  }}
                />
              </Button>
            </Center>
            <Stack gap={rem(8)}>
              <Flex gap={rem(8)} c={"white"}>
                <Title className={classes.name} order={4}>
                  {username}
                </Title>
                {profileReponse.premium ? (
                  <Flex className={classes.pill}>
                    <Image className={classes.img} draggable={false} src={`${import.meta.env.BASE_URL}assets/Diamond.png`} alt="diamod" />
                    <Text className={classes.vip}>VIP</Text>
                  </Flex>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Stack gap={rem("4px")} className={classes.text}>
                <Text ff={"ProximaNova"} className={classes.text}>
                  ID: {id}
                </Text>
                <Text ff={"ProximaNova"} className={classes.text}>
                  Mail: {email}
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
              {profileReponse.panel != null && profileReponse.panel == "Worker" ? (
                <Link to="https://20.79.188.227/panel" activeClassName={classes.activeLink} className={clsx(classes.link)}>
                  <Flex gap={rem("8px")}>
                    <Box>
                      <WorkerPanelIcon />
                    </Box>
                    <Text ff={"ProximaNova"} className={classes.textBtn}>
                      Worker Panel
                    </Text>
                  </Flex>
                </Link>
              ) : (
                <div></div>
              )}
            </Stack>
            <Button onClick={() => logout()} className={classes.btn} maw={rem("352px")} h={rem("54px")} variant="radial-gradient">
              Log out
            </Button>
          </Stack>
        </Flex>
        <Box className={classes.contentWrapper}>{children}</Box>
      </Flex>
      <FileInput value={file} onChange={setFile} accept="image/png,image/jpeg" ref={inputFile} display={"none"} />
    </Box>
  );
};
