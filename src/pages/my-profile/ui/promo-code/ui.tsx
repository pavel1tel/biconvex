import { Box, Button, Flex, Stack, Text, TextInput, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "atomic-router-react";

import { ArrowIcon, CopyIcon, SecureIcon } from "@/pages/my-profile/ui";
import { TwoFAModal } from "@/pages/settings/ui/TwoFAModal";

import { routes } from "@/shared/routing";

import classes from "./styles.module.css";

export const Promocode = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleRedirection = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Flex className={classes.box} justify={"space-between"} mt={rem(32)}>
        <Box w={"300px"}>
          <Stack className={classes.grid} gap={rem("16px")}>
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
              <Flex align={"center"} justify={"space-between"} className={classes.boxGreen}>
                <Stack gap={8}>
                  <Flex gap={4} align={"center"}>
                    <SecureIcon />
                    <Text className={classes.subTitle}>Security level</Text>
                  </Flex>
                  <Text className={classes.textGreen}>HARD</Text>
                </Stack>
                <button className={classes.actionArrow} onClick={open}>
                  <ArrowIcon />
                </button>
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
                classNames={{
                  input: classes.input,
                }}
                size="xl"
                placeholder="Enter affiliate code"
              />
              <Button className={classes.btn} w={rem(128)} h={rem(54)} variant="radial-gradient">
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
