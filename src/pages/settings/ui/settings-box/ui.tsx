import { Flex, Group, Stack, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "atomic-router-react";

import { ArrowIcon, CopyIcon, SecureIcon } from "@/pages/my-profile/ui";

import { routes } from "@/shared/routing";

import { TwoFAModal } from "../TwoFAModal";
import { AccountInfoForm } from "./components/AccountInfoForm";
import { PasswordForm } from "./components/PasswordForm";
import { PersonalInfoFrom } from "./components/PersonalInfoFrom";
import classes from "./style.module.css";

export const SettingsBox = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleRedirection = () => window.scrollTo(0, 0);

  return (
    <>
      <Stack gap={rem(32)}>
        <Text component="h2" className={classes.mainTitle}>
          My Profile
        </Text>
        <Group wrap="nowrap">
          <div className={classes.boxWrapper}>
            <Flex align={"center"} justify={"space-between"} className={classes.boxRed}>
              <Stack gap={8}>
                <Flex gap={4} align={"center"}>
                  <CopyIcon />
                  <Text className={classes.subTitle}>Verification</Text>
                </Flex>
                <Text className={classes.textRed}>UNVERIFIED</Text>
              </Stack>
              <Link to={routes.kyc} className={classes.actionArrow} onClick={handleRedirection}>
                <ArrowIcon />
              </Link>
            </Flex>
          </div>
          <div className={classes.boxWrapper}>
            <Flex align={"center"} justify={"space-between"} className={classes.boxOrange}>
              <Stack gap={8}>
                <Flex gap={4} align={"center"}>
                  <SecureIcon />
                  <Text className={classes.subTitle}>Security level</Text>
                </Flex>
                <Text className={classes.textOrange}>MEDIUM</Text>
              </Stack>
              <button className={classes.actionArrow} onClick={open}>
                <ArrowIcon />
              </button>
            </Flex>
          </div>
        </Group>
        <Stack gap={rem(16)}>
          <AccountInfoForm />
          <PersonalInfoFrom />
          <PasswordForm />
        </Stack>
      </Stack>
      <TwoFAModal opened={opened} close={close} />
    </>
  );
};
