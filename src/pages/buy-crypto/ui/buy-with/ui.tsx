import { Box, Button, Flex, SimpleGrid, Stack, Text, rem } from "@mantine/core";
import { Link } from "atomic-router-react";

import classes from "./styles.module.css";

const buyWith = [
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/change-now.png`,
    title: "ChangeNOW",
    text: "ChangeNOW is a highly secure and trustworthy platform as it acts only as a temporary intermediary - it does not store your funds and doesn't require account creation for using its services.",
    linkTo: "https://changenow.io/buy",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/simplex.png`,
    title: "Simplex",
    text: "Simplex by Nuvei is empowering the crypto industry with a full fiat infrastructure. We process crypto-to-credit card payments with a 100% guarantee – in case of a fraud chargeback, the merchant gets paid by us.",
    linkTo: "https://buy.simplex.com/",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/moon-pay.png`,
    title: "MoonPay",
    text: "MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today.",
    linkTo: "https://www.moonpay.com/buy",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/transak.png`,
    title: "Transak",
    text: "Transak is a leading Web3 onboarding infrastructure provider. Its API-driven solutions enable web3 platforms to onboard users to 130+ crypto assets from 150+ countries.",
    linkTo: "https://global.transak.com/",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/mercutyo.png`,
    title: "Mercuryo",
    text: "A custodial wallet with built-in crypto on-ramp functionality. Designed to manage your crypto just like you do with fiat: buy, sell, hold, and spend a wide range of coins.",
    linkTo: "https://mercuryo.io/",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/coingate.png`,
    title: "CoinGate",
    text: "CoinGate is a Lithuanian-based fintech company founded in 2014. The payment gateway offers cryptocurrency payment processing services for businesses of any sizes.",
    linkTo: "https://buy.coingate.com/",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/changelly.png`,
    title: "Changelly",
    text: "Changelly is an ecosystem of products that allows you to exchange, buy, trade, and sell cryptocurrencies and also earn free crypto with our affiliate program.",
    linkTo: "https://changelly.com/buy-crypto",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/banxa.png`,
    title: "Banxa",
    text: "Banxa is the leading global Web3 on and off-ramp solution Crypto Buy. Our mission is to accelerate the world to Web3 and beyond.",
    linkTo: "https://openocean.banxa.com/",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/phemex.png`,
    title: "Phemex",
    text: "Phemex operates as a crypto derivatives trading platform. Phemex is a professional and trustworthy global cryptocurrency derivatives exchange.",
    linkTo: "https://phemex.com/fiat/buy-crypto/place-order",
  },
  {
    img: `${import.meta.env.BASE_URL}assets/buy-with/Ramp.png`,
    title: "Ramp",
    text: "Ramp is a global financial technology company building solutions that connect the crypto economy with today’s financial infrastructure.",
    linkTo: "https://ramp.network/buy",
  },
];
export const BuyWith = () => {
  return (
    <Stack gap={rem(64)} className={classes.stepWrapper}>
      <SimpleGrid spacing={"clamp(1rem, 2vw, 2rem)"} cols={2}>
        {buyWith.map((item) => (
          <Flex key={item.title} className={classes.buyWithWrapper}>
            <Stack className={classes.colBuyWith}>
              <Box>
                <img draggable="false" src={item.img} alt="logo" className={classes.buyWithImage} />
              </Box>

              <Text c="white" variant="text-2" lh={rem("43px")} className={classes.buyWithTitle}>
                Buy crypto with {item.title}
              </Text>
              <Text c="white" variant="text-2" className={classes.buyWithText}>
                {item.text}
              </Text>
              <Link to={item.linkTo}>
                <Button className={classes.btn} variant="radial-gradient" size="md">
                  <Text className={classes.textBtn}>Continue to {item.title}</Text>
                </Button>
              </Link>
            </Stack>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
