import { Box, Button, Flex, Stack, Text, TextInput, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "atomic-router-react";
import { useUnit } from "effector-react";
import { useState } from "react";

import { ArrowIcon, CopyIcon, SecureIcon } from "@/pages/my-profile/ui";
import { TwoFAModal } from "@/pages/settings/ui/TwoFAModal";

import { activatePromo, getStakingHistoryFx } from "@/shared/api/profile/profile";
import { ProfileReponse } from "@/shared/api/types";
import { routes } from "@/shared/routing";

import { $profileReponse } from "../../model";
import classes from "./styles.module.css";

export const Promocode = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [promo, setPromo] = useState("");
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const profileReponsepending = useUnit<boolean>(getStakingHistoryFx.pending);
  const handleRedirection = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Flex className={classes.box} justify={"space-between"} mt={rem(32)}>
        <Box w={"300px"}>
          <Stack className={classes.grid} gap={rem("16px")}>
            <div className={classes.boxWrapper}>
              <Flex align={"center"} justify={"space-between"} className={profileReponse.kyc_accepted ? classes.boxGreen : classes.boxRed}>
                <Stack gap={8}>
                  <Flex gap={4} align={"center"}>
                    <CopyIcon />
                    <Text className={classes.subTitle}>Verification</Text>
                  </Flex>
                  {profileReponse.kyc_accepted ? (
                    <Text className={classes.textGreen}>VERIFIED</Text>
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
              <Flex align={"center"} justify={"space-between"} className={profileReponse.twoFactorEnabled ? classes.boxGreen : classes.boxOrange}>
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
                {profileReponse.twoFactorEnabled ? (
                  <></>
                ) : (
                  <button className={classes.actionArrow} onClick={open}>
                    <ArrowIcon />
                  </button>
                )}
              </Flex>
            </div>
          </Stack>
        </Box>
        <Box className={classes.wrapPromo}>
          <Box className={classes.promo}>
            <Text className={classes.title} mb={rem(16)}>
              Promo code
            </Text>
            <Flex gap={rem(16)} className={classes.wrapInput}>
              <TextInput
                onChange={(e) => setPromo(e.target.value)}
                classNames={{
                  input: classes.input,
                }}
                size="xl"
                placeholder="Enter affiliate code"
              />
              <Button onClick={() => activatePromo(promo)} className={classes.btn} w={rem(128)} h={rem(54)} variant="radial-gradient">
                Activate
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <TwoFAModal opened={opened} close={close} />
    </>
  );
};
