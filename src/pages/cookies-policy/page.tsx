import { Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { Helmet } from "react-helmet-async";

export function Page() {
  return (
    <Wrapper>
        <Helmet>
        <title> Cookies Policy | BitConvex</title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/cookies-policy/1.png`} alt="light-1" className={classes.lightOne} />

      <Header />

      <Stack className={classes.contentWrapper}>
        <Container>
          <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/cookies-policy/2.png`}
              alt="light-2"
              className={classes.lightTwo}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/cookies-policy/3.png`}
              alt="light-3"
              className={classes.lightThree}
            />

            <Group gap={"clamp(.75rem, 2vw, 2rem)"}>
              <Flex justify="center" align="center" className={classes.iconWrapper}>
                <img draggable="false" src={`${import.meta.env.BASE_URL}assets/cookiesPolicyIcon.png`} alt="cookiesPolicy" width="113" height="113" />
              </Flex>

              <Stack gap={"clamp(.75rem, 2vw, 2rem)"}>
                <Title c="white" order={2} fz={{ 0: 40, md: 54 }}>
                  Cookies Policy
                </Title>
                <Text fz={{ 0: 16, md: 20 }} color="white" className={classes.blueText}>
                  Updated: 05-19-2021
                </Text>
              </Stack>
            </Group>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Text variant="text-4" color="white">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of
                cookies We use, or the information We collect using Cookies and how that information is used.
              </Text>

              <Text variant="text-4" color="white">
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You
                may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your
                personal data secure, see our Privacy Policy.
              </Text>

              <Text variant="text-4" color="white">
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                Interpretation and Definitions
              </Title>

              <Text variant="text-4" color="white">
                Interpretation
                <br />
                <br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions
                shall have the same meaning regardless of whether they appear in singular or in plural.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                Definitions
              </Title>

              <Text variant="text-4" color="white">
                For the purposes of this Cookies Policy:
                <br />
                <br />
                1.Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to BitConvex.
                <br />
                <br />
                2. Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of
                your browsing history on that website among its many uses.
                <br />
                <br />
                3. Website refers to BitConvex, accessible from bitconvex.com
                <br />
                <br />
                4.You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is
                accessing or using the Website, as applicable.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                The use of the Cookies
              </Title>

              <Text variant="text-4" color="white">
                Type of Cookies We Use
                <br />
                <br />
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go
                offline, while Session Cookies are deleted as soon as You close your web browser.
                <br />
                <br />
                We use both session and persistent Cookies for the purposes set out below:
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                1. Necessary / Essential Cookies
              </Title>

              <Text variant="text-4" color="white">
                Type: Session Cookies
                <br />
                <br />
                Administered by: Us
                <br />
                <br />
                Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its
                features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You
                have asked for cannot be provided, and We only use these Cookies to provide You with those services.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                2. Functionality Cookies
              </Title>

              <Text variant="text-4" color="white">
                Type: Persistent Cookies
                <br />
                <br />
                Administered by: Us
                <br />
                <br />
                Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or
                language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to
                re-enter your preferences every time You use the Website.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} className={classes.blueText}>
                Your Choices Regarding Cookies
              </Title>

              <Text variant="text-4" color="white">
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete
                the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
              </Text>
              <Text variant="text-4" color="white">
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function
                properly.
              </Text>
              <Text variant="text-4" color="white">
                If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web
                browser.
              </Text>
              <Text
                className={classes.linkNavigation}
                color="white"
                variant="text-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: ".5rem",
                }}
              >
                1. For the Chrome web browser, please visit this page from Google:{" "}
                <a className={classes.link} href="https://support.google.com/accounts/answer/32050">
                  https://support.google.com/accounts/answer/32050
                </a>{" "}
                <br />
                2. For the Internet Explorer web browser, please visit this page from Microsoft:{" "}
                <a className={classes.link} href="http://support.microsoft.com/kb/278835">
                  http://support.microsoft.com/kb/278835
                </a>{" "}
                <br />
                3. For the Firefox web browser, please visit this page from Mozilla:{" "}
                <a className={classes.link} href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>{" "}
                <br />
                4. For the Safari web browser, please visit this page from Apple:{" "}
                <a className={classes.link} href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>{" "}
                <br />
                <br />
                For any other web browser, please visit your web browser's official web pages.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
