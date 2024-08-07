import { Flex, Group, Stack, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

import { $kycResponse } from "@/pages/kyc/model";
import { $profileReponse } from "@/pages/my-profile/model";
import { ArrowIcon, CopyIcon, SecureIcon } from "@/pages/my-profile/ui";

import { ProfileReponse } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { LoadingScreen } from "@/shared/ui";

import { TwoFAModal } from "../TwoFAModal";
import { AccountInfoForm } from "./components/AccountInfoForm";
import { PasswordForm } from "./components/PasswordForm";
import { PersonalInfoFrom } from "./components/PersonalInfoFrom";
import classes from "./style.module.css";

export const SettingsBox = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const kycResponse = useUnit<any>($kycResponse);
  const [loading, setLoading] = useState(true);

  const handleRedirection = () => window.scrollTo(0, 0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <Stack gap={rem(32)}>
        <Text component="h2" className={classes.mainTitle}>
          My Profile
        </Text>
        <Group wrap="nowrap">
          <div className={classes.boxWrapper}>
            <Flex
              align={"center"}
              justify={"space-between"}
              className={profileReponse.kyc_accepted ? classes.boxGreen : kycResponse.id_type ? classes.boxOrange : classes.boxRed}
            >
              <Stack gap={8}>
                <Flex gap={4} align={"center"}>
                  <CopyIcon />
                  <Text className={classes.subTitle}>Verification</Text>
                </Flex>
                {profileReponse.kyc_accepted ? (
                  <Text className={classes.textGreen}>VERIFIED</Text>
                ) : kycResponse.id_type ? (
                  <Text className={classes.textOrange}>IN PROGRESS</Text>
                ) : (
                  <Text className={classes.textRed}>UNVERIFIED</Text>
                )}
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
                {profileReponse.twoFactorEnabled ? (
                  <Text className={classes.textGreen}>HARD</Text>
                ) : (
                  <Text className={classes.textOrange}>MEDIUM</Text>
                )}
              </Stack>
              <button className={classes.actionArrow} onClick={open}>
                <ArrowIcon />
              </button>
            </Flex>
          </div>
        </Group>
        <Stack gap={rem(16)} style={{ position: "relative" }}>
          {loading && <LoadingScreen type="block" opened={loading} overlayStyles={{ top: 0 }} />}
          <AccountInfoForm />
          <PersonalInfoFrom />
          <PasswordForm />
        </Stack>
      </Stack>
      <TwoFAModal opened={opened} close={close} />
    </>
  );
};
