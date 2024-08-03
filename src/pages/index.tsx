import { createRoutesView } from "atomic-router-react";

import { BuyCryptoRoute } from "@/pages/buy-crypto";
import { DepositRoute } from "@/pages/deposit";
import { Finance } from "@/pages/finance";
import { KYCRoute } from "@/pages/kyc";
import { MyProfile } from "@/pages/my-profile";
import { Staking } from "@/pages/staking";
import { TransactionsRoute } from "@/pages/transactions";
import { WithdrawRoute } from "@/pages/withdraw";

import { AboutUsRoute } from "./about-us";
import { AffiliateRoute } from "./affilate";
import { AmlKycPolicyRoute } from "./aml-kyc-policy";
import { EnterNewPasswordRoute } from "./auth/enter-new-password";
import { ForgotPasswordByEmailRoute } from "./auth/forgot-password";
import { ForgotPasswordByEmailCodeRoute } from "./auth/forgot-password-code";
import { SignInByEmailRoute } from "./auth/sign-in";
import { SignUpRoute } from "./auth/sign-up";
import { BugBountyProgramRoute } from "./bug-bounty-program";
import { CardRoute } from "./card";
import { CookiesPolicyRoute } from "./cookies-policy";
import { CryptoMarketCapRoute } from "./crypto-market-cap";
import { FaqRoute } from "./faq";
import { LiveChatRoute } from "./live-chat";
import { MainRoute } from "./main";
import { MarketScreenerRoute } from "./market-screener";
import { NotFoundRoute } from "./not-found";
import { P2PRoute } from "./p2p";
import { PrivacyNoticeRoute } from "./privacy-notice";
import { SettingsRoute } from "./settings";
import { TechnicalAnalysisRoute } from "./technical-analysis";
import { TermsOfServiceRoute } from "./terms-of-service";
import { TradeRoute } from "./trade";
import { TradeFuturesRoute } from "./trade-futures";
import { TradingBotsRoute } from "./trading-bots";
import { TransferRoute } from "./transfer";

export const Pages = createRoutesView({
  routes: [
    MainRoute,
    SignUpRoute,
    AboutUsRoute,
    AmlKycPolicyRoute,
    PrivacyNoticeRoute,
    SignInByEmailRoute,
    CookiesPolicyRoute,
    MarketScreenerRoute,
    CryptoMarketCapRoute,
    BuyCryptoRoute,
    MyProfile,
    Finance,
    DepositRoute,
    Staking,
    WithdrawRoute,
    TransferRoute,
    AffiliateRoute,
    SettingsRoute,
    KYCRoute,
    TransactionsRoute,
    BugBountyProgramRoute,
    EnterNewPasswordRoute,
    ForgotPasswordByEmailRoute,
    ForgotPasswordByEmailCodeRoute,
    TermsOfServiceRoute,
    NotFoundRoute,
    FaqRoute,
    LiveChatRoute,
    CardRoute,
    P2PRoute,
    TechnicalAnalysisRoute,
    TradeRoute,
    TradeFuturesRoute,
    TradingBotsRoute,
  ],
});
