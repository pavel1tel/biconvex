import { Flex, Group, Image, Stack, Text, Title, rem } from "@mantine/core";
import { Helmet } from "react-helmet-async";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "../../app/styles/Policy.module.css";
import amlStyles from "./styles.module.css";

export function Page() {
  return (
    <Wrapper>
      <Helmet>
        <title> AML & KYC policy | BitConvex </title>
      </Helmet>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/1.png`} alt="light-1" className={classes.lightOne} />

      <Header />

      <Stack className={classes.contentWrapper}>
        <Container>
          <Stack gap={"clamp(1.5rem, 4vw, 4rem)"}>
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/2.png`}
              alt="light-2"
              className={classes.lightTwo}
            />
            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/3.png`}
              alt="light-3"
              className={classes.lightThree}
            />

            <Group gap={"clamp(12px, 2vw, 2rem)"}>
              <Flex justify="center" align="center" className={classes.iconWrapper}>
                <img
                  draggable="false"
                  className={amlStyles.amlKycPolicyIcon}
                  src={`${import.meta.env.BASE_URL}assets/amlKycPolicyIcon.png`}
                  alt="amlKycPolicy"
                  width="113"
                  height="113"
                />
              </Flex>

              <Stack gap={"clamp(12px, 2vw, 2rem)"}>
                <Title c="white" order={2} fz={{ 0: 40, md: 54 }}>
                  AML & KYC policy
                </Title>
                <Text fz={{ 0: 16, md: 20 }} color="white" className={classes.blueText}>
                  Updated: 05-19-2021
                </Text>
              </Stack>
            </Group>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Text variant="text-4" color="white">
                The purposes of the BitConvex’s Anti-Money Laundering, Counter-Terrorist Financing and Know Your Customer Policy (hereinafter — the
                “AML/KYC Policy“) is to identify, prevent and mitigate possible risks of BitConvex being involved in illegal activity.
              </Text>

              <Text variant="text-4" color="white">
                To confirm with international and local regulations, BitConvex has implemented effective internal procedures to prevent money
                laundering, terrorist financing, drug and human trafficking, proliferation of weapons of mass destruction, corruption and bribery and
                to react correspondingly in case of any form of suspicious activity from its Users.
              </Text>

              <Text variant="text-4" color="white">
                Money Laundering can be defined as: ‘the conversion or transfer of property, knowing that such property is derived from criminal
                activity, or from an act of participation in such activity, for the purposes of concealing or disguising the illicit origin of the
                property, or assisting any person who is involved in the commission of such activity to evade the legal consequences of his action.’
              </Text>

              <Text variant="text-4" color="white">
                Terrorist Financing can be defined as: ‘the wilful provision or collection, by any means, directly or indirectly, of funds with the
                intention that the funds should be used, or in the knowledge that they are to be used, in order to carry out terrorist acts.’
              </Text>

              <Text variant="text-4" color="white">
                All firms must adhere to the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017
                (MLRs), and be aware of the guidance set down by the Joint Money Laundering Steering Group (JMLSG) which provides guidelines within
                the United Kingdom on how firms should conduct Due Diligence on their customers, and the recommendations from the Financial Action
                Task Force (FATF), an inter-governmental body whose purpose is the development and promotion of national and international policies to
                combat money laundering and terrorist financing.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Other legislation in relation to AML/KYC are:
              </Title>

              <Text variant="text-4" color="white">
                Terrorist Financing can be defined as: ‘the wilful provision or collection, by any means, directly or indirectly, of funds with the
                intention that the funds should be used, or in the knowledge that they are to be used, in order to carry out terrorist acts.’
                <br />
                <br />
                All firms must adhere to the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017
                (MLRs), and be aware of the guidance set down by the Joint Money Laundering Steering Group (JMLSG) which provides guidelines within
                the United Kingdom on how firms should conduct Due Diligence on their customers, and the recommendations from the Financial Action
                Task Force (FATF), an inter-governmental body whose purpose is the development and promotion of national and international policies to
                combat money laundering and terrorist financing.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Other legislation in relation to AML/KYC are:
              </Title>

              <ul style={{ color: "white", paddingLeft: rem(30) }}>
                <li>
                  <Text variant="text-4" color="white">
                    5th Anti-Money Laundering Directive ((EU) 2018/843)
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    The Proceeds of Crime Act 2002;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Terrorism Act 2000 and 2001;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Counter-Terrorism Act 2008;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    HM Treasury Sanction Notices;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    FCA Handbook.
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    AML/KYC Policy includes:
                  </Text>
                </li>
              </ul>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/4.png`}
              alt="light-4"
              className={classes.lightFour}
            />
            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                AML/KYC Policy includes:
              </Title>
              <ul style={{ color: "white", paddingLeft: rem(30) }}>
                <li>
                  <Text variant="text-4" color="white">
                    Verification procedure;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Role of the Chief Compliance Officer;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Transactions Monitoring;
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Risk Assessment:
                  </Text>
                </li>
                <li>
                  <Text variant="text-4" color="white">
                    Country of Residence.
                  </Text>
                </li>
              </ul>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Verification procedures
              </Title>

              <Text variant="text-4" color="white">
                To help fight the funding of terrorism and money laundering activities, the Law requires all financial institutions to obtain, verify
                and record information that identifies each person or entity who opens an Account. We are required by Law to ask you to provide your
                name, address, date of birth and other information about you, your organisation or persons related to your organisation that will
                allow us to identify you before we approve your Account. We also may ask you to provide certain identifying documents, such as your
                driver’s license or passport or your organisation’s articles of incorporation and may obtain credit and other consumer reports to
                assist us in verifying your identity and in determining whether you satisfy our account criteria. Unless you provide the requested
                information and documentation, we may not be able to open your Account.
              </Text>

              <Text variant="text-4" color="white">
                By applying for an BitConvex Account, you agree to provide the information and documentation requested by BitConvex and consent to
                BitConvex’s acquisition of credit and other consumer reports about you for the purposes described above.
              </Text>

              <Text variant="text-4" color="white">
                The BitConvex’s Customer due diligence (“CDD“) procedure requires the Users to provide BitConvex with reliable, independent source
                documents to identify them and confirm their residential address. Such documents may include, for example, a national ID card, an
                international passport, a bank statement, a utility bill. For such purposes, BitConvex reserves the right to collect the Users’
                identification information for the purposes of compliance with its AML/CFT and KYC Policy.
              </Text>

              <Text variant="text-4" color="white">
                BitConvex will take steps to confirm the authenticity of documents and information provided by Users. BitConvex will also look to
                verify identification information through secondary sources, and BitConvex reserves the right to investigate further the cases of
                Users where BitConvex is not satisfied with the documentation submitted.
              </Text>

              <Text variant="text-4" color="white">
                BitConvex reserves the right to verify the identity of the User on an ongoing basis, especially when its identification information
                has been changed or its activities appear suspicious (unusual for a particular User). In addition, BitConvex reserves the right to
                request from the Users current documents, even if they have been authenticated in the past.
              </Text>

              <Text variant="text-4" color="white">
                Information about the user’s identification will be collected, stored, shared and protected strictly in accordance with the
                BitConvex’s Privacy Policy and relevant rules. The User agrees that if any information provided in the Account application changes,
                ceases to be true or becomes materially misleading (including, but not limited to, the ownership of the Account) then the User will
                notify BitConvex of the changes.
              </Text>

              <Text variant="text-4" color="white">
                After confirming the identity of the user, BitConvex may refuse to provide Services to the User if BitConvex’s Services are suspected
                to be used for the purposes of conducting illegal activities.
              </Text>

              <Text variant="text-4" color="white">
                BitConvex has a regulatory requirement to verify the sources of Fiat Money and/or Cryptocurrency to know that the sources of the Funds
                that Users use to trade with are legitimate. BitConvex will require evidence of the source of Funds; this may include bank statements
                for Fiat Money or a video showing wallet transaction details for Cryptocurrency.
              </Text>

              <Text variant="text-4" color="white">
                Users who intend to use payment cards for the purpose of consuming Services must undergo a card check in accordance with the
                instructions available on the BitConvex’s Site.
              </Text>

              <Text variant="text-4" color="white">
                BitConvex uses independent third-party companies for the following:
                <ul style={{ color: "white", paddingLeft: rem(30) }}>
                  <li>
                    <Text variant="text-4" color="white">
                      check Users against Politically Exposed Person’s (PEP) and Sanctions Lists as well as checks for Adverse Media.
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      assess User’s cryptocurrency wallets with regards to AML investigation and compliance.
                    </Text>
                  </li>
                </ul>
              </Text>

              <Text variant="text-4" color="white">
                BitConvex reserves the right to terminate or refuse Accounts on the basis of information attained by the third-party companies this
                includes Users connected to “high-risk” wallets.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/2.png`}
              alt="light-2"
              className={classes.lightFive}
            />
            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Chief Compliance Officer
              </Title>

              <Text variant="text-4" color="white">
                The Chief Compliance Officer is the person, duly authorised by BitConvex, whose duty is to ensure the effective implementation and
                enforcement of the AML/CFT and KYC Policy. It is the Chief Compliance Officer’s responsibility to supervise all aspects of BitConvex’s
                anti-money laundering and counter-terrorist financing procedures, in particular:
                <ul style={{ color: "white", paddingLeft: rem(30) }}>
                  <li>
                    <Text variant="text-4" color="white">
                      collection of Users’ identification information;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      establishing and updating internal policies and procedures for the completion, review, submission and retention of all reports
                      and records required under the applicable laws and regulations;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      monitoring transactions and investigating any significant deviations from normal activity;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      implementing a records management system for appropriate storage and retrieval of documents, files, forms and logs, updating
                      risk assessment regularly, providing law enforcement with information as required under the applicable laws and regulations.
                    </Text>
                  </li>
                </ul>
              </Text>

              <Text variant="text-4" color="white">
                The Chief Compliance Officer is the contact point for BitConvex with law enforcement agencies for the purposes of prevention of money
                laundering, terrorist financing and other illegal activities.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Transaction Monitoring
              </Title>

              <Text variant="text-4" color="white">
                BitConvex Users must complete the BitConvex’s identity verification process (who you are) before trading. After verification is
                completed the User consents to transaction Monitoring, BitConvex analyses User’s transactional patterns (what they do)
              </Text>

              <Text variant="text-4" color="white">
                BitConvex relies on data analysis as a risk-assessment and suspicious activity detection tools. These tools perform a variety of
                compliance-related tasks, including capturing data, filtering, record-keeping, investigation management and reporting.
              </Text>

              <Text variant="text-4" color="white">
                In connection with the AML/KYC Policy, BitConvex will:
                <ul style={{ color: "white", paddingLeft: rem(30) }}>
                  <li>
                    <Text variant="text-4" color="white">
                      monitor all transactions. BitConvex reserves the right to ensure that transactions of suspicious nature are reported to the
                      proper law enforcement;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      request the User to provide any additional information and documents in case of suspicious transactions;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      suspend or terminate User’s Account when BitConvex has a reasonable suspicion that such User is engaged in illegal activity.
                    </Text>
                  </li>
                </ul>
              </Text>

              <Text variant="text-4" color="white">
                However, the above list is not exhaustive and the Chief Compliance Officer will monitor Users’ transactions on a regular basis in
                order to define whether such transactions are to be reported and treated as suspicious.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Risk Assessment
              </Title>

              <Text variant="text-4" color="white">
                In order to meet its obligations regarding Anti-Money Laundering (AML) and Counter Terrorist Financing (CTF) BitConvex completes an
                annual AML Risk Assessment. The aim of the AML Risk Assessment is to prevent criminals using BitConvex to launder money by
                highlighting risks and assessing controls BitConvex has put in place. A risk-based approach is taken to identify Users and monitor how
                they use our Services.
              </Text>

              <Text variant="text-4" color="white">
                The Chief Compliance Officer is responsible for managing financial crime risks and making improvements in financial crime risk
                management through identifying the general and specific money laundering risks that BitConvex is facing, determining how these risks
                are mitigated by the BitConvex’s AML controls and establishing the residual risk that remains for BitConvex.
              </Text>
            </Stack>

            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Country of Residence
              </Title>

              <Text variant="text-4" color="white">
                BitConvex’s AML and KYC Policy sets out BitConvex’s risk appetite with regard to AML/KYC. To reduce this risk BitConvex does not
                accept clients who are resident in countries deemed to be above the BitConvex’s risk appetite.
              </Text>

              <Text variant="text-4" color="white">
                The sources used with regards to the categorisation were:
                <ul style={{ color: "white", paddingLeft: rem(30) }}>
                  <li>
                    <Text variant="text-4" color="white">
                      Transparency International;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      Know Your Country;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      FATF High Risk Jurisdictions;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      EU High Risk Jurisdictions;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      Countries where Digital Assets are prohibited or there are restrictions on trading;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      Countries where Digital Assets are not prohibited;
                    </Text>
                  </li>
                  <li>
                    <Text variant="text-4" color="white">
                      Countries subject to UNSC Sanctions Regime.
                    </Text>
                  </li>
                </ul>
              </Text>

              <Text variant="text-4" color="white">
                It must me clear that BitConvex’s policy is that all clients resident in the below countries are banned and cannot be accepted as a
                client. Any clients that try to open an account will be denied and any funds returned to source.
              </Text>
            </Stack>

            <Image
              draggable={false}
              src={`${import.meta.env.BASE_URL}assets/light/aml-kyc-policy/4.png`}
              alt="light-4"
              className={classes.lightSix}
            />
            <Stack gap={"clamp(12px, 2vw, 2rem)"}>
              <Title order={4} className={classes.blueText}>
                Full list of Banned Jurisdictions
              </Title>
              <Group>
                <Text variant="text-4" color="white">
                  <ul style={{ color: "white", paddingLeft: rem(30) }}>
                    <li>
                      <Text variant="text-4" color="white">
                        Afghanistan;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Albania;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Angola;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Algeria;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Bangladesh;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Barbados;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Bolivia;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Botswana;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Burma (Myanmar);
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Burundi;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Cambodia;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Central African Republic;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Chad;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Congo;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Guinea – Conakry;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Cote D’ivoire;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Crimea (Ukraine region);
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Cuba;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Democratic People’s Republic of Korea (DPRK);
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Ecuador;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Egypt;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Equatorial Guinea;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Eritrea;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Ghana;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Guinea Bissau;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Guyana;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Haiti;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Iran;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Iraq;
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Jamaica;
                      </Text>
                    </li>
                  </ul>
                </Text>
                <Text variant="text-4" color="white">
                  <ul style={{ color: "white", paddingLeft: rem(30) }}>
                    <li>
                      <Text variant="text-4" color="white">
                        Lao PDR
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Lebanon
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Libya
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Mali
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Morocco
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Myanmar
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Nepal
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Nicaragua
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        North
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Macedonia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Pakistan
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Panama
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Qatar
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Saudi Arabia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Somalia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        South Sudan
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Afghanistan
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Sudan
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Syria
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Tunisia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Uganda
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Vanuatu
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Afghanistan
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Yemen
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Zimbabwe
                      </Text>
                    </li>
                  </ul>
                </Text>
              </Group>

              <Text variant="text-4" color="white">
                BitConvex also does not accept any clients from disputed territories as they do not produce recognised official documents, these
                include:
              </Text>

              <Group>
                <Text variant="text-4" color="white">
                  <ul style={{ color: "white", paddingLeft: rem(30) }}>
                    <li>
                      <Text variant="text-4" color="white">
                        Donetsk People’s Republic (DPR)/Luhansk People’s Republic (LPR)
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Pridnestrovian Moldavian Republic
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Nagorno-Karabakh Republic
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of Abkhazia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of Somaliland
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of South Ossetia
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Turkish Republic of Northern Cyprus
                      </Text>
                    </li>
                  </ul>
                </Text>
                <Text variant="text-4" color="white">
                  <ul style={{ color: "white", paddingLeft: rem(30) }}>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of China (Taiwan)
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Passports issued by the Russian Federation in Crimea and passports issued to residents of Donetsk and Luhansk regions of
                        Ukraine do not qualify for verification
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of Kosovo
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Sahrawi Arab Democratic Republic
                      </Text>
                    </li>
                    <li>
                      <Text variant="text-4" color="white">
                        Republic of Artsakh
                      </Text>
                    </li>
                  </ul>
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Footer />
    </Wrapper>
  );
}
