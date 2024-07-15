import { Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { Helmet } from "react-helmet-async";

export function Page() {
  return (
    <Wrapper>
       <Helmet>
        <title> Terms of Service | BitConvex

</title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/1.png`} alt="light-1" className={classes.lightOne} />

      <Header />

      <Stack className={classes.contentWrapper}>
        <Container>
          <Stack gap={"clamp(1.5rem, 4vw, 2rem)"}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/2.png`}
              alt="light-2"
              className={classes.lightTwo}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/3.png`}
              alt="light-3"
              className={classes.lightThree}
            />

            <Group gap={"clamp(1rem, 2vw, 2rem)"}>
              <Flex justify="center" align="center" className={classes.iconWrapper}>
                <img
                  draggable="false"
                  src={`${import.meta.env.BASE_URL}assets/termsOfServiceIcon.png`}
                  alt="termsOfService"
                  width="113"
                  height="113"
                />
              </Flex>

              <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
                <Title c="white" order={2} fz={{ 0: 40, md: 54 }}>
                  Terms of Service
                </Title>
                <Text fz={{ 0: 16, md: 20 }} className={classes.blueText}>
                  Updated: 05-19-2021
                </Text>
              </Stack>
            </Group>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                1. TERMS OF USE
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  1.1
                </Text>{" "}
                Acceptance of the these terms of use. By accessing, reading, and making use of this Website and the Services, you are deemed to have
                reviewed, understood and accepted, on your own behalf and on behalf of any person on whose behalf you may be acting, these Terms of
                Use and agreed with the Company to be bound hereunder. For the purposes of these Terms of Use, “person” means any natural person,
                corporation, partnership, joint venture or any other incorporated or unincorporated entity, whether acting as an individual,
                fiduciary, or in any other capacity.If you do not wish to be bound by these Terms of Use, you may not use this Website or any of the
                Services.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  1.2
                </Text>{" "}
                Changes of terms of use and website. The Company reserves the right, exercisable at any time at its sole discretion, to add to or
                remove, modify or otherwise change any part of these Terms of Use. Changes will be effective immediately at such time as the Terms of
                Use are posted on this Website. You should check the Terms of Use for changes by checking the date this page was last updated. If any
                change to the Terms of Use is not acceptable to you, you must discontinue your use of this Website and the Services immediately. Your
                continued use of this Website or any of the Services after any changes to the Terms and Conditions will constitute your unqualified
                acceptance of the changes. The Company may terminate, change, suspend or discontinue any aspect of this Website or the Services at any
                time without notice. Without limiting the generality of the foregoing, the Company may change the availability of any features,
                institute new, or amend existing fees or charges for the use of the Website, the Services, or any features included in the Website or
                the Services, add, remove, modify or otherwise change any content on this Website, and impose limits on certain features or restrict
                access to parts or all of this Website. The Company reserves the right, but not the duty, to correct any errors or omissions in any
                portion of this Website at any time and without notice.
              </Text>
              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  1.3
                </Text>{" "}
                Other agreements. These Terms of Use are in addition to and supplementary to any other agreements that you or any person you represent
                have or may enter into with the Company concerning your dealings with them, including any information, products or services provided
                by the Company. In the event of any inconsistency or conflict between the provisions of these Terms of Use and the provisions of any
                other agreement that you or any person you represent have with the Company, the provisions of these Terms of Use shall govern
                regarding your access to and use of the Website and the Services.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/4.png`}
              alt="light-4"
              className={classes.lightFour}
            />

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                2. RISK WARNING.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.1
                </Text>{" "}
                Buying, selling and investing in cryptocurrencies can be risky. The risk of loss in trading or holding cryptocurrency can be
                substantial. You should therefore carefully consider whether trading or holding cryptocurrency is suitable for you in light of your
                financial condition. In considering whether to trade or hold cryptocurrency, you should be aware that the price or value of
                cryptocurrency can change rapidly, decrease, and potentially even fall to zero.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.2
                </Text>{" "}
                The cryptocurrencies market information relating to the past performance of an investment is not necessarily a guide to its
                performance in the future. The value of investments or income from them may go down as well as up. Like stocks and shares as well,
                cryptocurrencies are valued from second to second, their bid and offer value fluctuates sometimes widely. The degrees of fluctuation
                of prices vary significantly and the value of higher volatility funds may change suddenly. The value of investments may rise or fall
                due to the volatility of world markets, interest rates and capital values or, for investments held in overseas markets, changes in the
                rate of exchange in the currency in which the investments are denominated. You may not necessarily get back the amount you invested.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.3
                </Text>{" "}
                You know and understand cryptocurrency trading also has certain risks which can cause a complete loss to zero. As cryptocurrencies are
                no official currency and the legal status is still undefined, their legal nature is subject of change under different jurisdictions.
                Unlike official currencies, which are backed up by governments or other legal entities like the FED, ECB or others, cryptocurrencies
                are a private currency, generated by all the world. There is no central bank that could take corrective measures to protect the value
                of the cryptocurrencies at a possible crisis.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.4
                </Text>{" "}
                You know and understand cryptocurrency trading could be affected by hackers, change of laws, official restrictions, frauds, technical
                issues, collapse of infrastructure and many other possible threats.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.5
                </Text>{" "}
                All content provided through this website is only for your personal information and use, and is not intended to address your
                particular requirements or to be relied upon in making (or refraining from making) any specific investment or other decision. Such
                content shall not constitute any form of advice or recommendation by BitConvex. Furthermore, there may be additional risks that
                BitConvex have not foreseen or named in this Terms of Use.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.6
                </Text>{" "}
                BitConvex does not provide any investment advice in connection with the services contemplated by these Terms of Use. We only provide
                information on the price, range, volatility of cryptocurrencies. Any decisions to buy or sell cryptocurrencies are made on your
                decision solely. BitConvex will not be liable for any loss you might face.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  2.7
                </Text>{" "}
                If you are unsure about any specific investment or other decision, you should obtain appropriate expert independent advice and assess
                carefully whether your financial background is suitable for trading cryptocurrencies. Your decisions and investments are subject to
                your personal responsibility.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                3. REGISTRATION AND ACCOUNT OBLIGATIONS.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.1
                </Text>{" "}
                You must be 18 years old or older to register and use our service.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.2
                </Text>{" "}
                Only one registration per person is allowed. You must keep your registration information up to date.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.3
                </Text>{" "}
                You must choose an email address which gives you frequent access to emails sent to that address, as we need to be able to contact you
                short notice. You must keep your password confidential.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.4
                </Text>{" "}
                You must not, (1) impersonate or try to impersonate another person, (2) disclose your password to anyone else, (3) allow anyone else
                use your account or (4) use anyone else's account.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.5
                </Text>{" "}
                You are responsible for everything done using your account especially all damages may caused. If you think that someone else may have
                access to, or be using, your password or account, you must inform us as soon as possible by using online support.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.6
                </Text>{" "}
                From time to time, we may restrict access to some parts of this site, or this entire site, to users who have registered with us for
                certain reasons.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.7
                </Text>{" "}
                You are obliged to treat your user identification code, password or any other piece of information as part of our security procedures
                as confidential, and you must not disclose it to any third party. BitConvex has the right to disable any account, if in our opinion
                you have failed to comply with any of the provisions of these terms and conditions until proven wrong by the user.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.8
                </Text>{" "}
                "External Account" means any Financial Account or Digital Asset Account: (i) from which you may load Funds into your BitConvex
                Account, and (ii) to which you may push Funds from your BitConvex Account.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.9
                </Text>{" "}
                "Financial Account" means any financial account of which you are the beneficial owner that is maintained by a third party outside of
                the Services, including, but not limited to third-party payment service accounts or accounts maintained by third-party financial
                institutions.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.10
                </Text>{" "}
                "Funds" means Digital Asset and/or Legal Tender.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.11
                </Text>{" "}
                "Legal Tender" means any national currency, such as U.S. dollars, that may be used in connection with a purchase or sale of Digital
                Assets via the Services, and does not include any Digital Asset.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.12
                </Text>{" "}
                "BitConvex Account" means a user account accessible via the Services where Funds may be stored by Payward on behalf of a user.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.13
                </Text>{" "}
                "Digital Asset" means bitcoins, eth and other digital assets that may be purchased, sold or traded via the Services.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.14
                </Text>{" "}
                Eligibility You further represent and warrant that you: (a) are of legal age to form a binding contract (at least 18 years old in the
                U.S.); (b) have not previously been suspended or removed from using our Services; (c) have full power and authority to enter into this
                agreement and in doing so will not violate any other agreement to which you are a party; (d) are not located in, under the control of,
                or a national or resident of (i) any Restricted Locations, not a resident of any country with high-risk status (Iran, Iraque, Russia,
                Ethiopia) (Rule 4.1) or (ii) any country to which the United States has embargoed goods or services; (e) are not identified as a
                "Specially Designated National;" (f) are not placed on the Commerce Departmentʼs Denied Persons List; and (g) will not use our
                Services if any applicable laws in your country prohibit you from doing so in accordance with these Terms.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  3.15
                </Text>{" "}
                This Section 2 applies to: all trades completed via the Services a) Conditions and Restrictions. We may, at any time and in our sole
                discretion, refuse any trade submitted via the Services, impose limits on the trade amount permitted via the Services or impose any
                other conditions or restrictions upon your use of the Services without prior notice. For example, we may limit the number of open
                orders that you may establish via the Services or we may restrict trades from certain locations. Accuracy of Information. You must
                provide any information required when creating a BitConvex Account or when prompted by any screen displayed within the Services. You
                represent and warrant that any information you provide via the Services is accurate and complete. Insurances and terminations. You
                must top-up the related with your BitConvex account address counting the fee. This obligation is required for citizens of the
                countries with high risk-score (Iraque, Iran, Russia, Pakistan and the CIS countries, and also to some EU countries). b) Taxes. It is
                your responsibility to determine what, if any, taxes apply to the trades you complete via the Services, and it is your responsibility
                to report and remit the correct tax to the appropriate tax authority. You agree that Payward is not responsible for determining
                whether taxes apply to your trades or for collecting, reporting, withholding or remitting any taxes arising from any trades.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                4. IDENTITY VERIFICATION.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  4.1
                </Text>{" "}
                BitConvex implements and maintains the highest standards of Know Your Customer (“KYC”) processes and controls as part of our
                commitment to combating fraud and assisting in the prevention of money laundering and terrorist financing. While our industry is
                largely unregulated, BitConvex voluntarily adheres to local and international compliance standards in relation to customer due
                diligence. To ensure we meet these standards, our customers are required to provide certain personal details and documents when
                opening a BitConvex Account (“Identity Verification”). The nature and extent of the Identity Verification required will depend upon
                which of our supported countries you are resident in, and the deposit and withdrawal limits that you wish to apply to your BitConvex
                Account. In certain circumstances, BitConvex may also perform enhanced due diligence (“EDD”) procedures in relation to your BitConvex
                Account. You accept and agree that you will remain subject to such procedures at all times. For identity verification contact our
                site's online support. You accept and agree that there may be delays in accessing your BitConvex Account, or in carrying out
                transactions through your BitConvex Account, while we undertake any Identity Verification and/or EDD procedures. Retention of
                information. BitConvex is required to retain certain information and documentation obtained as part of the Identity Verification and
                EDD procedures. These requirements apply even when you have terminated your relationship with BitConvex. We reserve the right to keep
                such information and documentation for the required period and you accept and agree that information and documentation you provide to
                BitConvex may be retained by us, including following the closure of your BitConvex Account.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  4.2
                </Text>{" "}
                To activate your account and start transacting, you should to transfer funds to your new account by making a qualifying deposit that
                should be done by one payment. However, internal exchange transactions are not considered while classifying your account as activate
                accounts. This deposit is only required for new users as a security measure, you will receive the deposit on your account and you will
                be able to withdraw it instantly. This procedure name is wallet-wallet verification, and it means for you that nobody can access your
                account and make withdrawal without your permission.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  4.3
                </Text>{" "}
                BitConvex RESERVES THE RIGHT TO, AT ANY TIME: restrict or suspend your BitConvex Account when we, in our sole discretion, consider it
                necessary to carry out further Identity Verification and/or EDD; or terminate your BitConvex Account if you provide, or we suspect you
                have provided, false information or refuse to provide information we require for Identity Verification and/or EDD.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  4.4
                </Text>{" "}
                BitConvex Account Capitalized terms not otherwise defined in these Terms will have the following meaning: Number of BitConvex
                Accounts. Payward may, in its sole discretion, limit the number of BitConvex Accounts that you may hold, maintain or acquire.
                BitConvex Account information and security. In order to engage in any trades via the Services, you must create a BitConvexAccount and
                provide any requested information. When you create a BitConvex Account, you agree to: (a) create a strong password that you do not use
                for any other website or online service; (b) provide accurate and truthful information; (c) maintain and promptly update your
                BitConvex Account information; (d) maintain the security of your BitConvex Account by protecting your password and restricting access
                to your BitConvex Account; (e) promptly notify us if you discover or otherwise suspect any security breaches related to your
                BitConvexAccount; and (f) Users with balance more then 0.01 BTC must activate premium status. (g) take responsibility for all
                activities that occur under your BitConvex Account and accept all risks of any authorized or unauthorized access to your BitConvex
                Account, to the maximum extent permitted by law.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/2.png`}
              alt="light-2"
              className={classes.lightFive}
            />
            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                5. EXCHANGE.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  5.1
                </Text>{" "}
                The BitConvex Exchange is an order book exchange platform for cryptocurrencies that is intended for use by customers with experience
                in and/or knowledge of similar platforms. Any person using the BitConvex Exchange does so entirely at their own risk. The BitConvex
                Exchange is not offered to customers in all jurisdictions. This section of the Terms applies to you if you access and/or use the
                BitConvex Exchange.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  5.2
                </Text>{" "}
                BitConvex may, at any time and in our sole discretion, refuse any trade, impose limits on the trade amount permitted, or impose any
                other conditions or restrictions upon your use of the BitConvex Exchange that we deem necessary. We may, for example, limit the number
                of open orders that you may establish or restrict trades from certain locations. BitConvex reserves the right to take such action
                without prior notice.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  5.3
                </Text>{" "}
                IN ACCESSING AND/OR USING THE BitConvex EXCHANGE FOR ANY PURPOSE, YOU AGREE AND ACCEPT THAT: all trades executed on the BitConvex
                Exchange are executed automatically, based on the parameters of your order instructions, and cannot be reversed. In the case of
                technical issues affecting BitConvex’s internal systems, BitConvex may, where possible and in its sole discretion, take steps to
                reverse or otherwise amend a trade. By using the BitConvex Exchange, you accept and agree to all applicable fees; BitConvex makes no
                guarantee that the BitConvex Exchange will be available without interruption; that there will be no delays, failures, errors,
                omissions or loss of transmitted information; or that any order will be executed, accepted, recorded, or remain open;
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                6. TRANSACTIONS.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.1
                </Text>{" "}
                Transaction Refusal. We may refuse to enter into a transaction, or we may terminate a particular transaction or all current
                transactions that you have outstanding with us, without notice to you: if you fail to make any payment or make payment from a
                blockchain account from which you are doing so unlawfully; if you fail to provide any material information we have requested or any
                information or warranty that you have given to us is, or becomes in our opinion, materially inaccurate, incorrect or misleading; in
                the event of your death or loss of mental capacity; if a serious dispute has arisen between us; if the performance of our obligations
                under this agreement becomes unlawful; if you terminate this agreement in accordance with clause 7 below; You must notify us
                immediately if you become aware of any event referred to in this paragraph happening or being likely to happen.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.2
                </Text>{" "}
                In the event that we refuse a transaction and where it is lawful to do so, we will purchase at the prevailing market rate, the
                equivalent in your chosen cryptocurrency with the gross value of your deposit less any expenses, premiums, commissions or other fees
                incurred by us. The balance will then be sent to your Default Address. In the event that we incur a loss on the transaction, you will
                be liable to pay us the full amount of that loss.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.3
                </Text>{" "}
                You acknowledge that under certain rare circumstances, we may be obligated to freeze your account completely and retain any funds that
                we are holding on your behalf pending further investigation.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.4
                </Text>{" "}
                You acknowledge that the amount of any loss realized on the termination of a transaction is a debt payable by you and agree that we
                may immediately deduct the total amount of any loss (together with any expenses, premiums, commissions or other fees incurred by us)
                from any funds we are holding for you, including any monies you have paid to us in relation to any transaction. If the amount we are
                seeking to recover exceeds the amount of any funds held by us on your behalf, you agree to pay the balance within 7 days of being
                notified of the total amount due.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.5
                </Text>{" "}
                We will not pay you any profit arising from the termination of a transaction in any circumstances.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.6
                </Text>{" "}
                You agree that we may charge you interest on any sum that remains payable to us after we terminate any or all of your transactions at
                a rate of 5% per. Interest will accrue and will be calculated daily and be compounded monthly from the date payment was due until the
                full payment is received by us from you.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  6.7
                </Text>{" "}
                If we refuse or terminate a transaction and where it is lawful to do so, we will send you a written statement explaining the amount of
                any sums that may be payable to us and the amount of any sums being withheld by us.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/4.png`}
              alt="light-4"
              className={classes.lightSix}
            />
            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                7. FEES.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.1
                </Text>{" "}
                Amount of Fees. You agree to pay Payward the fees for trades completed via our Services ("Fees") as made available via the Fees and
                Pair Info ("Fee Schedule"), which we may change from time to time. Changes to the Fee Schedule are effective as of the effective date
                indicated in the posting of the revised Fee Schedule to the Services and will apply prospectively to any trades that take place
                following the effective date of such revised Fee Schedule. Payment of the commission for withdrawal and transfer of funds is carried
                out in USDT coins.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.2
                </Text>{" "}
                Third-Party Fees. In addition to the Fees, your External Account may impose fees in connection with your use of your designated
                External Account via the Services. Any fees imposed by your External Account provider will not be reflected on the transaction screens
                containing information regarding applicable Fees. You are solely responsible for paying any fees imposed by an External Account
                provider.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.3
                </Text>{" "}
                Payment of Fees. You authorize us, or our designated payment processor, to charge or deduct your BitConvex Account Funds for any
                applicable Fees owed in connection with trades you complete via the Services.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.4
                </Text>{" "}
                Internal fees. You agree to pay the internal Payward fee at an additional 1% (all deposits), 1.5% (all transfers), and 2.5% (all
                insurances if required).
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.5
                </Text>{" "}
                Collection-Related Costs. If you fail to pay fees (the user must independently control and leave funds on the current balance to cover
                the commission for manual withdrawal) or any other amounts owed to Payward under these Terms and Payward refers your account(s) to a
                third party for collection, then Payward will charge you the lesser of an 18% collection fee or the maximum percentage permitted by
                applicable law, to cover Payward's collection-related costs.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  7.6
                </Text>{" "}
                Withdrawals may be taxed at 18% in cases where the user's account: 1) has an amount in the account lower than necessary to cover the
                standard commission of 1.5%. 2) created less than 1 month ago and there is no premium status on the account 3) If most of the funds
                are the result of the activation of promotional codes and sweepstakes
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                8. SECURITY.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.1
                </Text>{" "}
                ACCOUNT SECURITY. BitConvex TAKES SECURITY VERY SERIOUSLY AND THE MEASURES WE HAVE IN PLACE TO PROTECT YOUR BitConvex ACCOUNT HOWEVER,
                YOU ARE SOLELY RESPONSIBLE FOR: maintaining adequate security and control over your BitConvex Account sign-in details, including but
                not limited to any passwords, personal identification numbers (PINs), API keys, or any other codes associated with your BitConvex
                Account; enabling any additional security features available to you, including the activation of two factor authentication on your
                BitConvex account; keeping your contact details up to date so that you can receive any notices or alerts we may send to you in
                relation to security; maintaining security and control over the email mailbox, phone number and two-factor authentication applications
                or devices associated with your BitConvex Account;
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.2
                </Text>{" "}
                Failure to take the above measures, and any other security measures available to you, may result in unauthorised access to your
                BitConvex Account and the loss or theft of any cryptocurrency and/or Local Currency balances held in your BitConvex Wallet or any
                linked bank account(s) and/or saved credit or debit card(s). BitConvex shall have no liability to you for or in connection with any
                unauthorised access to your BitConvex Account, where such unauthorised access was due to no fault of BitConvex, and/or any failure by
                you to act upon any notice or alert that we send to you.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.3
                </Text>{" "}
                The security of your BitConvex Account may be compromised, or interruption caused to it, by phishing, spoofing or other attack,
                computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment.
                BitConvex strongly recommends that you regularly use reputable virus screening and prevention software and remain alert to the fact
                that SMS, email services and search engines are vulnerable to spoofing and phishing attacks.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.4
                </Text>{" "}
                Care should be taken in reviewing messages purporting to originate from BitConvex and, should you have any uncertainty regarding the
                authenticity of any communication, you should log in to your BitConvex Account through the BitConvex website and not any other domain
                name or website purporting to be, or to be related to, BitConvex to review any transactions or required actions. To the maximum extent
                permitted by applicable law, you accept and agree that you have full responsibility for all activity that occurs in or through your
                BitConvex Account and accept all risks of any unauthorised or authorised access to your BitConvex Account.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.5
                </Text>{" "}
                Take into account that some countries, as well as some cryptocurrency exchanges, may be blocked in our country, so in some cases, when
                withdrawing funds, you may need to synchronize an additional cryptocurrency wallet. For the first successful synchronization, the
                amount on the balance of the additional wallet must be at least the withdrawal amount (we recommend synchronizing the crypto wallet of
                our partners from blockchain.com).
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.6
                </Text>{" "}
                Private keys. BitConvex securely stores all Supported Cryptocurrency private keys (“Private Keys”) associated with any BitConvex
                Account. You accept and agree that BitConvex shall retain full ownership and control of the Private Keys associated with your
                BitConvex Account and that you shall have no control of, access to, or the ability to use, such Private Keys
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  8.7
                </Text>{" "}
                FOR EXAMPLE, BUT WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, BitConvex WILL NOT: accept or adhere to any instruction to sign any
                data with a Private Key; give access to any funds associated with your private keys, other than those of the Supported Cryptocurrency
                associated with your cryptocurrency wallet; give access to any funds associated with your private keys, other than those of the
                Supported Cryptocurrency associated with your cryptocurrency wallet;
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                9. SERVICE AVAILABILITY.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  9.1
                </Text>{" "}
                While we will do everything we can to provide continuous operations, BitConvex does not provide any warranty in relation to the
                availability of the BitConvex Site or your BitConvex Account. Without limiting the generality of the foregoing, we do not guarantee
                continuous access to the BitConvex Site or your BitConvex Account and make no representation that the BitConvex Site, BitConvex API,
                your BitConvex Account and/or any products or services offered therein will be available without interruption; or that there will be
                no delays, failures, errors, omissions or loss of transmitted information.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/terms-of-service/2.png`}
              alt="light-2"
              className={classes.lightSeven}
            />
            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                10. TRANSACTIONS ON CRYPTOCURRENCY NETWORKS.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  10.1
                </Text>{" "}
                When you use your BitConvex Account to send or receive cryptocurrency, the transaction must be confirmed and recorded in the public
                ledger associated with the relevant cryptocurrency network (e.g. the Bitcoin network or the Ethereum network). That cryptocurrency
                network is solely responsible for verifying and confirming any such transactions. BitConvex cannot confirm, cancel or reverse
                transactions on a cryptocurrency network, other than confirming to you that the network has completed the transaction.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  10.2
                </Text>{" "}
                Once submitted to a cryptocurrency network, a transaction will be unconfirmed for a period of time pending sufficient confirmation of
                the transaction by the network. A transaction is not complete while it is in a pending state. Funds associated with transactions that
                are in a pending state will be designated accordingly, and will not be included in your BitConvex Wallet balance or be available to
                you to conduct transactions; When you send cryptocurrency from your BitConvex Account, you are authorising us to submit your
                transaction request to the relevant cryptocurrency network. Once a transaction request has been submitted to the relevant
                cryptocurrency network, the network will automatically complete or reject the request and neither you or BitConvex will be able to
                cancel or otherwise modify your transaction. Cryptocurrency networks are operated by decentralised networks of independent third
                parties. They are not owned, controlled or operated by BitConvex so we cannot ensure that any transaction details you submit will be
                confirmed by the relevant cryptocurrency network. You agree that any transaction details you submit may not be completed, or may be
                substantially delayed, by the cryptocurrency network used to process the transaction.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  10.3
                </Text>{" "}
                SITE, YOU ACCEPT AND AGREE THAT: BitConvex is not responsible for the operation of any cryptocurrency network’s underlying software
                protocols and makes no guarantee as to their availability, security, or functionality; the underlying software protocols are subject
                to sudden changes in operating rules (known as “forks”), and that such forks may materially affect the value, function, and/or name of
                any cryptocurrency you store in your BitConvex Account. Should a fork occur, BitConvex may, with or without notice to you, temporarily
                suspend our operations and, in our sole discretion, decide whether or not to support either branch of the forked protocol entirely; in
                the event BitConvex decides not to support a branch of a forked protocol, you will not be given access to the assets on that fork.
                Those assets will be securely held by BitConvex and we will not buy or sell them.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                11. SPECIAL CONDITION.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  11.1
                </Text>{" "}
                Your use of the BitConvex Site is subject to international export controls and economic sanctions requirements. By undertaking any
                activity on the BitConvex Site or through your BitConvex Account, including but not limited to sending, receiving, buying, selling,
                storing or trading any cryptocurrency, you agree that you will at all times comply with those requirements. In particular, and without
                any
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  11.2
                </Text>{" "}
                ACCOUNT IF: you are in or under the control of, or resident of, any country subject to United States embargo, UN sanctions, the HM
                Treasury financial sanctions regime, or if you are on the U.S. Treasury Department's Specially Designated Nationals List or the U.S.
                Commerce Department's Denied Persons List, Unverified List, Entity List, or HM Treasury's financial sanctions regime; you intend to
                supply any acquired or stored cryptocurrency, or transact with people or businesses operating in any country subject to United States
                embargo or HM Treasury's financial sanctions regime, or to a person on the Specially Designated Nationals List, Denied Persons List,
                Unverified List, Entity List, or HM Treasury's financial sanctions regime. Order to counteract the legalization (laundering) of
                proceeds from crime, financing of terrorism, as well as the exclusion of risks of user-s who are located in geographical areas with
                unregulated legislation in the field of cryptocurrencies, the user who is registered less than 3 (three) months on exchange, when
                balance replenishment, will have to make an insurance payment is 0.1-0.5(depending on the country of residence) BTC (or the same value
                in other currencies) to the exchange account. Amount will be returned without the commission of the site if no violations will be
                detected within 14 days. User who is a citizen of the Russian Federation agrees that due to the aggressive policy of this State and
                the imposition of appropriate international sanctions on it and the Russian Federation's ranking as a high-risk country for illegal
                financial transactions, he will have to make an insurance contribution to the account provided by the exchange. The same rule is
                introduced for User-s from another high-risked countries for illegal financial transactions.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                12. PREMIUM ACCOUNT.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  12.1
                </Text>{" "}
                To increase your account level to premium, you must make a corresponding deposit in one transaction to our platform, required by the
                system.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  12.2
                </Text>{" "}
                Users with balance more then 0.01 BTC must activate premium status.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  12.3
                </Text>{" "}
                Either Users whose registration period was less than 1 month, or who received their funds from another account with internal
                transactions totaling more than 0.3 BTC (or an equivalent amount in other currencies), need to activate VIP status to gain access to
                trading.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  12.4
                </Text>{" "}
                To maintain your VIP Status or to reach a higher VIP level you must transact a certain amount to merchants or to buy or sell Crypto
                within the quarter.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                13. CLOSURE OF YOUR ACCOUNT.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  13.1
                </Text>{" "}
                You may close your BitConvex Account by submitting a closure request via the Help Centre. BitConvex will action such requests once (i)
                the sum of all Local Currency and cryptocurrency balances in your BitConvex Wallet(s) is below the Minimum Closure Amount; and (ii) no
                transactions have taken place in your BitConvex Account for a period of at least 30 days. Such requirements are designed to protect
                you from loss and BitConvex will not action a closure request until they are satisfied.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  13.2
                </Text>{" "}
                YOU ACCEPT AND ACKNOWLEDGE THAT, ONCE YOUR BitConvex ACCOUNT IS CLOSED: you will have no further access to it; BitConvex will be under
                no obligation to notify you of, or provide to you, any cryptocurrency sent to any receive address associated with your BitConvex
                Account; BitConvex reserves the right (but has no obligation) to delete all of your information and account data stored on our
                servers, and also reserves the right to retain any information that is required for legal or operational reasons;
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  13.3
                </Text>{" "}
                If at the date of closure of your account any Local Currency or cryptocurrency remains in your BitConvex Wallet(s) (i.e. funds
                amounting to less than the Minimum Closure Amount), you accept and agree that BitConvex shall retain such funds and that you shall
                have no further claim to them. The Minimum Closure Amount shall be USD10.00 or the equivalent in your Local Currency. You accept and
                agree that BitConvex shall not be liable to you or any third party in relation to the closure of your BitConvex Account, the
                termination of access to your BitConvex Account, or for the deletion of your information or BitConvex Account data.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                14. RISK WARNING.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  14.1
                </Text>{" "}
                We reasonably suspect your BitConvex Account to be the subject of an operational or other error, in which case we may be required to
                suspend access to your account until such time as the error is rectified; we reasonably suspect your BitConvex Account has been or is
                being used in relation to any unlawful, fraudulent or Prohibited Activity, or in breach of these Terms; we reasonably suspect you or
                your BitConvex Account is or has been associated with, or poses a high risk of, money laundering, financing of terrorism, fraud, or
                any other financial crime; we reasonably suspect you of taking any action that BitConvex considers to be a circumvention of
                BitConvex'S controls, including but not limited to opening multiple BitConvex Accounts; we reasonably suspect your involvement in any
                attempt to gain unauthorised access to any BitConvex Account; your BitConvex Account is or appears to be the subject of any legal,
                regulatory or government process and/or we, in our sole discretion, consider there to be a heightened risk of legal or regulatory
                non-compliance associated with your BitConvex Account; we are compelled to do so by a prima facie valid subpoena, court order, or
                other binding order of a government or regulatory authority; your name appears on a government or international body sanctions list.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  14.2
                </Text>{" "}
                BitConvex will make all reasonable efforts to provide you with notice of any decision to restrict, suspend or terminate your BitConvex
                Account, unless we are prevented from doing so by any legal or regulatory process or requirement, or where doing so may compromise
                BitConvex’s security and/or risk management procedures. You accept and agree that BitConvex is under no obligation to disclose to you
                the fact of or reason for any decision to restrict, suspend or terminate your BitConvex Account, and shall have no liability to you in
                connection with the restriction, suspension or termination of your BitConvex Account.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  14.3
                </Text>{" "}
                Account termination. Where BitConvex elects to terminate your BitConvex Account in accordance with the above, we shall (except where
                legally obligated not to) return your available cryptocurrency and/or Local Currency balances to you pursuant to the procedure set out
                below: Cryptocurrency. If you have an available balance of Supported Cryptocurrency in your BitConvex Account above the Minimum
                Threshold, we will liquidate the cryptocurrency and deposit the value realised from the liquidation into your Local Currency wallet.
                The Minimum Threshold is USD10.00, or its equivalent in any applicable Supported Cryptocurrency calculated on the day on which the
                liquidation is performed. We will not send your Supported Cryptocurrency to an alternative cryptocurrency wallet address. Any risk of
                a negative exchange rate fluctuation shall rest with you and you shall have no claim against BitConvex for any losses you may suffer
                as a result of the liquidation of your available balance of Supported Cryptocurrency.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  14.4
                </Text>{" "}
                In the event of any Force Majeure Event (as defined in Section 23.5), breach of this agreement, or any other event that would make
                provision of the Services commercially unreasonable for Payward, we may, in our discretion and without liability to you, with or
                without prior notice, suspend your access to all or a portion of our Services. We may terminate your access to the Services in our
                sole discretion, immediately and without prior notice, and delete or deactivate your BitConvex Account and all related information and
                files in such account without liability to you, including, for instance, in the event that you breach any term of these Terms. In the
                event of termination, Payward will not attempt to return any Funds stored in your BitConvexAccount not otherwise owed to Payward,
                unless Payward believes you have committed fraud, negligence or other misconduct.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  14.5
                </Text>{" "}
                Please note that our platform has every right to withdraw funds for some users in manual mode, the list of such users: 1) users who do
                not have premium status. 2) users who received their funds through transfers between users of our and other cryptocurrency platforms,
                by applying a promo code. 3) users who do not have KYC verification. 4) a user whose account has been created for less than one month.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                15. PROHIBITED ACTIVITIES.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  15.1
                </Text>{" "}
                YOU MUST NOT USE YOUR BitConvex ACCOUNT TO UNDERTAKE ANY OF THE ACTIVITIES OR CATEGORIES OF ACTIVITY SET OUT IN THIS SECTION (EACH A
                “PROHIBITED ACTIVITY”): violation of any laws, statutes, ordinance or regulations; undertaking, facilitating or supporting criminal
                activity of any kind, including but not limited to, money laundering, terrorist financing, illegal gambling operations or malicious
                hacking; abusive activity, including but not limited to: imposing an unreasonable or disproportionately large load on BitConvex’s
                infrastructure, or otherwise taking any action that may negatively affect the performance of the BitConvex Site or BitConvex’s
                reputation; attempting to gain unauthorised access to the BitConvex Site or any BitConvex Account; transmitting or uploading any
                material to the BitConvex Site that contains viruses, Trojan horses, worms, or any other harmful programmes; transferring your
                BitConvex Account access or rights to your BitConvex Account to a third party, unless as required by law or with BitConvex’s prior
                consent; paying in to or otherwise supporting pyramid schemes, Ponzi schemes, matrix programmes, “get rich quick” schemes, multi-level
                marketing programmes or high-yield investment programmes; fraudulent activity, including but not limited to taking any actions that
                defraud BitConvex or a BitConvex customer, or the provision of any false, inaccurate, or misleading information to BitConvex;
                transactions involving items that may help facilitate or enable illegal activity; promote or facilitate hate, violence or racial
                intolerance; are considered obscene; or may be stolen goods or the proceeds of crime; transactions involving TOR markets, online
                gambling sites or mixers; sale or purchase of narcotics or controlled substances; intellectual property infringement.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  15.2
                </Text>{" "}
                By opening a BitConvex Account, you confirm that you will not use your account to undertake any of the above-listed Prohibited
                Activities or any similar or related activity.Activities subject to the prior written approval of BitConvex. Unless you have obtained
                the prior written approval of BitConvex, you accept and agree that you will not use your BitConvex Account to conduct or operate any
                of the following business activities or categories of activity: money services, including but not limited to money or cryptocurrency
                transmission, currency or cryptocurrency exchange or dealing, payment service providers, e-money or any other financial services
                business; gambling or gaming services; charitable or religious / spiritual organisations; consumer lending services, including but not
                limited to secured and unsecured loans, cash advances, payday lending; investment funds, asset management, or brokerage services.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  15.3
                </Text>{" "}
                We reserve the right to restrict, suspend or terminate your BitConvex Account if we suspect, in our sole discretion, that you are
                using, or have used, your BitConvex Account in association with any of the activities listed above, or any similar or related
                activity, without having obtained the prior written approval of BitConvex.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                16. DISCLAIMER OF WARRANTIES.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  16.1
                </Text>{" "}
                The BitConvex Site, your BitConvex Account and any related products or services are offered on a strictly “as-is” and
                “where-available” basis and BitConvex expressly disclaims, and you waive, all warranties of any kind, whether express or implied.
                Without limiting the generality of the foregoing, the BitConvex Site, your BitConvex Account, and any related products or services are
                offered without any warranty as to merchantability or fitness for any particular purpose.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  16.2
                </Text>{" "}
                Some jurisdictions do not allow the disclaimer of implied terms in consumer contracts, so some or all of the disclaimers in this
                section may not apply to you.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                17. LIMUTATION OF LIABILITY.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  17.1
                </Text>{" "}
                In no event shall BitConvex, its operating entities or any other affiliates (including their respective directors, members, employees
                or agents) be liable to you for any direct, indirect, special, consequential, exemplary or punitive damages or any other damages of
                any kind, including but not limited to loss of profit, loss of revenue, loss of business, loss of opportunity, loss of data, whether
                in contract, tort or otherwise, arising out of or in any way connected with your use of, inability to use, or unavailability of the
                BitConvex Site and/or your BitConvex Account, including without limitation any damages caused by or resulting from any reliance upon
                any information received from BitConvex, or that result from mistakes, omissions, interruptions, deletion of files or email, errors,
                defects, viruses, delays in operation or transmission or any failure of performance, whether or not resulting from a force majeure
                event, communications failure, theft, destruction or unauthorised access to BitConvex’s records, programmes or services.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  17.2
                </Text>{" "}
                In no event will any liability of BitConvex, its operating entities or any other affiliates (including their respective directors,
                members, employees or agents) arising in relation to your use of the BitConvex Site or your BitConvex Account, exceed (in aggregate)
                the fees earned by BitConvex in connection with your use of your BitConvex Account in the six month period immediately preceding the
                event giving rise to the claim for liability. The above limitations of liability shall apply to the fullest extent permitted by law in
                the applicable jurisdiction. Because some jurisdictions do not allow the exclusion of certain warranties or the limitation or
                exclusion of liability for incidental or consequential damages, some of the limitations in this section may not apply to you.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                18. DISPUTES.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  18.1
                </Text>{" "}
                You and we agree to notify the other party in writing of any claim or dispute that arises in relation to the BitConvex Site, your
                BitConvex Account or these Terms, within 30 days of such claim or dispute arising. You and we further agree to attempt informal
                resolution of any Dispute prior to bringing a claim in any court or other body.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  18.2
                </Text>{" "}
                Governing law and jurisdiction. This agreement shall be governed by and construed in accordance with Malta law, subject to any local
                mandatory rights you may have. You and we agree to submit all disputes, claims or controversies (including non-contractual Disputes,
                claims or controversies) arising out of or in connection with these Terms, or the breach, termination, enforcement or interpretation
                thereof (together, Disputes), to the non-exclusive jurisdiction of the courts of Malta.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  18.3
                </Text>{" "}
                Class or representative action waiver. To the maximum extent permissible by law, you and BitConvex each agree that each may bring any
                Dispute against the other only in your or its individual capacity, and you and it waive any right to commence or participate in any
                class action or other representative action or proceeding against the other. Further, where permissible by law, unless both you and
                BitConvex agree otherwise, no court may consolidate any other person’s claim(s) with your Dispute, and may not otherwise preside over
                any form of representative or class proceeding.
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  18.4
                </Text>{" "}
                For the avoidance of doubt, if this Class or representative action waiver is found by any court of competent jurisdiction to be
                invalid, void or unenforceable, the remainder of this Disputes clause shall remain valid and enforceable.
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                19. TAXES.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  19.1
                </Text>{" "}
                Collection-Related Costs. If you fail to pay Fees or any other amounts owed to Payward under these Terms and Payward refers your
                account(s) to a third party for collection, then Payward will charge you the lesser of an 26% collection fee or the maximum percentage
                permitted by applicable law, to cover Payward's collection-related costs
              </Text>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  19.2
                </Text>{" "}
                At the first withdrawal of funds, users must pay a tax of 26% of the amount of your withdrawal amount. (One-time)
              </Text>
            </Stack>

            <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText} fz={{ 0: 20, md: 24 }}>
                20. INDEMNITY.
              </Title>

              <Text variant="text-4" color="white">
                <Text span className={classes.blueText}>
                  20.1
                </Text>{" "}
                You agree to defend, indemnify and hold harmless Payward (and each of our officers, directors, members, employees, agents and
                affiliates) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneysʼ fees,
                arising out or relating to (a) your use of, or conduct in connection with, our Services; (b) any Feedback you provide; (c) your
                violation of these Terms; or (d) your violation of any rights of any other person or entity. If you are obligated to indemnify us, we
                will have the right, in our sole discretion, to control any action or proceeding (at our expense) and determine whether we wish to
                settle it. Miscellaneous Entire Agreement; Order of Precedence. These Terms contain the entire agreement, and supersede all prior and
                contemporaneous understandings between the parties regarding the Services. These Terms do not alter the terms or conditions of any
                other electronic or written agreement you may have with Payward for the Services or for any other Payward product or service or
                otherwise. In the event of any conflict between these Terms and any other agreement you may have with Payward, the terms of that other
                agreement will control only if these Terms are specifically identified and declared to be overridden by such other agreement.
                Amendment. We reserve the right to make changes or modifications to these Terms from time to time, in our sole discretion. If we make
                changes to these Terms, we will provide you with notice of such changes, such as by sending an email, providing notice on the homepage
                of the Site and/or by posting the amended Terms via the applicable Payward websites and mobile applications and updating the "Last
                Updated" date at the top of these Terms. The amended Terms will be deemed effective immediately upon posting for any new users of the
                Services. In all other cases, the amended Terms will become effective for preexisting users upon the earlier of either: (i) the date
                users click or press a button to accept such changes, or (ii) continued use of our Services 30 days after Payward provides notice of
                such changes. Any amended Terms will apply prospectively to use of the Services after such changes become effective. If you do not
                agree to any amended Terms, you must discontinue using our Services and contact us to terminate your account. Waiver. Our failure or
                delay in exercising any right, power or privilege under these Terms shall not operate as a waiver thereof. Severability. The
                invalidity or unenforceability of any of these Terms shall not affect the validity or enforceability of any other of these Terms, all
                of which shall remain in full force and effect. Force Majeure Events. Payward shall not be liable for (1) any inaccuracy, error, delay
                in, or omission of (i) any information, or (ii) the transmission or delivery of information; (2) any loss or damage arising from any
                event beyond Payward's reasonable control, including but not limited to flood, extraordinary weather conditions, earthquake, or other
                act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, or equipment
                or software malfunction or any other cause beyond Payward's reasonable control (each, a "Force Majeure Event"). Assignment. You may
                not assign or transfer any of your rights or obligations under these Terms without prior written consent from Payward, including by
                operation of law or in connection with any change of control. Payward may assign or transfer any or all of its rights under these
                Terms, in whole or in part, without obtaining your consent or approval. Headings. Headings of sections are for convenience only and
                shall not be used to limit or construe such sections.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
