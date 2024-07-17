import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
import { sample } from "effector";
import { createHashHistory } from "history";

import { appStarted } from "@/shared/init";

export const routes = {
  p2p: createRoute(),
  myProfile: createRoute(),
  home: createRoute(),
  card: createRoute(),
  trade: createRoute<{ pairId: string }>(),
  tradeFutures: createRoute(),
  staking: createRoute(),
  finance: createRoute(),
  deposit: createRoute(),
  withdraw: createRoute(),
  transactions: createRoute(),
  transfer: createRoute(),
  affiliate: createRoute(),
  settings: createRoute(),
  aboutUs: createRoute(),
  buyCrypto: createRoute(),
  marketScreener: createRoute(),
  cryptoMarketCap: createRoute(),
  technicalAnalysis: createRoute(),
  auth: {
    signUp: createRoute(),
    signInByEmail: createRoute(),
    forgotPassword: createRoute(),
    enterNewPassword: createRoute(),
    forgotPasswordCode: createRoute(),
  },
  user: {
    settings: createRoute(),
    onboarding: createRoute(),
  },
  amlKycPolicy: createRoute(),
  privacyNotice: createRoute(),
  cookiesPolicy: createRoute(),
  termsOfService: createRoute(),
  bugBountyProgram: createRoute(),
  notFound: createRoute(),
  serverError: createRoute(),
  kyc: createRoute(),
  faq: createRoute(),
  live: createRoute(),
  tradingBots: createRoute(),
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: "/",
      route: routes.home,
    },
    {
      path: "/p2p",
      route: routes.p2p,
    },
    {
      path: "/card",
      route: routes.card,
    },
    {
      path: "/trade/:pairId",
      route: routes.trade,
    },
    {
      path: "/trade-futures",
      route: routes.tradeFutures,
    },
    {
      path: "/staking",
      route: routes.staking,
    },
    {
      path: "/finance",
      route: routes.finance,
    },
    {
      path: "/about-us",
      route: routes.aboutUs,
    },
    {
      path: "/buy-crypto",
      route: routes.buyCrypto,
    },
    {
      path: "/market-screener",
      route: routes.marketScreener,
    },
    {
      path: "/crypto-market-cap",
      route: routes.cryptoMarketCap,
    },
    {
      path: "/technical-analysis",
      route: routes.technicalAnalysis,
    },
    {
      path: "/auth/sign-up",
      route: routes.auth.signUp,
    },
    {
      path: "/auth/sign-in-by-email",
      route: routes.auth.signInByEmail,
    },
    {
      path: "/auth/forgot-password",
      route: routes.auth.forgotPassword,
    },
    {
      path: "/auth/forgot-password-code",
      route: routes.auth.forgotPasswordCode,
    },
    {
      path: "/auth/enter-new-password",
      route: routes.auth.enterNewPassword,
    },
    {
      path: "/user/settings",
      route: routes.user.settings,
    },
    {
      path: "/user/onboarding",
      route: routes.user.onboarding,
    },
    {
      path: "/terms-of-service",
      route: routes.termsOfService,
    },
    {
      path: "/cookies-policy",
      route: routes.cookiesPolicy,
    },
    {
      path: "/aml-kyc-policy",
      route: routes.amlKycPolicy,
    },
    {
      path: "/bug-bounty-program",
      route: routes.bugBountyProgram,
    },
    {
      path: "/privacy-notice",
      route: routes.privacyNotice,
    },
    {
      path: "/my-profile",
      route: routes.myProfile,
    },
    {
      path: "/deposit",
      route: routes.deposit,
    },
    {
      path: "/withdraw",
      route: routes.withdraw,
    },
    {
      path: "/transactions",
      route: routes.transactions,
    },
    {
      path: "/transfer",
      route: routes.transfer,
    },
    {
      path: "/affiliate",
      route: routes.affiliate,
    },
    {
      path: "/settings",
      route: routes.settings,
    },
    {
      path: "/kyc",
      route: routes.kyc,
    },
    {
      path: "/faq",
      route: routes.faq,
    },
    {
      path: "/live",
      route: routes.live,
    },
    {
      path: "/trading-bots",
      route: routes.tradingBots,
    },
  ],
  notFoundRoute: routes.notFound,
  controls,
});

sample({
  clock: appStarted,
  fn: () => createHashHistory(),
  target: router.setHistory,
});
