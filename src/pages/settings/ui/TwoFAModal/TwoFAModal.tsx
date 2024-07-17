import { Button, Divider, Group, Image, Modal, Stack, Text, TextInput, rem } from "@mantine/core";
import { useUnit } from "effector-react";
import { FC, useState } from "react";

import { $profileReponse } from "@/pages/my-profile/model";

import { enable2Fa } from "@/shared/api/2fa/requests";
import { ProfileReponse } from "@/shared/api/types";
import { showSuccessNotification } from "@/shared/lib/notification";

import classes from "./style.module.css";

type TwoFAModalProps = {
  opened: boolean;
  close: () => void;
};
export const TwoFAModal: FC<TwoFAModalProps> = ({ opened, close }) => {
  const profileReponse = useUnit<ProfileReponse>($profileReponse);
  const [code, setCode] = useState<string>("");
  enable2Fa.doneData.watch((e) => {
    close();
  });
  return (
    <Modal
      opened={opened}
      onClose={close}
      yOffset="4vh"
      title={
        <>
          Google <span>2FA</span> Verification
        </>
      }
      classNames={{
        close: classes.modalCloseIcon,
        content: classes.modalContent,
        header: classes.modalHeader,
        body: classes.modalBody,
      }}
      overlayProps={{
        blur: 10,
      }}
      size={580}
    >
      <Stack gap={rem(24)}>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Stack gap={rem(16)}>
          <Text className={classes.modalText}>
            1. Scan QR code in the <Text span>Google Authenticator App</Text>
          </Text>
          <Group gap={rem(32)} align="center" wrap="nowrap">
            <div className={classes.qrCodeWrapper}>
              {/* <QRCode/> */}
              <Image
                w={128}
                h={128}
                src={
                  "https://api.qrserver.com/v1/create-qr-code/?data=otpauth://totp/bitconvex.com+(" +
                  profileReponse.email +
                  ")?secret=" +
                  profileReponse.two_factor_code +
                  "&amp;size=128x128&amp;ecc=M"
                }
              ></Image>
            </div>
            <Text className={classes.modalTextDescription}>
              To add this account to the Google Authenticator app, scan the QR code . Simply open the app, tap on the QR scanner icon in the top right
              corner and hold your device's camera in front of the code. Security is in your hands!
            </Text>
          </Group>
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Stack gap={rem(16)}>
          <Text className={classes.modalText}>
            2. Write down this <Text span>secret code</Text> in a safe place
          </Text>
          <div className={classes.copyRefWrapper}>
            <TextInput value={profileReponse.two_factor_code} className={classes.refLink} />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(profileReponse.two_factor_code ? profileReponse.two_factor_code : "");
                showSuccessNotification("Copied!");
              }}
              className={classes.btn}
              h={rem("54px")}
              variant="radial-gradient"
            >
              Copy
            </Button>
          </div>
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Stack gap={rem(16)}>
          <Text className={classes.modalText}>3. To activate, enter the code that has started to be generated</Text>

          <TextInput value={code} onChange={(e) => setCode(e.target.value)} className={classes.activateCodeInput} placeholder="Enter code" />
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Button onClick={() => enable2Fa(code)} className={classes.btn} fullWidth h={rem("54px")} variant="radial-gradient">
          Activate Google 2FA
        </Button>
      </Stack>
    </Modal>
  );
};
