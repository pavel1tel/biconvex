import { Accordion, Stack, Text, Title, rem } from "@mantine/core";
import ReactHtmlParser from "react-html-parser";
import { P } from "ts-pattern";

import { PlusIcon } from "@/shared/ui";

import classes from "./styles.module.css";

const firstTopic = [
  {
    title: "How do I create an account on BitConvex?",
    description:
      "To create an account on BitConvex, go to our website, click 'Register,' and follow the simple on-screen instructions to get started.",
  },
  {
    title: "What cryptocurrencies can I trade on BitConvex?",
    description:
      "BitConvex offers a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Ripple (X), Solana (SOL), Chainlink (LINK) and other 100+ coins.",
  },
  {
    title: "How can I secure my BitConvex account?",
    description: "Protect your BitConvex account by enabling two-factor authentication (2FA) and using a strong, unique password.",
  },
  {
    title: "What are the trading fees on BitConvex?",
    description: "Our trading fees vary based on your trading volume. You can find detailed fee information in our fee schedule on our website.",
  },
];

const secondTopic = [
  {
    title: "What deposit methods are supported on your exchange?",
    description: "We support various deposit methods, including bank transfers, cryptocurrency deposits, and other convenient options.",
  },
  {
    title: "How quickly are withdrawal requests processed?",
    description: "Withdrawal requests are processed promptly, ensuring swift and efficient transaction processing.",
  },
  {
    title: "How can users get support in case of an issue?",
    description: "Our customer support is available 24/7. You can contact us through the in-app chat or via email.",
  },
  {
    title: "What trading tools and features are available for experienced traders?",
    description: "We provide a wide range of tools, including charts, analytics, and other features to meet the needs of experienced traders.",
  },
  {
    title: "Do you have loyalty programs or bonus schemes for active users?",
    description: "Yes, we have loyalty programs and bonus schemes, offering privileges to active users of our exchange.",
  },
  {
    title: "What advantages does your exchange offer to new users?",
    description:
      "New users can benefit from discounts on trading fees, explore a variety of cryptocurrency pairs, and enjoy a user-friendly interface.",
  },
];

const firstGeneralQuestions = [
  {
    title: "About us",
    description: `Our company has come a long way from a simple exchange platform to a complex mechanism, which works smoothly. We have changed the perception of many people about cryptocurrency and its use. We introduced lots of interesting and useful technologies, which are helping us to protect your funds, and helping you to invest your funds with maximum benefit.<br/><br/>
World's first we created system, which helps you to buy, sell, transfer your funds inside our exchange in few seconds, you don't need to wait blockchain conf irmation any more. In our Exchange your funds This one, and lots of another features makes trading in Trading Exchange very comfortable, useful and profitable. After making a deposit, your funds constantly are stored on the permanent wallet, no matter what manipulations you do with them. They are assigned to you in the internal system of our site, so you shouldn't pay a commission on the blockchain network during transfer, trading and other transactions.<br/><br/>

We are interested in cryptocurrencies and we believe they will change the world and become the main currency in the future. We believe that cryptocurrencies will continue to grow and develop tirelessly, so we offer to invest in them right now, because even a very small investment changes the world.<br/><br/><br/>

<b style='margin-left: 25px;'>Why is it necessary to invest in such currencies?</b>
<br/><br/>
This excludes banks from the money exchange chain between stores and users, which significantly reduces the percentage of fees. Cryptocurrencies are anonymous, it is need, because when you are living in the 21st century, nobody can guarantee you 100% privacy. Your phone, your camera on your laptop, your speakers - all of this takes away from you your privacy, despite only you are owner of this information! In financial world only cryptocurrencies, thanks to their unique technology, can provide you anonymity and privacy. It's easy! By us, buying and selling cryptocurrencies has become much easier, which simplifies the work. It's profitable! Many people have earned lots of money in trading! Just become a part of these people!<br/><br/>
<br/><b style='margin-left: 25px;'>Features</b><br/><br/>
Our exchange allows users to create Market and Limit Orders for the sell/buy of the desired coin/token. For your convenience, all your transactions are collected in one place. You can see the history of operations in your personal account. Visually convenient Order Book is another advantage of our exchange.<br/><br/>
<br/><b style='margin-left: 25px;'>Commissions</b><br/><br/>
The convenience of using exchange lies in the low Deposit and Withdrawal limits, as well as in the same commissions for Limit and Market. VIP users will be able to save significantly on commissions, as they will be lower.<br/><br/><br/>
<b style='margin-left: 25px;'>Privacy Policy</b><br/><br/>
We take care of the security of our clients data and their electronic money stored on our exchange in accordance with the Personal Data Protection Regulation. The client can pass KYC verification for greater protection and convenience of solving various situations by the support service. Also, exchange users can pass the two-factor authentication procedure, which will significantly increase the protection of their Account. Read all the details on our Help Center page.

`,
  },
  {
    title: "General Questions",
    description: `<b style='margin-left: 25px;'>What is cryptocurrency?</b><br/><br/>
Сryptocurrency is a digital currency that uses cryptography for security, feature, that makes it difficult to counterfeit. It is not issued by any central authority, rendering it theoretically immune to government interference or manipulation.<br/><br/>
<b style='margin-left: 25px;'>How do I register?</b><br/><br/>
Registering is as simple as 1, 2, 3. Go to main page and register with your email address to get started. For registration, you will need a username and a password.<br/><br/>
<b style='margin-left: 25px;'>How do I get verified?</b><br/><br/>
For certain kinds of Exchange Cryptocurrency Platform payments profile transactions, we might need to verify your identity using information protecting your wallet. Verifying your identity helps prevent fraud and ensures that no one, except you, is able to use your payment information to make changes. You can make the first withdrawal of your funds to the wallet, which is registered and verified with your account. Click to Deposit at the left tab, select the minimum amount BTC that will be added to your account balance.<br/><br/>
<b style='margin-left: 25px;'>What is ID verification for?</b><br/><br/>
ID verification is needed to increase the security and reliability of the account. In case of loss of access to the mail to which the account is linked, you can always restore access with your Passport, driving license and other legal ID. In addition, verification allows you to increase daily withdrawal limits.<br/><br/>
<b style='margin-left: 25px;'>What is 2Factor Authentication (or 2FA)?</b><br/><br/>
We allow you to enable 2FA on your account by checking 2FA box in Personal Area  Settings. When making a deposit or withdrawal, you will receive a link to the confirmation of the operation by email. The confirmation link has a limited validity period. This greatly increases the security of your account because if your device is hacked into, or your password is compromised, the hacker will still not be able withdraw or transfer funds because they need access email, too. You may turn the verification off anytime you want.<br/><br/>
<b style='margin-left: 25px;'>I lost my 2Factor Device.</b><br/><br/>
Please contact Support and we will ask you questions to verify your account ownership.<br/><br/>
<b style='margin-left: 25px;'>I have other questions.</b><br/><br/>
If you have other questions that are not answered here please feel free to contact support manager.<br/><br/>
`,
  },
  {
    title: "Referral Program",
    description: `<b style='margin-left: 25px;'>How does it work?</b><br/><br/>
The referral system on our exchange is divided into three stages:
A :a group of people who registered directly with your link B :friends of your referrals, who, in turn, were invited by category A referrals and registered by their referral code C :registered users on a referral link of a referral from category B Thus, the domain.site referral system consists of three stages.<br/><br/>
<b style='margin-left: 25px;'>Who are referrals and why are they needed?</b><br/><br/>
A referral is a partner program participant who has registered on the recommendation of another participant. A referral is also a full-fledged user of the domain.site Exchange, without any restrictions. The person who brought the new member to the project will receive a commission (referral). Accordingly, the more people click on the link, the more passive earnings the referrer will have<br/><br/>
<b style='margin-left: 25px;'>What kind of reward awaits you?</b><br/><br/>
As we mentioned above, the updated referral system includes as many as three stages of referrals, respectively, the rewards will also vary for you depending on your category. For category A referrals you get 50% of the commission, category B referrals will bring you 10%, and for category C you will get 2.5% of the commission.<br/><br/>
For each referral you will receive your percentage, but this percentage will depend on the referral category: A, B or C.<br/><br/>
At the moment, the referral system and the ability to create an unlimited number of referral codes are only available to premium users.<br/><br/>
domain.site referral program packs these key features:<br/><br/>
No referral limits - You can refer as many friends as possible; you and your friends will each get refferal bonus in BTC equivalent after they complete their verification.<br/><br/>
Anyone can participate - Available for all eligible Trading users, no BTC/ETH/BCH staking required to refer friends.<br/><br/>
Bonus credited instantly - Your friends can use their sign-up bonus immediately after they passing verification.<br/><br/>
Get rewards for your friends deposit - For each new friend you will receive 0.01% (in BTC) of the sum of all his deposits.<br/><br/>
<b style='margin-left: 25px;'>Creation your referral link</b><br/><br/>
Go to the settings page and click on the link "Click here to get your referral link". Enter your referral code in the field and click "Create". Please note that the code should include letters and numbers and be at least 8 and no more than 12 characters.
`,
  },
];
const policiesQuestions = [
  {
    title: "AML&CFT Policy",
    description: `<b style='margin-left: 25px;'>Anti-Money Laundering (AML) Policy:</b><br/><br/>
The BitConvex's AML Policy is designed to prevent money laundering by meeting the European standards on combating money laundering and terrorism financing, including the need to have adequate systems and controls in place to mitigate the risk of the firm being used to facilitate financial crime. This AML Policy sets out the minimum standards which must be complied with and includes:<br/><br/>
Appointing a Money Laundering Reporting Officer (MLRO) who has a sufficient level of seniority and independence, and who has responsibility for oversight of compliance with the relevant legislation, regulations, rules and industry guidance;<br/><br/>
Establishing and maintaining a Risk-Based Approach (RBA) to the assessment and management of money laundering and terrorist financing risks faced by the firm;<br/><br/>
Establishing and maintaining risk-based Customer Due Diligence (CDD), identification, verification and Know Your Customer (KYC) procedures, including enhanced due diligence for customers presenting a higher risk, such as Politically Exposed Persons (PEPs);<br/><br/>
Establishing and maintaining risk-based systems and procedures for the monitoring of on-going customer activity;<br/><br/>
Establishing procedures for reporting suspicious activity internally and to the relevant law enforcement authorities as appropriate;<br/><br/>
Maintaining appropriate records for the minimum prescribed periods;<br/><br/>
Providing training for and raising awareness among all relevant employees.<br/><br/>
<b style='margin-left: 25px;'>Sanctions Policy:</b><br/><br/>
BitConvex is prohibited from transacting with individuals, companies and countries that are on prescribed sanctions lists. BitConvex will therefore screen against United Nations, European Union, UK Treasury and US Office of Foreign Assets Control (OFAC) sanctions lists in all jurisdictions in which we operate.
`,
  },
  {
    title: "Privacy Policy",
    description: `<b style='margin-left: 25px;'>Privacy Policy</b><br/><br/>
1.The purpose of this Privacy Policy is to inform you and provide you with an understanding of how Mek Global Limited (BitConvex or we or us or our) handles, collects, uses, discloses and deals with personal data about you (User) that you give us, that we receive through third parties or that is in our possession. Further, this Privacy Policy governs the manner in which BitConvex collects, uses, maintains and/or discloses personal data collected from Users of the BitConvex.com website (Site). To provide you with our Services, we might need (and sometimes obliged by the law) to collect your personal data.<br/><br/>
 
2.We take our responsibilities under the Constitution of United States of Amerie seriously. We also recognize the importance of the personal data you have entrusted to us and believe that it is our responsibility to properly manage, protect and process your personal data.<br/><br/>
 
3.This privacy policy applies to the Site and all Services offered by BitConvex.<br/><br/>
 
<b style='margin-left: 25px;'>Personally identifiable information</b><br/><br/>
4.We may collect personally identifiable information from Users in a variety of ways, including, but not limited to, when Users visit our Site, register on the Site, place an order, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. When interacting with us on the Site, Users can always refuse to supply personal data to us, except that it may prevent them from engaging in certain Site related activities or transactions.<br/><br/>
 
Non-personally identifiable information<br/><br/>
 
5.We may collect non-personally identifiable information about Users when they interact with our Site.<br/><br/>
 
<b style='margin-left: 25px;'>What Information Do We Collect?</b><br/><br/>
6.Personal data used in this Privacy Policy is to mean data, whether true or not, about an individual who can be identified from that data, or from that data and other information to which an organization has or is likely to have access. BitConvex collects information about you when you use our websites (including the Site) and other online products and services and throughout other interactions and services you have with us. Personal data which we may collect include:<br/><br/>
 
1. Name<br/><br/>
 
2. Home Address<br/><br/>
 
3. Contact Information<br/><br/>
 
4. Transactional Information<br/><br/>
 
5. Usage and Preferences<br/><br/>
`,
  },
  {
    title: "Risk Warning",
    description: `The trading of goods and products, real or virtual, as well as virtual currencies involves significant risk. Prices can and do fluctuate on any given day. Due to such price fluctuations, you may increase or lose value in your assets at any given moment. Any currency - virtual or not - may be subject to large swings in value and may even become worthless. There is an inherent risk that losses will occur as a result of buying, selling or trading anything on a market.<br/><br/>
Bitcoin trading also has special risks not generally shared with official currencies or goods or commodities in a market. Unlike most currencies, which are backed by governments or other legal entities, or by commodities such as gold or silver, Bitcoin is a unique kind of "fiat" currency, backed by technology and trust. There is no central bank that can take corrective measure to protect the value of Bitcoins in a crisis or issue more currency.<br/><br/>
Instead, Bitcoin is an as-yet autonomous and largely unregulated worldwide system of currency firms and individuals. Traders put their trust in a digital, decentralized and partially anonymous system that relies on peer-to-peer networking and cryptography to maintain its integrity.<br/><br/>
Bitcoin trading is probably susceptible to irrational (or rational) bubbles or loss of confidence, which could collapse demand relative to supply. For example, confidence might collapse in Bitcoin because of unexpected changes imposed by the software developers or others, a government crackdown, the creation of superior competing alternative currencies, or a deflationary or inflationary spiral. Confidence might also collapse because of technical problems: if the anonymity of the system is compromised, if money is lost or stolen, or if hackers or governments are able to prevent any transactions from settling.<br/><br/>
There may be additional risks that we have not foreseen or identified in our Terms of Use.<br/><br/>
You should carefully assess whether your financial situation and tolerance for risk is suitable for buying, selling or trading Bitcoins.<br/><br/>
`,
  },
  //Privacy Policy
  {
    title: "User Agreement",
    description: `<b style='margin-left: 25px;'>1. COMMON PROVISION</b><br/><br/>
01<br/><br/>
These Terms of Use contain an electronic agreement between you (hereinafter the User) and BitConvex Financial Company OÃ, a company registered in the Republic of Estonia, (hereinafter the  BitConvex) regulating the terms and conditions of the User's use of this website and all services, products and content provided by BitConvex Financial Company OÃ.<br/><br/>
02<br/><br/>
These Terms of Use contain important provisions, which the User must consider carefully and understand when choosing whether to visit the Site and use the services, products and content of BitConvex Financial Company OÃ. Please read these Terms of Use carefully before agreeing to them.<br/><br/>
03<br/><br/>
References in these Terms of Use to ' BitConvex Financial Company OÃ', 'we', 'our' or 'us', are to the company BitConvex Financial Company OÃ, including but not limited to, its employees, directors, officers, agents or other related parties, third parties, whose content is offered on this website and/or in BitConvex Software, depending on the context, and references to User, 'you' or 'your' are to the person with whom BitConvex Financial Company OÃ enters into the electronic agreement, unless otherwise provided herein.<br/><br/>
04<br/><br/>
The User is solely responsible for understanding and complying with any and all laws, rules and regulations of his/her specific jurisdiction that may be applicable to the User in connection with the use of any and all services, products and content of BitConvex Financial Company OÃ.<br/><br/>
05<br/><br/>
By signing up to use an account through BitConvex Financial Company OÃ or any of our associated websites, APIs, or mobile applications(collectively the ' BitConvex Software') and/or by using BitConvex Software, you agree that you have read, understood, and accept all of the terms and conditions contained in these Terms of Use, as well as our Privacy Policy and our anti money laundering policies and procedures. The User has to read and to understand the entire Terms of Use carefully before each using the Site and/or any of the Services provided by BitConvex Financial Company OÃ.<br/><br/>
06<br/><br/>
IF THE USER DOES NOT ACCEPT AND/OR UNDERSTANDS THESE TERMS OF USE, THE USER SHALL NOT ACCESS THIS SITE AND SHALL NOT USE ANY OF BitConvex SOFTWARE, SERVICES, PRODUCTS AND CONTENT.<br/><br/>
07<br/><br/>
You should be aware that the risk of loss in trading or holding Digital Currencies can be high. Digital currency services are not currently regulated in most countries (by financial authorities or any other regulator). You should therefore carefully consider whether trading or holding Digital currencies is suitable for you in light of your financial condition and possible risks.<br/><br/>
 
<b style='margin-left: 25px;'>2. DEFINITIONS</b><br/><br/>
Terms used in these Terms of Use shall be interpreted in accordance with the definitions provided below:<br/><br/>
Account: means an account registered by the User on the Platform and/or on the BitConvex Software.<br/><br/>
"Base Currency" means the currency pair's first currency.<br/><br/>
Buyer: means the User who makes an Order to buy Cryptocurrencies through the Platform ( BitConvex Software) and/or the User whose Order is accepted by the Seller depending on the context.<br/><br/>
Commission: means a fee charged by or on behalf of any third party (e.g. bank, non-bank financial institution, payment service provider, etc).<br/><br/>
Cryptocurrency: means peer-to-peer decentralized digital representation of value (bitcoins, ethers, etc.).<br/><br/>
Deposit: means a Transaction involving transfer of Funds to the Account.<br/><br/>
`,
  },
];
const tradingQuestions = [
  {
    title: "Arbitrage",
    description: `This trading scheme for cryptocurrency exchanges is extremely simple. You buy cryptocurrency on one exchange at a low price and sell it on another exchange for as much as possible.<br/><br/>
<b>It is a simple and profitable cryptocurrency trading strategy on an exchange that only requires regular monitoring of exchange rates.</b> However, when counting on the possible earnings, you need to consider the commission that some exchanges charge. If the difference in the exchange rates of one currency on the exchanges is 2-3% or more, the sale can be profitable. If the exchange rate difference is less than 2%, the profit will be minimal or not at all.<br/><br/>
Let's say you bought 10 ETH at $210 ($2100) on one exchange, transferred them to your wallet and immediately sold on another exchange for $225 ($2250). Simple math again - your profit will be $150.<br/><br/>
It is worth noting that arbitrage on classic exchanges is a less profitable strategy that is available mainly to professionals. It takes a very fast robot to make money using arbitrage on traditional marketplaces. The response delay of the robot should be within 1 microsecond (one millionth of a second).<br/><br/>
On crypto exchanges, at least for now, robots that are a thousand times slower can still make money. With a relatively fast and smart algorithm, with this strategy you can earn up to 10% per month.<br/><br/>
`,
  },
  {
    title: "Cryptocurrency overview",
    description: `<b style='margin-left: 25px;'>What is BTC (Bitcoin)?</b><br/><br/>
Bitcoin is a reward for the work done in the form of a code.<br/></br>
Bitcoin is the world's first cryptocurrency (decentralized digital currency). This currency is fundamentally different from all previously created electronic currencies and payment systems. It is not tied to any physical assets or official currencies, and the price of a digital coin - bitcoin - is governed solely by market supply and demand.<br/></br>
Bitcoin is also a worldwide payment system through which transactions with this currency can be carried out. Its main difference from traditional payment systems is that the Bitcoin system does not have any control and processing center - all transactions take place exclusively in a network of equal clients.<br/></br>
 
<b style='margin-left: 25px;'>What is BCH (Bitcoin Cash)?</b><br/></br>
Bitcoin Cash is a cryptocurrency, a fork of Bitcoin that split from it. Forking from the main branch occurred on August 1, 2017. In 2018, Bitcoin SV peer-to-peer payment system branched off from Bitcoin Cash.<br/></br>
Any user who had Bitcoin at the time of the fork became the owner of an equivalent amount of Bitcoin Cash. To prevent double-spending, Bitcoin Cash transactions use a new signature hashing algorithm that is not valid on the Bitcoin Legacy network. This prevents replay of Bitcoin Cash transactions on the Bitcoin blockchain and vice versa.<br/></br>
The main difference from the "parent" cryptocurrency is the larger block size (8 MB instead of 1 MB), which favorably affects the speed of operations.<br/></br>
So what are the main differences between BCH and BTC? The new currency operates on a protocol similar to bitcoin: SHA-256 hash calculation algorithm; the same reward system and Proof of Work consensus; the same "ceiling" of emission - no more than 21 million coins can be issued But there are also a few key differences: the main difference is the block size increased by 8 times, up to 8 megabytes; the complexity change scheme is different: it does not change every 2016 blocks, like BTC, but every 6 Both currencies use the same Blockchain. Block number 478558 is the last of the common for both projects: the next one, 478559, is generated both in the BTC network and in BCH, but in different formats, which are mutually discarded by the blockchain branches of the "old" bitcoin and its fork. Thus, block 478559 became the first in the history of BCH.<br/></br>
Of the minor innovations of a technical nature, which also give an advantage, it can be noted: implementation of protection against erasure of transactions and their replay; a special type of transaction, where the user is given the opportunity to sign separately the amount of transfers, making payments safe<br/></br>
 
<b style="margin-left: 25px;">What is ETH (Ethereum)?</b><br/></br>
Ethereum is a decentralized platform with smart contracts: applications that work exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.<br/></br>
These applications run on a custom blockchain, an extremely powerful shared global infrastructure that can move value and represent property ownership.<br/></br>
This allows developers to create markets, keep registers of debts or promises, transfer funds according to instructions given in the past (like a will or a futures contract) and many other things that have not yet been invented, all without a middle man or counterparty risk.<br/></br>
Ether is a necessary element - fuel - for the operation of the Ethereum distributed application platform. It is a form of payment made by clients of the platform for machines performing the requested transactions. In other words, ether is an incentive to ensure that developers write quality applications (wasteful code costs are greater) and that the network remains healthy (people are compensated for their resources).<br/></br>
 
<b style='margin-left: 25px;'>What is USDT (Tether USD)?</b><br/></br>
Tether converts money into digital currency, pegs the value to local currencies such as the US dollar, euro and yen.<br/></br>
As you know, blockchain has a number of advantages over traditional financial institutions as it offers cheap, fast, unlimited transactions without intermediaries. However, the volatility of exchange rates on the blockchain does not allow them to become widespread.<br/></br>
The company combines the technology used by bitcoin with fiat currencies to take advantage of blockchain technology using a currency backed by the US Treasury or the European Central Bank. According to CEO Reeve Collins, the company is digitizing the dollar and bringing that digital dollar to the blockchain.<br/></br>
`,
  },
  {
    title: "Day Trading",
    description: `<b>Day traders are people who live off trading cryptocurrencies and spend most of their time trading.</b> Whether it's buying or selling assets, margin trading or swapping perpetual contracts, they make a dozen different trades every day, hoping to catch favorable price movements. The rewards can be overwhelming, but it can be a little daunting for newbies - especially if you don't know much about technical and fundamental analysis or have little experience in the markets. It can take months or even years of loss before you truly become a successful day trader.<br/></br>
In the cryptocurrency market, day traders have to stick to charts and watch price movements closely. Be prepared to cut losses, break even, and switch frequently to avoid bull or bear traps and losses. As a day trader, you have to befriend cryptocurrency price fluctuations and literally live by them no matter which direction the market is heading. There is a counter trade for every price movement at the pivot point, which is a great opportunity to increase the amount.<br/></br>
<b>Day trading is fast and accurate solutions designed to minimize risk and maximize your profits.</b> Of course, no trader can be 100% right, so be prepared to close positions even with significant losses. Learn to identify possible levels of support and resistance, re-enter your trades at the right time, set targets and also set stop loss, and sooner or later you will develop your day trader skill.<br/></br>
`,
  },
  {
    title: "Creation of a crypto portfolio",
    description: `This sophisticated cryptocurrency trading strategy is based on assessing the state of the cryptocurrency market. To use it effectively, it is necessary not only to monitor the situation on the cryptocurrency market, but also to take into account many fundamental factors. Moreover, it is desirable for an investor to follow the macroeconomic situation in the world.<br/></br>
How it works? A trader forms a portfolio of several promising and undervalued, in his opinion, coins. The ideal situation would be to create a balanced portfolio of cryptocurrencies, the value of which will not fall and skyrocket. In this case, a beta-neutral portfolio with respect to bitcoin, where half of the coins directly correlates with BTC and grows with its strengthening, and the other half, on the contrary, grows when the price of "digital gold" falls, may become optimal in this case.<br/></br>
Correct rebalancing of such a portfolio will generate income regardless of the general trend in the market. Keep in mind, however, that assets can correlate differently with Bitcoin at different time periods.<br/></br>
`,
  },
  {
    title: "Price Terms",
    description: `It is very easy to confuse the Last Traded Price with the Market Price for a new user who does not have enough experience in trading. Bitniex has created a dictionary of price terminology that will help novice traders understand.<br/></br>
<b>Limit price:</b> your desired limit order price or best price. Price dependence on the operation performed. A limit order:<br/></br>
<span style="margin-left: 35px;"><b>buy</b> - executed only at the limit price or lower;</span><br/></br>
<span style="margin-left: 35px;"><b>sell</b> - executed only at the limit price or higher.<br/></br>
<b>Market Price (Taker Price):</b> this is the current price at which an asset or service can be purchased or sold. The market price is the best offer in the order book, which differs for buyers and sellers because the best offer for buyers is the lowest sales order in the book, and the best offer for sellers is the highest purchase offer in the book.<br/></br>
<b>Best Average Market Price</b> is the average price of the best current asks or bids that can fill an order. It will be filled by several opposing orders on the book. A market buy order: several of the lowest asks on the book, a market sell order: several of the highest bids on the book. The average price for filling a market order is the best average price.<br/></br>
<b>Last Traded Price:</b> price for executing the last order in the market. For example, if the last XBTUSD trade was at 10127, then 10127 will be The Last Traded Price. This is a purely historical price, and the market order will not be executed on it.<br/></br>
`,
  },
  {
    title: "Pump&Dump",
    description: `Having chosen an exchange and a coin, the organizers buy tokens in small portions so as not to provoke a premature rise in the rate. As a rule, these are little-known cryptocurrencies with a low capitalization, in the common people known as shitcoins. Sometimes relatively large cryptocurrencies are used for pump&dump.<br/></br>
After the purchase of the token, the pump starts - its "pumping". In messengers, news feeds, social networks and exchange chats, the rapid growth of the rate is announced and the name of the exchange platform is announced, where the organizers of the scam place and take large orders for the purchase of a token through their bots, raising its quotation. This is the first pump wave.<br/></br>
Most of the major Bitcoin exchanges restrict this activity, and the coins on their listing are rarely suitable for the scheme. But there are popular platforms that support more than two hundred coins - they are the ones that attract scammers in the first place.<br/></br>
Fake news feeds about partnerships, investments, or technology updates are used to warm up buyers. Paid "experts" are connected to the disinformation campaign. "Sensational" information is disseminated mainly through Telegram channels. Moreover, most of these channels directly report the pump, promising profit.<br/></br>
After that, investors are sure: since they know about the pump in advance, they can make money. In fact, they are already victims, and some of them even pay to subscribe to such pump channels.<br/></br>
In the event of a successful advertising campaign, the second wave of the pump begins - third-party investors come and independently influence the growth of the rate. Amid the excitement, the price rises, the organizers sell tokens at an inflated value, after which the cryptocurrency rate returns to its original indicators.<br/></br>
`,
  },
  {
    title: "Spot or Margin",
    description: `<b style='margin-left: 25px;'>Price Terms</b><br/></br>
<span style='margin-left: 25px;'>Spot Trading</span><br/></br>
This type of trading occurs in the spot market at the current price. When you are engaged in spot trading, you make a deal at an affordable bid and ask price, which is requested by other market participants. To complete a trade, you need to have available assets to pay for the trade by the settlement date. For example, if you are going to make a purchase of BTC in the amount of $1,500, then you must make a deposit by the date of settlement of at least the specified amount. Usually the date is calculated according to the T + 2 trading day scheme. Otherwise, the exchange will refuse to enter the Bitcoin position.<br/></br>
<b style='margin-left: 25px;'>Margin Trading</b><br/></br>
With margin trading, you borrow funds from a third party to increase your position. Margin and spot trading are different. With margin trading, you do not need the full amount of the transaction to open a position, you just need to have assets that will be on the margin of the position you are going to open. For example, you are going to buy BTC for $1000. Some platforms are ready to provide you with up to 100x leverage. That is, you only need $10 on your account to trade Bitcoin for $1,000 BTC. To keep a position open, you only need to hold 1% (with 100x leverage) of the contract amount. Depending on the course of the trade, you can open even more positions or withdraw profits.<br/></br>
<b style='margin-left: 25px;'>What to choose?</b><br/></br>
<b>Spot Trading: benefits</b> Management of risks: trading occurs only with your own balance, which you actually own, that is, the impossibility of going into a negative. Guarantee: spot trading takes place only on own assets. In this way, the exchange ensures that you avoid over-leveraging.
<b>Spot Trading: limitations</b> Missed trading opportunities: even with confidence in the deal, you will not be able to earn 100% or more, you will only be able to earn the amount that your capital allows.
<b>Margin Trading: benefits</b> Possibility of increasing profits: the presence of leverage allows you to increase your trade up to 100 times in comparison with your capital. Low-frequency trading: an increased likelihood of trades identified in this type of trading.
<b>Margin Trading: limitations</b> Risks: Opportunity to lose more money than the initial investment. Liquidation: complete liquidation of a position with insufficient funds to cover losses.<br/></br>
<b style='margin-left: 25px;'>What strategy should you follow?</b><br/></br>
It all depends on your usual trading style and your character: are you tolerant of risks, what knowledge about investing you have. Choose the strategies that are right for you.
`,
  },
  {
    title: "Technical Analysis",
    description: `If you want to get into crypto trading, you better learn at least the basics of technical analysis. While looking at charts, drawing lines, and identifying key price levels may seem silly at first glance, it is actually one of the best weapons you can have at your disposal, and it is definitely better than having nothing.<br/><br/>
True, key levels and prices largely follow established methods of technical analysis, but crypto trading is a rebellious Wild West: volatility, markets move quickly, and they are more prone to price manipulation. Hence, the knowledge base that you might bring from other markets must be adapted to the cryptocurrency through your own experiences, lessons, drastic and decisive actions, and appropriate risk management techniques.<br/><br/>
<b>While it may sound daunting, cryptocurrency combined with adequate TA techniques can lead to many profitable opportunities.</b><br/><br/>
If you are quick-witted and vigilant about your trades and strategies, you are likely to have a fun and profitable pastime.<br/><br/>
Tools you can use to help you make decisions:<br/><br/>
<b style="margin-left: 25px;">Tradingview</b> (charts and technical analysis)</b><br/><br/>
<b style="margin-left: 25px;">Predicoin (service for analyzing market sentiment)</b><br/><br/>
<b style="margin-left: 25px;">Coinpaprika (coin index)</b><br/><br/>
<b style="margin-left: 25px;">Coinmarketcal (crypto events calendar)</b><br/><br/>
<b style="margin-left: 25px;">Delta (portfolio tracking app)</b><br/><br/>
`,
  },
];
const cryptocurrencyOverviewQuestions = [
  {
    title: "What is BTC (Bitcoin)?",
    description: `Bitcoin is a reward for the work done in the form of a code.
Bitcoin is the world's first cryptocurrency (decentralized digital currency). This currency is fundamentally different from all previously created electronic currencies and payment systems. It is not tied to any physical assets or official currencies, and the price of a digital coin - bitcoin - is governed solely by market supply and demand.
Bitcoin is also a worldwide payment system through which transactions with this currency can be carried out. Its main difference from traditional payment systems is that the Bitcoin system does not have any control and processing center - all transactions take place exclusively in a network of equal clients.`,
  },
  {
    title: "What is BCH (Bitcoin Cash)?",
    description: `Bitcoin Cash is a cryptocurrency, a fork of Bitcoin that split from it. Forking from the main branch occurred on August 1, 2017. In 2018, Bitcoin SV peer-to-peer payment system branched off from Bitcoin Cash.
Any user who had Bitcoin at the time of the fork became the owner of an equivalent amount of Bitcoin Cash. To prevent double-spending, Bitcoin Cash transactions use a new signature hashing algorithm that is not valid on the Bitcoin Legacy network. This prevents replay of Bitcoin Cash transactions on the Bitcoin blockchain and vice versa.
The main difference from the "parent" cryptocurrency is the larger block size (8 MB instead of 1 MB), which favorably affects the speed of operations.
So what are the main differences between BCH and BTC? The new currency operates on a protocol similar to bitcoin: SHA-256 hash calculation algorithm; the same reward system and Proof of Work consensus; the same "ceiling" of emission - no more than 21 million coins can be issued But there are also a few key differences: the main difference is the block size increased by 8 times, up to 8 megabytes; the complexity change scheme is different: it does not change every 2016 blocks, like BTC, but every 6 Both currencies use the same Blockchain. Block number 478558 is the last of the common for both projects: the next one, 478559, is generated both in the BTC network and in BCH, but in different formats, which are mutually discarded by the blockchain branches of the "old" bitcoin and its fork. Thus, block 478559 became the first in the history of BCH.
Of the minor innovations of a technical nature, which also give an advantage, it can be noted: implementation of protection against erasure of transactions and their replay; a special type of transaction, where the user is given the opportunity to sign separately the amount of transfers, making payments safe
`,
  },
  {
    title: "What is ETH (Ethereum)?",
    description: `Ethereum is a decentralized platform with smart contracts: applications that work exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.
These applications run on a custom blockchain, an extremely powerful shared global infrastructure that can move value and represent property ownership.
This allows developers to create markets, keep registers of debts or promises, transfer funds according to instructions given in the past (like a will or a futures contract) and many other things that have not yet been invented, all without a middle man or counterparty risk.
Ether is a necessary element - fuel - for the operation of the Ethereum distributed application platform. It is a form of payment made by clients of the platform for machines performing the requested transactions. In other words, ether is an incentive to ensure that developers write quality applications (wasteful code costs are greater) and that the network remains healthy (people are compensated for their resources).
`,
  },
  {
    title: "What is USDT (Tether USD)?",
    description: `Tether converts money into digital currency, pegs the value to local currencies such as the US dollar, euro and yen.
As you know, blockchain has a number of advantages over traditional financial institutions as it offers cheap, fast, unlimited transactions without intermediaries. However, the volatility of exchange rates on the blockchain does not allow them to become widespread.
The company combines the technology used by bitcoin with fiat currencies to take advantage of blockchain technology using a currency backed by the US Treasury or the European Central Bank. According to CEO Reeve Collins, the company is digitizing the dollar and bringing that digital dollar to the blockchain.
`,
  },
  {
    title: "Day Trading",
    description: `Day traders are people who live off trading cryptocurrencies and spend most of their time trading. Whether it's buying or selling assets, margin trading or swapping perpetual contracts, they make a dozen different trades every day, hoping to catch favorable price movements. The rewards can be overwhelming, but it can be a little daunting for newbies - especially if you don't know much about technical and fundamental analysis or have little experience in the markets. It can take months or even years of loss before you truly become a successful day trader.
In the cryptocurrency market, day traders have to stick to charts and watch price movements closely. Be prepared to cut losses, break even, and switch frequently to avoid bull or bear traps and losses. As a day trader, you have to befriend cryptocurrency price fluctuations and literally live by them no matter which direction the market is heading. There is a counter trade for every price movement at the pivot point, which is a great opportunity to increase the amount.
Day trading is fast and accurate solutions designed to minimize risk and maximize your profits.Of course, no trader can be 100% right, so be prepared to close positions even with significant losses. Learn to identify possible levels of support and resistance, re-enter your trades at the right time, set targets and also set stop loss, and sooner or later you will develop your day trader skill.
`,
  },
  {
    title: "Creation of a crypto portfolio",
    description: `This sophisticated cryptocurrency trading strategy is based on assessing the state of the cryptocurrency market. To use it effectively, it is necessary not only to monitor the situation on the cryptocurrency market, but also to take into account many fundamental factors. Moreover, it is desirable for an investor to follow the macroeconomic situation in the world.
How it works? A trader forms a portfolio of several promising and undervalued, in his opinion, coins. The ideal situation would be to create a balanced portfolio of cryptocurrencies, the value of which will not fall and skyrocket. In this case, a beta-neutral portfolio with respect to bitcoin, where half of the coins directly correlates with BTC and grows with its strengthening, and the other half, on the contrary, grows when the price of "digital gold" falls, may become optimal in this case.
Correct rebalancing of such a portfolio will generate income regardless of the general trend in the market. Keep in mind, however, that assets can correlate differently with Bitcoin at different time periods.
`,
  },
  {
    title: "Price Terms",
    description: `It is very easy to confuse the Last Traded Price with the Market Price for a new user who does not have enough experience in trading. Bitniex has created a dictionary of price terminology that will help novice traders understand.
Limit price: your desired limit order price or best price. Price dependence on the operation performed. A limit order:
buy - executed only at the limit price or lower;
sell - executed only at the limit price or higher.
Market Price (Taker Price): this is the current price at which an asset or service can be purchased or sold. The market price is the best offer in the order book, which differs for buyers and sellers because the best offer for buyers is the lowest sales order in the book, and the best offer for sellers is the highest purchase offer in the book.
Best Average Market Price is the average price of the best current asks or bids that can fill an order. It will be filled by several opposing orders on the book. A market buy order: several of the lowest asks on the book, a market sell order: several of the highest bids on the book. The average price for filling a market order is the best average price.
Last Traded Price: price for executing the last order in the market. For example, if the last XBTUSD trade was at 10127, then 10127 will be The Last Traded Price. This is a purely historical price, and the market order will not be executed on it.`,
  },
  {
    title: "Pump&Dump",
    description: `Having chosen an exchange and a coin, the organizers buy tokens in small portions so as not to provoke a premature rise in the rate. As a rule, these are little-known cryptocurrencies with a low capitalization, in the common people known as shitcoins. Sometimes relatively large cryptocurrencies are used for pump&dump.
After the purchase of the token, the pump starts - its "pumping". In messengers, news feeds, social networks and exchange chats, the rapid growth of the rate is announced and the name of the exchange platform is announced, where the organizers of the scam place and take large orders for the purchase of a token through their bots, raising its quotation. This is the first pump wave.
Most of the major Bitcoin exchanges restrict this activity, and the coins on their listing are rarely suitable for the scheme. But there are popular platforms that support more than two hundred coins - they are the ones that attract scammers in the first place.
Fake news feeds about partnerships, investments, or technology updates are used to warm up buyers. Paid "experts" are connected to the disinformation campaign. "Sensational" information is disseminated mainly through Telegram channels. Moreover, most of these channels directly report the pump, promising profit.
After that, investors are sure: since they know about the pump in advance, they can make money. In fact, they are already victims, and some of them even pay to subscribe to such pump channels.
In the event of a successful advertising campaign, the second wave of the pump begins - third-party investors come and independently influence the growth of the rate. Amid the excitement, the price rises, the organizers sell tokens at an inflated value, after which the cryptocurrency rate returns to its original indicators.
`,
  },
];
const transactionsQuestions = [
  {
    title: "Transactions",
    description: `<b style='margin-left: 25px;'>Whats a wallet address?</b><br/>
A wallet is a digital place where you can store cryptocurrency coins. A wallet address is a randomly generated combination of digits and letters that is associated with a particular wallet. Just figure out what coin has its unique wallet address. Go to Personal area  Transfer and look for a compatible wallet for Bitcoin, Bitcoincash, Ethereum. As a rule, each coin has its official wallet client.<br/><br/>
<b style='margin-left: 25px;'>Can I use transfer to send cryptocurrency coins outside this exchange platform?</b><br/>
Yes, but in this case, crediting of funds may take longer. If you wish to send cryptocurrency coins outside the platform, please, use Personal Area  Withdraw<br/><br/>
<b style='margin-left: 25px;'>What's the recipients address?</b><br/>
In any transaction there is always a sender and a recipient. The recipients address is the wallet address where you will send the currency. For example, if you want to send Ether (ETH), you should specify an ETH wallet address in the recipient field, and Exchange Crypto Platform will send coins to this address once the transaction is complete.<br/><br/>
<b style='margin-left: 25px;'>What is the maximal/minimal amount?</b><br/>
There is no maximum amount. You can see the minimum amount when you try to withdraw funds or transfer.<br/><br/>
<b style='margin-left: 25px;'>How do I cancel my transaction?</b><br/>
Unfortunately, blockchain transactions are irreversible. Once a transaction is made (money is sent to a particular wallet address), it cannot be rolled back. So, if you are going to exchange cryptocurrency, be sure to double check all payment details carefully before sending.<br/><br/>
<b style='margin-left: 25px;'>Why is my wallet address recognized as invalid?</b><br/><br/>
<span style='margin-left: 55px;'>If your wallet address is recognized as invalid, it is usually for one of the following reasons:</span><br/><br/>
<span style='margin-left: 55px;'>Make sure your wallet address matches the chosen cryptocurrency.</span><br/><br/>
<span style='margin-left: 55px;'>You are trying to make transfer to address outside the Exchange Crypto Platform.</span><br/><br/>
<span style='margin-left: 55px; text-align: center;'>There was a typo or character missing in the address you provided. Make sure that the address you specify matches the actual address of your wallet.</span><br/><br/>
`,
  },
];
const depositsQuestions = [
  {
    title: "Deposit Did Not Arrive",
    description: `<b>Made a deposit to BitConvex but it hasnt arrived? Dont worry. As long as the address was filled correctly and you remembered to use the required Memo or Tag, your funds will be processed.</b><br/><br/>
<b>There can be many reasons that crypto deposits can be delayed. This article explains the common reasons and provides corresponding solutions.</b><br/><br/>
<b style='margin-left: 25px;'>1. There is no TXID</b><br/>
If you cannot find the transaction ID (TXID) of the deposit on the blockchain, this may indicate that the transfer was unsuccessful. It is recommended to contact the withdrawal platform to check the status of your withdrawal.<br/><br/>
<b style='margin-left: 25px;'>2. The number of confirmations is insufficient</b><br/>
Transactions on the blockchain must be confirmed by the nodes to be successful. The number of confirmations varies depending on the coin and network.<br/><br/>
You can check the amount of confirmations required on the <b>BitConvex</b> deposit page. Please be patient and wait until the confirmation reaches the required amount.<br/><br/>
<b style='margin-left: 25px;'>3. There have been sufficient confirmations but funds havent arrived</b><br/>
Once there are enough confirmations on the blockchain, the <b>BitConvex</b> system will start proceeding your deposit. This can take up to 2-3 hours.<br/><br/>
To check the number of confirmations for your deposit, refer to the blockchain explorers below:<br/><br/>
<span style='margin-left: 25px;'>BTC blockchain: <a href='http://blockchain.info/' target='_blank'>http://blockchain.info/</a></span><br/>
<span style='margin-left: 25px;'>ETH blockchain: <a href='https://etherscan.io/' target='_blank'>https://etherscan.io/</a></span><br/>
<span style='margin-left: 25px;'>MATIC blockchain: <a href='https://polygonscan.com/' target='_blank'>https://polygonscan.com/</a></span><br/>
<span style='margin-left: 25px;'>BSC blockchain: <a href='https://bscscan.com/' target='_blank'>https://bscscan.com/</a></span><br/>
<span style='margin-left: 25px;'>FTM blockchain: <a href='https://ftmscan.com/' target='_blank'>https://ftmscan.com/</a></span><br/>
<span style='margin-left: 25px;'>TRX blockchain: <a href='https://tronscan.org/#/' target='_blank'>https://tronscan.org/#/</a></span><br/>
<span style='margin-left: 25px;'>HECO blockchain: <a href='https://hecoinfo.com' target='_blank'>https://hecoinfo.com/</a></span><br/><br/>
<b style='margin-left: 25px;'>4. Deposits to an old deposit address</b><br/>
The deposit address of some coins on <b>BitConvex</b> may be updated from time to time. Deposits using the old <b>BitConvex</b> deposit address will be delayed by 12 hours. As such, it is recommended to always deposit to the new <b>BitConvex</b> deposit address.<br/><br/>
<b style='margin-left: 25px;'>5. Deposit service has been temporarily suspended</b><br/><br/>
<b>BitConvex</b> may conduct wallet maintenance for certain coins from time to time, resulting in a delay to transactions. Refer to the deposit page to check out the latest service status.<br/><br/>
<b style='margin-left: 25px;'>6. Deposit to the wrong address or deposit of the wrong coin</b><br/>
Such transactions will not be credited to your BitConvex account. Please contact our online support for further assistance.<br/><br/>
<b>We hope this article has been helpful. If you have any other questions, please reach out to our 24/7 customer support via <a href='https://coinmyup.com/profile/support' target='_blank'>online chat</a> or <a href='https://coinmyup.com/help/request' target='_blank'>submit a ticket</a>.</b><br/><br/>
<b>Happy trading on BitConvex!</b>
`,
  },
  {
    title: "Deposit Unsupported Tokens",
    description: `<b style='margin-left: 25px;'>What Can I Do If Deposit Unsupported Tokens?</b><br/>
Before you deposit, please check the deposit page to confirm if we support the BSC/MATIC/FTM token you want to deposit (as shown below, if we support the BEP20 token, the deposit interface will display the BEP20 deposit address). If we don't support it, then please do not deposit the token to your BitConvex account, otherwise, your deposit will not be credited.<br/>
If you have already deposited the unsupported token, please kindly gather the information below for further checking.<br/>
1. Your UID/Registered email address.<br/>
2. The type and amount of the token you deposit.<br/>
3. The txid.<br/>
4. The screenshot of the transaction from the withdrawal party. (Please log in to the withdrawal account, search the withdrawal history and find the corresponding withdrawal record. Please ensure that the txid, token type, amount and address should be on the screenshot. If you deposit from your private wallet such as MEW, please provide a screenshot of your account address.)<br/>
Please submit a request and provide the information above, we will check the details for you. After you submit the request, please wait patiently, we will reply to your email if there is any updates. At the same time, in order to solve your problem as soon as possible, please do not repeat to submit to avoid problem overlap, thank you for your support.<br/>
`,
  },
  {
    title: "Deposit Wrong Crypto",
    description: `<b style='margin-left: 25px;'>What Should I Do If Deposit Wrong Crypto?</b><br/>
A crypto address is a string of characters that can be used to send and receive crypto. While each coin typically has its own unique address, coins on the same blockchain may have the same. For instance, all ERC20 tokens on BitConvex have the same address. Note that depositing coins to a non-matching address may result in the loss of your funds.<br/>
This article shows the common mistakes of depositing the wrong crypto, and what to do to recover your funds in the event of such a mistake. Common Mistakes of Depositing Wrong Crypto:<br/>
<b>1. Depositing coins that have not been listed on BitConvex</b></br/>
Though <b>BitConvex</b> supports Bitcoin and over 100+ altcoins, there are still many coins that have not been listed yet. Coins that have not been listed yet will not be displayed on <b>BitConvex</b> when deposited.<br/><br/>
<b>2. Depositing coin A to the address of coin B</b><br/>
Unless both coins are issued on the same blockchain, it is very likely that the deposit will fail to go through. For instance, a Bitcoin address will not accept deposits in ETH. The same goes for most other coins.<br/><br/>
<b>3. Depositing a coin to the wrong network</b><br/>
Certain coins (such as USDT and ETH) support multiple blockchain networks on BitConvex. Ensure the network selected matches the network of the address entered.
For instance, only the mainnet of EWT is supported on BitConvex, meaning that ERC20 deposits will fail to go through.<br/><br/>
<b>4. Depositing coins with a different contract address</b><br/>
Blockchain projects may upgrade the contract address of their token for certain reasons. <b>BitConvex</b> will publish an official announcement if we support the upgrade. Once the upgrade has been completed, deposits to the old contract address will not be credited to your <b>BitConvex</b> account.<br/><br/>
<b>5. Deposit coins to the contract address</b><br/>
Note that the contract address is not used for deposit and withdrawal. Transfers to the contract address will not be recoverable. You can always find the deposit address from the <b>BitConvex</b> deposit page.<br/><br/>
<b style='margin-left: 25px;'>2. What To Do When Depositing the Wrong Crypto</b><br/><br/>
<b>1. Collect the following information.</b><br/><br/>
<p style='margin-left: 25px;'>Your BitConvex UID and registered email address.<br/>
The name and the amount of the coins you deposited.<br/>
The TXID of the transaction.<br/>
The screenshot of the transfer record from the withdrawal platform.</p>
<span style='margin-left: 80px;'>Ensure that the TXID, coin type, amount, and address are shown on the screenshot.</span><br/>
<span style='margin-left: 80px;'>If you deposited from a private wallet such as MEW, provide a screenshot of your account address.</span><br/>
<b>2. <a href='https://coinmyup.com/help/request' target='_blank'>Submit a request</a> to the BitConvex Support team and provide the information collected.</b><br/>
Please be patient as we will reply to you by email once there is an update.<br/>
In order to solve the issue as soon as possible, please avoid repetitive submissions for the same issue. Thank you for your understanding.<br/>
We hope this article has been helpful. If you have any other questions, please reach out to our 24/7 customer support via <a href='https://coinmyup.com/profile/support' target='_blank'>online chat</a> or <a href='https://coinmyup.com/help/request' target='_blank'>submit a ticket</a>.<br/><br/>
<b>Happy trading on BitConvex!</b>
`,
  },
  {
    title: "Deposit Wrong Crypto",
    description: `<b style='margin-left: 25px;'>How to Deposit Crypto to Exchange?</b><br/>
To start trading Bitcoin and 600+ other coins on BitConvex, the first step is to deposit crypto to the platform. While it is easy to make a deposit on BitConvex, there are a few common mistakes to avoid to ensure the deposit reaches your account in a fast and secure manner.<br/><br/>
<b style='margin-left: 25px;'>1. How to Deposit Crypto on the BitConvex Website?</b><br/>
1. Go to BitConvex, and click the Personal Area icon at the upper right corner of header.<br/>
2. Click Deposit, select the coin, then the network.<br/>
3. Copy your deposit address and paste it into the withdrawal platform, then deposit the coins to the relevant BitConvex account.<br/>
Tips:<br/><br/>
<p style="margin-left: 25px;">If you are depositing a coin for the first time, you must activate the deposit address first.
Bitcoin address will not accept deposits in ETH. Deposits of coins that do not match the address may not be recoverable. The same goes for most other coins.
Certain coins (such as USDT and ETH) support multiple blockchain networks on <b>BitConvex</b>. Ensure the network selected matches the network of the address entered.
If the coin you want to deposit requires a Memo, Tag, Payment ID, or Message, ensure that it is entered correctly. Otherwise, the coins won't arrive in your account.
Each ERC20 coin has a unique contract ID that can be checked from <a href='https://etherscan.io/' target='_blank'>Etherscan</a>. Ensure that the contract ID of the coin you wish to deposit is the same as the one listed on <b>BitConvex</b>.
<b>3. FAQ</b></p><br/>
<b>1. How long does a deposit take to process?</b><br/>
Deposits can take a few minutes to a few hours, depending on the coin. If the coin has not arrived in your account after a long time, contact customer support and provide info such as your <b>BitConvex</b> UID, the coin deposited, and the TXID.<br/><br/>
<b>2. What are the fees for crypto deposits?</b><br/>
The commission depends on a number of factors, check in support for more details.<br/><br/>
<b>3. What if I deposit a coin that BitConvex does not support?</b><br/><br/>
<b>BitConvex</b> may not be able to recover any unsupported assets. Please contact customer support and provide info such as your <b>BitConvex</b> UID, the coin deposited, and the TXID.<br/><br/>
<b>4. What if I deposit a token to the wrong address?</b><br/><br/>
<b>BitConvex</b> may not be able to recover the assets for such a mistake. Please contact our support and provide info like your <b>BitConvex</b> UID, the coin deposited, and the TXID.<br/><br/>
<b>5. What if I forgot the Memo, Tag, or Message when making the deposit?</b><br/><br/>
<b>BitConvex</b> may not be able to recover the assets for such a mistake. Please contact our support and provide info like your <b>BitConvex</b> UID, the coin deposited, and the TXID.<br/><br/>
<b>We hope this article has been helpful. If you have any other questions, please reach out to our 24/7 customer support via <a href='https://coinmyup.com/profile/support' target='_blank'>online chat</a> or <a href='https://coinmyup.com/help/request' target='_blank'>submit a ticket</a></b>.<br/><br/>
<b>Happy trading on BitConvex!</b>
`,
  },
];

const withdrawalsQuestions = [
  {
    title: "How to Withdraw Coins?",
    description: `<b style='margin-left: 25px;'>How to Withdraw Coins?</b><br/>
1. Go to BitConvex and click the Personal Area icon at the upper right corner of the top bar.<br/>
2. Click Withdraw, and select a coin. Then fill in the wallet address and choose the corresponding network. Input the amount and then click confirm to proceed.<br/>
3. Security verification window will pop up, fill 2FA code one by one to submit the withdrawal request.<br/><br/>
<span style="margin-left: 25px;">3. FAQs</span><br/><br/>
<b>1. How long does withdrawal take to process?</b>
It takes a few minutes to a few hours, varying from coin to coin.<br/><br/>
<b>2. Why does it take very long to receive my withdrawal?</b>
Usually, we will process your withdrawal within 30 minutes, but delays may happen for many reasons like network congestion. Also, to enhance the security of your assets, if your withdrawal amount is larger than a certain amount, we will manually process your request and it may take a bit longer. You can contact our online support for further checks.<br/><br/>
<b>3. What is the fee for crypto withdrawal?</b>
BitConvex charges a small amount of fee, and it depends on the coin as well as the blockchain network. For instance, usually, the transaction fee of TRC20 tokens is lower than their ERC20 counterparts. Check the withdraw page for more info.<br/>
If you are withdrawing the funds to another BitConvex account, you can tick Internal transfer on the withdrawal page, then the transaction will be almost instant with 0 fees. <br/><br/>
<b>4. What is the minimal amount to withdraw?</b>
It varies from coin to coin. Check the withdraw page for more info.<br/><br/>
<b>5. What if I withdraw a token to the wrong address?</b>
BitConvex may not be able to recover the funds if it has left the platform. Kindly contact the receiving platform for further assistance.<br/><br/>
<b>6. I have funds in my account but why does it say the balance is insufficient?</b>
Please make sure the funds are in your Main Account when making a withdrawal.<br/><br/>
<b>7. Why does it say Contain invalid or sensitive information when withdrawing?</b>
Very likely the address entered is incorrect. Please double-check the crypto address or contact online support for further check.<br/>
For some tokens, we only support transferring via a specific mainnet chain instead of an ERC20 or BEP20 chain, such as DOCK, XMR, etc. Please do not transfer tokens via unsupported chains or addresses.<br/><br/>
<b>8. Why the withdrawal service for some tokens is not available?</b>
Some wallets may be under maintenance from time to time. We will keep everyone informed via our official announcements. Appreciate your patience.<br/><br/>
<b>9. Why my withdrawal service has been suspended?</b><br/>
To enhance the security of your account and assets, your withdrawal function will be temporarily suspended for 24 hours after changing some important security settings such as trading password, Google 2FA, and more.<br/>
We hope this article has been helpful. If you have any other questions, please reach out to our 24/7 customer support via <a href='https://coinmyup.com/profile/support' target='_blank'>online chat</a> or <a href='https://coinmyup.com/help/request' target='_blank'>submit a ticket</a>.<br/><br/>
<b>Happy trading on BitConvex!</b>
`,
  },
  {
    title: "USDT Based on Different Chain",
    description: `BitConvex users will be able to deposit and withdraw USDT in different forms: <b>USDT-ERC20</b>, <b>USDT-TRC20</b>, <b>USDT-BEP20</b>, <b>USDT-MATIC</b>, <b>USDT-SOL</b>.<br/>
To ensure that users can freely choose their favored forms of USDT to deposit and withdraw at any time, BitConvex will exchange four forms of USDT in advance to ensure an adequate balance of these 4 forms of USDT. If you do not agree to the exchange, please do not deposit or withdraw USDT.<br/>
Notesï¼<br/><br/>
<p style='margin-left: 25px;'><b>USDT-ERC20</b> is the USDT issued by Tether based on the ETH network. Its deposit address is the ETH address, with deposits and withdrawals taking place on the ETH network. The protocol of USDT-ERC20 is the ERC20 protocol.
<b>USDT-TRON (TRC20)</b> is the USDT issued by Tether based on the TRON network. The currency deposit address is the TRON address, with deposits and withdrawals taking place on the TRON network. The USDT-TRON (TRC20) uses the TRC20 protocol.
<b>USDT-SOL</b> is the USDT issued by Tether based on the SOL network. The currency deposit address is the SOL address, with deposits and withdrawals taking place on the SOL network. The USDT-SOL uses the SOL protocol.
<b>USDT-BEP20</b> is the USDT issued by Tether based on the BNB network. The currency deposit address is the BEP20 address, with deposits and withdrawals taking place on the BNB network. The USDT-BNB uses the BEP20 protocol.
<b>USDT-MATIC</b> is the USDT issued by Tether based on the POLYGON network. The currency deposit address is the MATIC address, with deposits and withdrawals taking place on the POLYGON network. The USDT-MATIC uses the PILYGON protocol.</p><br/>
 
<b style='margin-left: 25px;'>1. How to get your USDT wallet address?</b><br/>
Please choose the public chain to get the corresponding USDT deposit address. Please ensure the public chain and address are correct.<br/><br/>
 
<b style='margin-left: 25px;'>2. How to withdraw USDT based on different forms?</b><br/>
Please input the withdrawal address. The system will identify the public chain automatically.<br/>
`,
  },
  {
    title: "Withdrawal Did Not Go Through",
    description: `<b style='margin-left: 25px;'>1. Three Types of Withdrawal Status</b><br/>
The time needed for a crypto withdrawal varies from coin to coin, ranging from a few minutes to a few hours. You can check the status of each withdrawal request on the BitConvex withdrawal page.<br/> 
Go to BitConvex and log in with your account, then check the status of your withdrawal through <b>Personal Area - Withdraw</b>. There are three types of withdrawal status:<br/><br/>
<div style='margin-left: 25px;'><b>Pending:</b> it means we are processing the withdrawal, and it may take 2 - 3 hours.
<b>Success:</b> it means we have processed your withdrawal, and the transaction has been recorded on the blockchain.
<b>Error:</b> this means that the transaction was not completed due to account restrictions.
<b>2. What If My Withdrawal Did Not Go Through</b></div><br/>
<b>If the withdrawal is Pending</b>, kindly wait for about 3 hours and check the status again. If the withdrawal status is still processing after 3 hours, please contact online support and provide the following information:<br/><br/>
<div style="margin-left: 25px;">Your UID, Registered email address
The type(s) and amount(s) of coin(s)
The recipient's address</div>
<b>If the status is Success</b>, you can find the transaction on the blockchain explorer, and once the number of confirmations is sufficient, you can check your funds on the receiving platform. If there is no information on the blockchain explorer while the status shows Succeeded, please contact our customer support and provide the following information:<br/><br/>
<div style='margin-left: 25px;'>Your UID, Registered email address
The type(s) and amount(s) of coin(s)
The recipient's address</div>
Below please find the link to the blockchain explorer of some major blockchains:<br/><br/>
<div style="margin-left: 25px;">
<span>BTC blockchain: <a href='http://blockchain.info/' target='_blank'>http://blockchain.info/</a></span><br/>
<span>ETH blockchain: <a href='https://etherscan.io/' target='_blank'>https://etherscan.io/</a></span><br/>
<span>MATIC blockchain: <a href='https://polygonscan.com/' target='_blank'>https://polygonscan.com/</a></span><br/>
<span>BSC blockchain: <a href='https://bscscan.com/' target='_blank'>https://bscscan.com/</a></span><br/>
<span>FTM blockchain: <a href='https://ftmscan.com/' target='_blank'>https://ftmscan.com/</a></span><br/>
<span>TRX blockchain: <a href='https://tronscan.org/#/' target='_blank'>https://tronscan.org/#/</a></span><br/>
<span>HECO blockchain: <a href='https://hecoinfo.com' target='_blank'>https://hecoinfo.com/</a></span><br/>
<b>3. What If I Withdraw to The Wrong Address</b><br/><br/>
</div>
<b>If the status is Pending</b>, please contact our <b>online support</b> as soon as possible and we will help check if we can cancel this request.<br/><br/>
<b>If the status is Success</b>, neither you nor we can cancel it. It is suggested to contact the customer support of the receiving platform and ask for their help to recover this transaction. Let us know if they need any info or proof from our side.<br/><br/> 
<b>We hope this article has been helpful. If you have any other questions, please reach out to our 24/7 customer support via <a href='https://coinmyup.com/profile/support' target='_blank'>online chat</a> or <a href='https://coinmyup.com/help/request' target='_blank'>submit a ticket</a>.</b><br/><br/>
<b>Happy trading on BitConvex!</b>
`,
  },
];

const accountQuestions = [
  {
    title: "Email Issues",
    description: `<b style='margin-left: 25px;'>I didn't receive a confirmation e-mail.</b><br/>
If you did not receive a confirmation e-mail for your BitConvex account, it is likely that It was sent to the "Spam" folder.<br/>
1. Check the "Spam" folder for an e-mail from BitConvex with the subject line "Registration on the exchange BitConvex";<br/>
2. In the e-mail, you will see a link to confirm the action. Click the link to complete your account registration.<br/><br/>
<b>If the e-mail is not in the "Spam" folder:</b><br/>
<div style='margin-left: 25px;'>
Check your Promotions folder (if you are using gmail)
Check that the e-mail address you entered is correct - enter the correct address to complete registration;
Make sure you haven't used this e-mail address before - if you have used this e-mail before, the system will let you know that someone is already using this e-mail address;
E-mail for account activation is available for a limited amount of time - if you ignore the activation of the account, you will need to create a new one;
If nothing from this list has not helped, please contact support.
</div>
`,
  },
  {
    title: "KYC verification",
    description: `<b style='margin-left: 25px;'>KYC - Know Yout Customer.</b><br/>
The KYC process includes submitting and verifying documents that serve as your identity proofs. They mention your date of birth, address, and other essential details. KYC is a fundamental practice to protect an organization from fraud and losses resulting from illegal funds and transactions.<br/><br/>
<b style='margin-left: 25px;'>Important information:</b><br/>
To avoid conditions such as forgetting access credentials to exchange and accounts being taken over by others (information leakage from client side), we strongly suggest you to complete the KYC verification. Through the KYC information, we could help recover your account more quickly; Currently the same account only supports one authentication status, can not both be certified at the same time.<br/><br/>
<b style="margin-left: 25px;">How to pass KYC(Identity Verification)</b><br/>
Go to the home page, click on the "Sign up" button and complete the registration procedure. Confirm your email, click on the tab "Settings" and follow the link "Click here to verify your ID" Fill out the data for the verification, you will get the status "Under review". Verification of documents takes up to 24 hours. After checking the documents you will see the message "Your ID information has been verified". After passing the verification, you will receive increased withdrawal limits and a deposit bonus.
`,
  },
];

const securityQuestions = [
  {
    title: "Account Security Guide",
    description: `<b style='margin-left: 25px;'>2FA and backup code</b><br/>
Enabling two-factor authentication (2FA) increases the security of your BitConvex Account, as well as coins/tokens stored on It. This method of account protection is called two-factor protection, because it is the second security barrier after the password to log in to the account. This really increases your security, because in addition to the username and password, the attacker will need to enter a 2FA-code. In the event of a hacking attempt, an attacker can reset your password through your e-mail address that you specified during registration, if it was hacked. However, even if the attacker has a username and password from your BitConvex account
 
<b style='margin-left: 25px;'>Password</b><br/>
Several rules for creating a password:<br/>
The password has never been used before;<br/>
The minimum length is 6 characters;<br/>
Use upper and lower case;<br/>
Use special characters and numbers.<br/><br/>
 
<b style='margin-left: 25px;'>HTTP(S)</b><br/>
Check the "S" after "http" in the browser's address bar. If there is no "S", the connection is not secure. It can lead to loss of access to the account and loss of funds. A green lock near the address informs the user about the security of the visited page. If there is no lock, you should pay special attention to the site name in the address bar or do not use it at all, because the http Protocol is not secure. It is safe to use websites with https Protocol only.
 
<b style='margin-left: 25px;'>Checking the SSL certificate</b><br/>
To check the SSL certificate, follow the instructions. Click on the certificate details and make sure that you are on the official website.
`,
  },
  {
    title: "Anti-Fraud Guide",
    description: `<b style='margin-left: 25px;'>1. Account information</b><br/>
BitConvex support will not require anyone for any login information, payment password, Google authentication code, or private key in any name. Any requests of this nature are fraudulent.<br/><br/>

<b style="margin-left: 25px;">2. Account/devices access</b><br/>
Never give access to your account and the funds stored on it to a third-party. BitConvex will never request remote access to your account or your devices.

<b style="margin-left: 25px;">3. Phishing</b><br/>
Phishing scammers can copy official e-mails on behalf of the BitConvex exchange. Scammers may request confidential data via e-mail that compromises your account data, as well as your personal data that helps to identify you. Fraudsters can also attach links to change the phone number and password. Links of this nature may redirect you to a third-party fraudulent website or contain malware. Therefore, never click on links and do not give your data to third-parties.<br/>
Common types of phishing scam:<br/><br/>
<b>Spear</b> Phishing is based on personalized communication in order to gain the user's trust;<br/><br/>
<b>Clone Phishing</b> - copying a legitimate e-mail containing an attachment or link of a fraudulent version. The e-mail is sent from a masked address;<br/><br/>
<b>Whaling</b> - targeted at senior executives or senior people within the company. It usually looks like a legitimate concern, subpoena, client issue, or corporate matter;<br/><br/>
<b>SMiShing</b> - fraud using text or SMS. It looks like a confirmation of account activity.<br/>
Often, fraudulent e-mails come as spam because they do not pass DKIM/SPF verification.<br/><br/>
<b>Domain Keys Identified Mail (DKIM)</b> technology allows a company to vouch for an e-mail message that is sent. Technically  this is a method of confirming the sender's domain through a cryptographic signature.<br/><br/>
<b>The Sender Policy Framework (SPF)</b> technology is another way to identify the sender of an email and provides an additional option to filter the mail stream for spam messages.
`,
  },
];

export const FaqContent = () => {
  return (
    <Stack gap={"clamp(2rem, 4vw, 4rem)"} className={classes.faqWrapper}>
      <Title order={3} className={classes.faqTitle}>
        <span className={classes.textTitleHighlighted}>F</span>requently <span className={classes.textTitleHighlighted}>A</span>sked{" "}
        <span className={classes.textTitleHighlighted}>Q</span>uestions
      </Title>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>General Questions</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {firstGeneralQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2">
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Legal & Policy</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {policiesQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2">
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>

      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Trading</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
          pb={{ 0: 32, md: 87 }}
        >
          {tradingQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2">
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Transactions</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {transactionsQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2" style={{ whiteSpace: "pre-wrap" }}>
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Deposits</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {depositsQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2" style={{ whiteSpace: "pre-wrap" }}>
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Withdrawals</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {withdrawalsQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2" style={{ whiteSpace: "pre-wrap" }}>
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Account</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {accountQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2" style={{ whiteSpace: "pre-wrap" }}>
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Security</Text>
        <Accordion
          chevron={<PlusIcon />}
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            label: classes.faqAccordionLabel,
            panel: classes.faqAccordionPanel,
            control: classes.faqAccordionControl,
            chevron: classes.faqAccordionChevron,
            content: classes.faqAccordionContent,
          }}
        >
          {securityQuestions.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2" style={{ whiteSpace: "pre-wrap" }}>
                  {ReactHtmlParser(faqItem.description)}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};
