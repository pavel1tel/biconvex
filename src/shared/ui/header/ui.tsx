import { useResize } from "@/hooks/useResize";
import { Button, Divider, Group, Menu, Stack, Text, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { useState } from "react";

import { ArrowMenuIcon } from "@/pages/staking/ui/icons/ArrowIcon";

import { routes } from "@/shared/routing";
import {
  ChatIcon,
  ChevronDownIcon,
  CryptoMarketCapIcon,
  FaqIcon,
  FastSwapIcon,
  LogoIcon,
  MarketScreenerIcon,
  SpotTradingIcon,
  TechnicalAnalysisIcon,
} from "@/shared/ui";

import arrowRight from "../../../../public/assets/arrowRight.svg";
import buttonMenuIcon from "../../../../public/assets/buttonMenu.svg";
import closeIcon from "../../../../public/assets/closeIcon.svg";
import logo from "../../../../public/assets/logo.svg";
import classes from "./styles.module.css";
import { useUnit } from "effector-react";
import { $authenticationStatus } from "@/shared/session";
import { AuthStatus } from "@/shared/lib/types";
import { createEvent, sample } from "effector";
import { redirect } from "atomic-router";
import { $token } from "@/pages/auth/sign-in/model";

const LINKS = [
  {
    to: routes.home,
    label: "Home",
  },
  {
    to: routes.trade,
    label: "Trade",
    links: [
      {
        to: routes.trade,
        icon: <SpotTradingIcon />,
        label: "Spot Trading",
        subtitle: "Buy and sell on the Spot market with advanced tools. ",
      },
      {
        to: routes.tradeFutures,
        icon: <SpotTradingIcon />,
        label: "Futures Trading",
        subtitle: "Trade Futures contracts and increase your profits with trading leverage. ",
      },
      {
        to: routes.finance,
        icon: <FastSwapIcon />,
        label: "Fast Swap",
        subtitle: "Convert your cryptocurrency without fees.",
      },
    ],
  },
  {
    to: "#1",
    label: "Market tools",
    links: [
      {
        to: routes.cryptoMarketCap,
        icon: <CryptoMarketCapIcon />,
        label: "Crypto Market Cap",
        subtitle: "Most of the available crypto assets and sort them by market capitalization.",
      },
      {
        to: routes.marketScreener,
        icon: <MarketScreenerIcon />,
        label: "Market Screener",
        subtitle: (
          <>
            A powerful tool that allows you
            <br /> to filter instruments based on
            <br /> fundamental data and various
            <br /> technical indicators.
          </>
        ),
      },
      {
        to: routes.technicalAnalysis,
        icon: <TechnicalAnalysisIcon />,
        label: "Technical Analysis",
        subtitle: "Advanced tool that displays ratings based on technical indicators.",
      },
    ],
  },
  {
    to: routes.buyCrypto,
    label: "Buy Crypto",
  },
  {
    to: routes.p2p,
    label: "P2P",
  },
  {
    to: routes.staking,
    label: "Staking",
  },
  {
    to: routes.card,
    label: "Card",
  },
  {
    to: routes.tradingBots,
    label: "Trading Bots",
  },
  {
    to: "#1",
    label: "Support center",
    links: [
      { to: routes.faq, icon: <FaqIcon />, label: "FAQ", subtitle: "All answers about our services, trading and security." },
      {
        to: routes.live,
        icon: <ChatIcon />,
        label: "Live chat",
        subtitle: (
          <>
            Quick connection with
            <br /> our online support.
          </>
        ),
      },
    ],
  },
];

export const Header = ({ className = "" }: { className?: string }) => {
  const logout = createEvent();
  const eraseCookie = (name : string) => {   
      document.cookie = name+'=; Max-Age=-99999999;';  
  }

  sample({
      clock : logout,
      fn: () => "",
      target : $token
  })

  sample({
      clock : logout,
      fn: () => eraseCookie("session_id"),
  })

  redirect({
      clock : logout,
      route : routes.home
  })
  const [isMenuActive, setMenuActive] = useState<boolean>(false);
  const [activeHiddenIndex, setActiveHiddenIndex] = useState<number>();
  const { isAdaptive: md } = useResize(1200);
  const authStatus = useUnit($authenticationStatus);
  const links = LINKS.map((link) => {
    const menuItems = link.links?.flatMap((item, index) => {
      const result = [
        <Menu.Item
          key={item.label}
          to={item.to}
          component={Link}
          classNames={{
            item: classes.menuItem,
            itemSection: classes.menuItemSection,
          }}
          activeClassName={classes.linkActive}
          leftSection={item.icon}
        >
          <Stack gap={4}>
            <Text className={classes.menuItemLabel}>{item.label}</Text>
            <Text className={classes.menuSubtitle}>{item.subtitle}</Text>
          </Stack>
        </Menu.Item>,
      ];

      if (index != link.links.length - 1) {
        result.push(<Divider key={`divider-${index}`} orientation="horizontal" classNames={{ root: classes.dropdownDividerRoot }} />);
      }

      return result;
    });

    if (menuItems) {
      return (
        <Menu key={link.label} offset={32.5} trigger="hover" transitionProps={{ transition: "scale-y", duration: 150 }} withinPortal>
          <Menu.Target>
            <Group align="center" justify="center" gap={rem("4px")} className={classes.menuTarget}>
              <Text variant="text-4" span>
                {link.label}
              </Text>
              <ChevronDownIcon />
            </Group>
          </Menu.Target>
          <Menu.Dropdown className={classes.dropdown}>
            <Stack gap={rem(16)}>{menuItems}</Stack>
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link to={link.to} key={link.label} className={classes.link} activeClassName={classes.linkActive}>
        <Text variant="text-4" span classNames={{ root: classes.linkLabel }}>
          {link.label}
        </Text>
      </Link>
    );
  });
  const handleDropdownClick = (index: number) => {
    index === activeHiddenIndex ? setActiveHiddenIndex(undefined) : setActiveHiddenIndex(index);
  };
  return md ? (
    <>
      <div className={classes.mobHeaderRow}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button onClick={() => setMenuActive(true)} className={classes.mobButton}>
          <img src={buttonMenuIcon} alt="" />
        </button>
      </div>
      <div
        className="mobMenu"
        style={{
          transform: `translate(${isMenuActive ? "0" : "100%"})`,
          opacity: isMenuActive ? 1 : 0,
          pointerEvents: isMenuActive ? "auto" : "none",
        }}
      >
        <div className="mobMenuHeader">
          <div className="mobMenuHeaderText">Menu</div>
          <button onClick={() => setMenuActive(false)} className="mobMenuClose">
            <img src={closeIcon} alt="closeIcon" />
          </button>
        </div>
        <div
          className="no-scroll"
          style={{ flexGrow: 1, display: "flex", flexDirection: "column", overflowY: "scroll", overflowX: "hidden", width: "calc(100% - 2px)" }}
        >
          <div style={{ flex: "1" }}>
            <ul className="mobMenuList">
              {LINKS.map((link, linkIndex) => (
                <li>
                  {link.links ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(linkIndex)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          padding: 0,
                        }}
                      >
                        <span className="mobMenuFlex">{link.label}</span>
                        <div
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        >
                          <ArrowMenuIcon size={20} fill={linkIndex === activeHiddenIndex ? "#6C7080" : "#625ff4"} />
                        </div>
                      </button>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: `${linkIndex === activeHiddenIndex ? "1" : "0"}fr`,
                          overflow: "hidden",
                          transition: "grid-template-rows 300ms ease",
                        }}
                      >
                        <div
                          style={{
                            paddingTop: linkIndex === activeHiddenIndex ? "16px" : "0px",
                            display: "flex",
                            transition: "300ms ease",
                            flexDirection: "column",
                            gap: 16,
                            minHeight: 0,
                          }}
                        >
                          {link.links.map((hiddenLink) => (
                            <Link
                              to={hiddenLink.to}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                color: "white",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  flex: 1,
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: "var(--color-blue)",
                                    width: 32,
                                    height: 32,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 4,
                                  }}
                                >
                                  {hiddenLink.icon}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    flex: 1,
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "clamp(14px, 1.25vw, 1.25rem)",
                                    }}
                                  >
                                    {hiddenLink.label}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "var(--color-grey)",
                                      lineHeight: "100%",
                                    }}
                                  >
                                    {hiddenLink.subtitle}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <ArrowMenuIcon />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link className="mobMenuFlex" to={link.to}>
                      <span>{link.label}</span>
                      <img src={arrowRight} alt="arrowRight" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          { authStatus === AuthStatus.Anonymous ?
          <div className="mobMenuButtons">
            <Button
              to={routes.auth.signInByEmail}
              size="xl"
              color="white"
              variant="transparent"
              component={Link}
              classNames={{ root: classes.signInButtonRoot }}
            >
              Sign in
            </Button>
            <Button to={routes.auth.signUp} size="xl" variant="radial-gradient" component={Link} classNames={{ root: classes.signUpButtonRoot }}>
              Sign up
            </Button>
          </div>
          :
          <div className="mobMenuButtons">
            <Button
              onClick={() => logout()}
              size="xl"
              color="white"
              variant="transparent"
              classNames={{ root: classes.signInButtonRoot }}
            >
              Log out
            </Button>
            <Button to={routes.myProfile} size="xl" variant="radial-gradient" component={Link} classNames={{ root: classes.signUpButtonRoot }}>
              Profile
            </Button>
          </div>
          }
        </div>
      </div>
    </>
  ) : (
    <header className={clsx(classes.header, classes[className])}>
      <Group gap={rem(64)} py={rem(7)} classNames={{ root: classes.logoLinksRoot }}>
        <Link to={routes.home}>
          <LogoIcon />
        </Link>
        <Divider orientation="vertical" classNames={{ root: classes.dividerRoot }} />

        <Group align={"baseline"} justify={"center"} gap={rem(32)} classNames={{ root: classes.linksRoot }}>
          {links}
        </Group>
      </Group>
      { authStatus === AuthStatus.Anonymous ?
      <Group gap={rem("32px")}>
        <Button
          to={routes.auth.signInByEmail}
          size="xl"
          color="white"
          variant="transparent"
          component={Link}
          classNames={{ root: classes.signInButtonRoot }}
        >
          Sign in
        </Button>
        <Button to={routes.auth.signUp} size="xl" variant="radial-gradient" component={Link} classNames={{ root: classes.signUpButtonRoot }}>
          Sign up
        </Button>
      </Group>
      :
      <Group gap={rem("32px")}>
        <Button
          size="xl"
          color="white"
          variant="transparent"
          classNames={{ root: classes.signInButtonRoot }}
          onClick={() => logout()}
        >
          Log out
        </Button>
        <Button to={routes.myProfile} size="xl" variant="radial-gradient" component={Link} classNames={{ root: classes.signUpButtonRoot }}>
          Profile
        </Button>
      </Group>
      }
    </header>
  );
};
