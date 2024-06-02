import { Button, Group, Image, Stack, Text, TextInput, Title, rem } from "@mantine/core";
import { useUnit } from "effector-react";
import { Helmet } from "react-helmet-async";

import { Header, Wrapper } from "@/shared/ui";

import { Footer } from "../components/Footer/Footer";
import { resetPasswordCodeClicked } from "./model";
import classes from "./styles.module.css";

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

export const Page = () => {
  const handleresetPasswordCodeClick = useUnit(resetPasswordCodeClicked);

  const onFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    handleresetPasswordCodeClick();
  };

  return (
    <Wrapper>
      <Helmet>
        <title> Security Code | BitConvex </title>
      </Helmet>
      <Header />

      <Group align="start" justify="center" className={classes.contentWrapper}>
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/left.png`}
          alt="forgot-password-code-light-left"
          className={classes.lightLeft}
        />
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/sign-up/right.png`}
          alt="forgot-password-code-light-right"
          className={classes.lightRight}
        />

        <Stack align={"center"} gap={"clamp(1.5rem, 3vw, 3rem)"} className={classes.formWrapper}>
          <Stack gap={"clamp(1rem, 1.75vw, 28px)"}>
            <Title ta={{ 0: "center", md: "left" }} c="white" order={2} fz={54}>
              Enter security code
            </Title>
            <Text ta={"center"} fz={20} className={classes.greyText}>
              We sent it to your email <span className={classes.blueText}>mail@gmail.com</span> <br /> or follow the link from the letter
            </Text>
          </Stack>

          <Stack gap={rem("32px")} className={classes.form}>
            <Stack gap={rem("16px")} className={classes.zIndex}>
              <label htmlFor="Code">
                <Text variant="text-4" mb={8}>
                  Code
                </Text>
                <TextInput id="Code" size="xxl" placeholder="Enter the security code" />
              </label>
            </Stack>

            <Button size="xxl" className={classes.btn} variant="radial-gradient" rightSection={<ContinueIcon />} onClick={onFormSubmit}>
              Continue
            </Button>
          </Stack>
        </Stack>
      </Group>
      <Footer />
    </Wrapper>
  );
};
