import { Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { Helmet } from "react-helmet-async";

export function Page() {
  return (
    <Wrapper>
        <Helmet>
        <title> Bug Bounty Program | BitConvex</title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/bug-bounty-program/1.png`} alt="light-1" className={classes.lightOne} />

      <Header />

      <Stack className={classes.contentWrapper}>
        <Container>
          <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/bug-bounty-program/2.png`}
              alt="light-2"
              className={classes.lightTwo}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/bug-bounty-program/3.png`}
              alt="light-3"
              className={classes.lightThree}
            />

            <Group gap={"clamp(1rem, 2vw, 2rem)"}>
              <Flex justify="center" align="center" className={classes.iconWrapper}>
                <img
                  draggable="false"
                  src={`${import.meta.env.BASE_URL}assets/bugBountyProgramIcon.png`}
                  alt="bugBountyProgram"
                  width="113"
                  height="113"
                />
              </Flex>

              <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
                <Title c="white" order={2} fz={{ 0: 40, md: 54 }}>
                  Bug Bounty Program
                </Title>
                <Text fz={{ 0: 16, md: 20 }} color="white" className={classes.blueText}>
                  Updated: 05-19-2021
                </Text>
              </Stack>
            </Group>

            <Text variant="text-4" color="white">
              The safety of our users’ funds and personal data is our main priority, therefore, the security of our platform and services is the field
              we work on daily and implement a number of advanced security technologies. Nevertheless, the contribution of the security researchers,
              who assist us in keeping our products and users safe, is extremely important for us, that is why we launched a vulnerability detection
              bounty program. The terms and conditions of our bug bounty program are described in this Bug Bounty Policy.
            </Text>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                Ineligibility
              </Title>

              <Text variant="text-4" color="white">
                Vulnerabilities found in out of scope resources are unlikely to be rewarded unless they present a serious business risk (at our sole
                discretion). In general, the following vulnerabilities do not correspond to the severity threshold:
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                WEB
              </Title>

              <Text variant="text-4" color="white">
                ● Vulnerabilities in third-party applications <br />
                ● Spam (SMS, email, etc)
                <br />
                ● Best practices concerns without real security impact
                <br />
                ● Recently (less than 30 days) disclosed vulnerabilities
                <br />
                ● Vulnerabilities affecting users of outdated browsers or platforms
                <br />
                ● Social engineering, phishing, physical, or other fraud activities
                <br />
                ● Publicly accessible login panels without proof of exploitation
                <br />
                ● Reports that state that software is out of date/vulnerable without a proof of concept
                <br />
                ● Vulnerabilities involving active content such as web browser add-ons
                <br />
                ● Most brute-forcing issues without clear impact
                <br />
                ● Theoretical issues
                <br />
                ● Missing HTTP security headers without real security impact
                <br />
                ● TLS/SSL сertificates related issues
                <br />
                ● DNS issues (i.e. MX records, SPF records, etc.)
                <br />
                ● Server configuration issues (i.e., open ports, TLS, etc.)
                <br />
                ● Open redirects
                <br />
                ● Session fixation
                <br />
                ● User account enumeration
                <br />
                ● Clickjacking/Tapjacking and issues only exploitable through clickjacking/tap jacking
                <br />
                ● Descriptive error messages (e.g. Stack Traces, application or server errors)
                <br />
                ● Self-XSS that cannot be used to exploit other users
                <br />
                ● Login & Logout CSRF
                <br />
                ● Weak Captcha/Captcha Bypass without clear impact
                <br />
                ● Lack of Secure and HTTPOnly cookie flags
                <br />
                ● Username/email enumeration via Login/Forgot Password Page error messages
                <br />
                ● CSRF in forms that are available to anonymous users (e.g. the contact form)
                <br />
                ● OPTIONS/TRACE HTTP method enabled
                <br />
                ● Host header issues without proof-of-concept demonstrating the vulnerability
                <br />
                ● Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
                <br />
                ● Content Spoofing without embedded links/HTML
                <br />
                ● Reflected File Download (RFD) without clear impact
                <br />
                ● Mixed HTTP Content
                <br />
                ● HTTPS Mixed Content Scripts
                <br />
                ● DoS/DDoS issues
                <br />
                ● Manipulation with Password Reset Token
                <br />
                ● MitM and local attacks
                <br />
                ● Vulnerabilities already known to us, or already reported by someone else (reward goes to first reporter)
                <br />
                ● Issues without any security impact
                <br />
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                MOBILE
              </Title>
              <Text variant="text-4" color="white">
                ● Attacks requiring physical access to a user's device
                <br />
                ● Vulnerabilities requiring extensive user interaction
                <br />
                ● Exposure of non-sensitive data on the device
                <br />
                ● Reports from static analysis of the binary without PoC that impacts business logic
                <br />
                ● Lack of obfuscation/binary protection/root (jailbreak) detection
                <br />
                ● Bypass certificate pinning on rooted devices
                <br />
                ● Lack of Exploit mitigations i.e., PIE, ARC, or Stack Canaries
                <br />
                ● Sensitive data in URLs/request bodies when protected by TLS
                <br />
                ● OAuth & app secret hard-coded/recoverable in IPA, APK
                <br />
                ● Sensitive information retained as plaintext in the device’s memory
                <br />
                ● Crashes due to malformed URL Schemes or Intents sent to exported Activity/Service/Broadcast Receiver (exploiting these for sensitive
                data leakage is commonly in scope)
                <br />
                ● Any kind of sensitive data stored in app private directory
                <br />
                ● Runtime hacking exploits using tools like but not limited to Frida/Appmon (exploits only possible in a jailbroken environment)
                <br />
                ● Any URIs leaked because a malicious app has permission to view URIs opened
                <br />
                ● Exposure of API keys with no security impact (Google Maps API keys etc.)
                <br />
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                Reward
              </Title>

              <Text variant="text-4" color="white">
                There is no limit on the maximum and minimum reward size, we reserve the right to increase or decrease the size of the reward
                depending on the seriousness of the vulnerability found. Researchers are more likely to receive increased rewards if they can
                demonstrate how the found vulnerability may be used to cause the most harm.
                <br />
                <br />
                Remote code execution: $10,000
                <br />
                <br />
                Manipulating user balances: $10,000
                <br />
                <br />
                XSS/CSRF/Clickjacking affecting user balances/trading/exchange/deposits: $2,000
                <br />
                <br />
                Theft of information related to passwords/API keys/personal information: $2,000
                <br />
                <br />
                Partial authentication bypass: $1,500
                <br />
                <br />
                Other vulnerability with clear potential for financial or data loss: $500
                <br />
                <br />
                Other CSRF (excluding logout CSRF): $500
                <br />
                <br />
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                Rules and Guidelines to Report the Vulnerabilities and Get the Reward
              </Title>

              <Text variant="text-4" color="white">
                1. Main points to receive a reward for detecting vulnerabilities:
                <br />
                ● immediately submit a report to security@BitConvex.com
                <br />
                ● provide us with enough time to fix the vulnerability/weakness/issue before any information regarding it will become in any manner
                publicly announced
                <br />
                ● NOT cause any damage to BitConvex infrastructure and its users
                <br />
                ● NOT mislead users or employees of BitConvex while detecting vulnerabilities
                <br />
                2. You must be the first to report a vulnerability to receive a reward.
                <br />
                3. In case you find chain vulnerabilities we pay only for vulnerability with the highest severity.
                <br />
                4. You should send a clear textual description of the work done, along with steps to reproduce the vulnerability.
                <br />
                5. Responsible disclosure guidelines:
                <br />
                ● Provide details of the vulnerability, including information needed to reproduce and validate the vulnerability.
                <br />
                ● Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services.
                <br />
                ● Do not modify or access data that does not belong to you.
                <br />
                ● Report the vulnerability as soon as possible.
                <br />
                ● Do not use the detected vulnerabilities for unjust enrichment. If you use the vulnerability in such a way that can cause harm to
                BitConvex, our users and third parties and do not report to BitConvex about the vulnerability, you will not receive a reward and we
                reserve the right to commence legal action against you.
                <br />
                ● Do not violate any law and stay in the defined scope, and do not participate in any illegal actions (activities).
                <br />
                ● After sending a report, you cannot tell anyone or anywhere about the vulnerability. Public disclosure of a vulnerability makes it
                ineligible for a reward. Furthermore, you shall not store screenshots and/or executable codes and scripts related to the vulnerability
                not to make the information available to third parties.
                <br />
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} fz={{ 0: 20, md: 24 }} c="white" className={classes.blueText}>
                Non-security Issues
              </Title>

              <Text variant="text-4" color="white">
                You may let us know about non-security issues at security@BitConvex.com
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
