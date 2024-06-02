import { Button, Checkbox, Group, Image, PasswordInput, Stack, Text, TextInput, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import { Helmet } from "react-helmet-async";

import { routes } from "@/shared/routing";
import { Header, HidePasswordIcon, ShowPasswordIcon, Wrapper } from "@/shared/ui";

import { Footer } from "../components/Footer/Footer";
import classes from "./styles.module.css";

const EnterIcon = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1252 4.5H21.3752C21.994 4.5 22.5002 5.00625 22.5002 5.625V21.375C22.5002 21.9937 21.994 22.5 21.3752 22.5H19.1252C18.5065 22.5 18.0002 21.9937 18.0002 21.375C18.0002 20.7563 18.5065 20.25 19.1252 20.25H20.2502V6.75H19.1252C18.5065 6.75 18.0002 6.24375 18.0002 5.625C18.0002 5.00625 18.5065 4.5 19.1252 4.5ZM11.7 8.10045C12.1995 7.72808 12.9026 7.82932 13.275 8.32545L16.65 12.8254C16.9425 13.2147 16.9515 13.7479 16.6702 14.1473L13.5045 18.6473C13.2851 18.959 12.9375 19.1255 12.5831 19.1255C12.3604 19.1255 12.1342 19.0591 11.9374 18.9207C11.4289 18.563 11.3063 17.8609 11.664 17.3524L13.5968 14.6052C13.5816 14.6067 13.5674 14.611 13.5532 14.6152C13.5358 14.6203 13.5186 14.6255 13.5 14.6255H4.5C3.879 14.6255 3.375 14.1215 3.375 13.5005C3.375 12.8783 3.879 12.3755 4.5 12.3755H13.5H13.5011L11.475 9.67432C11.1026 9.1782 11.2028 8.47283 11.7 8.10045Z"
        fill="white"
      />
    </svg>
  );
};

export const Page = () => {
  return (
    <Wrapper>
      <Helmet>
        <title> Sign In | BitConvex </title>
      </Helmet>
      <Header />

      <Group align="start" justify="center" className={classes.contentWrapper}>
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
          alt="sign-in-light-left"
          className={classes.lightLeft}
        />
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
          alt="sign-in-light-right"
          className={classes.lightRight}
        />

        <Stack gap={"clamp(1.5rem, 3vw, 3rem)"} className={classes.formWrapper}>
          <Stack gap={"clamp(1rem, 1.75vw, 1.75rem)"}>
            <Title c="white" ta={"center"} order={2} fz={54}>
              Sign In to BitConvex{" "}
            </Title>
            <Text ta="center" color="white" variant="text-2" className={classes.greyText}>
              Access the Future of Finance! Sign In to Your Account.
            </Text>
          </Stack>

          <Stack gap={rem("32px")} className={classes.form} m={"auto"}>
            <Stack gap={rem(32)} className={classes.zIndex}>
              <Stack gap={rem("16px")}>
                <label htmlFor="email">
                  <Text variant="text-4" c="white" mb={8} lh={"19.49px"}>
                    Email
                  </Text>
                  <TextInput id="email" size="xxl" placeholder="Your email" />
                </label>
                <label htmlFor="pass">
                  <Text variant="text-4" c="white" mb={8} lh={"19.49px"}>
                    Password
                  </Text>
                  <PasswordInput
                    id="pass"
                    classNames={{ innerInput: classes.passwordInput }}
                    size="xxl"
                    placeholder="Your password"
                    visibilityToggleIcon={({ reveal }) => (reveal ? <HidePasswordIcon /> : <ShowPasswordIcon />)}
                  />
                </label>
              </Stack>

              <Group justify={"space-between"}>
                <Checkbox
                  c="white"
                  label={
                    <Text fz={16} c="white" className={classes.rememberMeLabel}>
                      Remember me
                    </Text>
                  }
                />
                <Text to={routes.auth.forgotPassword} fz={16} component={Link} className={classes.blueText}>
                  Forgot Password?
                </Text>
              </Group>
            </Stack>

            <Stack gap={"clamp(1.5rem, 2vw, 2rem)"}>
              <Button size="xxl" className={classes.btn} h={{ 0: 78, md: 92 }} variant="radial-gradient" rightSection={<EnterIcon />}>
                SIGN IN
              </Button>
              <Text c="white" ta="left" fz={16}>
                Don’t have an account?{" "}
                <Text fz={16} to={routes.auth.signUp} component={Link} className={classes.blueText}>
                  Register Here
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Group>
      <Footer />
    </Wrapper>
  );
};
