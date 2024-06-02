import { Button, Checkbox, Group, Image, PasswordInput, Stack, Text, TextInput, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";
import { Helmet } from "react-helmet-async";

import { routes } from "@/shared/routing";
import { Header, HidePasswordIcon, ShowPasswordIcon, Wrapper } from "@/shared/ui";

import { Footer } from "../components/Footer/Footer";
import classes from "./styles.module.css";

const StarIcon = () => {
  return (
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9989 18.0562C14.1777 18.0562 14.3566 18.0989 14.5197 18.1833L18.7599 20.3996L17.9532 15.7229C17.8891 15.3562 18.0117 14.9827 18.2795 14.7228L21.695 11.4198L16.9666 10.7313C16.601 10.6784 16.2849 10.4501 16.1206 10.1193L13.9989 5.85107L11.8771 10.1193C11.7129 10.4501 11.3967 10.6784 11.0311 10.7313L6.30273 11.4198L9.71823 14.7228C9.98598 14.9827 10.1086 15.3562 10.0445 15.7229L9.23786 20.3996L13.478 18.1833C13.6411 18.0989 13.82 18.0562 13.9989 18.0562ZM20.2567 23.5744C20.0779 23.5744 19.899 23.5327 19.7359 23.4472L13.9995 20.4502L8.26312 23.4472C7.88287 23.6452 7.42387 23.6104 7.08074 23.3584C6.73424 23.1064 6.56212 22.68 6.63412 22.2581L7.72761 15.9266L3.09262 11.4435C2.78324 11.1454 2.67299 10.6976 2.80462 10.2892C2.93512 9.88088 3.28837 9.58388 3.71249 9.522L10.1261 8.5905L12.9915 2.82375C13.3717 2.05875 14.6272 2.05875 15.0075 2.82375L17.8729 8.5905L24.2865 9.522C24.7106 9.58388 25.0639 9.88088 25.1944 10.2892C25.326 10.6976 25.2157 11.1454 24.9064 11.4435L20.2714 15.9266L21.3649 22.2581C21.4369 22.68 21.2647 23.1064 20.9182 23.3584C20.7236 23.5024 20.4907 23.5744 20.2567 23.5744Z"
        fill="white"
      />
    </svg>
  );
};

const ConfirmIcon = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.319 6.9895C23.8297 6.60475 23.1243 6.6925 22.7407 7.18188L14.8038 17.3159L14.1243 16.4733L12.7012 18.2924L13.9387 19.8303C14.1535 20.0958 14.4753 20.2499 14.8162 20.2499H14.824C15.166 20.2476 15.49 20.089 15.7015 19.8179L24.5114 8.56788C24.895 8.07963 24.8095 7.372 24.319 6.9895ZM18.6934 6.9895C18.2051 6.60475 17.4986 6.6925 17.115 7.18188L9.17812 17.3159L5.37675 12.5943C4.98525 12.1116 4.27875 12.0329 3.795 12.4233C3.31012 12.8136 3.23475 13.5224 3.62287 14.005L8.313 19.8303C8.52787 20.0958 8.84962 20.2499 9.1905 20.2499H9.19837C9.54037 20.2476 9.86437 20.089 10.0759 19.8179L18.8857 8.56788C19.2694 8.07963 19.1839 7.372 18.6934 6.9895ZM11.2277 12.8751L9.80229 14.6931L9.24879 14.0057C8.85954 13.5219 8.93491 12.8132 9.41979 12.4228C9.90466 12.0336 10.6123 12.1112 11.0015 12.5949L11.2277 12.8751Z"
        fill="white"
      />
    </svg>
  );
};

const ContinueIcon = () => {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6953 6.04466L21.1268 12.7947C21.4631 13.212 21.4575 13.8083 21.1144 14.22L15.4894 20.97C15.2666 21.2367 14.9471 21.375 14.6243 21.375C14.3711 21.375 14.1158 21.2895 13.9054 21.114C13.4273 20.7169 13.3631 20.007 13.7614 19.53L18.7969 13.4877L13.9414 7.45541C13.5521 6.97166 13.6286 6.26291 14.1135 5.87366C14.5973 5.48329 15.3049 5.56091 15.6953 6.04466ZM6.23839 5.87361C6.72214 5.48436 7.42976 5.56086 7.82014 6.04461L13.2516 12.7946C13.5869 13.212 13.5824 13.8082 13.2393 14.22L7.61426 20.97C7.39151 21.2366 7.07201 21.375 6.74914 21.375C6.49601 21.375 6.24064 21.2895 6.03026 21.114C5.55214 20.7169 5.48801 20.007 5.88626 19.53L10.9206 13.4876L6.06626 7.45536C5.67701 6.97161 5.75464 6.26286 6.23839 5.87361Z"
        fill="white"
      />
    </svg>
  );
};
type Steps = "form" | "email-check" | "security-code";
const Form = ({ onClick }: { onClick: Dispatch<SetStateAction<Steps>> }) => {
  return (
    <>
     <Helmet>
        <title> Sign up | BitConvex </title>
      </Helmet>
      <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
        <Title ta={"center"} c="white" order={2} fz={{ 0: 40, md: 54 }}>
          Create an account
        </Title>
        <Text ta={"center"} variant="text-2" className={classes.greyText}>
          Join the Future of Finance! Register on BitConvex!
        </Text>
      </Stack>

      <Stack gap={"clamp(1.5rem, 2vw, 2rem)"} w="100%" className={classes.wrapper}>
        <Stack gap={rem(32)} className={classes.zIndex}>
          <Stack gap={rem("16px")} className={classes.form}>
            <label htmlFor="username">
              <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
                Username
              </Text>
              <TextInput id="username" size="xxl" placeholder="Your username" autoCorrect="off" />
            </label>
            <label htmlFor="email">
              <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
                Email
              </Text>
              <TextInput id="email" size="xxl" type="email" placeholder="Your email" autoComplete="off" />
            </label>
            <label htmlFor="password">
              <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
                Password
              </Text>
              <PasswordInput
                id="password"
                classNames={{
                  innerInput: classes.passwordInput,
                }}
                size="xxl"
                placeholder="Your password"
                autoComplete="off"
                visibilityToggleIcon={({ reveal }) => (reveal ? <HidePasswordIcon /> : <ShowPasswordIcon />)}
              />
            </label>
            <label htmlFor="confirmPassword">
              <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
                Confirm your password
              </Text>
              <PasswordInput
                id="confirmPassword"
                classNames={{
                  innerInput: classes.passwordInput,
                }}
                size="xxl"
                placeholder="Your password again"
                autoComplete="off"
                visibilityToggleIcon={({ reveal }) => (reveal ? <HidePasswordIcon /> : <ShowPasswordIcon />)}
              />
            </label>
          </Stack>

          <Checkbox
            className={classes.notification}
            label={
              <Text variant="text-4">
                I have read and agree to BitConvex{" "}
                <Text variant="text-4" to={routes.termsOfService} component={Link} className={classes.blueTextHovered}>
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text variant="text-4" to={routes.privacyNotice} component={Link} className={classes.blueTextHovered}>
                  Privacy Policy
                </Text>
              </Text>
            }
          />
        </Stack>

        <Stack gap={rem("32px")}>
          <Button size="xxl" variant="radial-gradient" rightSection={<StarIcon />} onClick={() => onClick("email-check")}>
            Sign up
          </Button>
          <Text c="white" ta="left" fz={{ 0: 14, md: 16 }} color="white" variant="text-4">
            Already have an account?{" "}
            <Text
              variant="text-4"
              fz={{ 0: 14, md: 16 }}
              color="white"
              to={routes.auth.signInByEmail}
              component={Link}
              className={classes.blueTextHovered}
              span
            >
              Sign in
            </Text>
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

const EmailCheck = ({ onClick }: { onClick: Dispatch<SetStateAction<Steps>> }) => {
  return (
    <>
   
    <Helmet>
        <title>  Secure Your Account | BitConvex </title>
      </Helmet>
      <Stack gap={rem("28px")}>
        <Title c="white" ta={"center"} order={2} fz={{ 0: 40, md: 54 }}>
          Secure Your Account
        </Title>
        <Text ta={"center"} variant="text-2" className={classes.greyText}>
          Email Verification for Added Safety
        </Text>
      </Stack>

      <Stack gap={rem("32px")} className={classes.form}>
        <Stack gap={rem("16px")} className={classes.zIndex}>
          <label htmlFor="email">
            <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
              Get code and link by email
            </Text>
            <TextInput id="email" size="xxl" placeholder="Email" readOnly />
          </label>
        </Stack>

        <Stack gap={"clamp(1.5rem, 2vw, 2rem)"}>
          <Button
            className={classes.btnContinue}
            size="xxl"
            variant="radial-gradient"
            rightSection={<ContinueIcon />}
            h={{ 0: 78, md: 92 }}
            onClick={() => onClick("security-code")}
          >
            CONTINUE
          </Button>
          <Text fz={{ 0: 14, md: 16 }} color="white" ta="left">
            Did you enter your email incorrectly when registering?{" "}
            <Text onClick={() => onClick("form")} fz={{ 0: 14, md: 16 }} variant="text-4" className={classes.blueText} span>
              Re-register
            </Text>
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

const SecurityCode = ({ onClick }: { onClick: Dispatch<SetStateAction<Steps>> }) => {
  return (
    <>
     <Helmet>
        <title> Security code | BitConvex


 </title>
      </Helmet>
      <Stack gap={rem("28px")}>
        <Title c="white" ta={"center"} order={2} fz={{ 0: 40, md: 54 }}>
          Enter security code
        </Title>
        <Text ta={"center"} fz={{ 0: 16, md: 20 }} className={classes.greyText}>
          We have sent a code to your email{" "}
          <Text className={classes.blueText} span>
            AllieGrater12345644@gmail.com
          </Text>
          ,
          <br />
          please enter it or follow the link from the email
        </Text>
      </Stack>

      <Stack gap={"clamp(1.5rem, 2vw, 2rem)"} className={classes.form}>
        <Stack gap={rem("16px")} className={classes.zIndex}>
          <label htmlFor="code">
            <Text fz={{ 0: 14, md: 16 }} color="white" mb={8} lh={"19px"}>
              Security code
            </Text>
            <TextInput id="code" size="xxl" placeholder="Your Security code" />
          </label>
        </Stack>

        <Button
          size="xxl"
          className={classes.btnContinue}
          variant="radial-gradient"
          rightSection={<ConfirmIcon />}
          h={{ 0: 78, md: 92 }}
          fz={{ 0: 18, md: 24 }}
          onClick={() => onClick("form")}
        >
          confirm
        </Button>
      </Stack>
    </>
  );
};

export const Page = () => {
  const [step, setStep] = useState<Steps>("form");

  return (
    <Wrapper>
     
      <Header />

      <Group justify="center" align="start" className={clsx(classes.contentWrapper, classes["step-" + step])}>
        {step === "form" && (
          <>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
              alt="sign-up-light-left"
              className={classes.formLightLeft}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
              alt="sign-up-light-right"
              className={classes.formLightRight}
            />
          </>
        )}

        {step === "email-check" && (
          <>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
              alt="email-confirm-light-left"
              className={classes.emailConfirmLightLeft}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
              alt="email-confirm-light-right"
              className={classes.emailConfirmLightRight}
            />
          </>
        )}

        {step === "security-code" && (
          <>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
              alt="email-confirm-code-light-left"
              className={classes.emailConfirmCodeLightLeft}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
              alt="email-confirm-code-light-right"
              className={classes.emailConfirmCodeLightRight}
            />
          </>
        )}

        <Stack align={"center"} gap={"clamp(1.5rem, 3vw, 3rem)"} className={classes.formWrapper}>
          {step === "form" && <Form onClick={setStep} />}
          {step === "email-check" && <EmailCheck onClick={setStep} />}
          {step === "security-code" && <SecurityCode onClick={setStep} />}
        </Stack>
      </Group>
      <Footer />
    </Wrapper>
  );
};
