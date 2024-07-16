import { Button, Group, Image, PasswordInput, Stack, Text, Title, rem } from "@mantine/core";
import { sample } from "effector";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { requestNewPassword } from "@/shared/api";
import { showErrorNotification } from "@/shared/lib/notification";
import { Header, HidePasswordIcon, ShowPasswordIcon, Wrapper } from "@/shared/ui";

import { Footer } from "../components/Footer/Footer";
import { $response } from "../sign-up/model";
import classes from "./styles.module.css";

const ResetIcon = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3934 11.6168C24.3853 11.6347 24.3771 11.6526 24.3695 11.6707C24.3618 11.6896 24.3557 11.7093 24.3496 11.7289C24.3398 11.7608 24.33 11.7925 24.3132 11.8204C24.28 11.8755 24.2365 11.9218 24.1928 11.9683C24.1804 11.9815 24.168 11.9948 24.1557 12.0082C24.1421 12.0223 24.1301 12.0378 24.118 12.0532C24.1012 12.0748 24.0845 12.0963 24.0635 12.114C24.0005 12.1655 23.9277 12.2012 23.8551 12.2369C23.8499 12.2394 23.8448 12.242 23.8396 12.2445C23.8243 12.2519 23.8097 12.2613 23.7951 12.2707C23.7744 12.284 23.7536 12.2973 23.7305 12.3053C23.609 12.3503 23.4796 12.375 23.3457 12.375C23.285 12.375 23.222 12.3705 23.1601 12.3593L18.3789 11.5661C17.7657 11.4649 17.3517 10.8855 17.453 10.2724C17.5542 9.66038 18.1325 9.24075 18.7467 9.34762L20.5962 9.65363C19.1956 7.19437 16.5215 5.625 13.5785 5.625C10.2496 5.625 7.31673 7.55775 6.10511 10.5469C5.92848 10.9856 5.50661 11.25 5.06223 11.25C4.92161 11.25 4.77873 11.2241 4.64036 11.1679C4.06436 10.935 3.78648 10.2791 4.02048 9.70312C5.57748 5.859 9.32936 3.375 13.5785 3.375C17.417 3.375 20.9056 5.47875 22.6662 8.7615L23.0814 6.54188C23.1961 5.93213 23.7856 5.52825 24.3942 5.64525C25.0051 5.75887 25.4079 6.34725 25.2931 6.95812L24.4505 11.4581C24.4397 11.5155 24.4166 11.5661 24.3934 11.6168ZM20.8951 16.4534C21.1279 15.8762 21.7849 15.5995 22.3598 15.8323C22.9358 16.0652 23.2137 16.7211 22.9797 17.2971C21.4227 21.1412 17.6708 23.6252 13.4217 23.6252C9.58319 23.6252 6.09457 21.5215 4.33394 18.2387L3.91769 20.4572C3.81757 20.9984 3.34507 21.3752 2.81294 21.3752C2.74432 21.3752 2.67457 21.3685 2.60482 21.355C1.99394 21.2414 1.59232 20.653 1.70707 20.0421L2.54969 15.5421C2.55825 15.4979 2.57718 15.4587 2.59621 15.4193C2.60721 15.3965 2.61825 15.3736 2.62732 15.3497C2.63621 15.3273 2.64398 15.3041 2.65177 15.2809C2.66859 15.2306 2.68548 15.1802 2.71394 15.1371C2.73055 15.1115 2.75226 15.091 2.7741 15.0704C2.78778 15.0575 2.80151 15.0445 2.81407 15.0302C2.82398 15.0188 2.83378 15.0072 2.84356 14.9957C2.8971 14.9326 2.95016 14.87 3.01769 14.8243C3.02433 14.8195 3.03225 14.8166 3.04008 14.8138C3.04686 14.8113 3.05358 14.8089 3.05932 14.8052C3.16844 14.7344 3.28544 14.6792 3.41482 14.6511C3.4227 14.6493 3.43091 14.6497 3.43909 14.6502C3.44609 14.6506 3.45307 14.651 3.45982 14.65C3.58357 14.6297 3.70844 14.6173 3.84007 14.6398L8.62132 15.4341C9.23444 15.5342 9.64844 16.1147 9.54719 16.7278C9.45607 17.278 8.97907 17.6684 8.43794 17.6684C8.37719 17.6684 8.31532 17.6638 8.25344 17.6526L6.40394 17.3466C7.80457 19.8059 10.4787 21.3752 13.4217 21.3752C16.7506 21.3752 19.6834 19.4425 20.8951 16.4534Z"
        fill="white"
      />
    </svg>
  );
};

export const Page = () => {
  const [newPassword, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isError, setIsError] = useState(false);
  const isLoading = useUnit(requestNewPassword.pending);
  const userId = useUnit($response);
  const onContinue = (e: React.MouseEvent) => {
    if (newPassword === "" || rePassword === "") {
      setIsError(true);
      showErrorNotification("Fill all the fields");
      return;
    }

    if (newPassword !== rePassword) {
      setIsError(true);
      showErrorNotification("Passwords do not match");
      return;
    }
    e.preventDefault();
    const code = localStorage.getItem("code") + "";
    requestNewPassword({ userId, code, newPassword, rePassword });
  };

  useEffect(() => {
    setIsError(false);
  }, [newPassword, rePassword]);

  sample({
    clock: requestNewPassword.failData,
    fn: () => setIsError(true),
  });

  return (
    <Wrapper>
      <Helmet>
        <title> New Password | BitConvex </title>
      </Helmet>
      <Header />

      <Group align="start" justify="center" className={classes.contentWrapper}>
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
          alt="enter-new-password-light-left"
          className={classes.lightLeft}
        />
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
          alt="enter-new-password-light-right"
          className={classes.lightRight}
        />

        <Stack align={"center"} gap={"clamp(1.5rem, 3vw, 3rem)"} className={classes.formWrapper}>
          <Stack gap={rem("28px")}>
            <Title c="white" order={2} ta={"center"} fz={54}>
              Enter your <br /> new password
            </Title>
            <Text ta={"center"} variant="text-2" className={classes.greyText}>
              We wish you never forget your password again!
            </Text>
          </Stack>

          <Stack gap={rem("32px")} className={classes.form}>
            <Stack gap={rem("16px")} className={classes.zIndex}>
              <label htmlFor="pass">
                <Text variant="text-4" c="white" mb={8}>
                  Password
                </Text>
                <PasswordInput
                  error={isError}
                  value={newPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  id="pass"
                  classNames={{ innerInput: classes.passwordInput }}
                  size="xxl"
                  placeholder="Your new password"
                  visibilityToggleIcon={({ reveal }) => (reveal ? <HidePasswordIcon /> : <ShowPasswordIcon />)}
                />
              </label>
              <label htmlFor="confirmPass">
                <Text variant="text-4" c="white" mb={8}>
                  Confirm your password
                </Text>
                <PasswordInput
                  error={isError}
                  id="confirmPass"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  classNames={{ innerInput: classes.passwordInput }}
                  size="xxl"
                  placeholder="Your new password again"
                  visibilityToggleIcon={({ reveal }) => (reveal ? <HidePasswordIcon /> : <ShowPasswordIcon />)}
                />
              </label>
            </Stack>

            <Stack gap={rem("32px")}>
              <Button
                loading={isLoading}
                size="xxl"
                className={classes.btn}
                variant="radial-gradient"
                rightSection={<ResetIcon />}
                onClick={onContinue}
              >
                Update password
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Group>
      <Footer />
    </Wrapper>
  );
};
