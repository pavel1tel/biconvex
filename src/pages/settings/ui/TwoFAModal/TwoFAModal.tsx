import { Button, Divider, Group, Modal, Stack, Text, TextInput, rem } from "@mantine/core";
import { FC } from "react";

import { QRCode } from "@/shared/ui/icon/QRCode";

import classes from "./style.module.css";

type TwoFAModalProps = {
  opened: boolean;
  close: () => void;
};
export const TwoFAModal: FC<TwoFAModalProps> = ({ opened, close }) => {
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
              <QRCode />
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
            <TextInput value="bc1qhq3n0aauaavz55123dsdf12" className={classes.refLink} />
            <Button className={classes.btn} h={rem("54px")} variant="radial-gradient">
              Copy
            </Button>
          </div>
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Stack gap={rem(16)}>
          <Text className={classes.modalText}>3. To activate, enter the code that has started to be generated</Text>

          <TextInput className={classes.activateCodeInput} placeholder="Enter code" />
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Button className={classes.btn} fullWidth h={rem("54px")} variant="radial-gradient">
          Activate Google 2FA
        </Button>
      </Stack>
    </Modal>
  );
};
