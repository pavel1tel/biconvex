import { Button, Divider, Modal, Stack, Text, TextInput, rem } from "@mantine/core";
import { FC, useState } from "react";


import { loginUser2FA } from "@/shared/api";
import classes from "./style.module.css";

type TwoFAModalProps = {
  opened: boolean;
  close: () => void;
  userId: string;
};
export const TwoFAModal: FC<TwoFAModalProps> = ({ opened, close, userId }) => {
  const [code, setCode] = useState<string>("");
  loginUser2FA.doneData.watch(e => {
    close()
  })
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
          <Text className={classes.modalText}>To activate, enter the code from Google Authenticator</Text>

          <TextInput value={code} onChange={(e) => setCode(e.target.value)} className={classes.activateCodeInput} placeholder="Enter code" />
        </Stack>
        <Divider color="rgba(255, 255, 255, 0.12)" />
        <Button onClick={() => loginUser2FA({ code_2fa: code, user_id: userId })} className={classes.btn} fullWidth h={rem("54px")} variant="radial-gradient">
          Submit
        </Button>
      </Stack>
    </Modal>
  );
};
