import { useResize } from "@/hooks/useResize";
import { Grid, Group, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";

import { routes } from "@/shared/routing";
import { LogoIcon } from "@/shared/ui";

import classes from "./styles.module.css";

export const Footer = ({ width }: { width?: number }) => {
  const { isAdaptive: md } = useResize(1200);

  const handleDirectionToPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Group align="flex-start" justify={"space-between"} gap={rem(32)} className={classes.wrapper}>
      <Group style={{ width }} align="flex-start" justify={"space-between"} gap={rem(32)} className={classes.box}>
        <Group gap={rem(96)} className={classes.leftSide} align="flex-start" w={{ 0: "100%", md: "auto" }}>
          <Stack gap={rem("32px")} w={rem("400px")} className={classes.footerContent}>
            <Stack gap={rem("16px")}>
              <Link to={routes.home} onClick={handleDirectionToPage}>
                <LogoIcon />
              </Link>
              <Text c="#6C7080" variant="text-4" display={{ 0: "none", md: "block" }}>
                Your Gateway to the Crypto Frontier. Experience seamless trading, robust security, and a world of digital opportunities. Join the
                future of finance with BitConvex — where innovation meets investment.
              </Text>
            </Stack>
            <Group gap={rem("32px")}>
              <a href="https://instagram.com/bitconvex?igshid=NGVhN2U2NjQ0Yg==" className={classes.link} target="_blank">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.2297 6.36992C19.9528 6.36992 19.6821 6.45203 19.4519 6.60586C19.2216 6.7597 19.0422 6.97835 18.9362 7.23416C18.8303 7.48998 18.8026 7.77147 18.8566 8.04305C18.9106 8.31462 19.0439 8.56407 19.2397 8.75987C19.4355 8.95566 19.685 9.089 19.9566 9.14302C20.2281 9.19704 20.5096 9.16931 20.7654 9.06335C21.0212 8.95739 21.2399 8.77795 21.3937 8.54772C21.5476 8.31749 21.6297 8.04681 21.6297 7.76992C21.6297 7.39862 21.4822 7.04252 21.2196 6.77997C20.9571 6.51742 20.601 6.36992 20.2297 6.36992ZM25.5963 9.19325C25.5737 8.22527 25.3924 7.26756 25.0597 6.35825C24.763 5.58024 24.3013 4.87574 23.7063 4.29325C23.1286 3.69525 22.4225 3.23646 21.6413 2.95159C20.7344 2.60877 19.7757 2.42333 18.8063 2.40325C17.5697 2.33325 17.173 2.33325 13.9997 2.33325C10.8263 2.33325 10.4297 2.33325 9.19301 2.40325C8.22369 2.42333 7.26491 2.60877 6.35801 2.95159C5.5783 3.23934 4.87276 3.69774 4.29301 4.29325C3.695 4.87096 3.23621 5.5771 2.95134 6.35825C2.60853 7.26515 2.42309 8.22393 2.40301 9.19325C2.33301 10.4299 2.33301 10.8266 2.33301 13.9999C2.33301 17.1733 2.33301 17.5699 2.40301 18.8066C2.42309 19.7759 2.60853 20.7347 2.95134 21.6416C3.23621 22.4227 3.695 23.1289 4.29301 23.7066C4.87276 24.3021 5.5783 24.7605 6.35801 25.0483C7.26491 25.3911 8.22369 25.5765 9.19301 25.5966C10.4297 25.6666 10.8263 25.6666 13.9997 25.6666C17.173 25.6666 17.5697 25.6666 18.8063 25.5966C19.7757 25.5765 20.7344 25.3911 21.6413 25.0483C22.4225 24.7634 23.1286 24.3046 23.7063 23.7066C24.304 23.1263 24.7661 22.4211 25.0597 21.6416C25.3924 20.7323 25.5737 19.7746 25.5963 18.8066C25.5963 17.5699 25.6663 17.1733 25.6663 13.9999C25.6663 10.8266 25.6663 10.4299 25.5963 9.19325ZM23.4963 18.6666C23.4878 19.4072 23.3537 20.1409 23.0997 20.8366C22.9134 21.3443 22.6142 21.8031 22.2247 22.1783C21.8463 22.5638 21.3884 22.8624 20.883 23.0533C20.1873 23.3073 19.4536 23.4414 18.713 23.4499C17.5463 23.5083 17.1147 23.5199 14.0463 23.5199C10.978 23.5199 10.5463 23.5199 9.37967 23.4499C8.61071 23.4643 7.84504 23.3459 7.11634 23.0999C6.63309 22.8993 6.19626 22.6015 5.83301 22.2249C5.44578 21.8501 5.15033 21.391 4.96967 20.8833C4.68484 20.1776 4.52686 19.4272 4.50301 18.6666C4.50301 17.4999 4.43301 17.0683 4.43301 13.9999C4.43301 10.9316 4.43301 10.4999 4.50301 9.33325C4.50824 8.57615 4.64645 7.82586 4.91134 7.11659C5.11673 6.62415 5.43198 6.18519 5.83301 5.83325C6.18746 5.43212 6.62551 5.11353 7.11634 4.89992C7.82748 4.6433 8.577 4.50918 9.33301 4.50325C10.4997 4.50325 10.9313 4.43325 13.9997 4.43325C17.068 4.43325 17.4997 4.43325 18.6663 4.50325C19.4069 4.51175 20.1407 4.64587 20.8363 4.89992C21.3665 5.09668 21.8424 5.41657 22.2247 5.83325C22.607 6.19163 22.9057 6.62977 23.0997 7.11659C23.359 7.82701 23.4932 8.577 23.4963 9.33325C23.5547 10.4999 23.5663 10.9316 23.5663 13.9999C23.5663 17.0683 23.5547 17.4999 23.4963 18.6666ZM13.9997 8.01492C12.8165 8.01723 11.6605 8.3702 10.6778 9.02924C9.69508 9.68828 8.92978 10.6238 8.47858 11.7176C8.02738 12.8114 7.91052 14.0145 8.14277 15.1747C8.37502 16.3349 8.94595 17.4002 9.78343 18.2361C10.6209 19.0719 11.6874 19.6408 12.848 19.8708C14.0087 20.1007 15.2115 19.9815 16.3044 19.5282C17.3973 19.0749 18.3314 18.3078 18.9885 17.3238C19.6456 16.3398 19.9963 15.1831 19.9963 13.9999C19.9979 13.2125 19.8437 12.4326 19.5428 11.705C19.2418 10.9774 18.8 10.3165 18.2427 9.76031C17.6854 9.20409 17.0236 8.76354 16.2954 8.464C15.5673 8.16446 14.787 8.01184 13.9997 8.01492ZM13.9997 17.8849C13.2313 17.8849 12.4802 17.6571 11.8413 17.2302C11.2024 16.8033 10.7044 16.1965 10.4104 15.4866C10.1164 14.7768 10.0394 13.9956 10.1893 13.242C10.3392 12.4884 10.7092 11.7961 11.2526 11.2528C11.7959 10.7095 12.4881 10.3395 13.2417 10.1896C13.9954 10.0397 14.7765 10.1166 15.4864 10.4106C16.1963 10.7047 16.803 11.2026 17.2299 11.8415C17.6568 12.4804 17.8847 13.2315 17.8847 13.9999C17.8847 14.5101 17.7842 15.0153 17.5889 15.4866C17.3937 15.958 17.1075 16.3863 16.7468 16.747C16.386 17.1078 15.9578 17.394 15.4864 17.5892C15.0151 17.7844 14.5099 17.8849 13.9997 17.8849Z"
                    fill="#6C7080"
                  />
                </svg>
              </a>

              <a href="https://x.com/bitconvex?s=21&t=mVIo4w0KgnltQTwyQ52LHw" className={classes.link} target="_blank">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.6663 6.76691C24.7894 7.14736 23.862 7.39885 22.913 7.51358C23.9142 6.91545 24.6645 5.97449 25.0247 4.86524C24.0838 5.42532 23.0539 5.81992 21.9797 6.03191C21.2616 5.25325 20.3055 4.73492 19.2611 4.55824C18.2168 4.38155 17.1433 4.5565 16.2091 5.05563C15.2749 5.55477 14.5328 6.34986 14.0991 7.31622C13.6655 8.28258 13.5648 9.36553 13.813 10.3952C11.9107 10.299 10.0499 9.80369 8.35144 8.94142C6.65302 8.07914 5.155 6.86922 3.95467 5.39024C3.53367 6.12544 3.31245 6.95804 3.31301 7.80524C3.31151 8.59202 3.50459 9.36696 3.87506 10.0611C4.24552 10.7552 4.78186 11.3469 5.43634 11.7836C4.67565 11.7629 3.93121 11.5588 3.26634 11.1886V11.2469C3.27204 12.3493 3.65833 13.4159 4.35988 14.2662C5.06142 15.1166 6.03514 15.6985 7.11634 15.9136C6.70014 16.0402 6.26803 16.107 5.83301 16.1119C5.53188 16.1084 5.2315 16.0811 4.93467 16.0302C5.24257 16.9785 5.8384 17.8072 6.63926 18.4011C7.44012 18.9949 8.40618 19.3244 9.40301 19.3436C7.71975 20.6681 5.64154 21.3909 3.49967 21.3969C3.1097 21.3982 2.72003 21.3748 2.33301 21.3269C4.51984 22.7389 7.06829 23.4884 9.67134 23.4852C11.4676 23.5039 13.2497 23.1644 14.9133 22.4867C16.577 21.8089 18.0889 20.8064 19.3607 19.5378C20.6326 18.2692 21.639 16.7599 22.321 15.098C23.003 13.4361 23.3471 11.6549 23.333 9.85858C23.333 9.66024 23.333 9.45024 23.333 9.24024C24.2485 8.55752 25.0381 7.72057 25.6663 6.76691Z"
                    fill="#6C7080"
                  />
                </svg>
              </a>

              <a href="https://t.me/bitconvex" className={classes.link} target="_blank">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.4658 4.16126L3.1158 12.332C1.67501 12.8508 1.67501 13.7587 2.85384 14.0181L8.22408 15.7041L10.3198 21.9295C10.5817 22.578 10.4508 22.8374 11.1057 22.8374C11.6296 22.8374 11.8916 22.578 12.1535 22.3186C12.2845 22.1889 13.4633 21.0216 14.7732 19.7247L20.2744 23.7452C21.3222 24.264 21.9771 24.0046 22.2391 22.8374L25.9066 5.84729C26.2995 4.42065 25.3827 3.64247 24.4658 4.16126ZM21.7152 8.05211L11.4986 17.2605L11.1057 21.5404L9.00997 15.315L21.0603 7.79272C21.5842 7.40363 22.1081 7.66302 21.7152 8.05211Z"
                    fill="#6C7080"
                  />
                </svg>
              </a>
            </Group>
            <Text c="#6C7080" variant="text-5" display={{ 0: "none", md: "block" }}>
              (c) BitConvex 2023
            </Text>
          </Stack>
        </Group>
        <Grid className={classes.footerGrid}>
          <Stack gap={rem("32px")}>
            <Title c="white" order={4} fz={"20px"}>
              About
            </Title>
            <Stack gap={rem("16px")}>
              <Link to={routes.aboutUs} className={classes.link} onClick={handleDirectionToPage}>
                About Us
              </Link>
              <Link to={routes.termsOfService} className={classes.link} onClick={handleDirectionToPage}>
                Terms of Service
              </Link>
              <Link to={routes.privacyNotice} className={classes.link} onClick={handleDirectionToPage}>
                Privacy Notice
              </Link>
              <Link to={routes.cookiesPolicy} className={classes.link} onClick={handleDirectionToPage}>
                Cookies Policy
              </Link>
              <Link to={routes.amlKycPolicy} className={classes.link} onClick={handleDirectionToPage}>
                AML & KYC Policy
              </Link>
              <Link to={routes.bugBountyProgram} className={classes.link} onClick={handleDirectionToPage}>
                Bug Bounty Program
              </Link>
            </Stack>
          </Stack>
          <Stack gap={rem(32)}>
            <Title c="white" fz={"20px"} order={4}>
              Products
            </Title>
            <Stack gap={rem("16px")}>
              <Link to={routes.trade} className={classes.link} onClick={handleDirectionToPage}>
                Spot trading
              </Link>
              <Link to={routes.tradeFutures} className={classes.link} onClick={handleDirectionToPage}>
                Futures trade
              </Link>
              <Link to={routes.buyCrypto} className={classes.link} onClick={handleDirectionToPage}>
                Buy crypto
              </Link>
              <Link to={routes.finance} className={classes.link} onClick={handleDirectionToPage}>
                Fast swap
              </Link>
              <Link to={routes.staking} className={classes.link} onClick={handleDirectionToPage}>
                Staking
              </Link>
              <Link to={routes.p2p} className={classes.link} onClick={handleDirectionToPage}>
                P2P
              </Link>
            </Stack>
          </Stack>
          <Stack gap={rem(32)}>
            <Title c="white" fz={"20px"} order={4}>
              Support
            </Title>
            <Stack gap={rem("16px")}>
              <Link to={routes.live} className={classes.link} onClick={handleDirectionToPage}>
                Live Chat
              </Link>
              <Link to={routes.faq} className={classes.link} onClick={handleDirectionToPage}>
                FAQ
              </Link>
            </Stack>
          </Stack>
          <Stack gap={rem(32)}>
            <Title c="white" fz={"20px"} order={4}>
              Market Tools
            </Title>
            <Stack gap={rem("16px")}>
              <Link to={routes.cryptoMarketCap} className={classes.link} onClick={handleDirectionToPage}>
                Crypto Market Cap
              </Link>
              <Link to={routes.marketScreener} className={classes.link} onClick={handleDirectionToPage}>
                Market Screener
              </Link>
              <Link to={routes.technicalAnalysis} className={classes.link} onClick={handleDirectionToPage}>
                Technical Analysis
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Group>
      {md && (
        <div
          style={{
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,.12)",
            color: "var(--color-grey)",
            fontFamily: "var(--text-font-family)",
            fontSize: 14,
            textAlign: "center",
            width: "100%",
          }}
        >
          © 2019-{new Date().getFullYear()} BitConvex. All rights reserved.
        </div>
      )}
    </Group>
  );
};
