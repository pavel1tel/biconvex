import { Accordion, Image, Stack, Text, Title, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container, PlusIcon } from "@/shared/ui";

import { FaqTitleWrapper } from "./faqTitleWrapper";
import classes from "./styles.module.css";

const FAQ_ITEMS = [
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

export const Faq = () => {
  return (
    <Stack className={classes.faqWrapper}>
      <Container>
        <Stack gap={rem("64px")}>
          <motion.div
            className={classes.rateWrap}
            variants={{
              hidden: {
                opacity: 0,
                y: "50%",
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FaqTitleWrapper />
          </motion.div>

          <Accordion
            defaultValue={FAQ_ITEMS[0].title}
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
            {FAQ_ITEMS.map((faqItem, i) => (
              <motion.div
                className={classes.rateWrap}
                key={faqItem.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: "50%",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (i + 1) * 0.2 }}
              >
                <Accordion.Item value={faqItem.title} style={{ gap: "clamp(24px, 4vw, 4rem)" }}>
                  <Accordion.Control>
                    <Title fz={{ 0: 20, md: 32 }} fw={700} order={3}>
                      {faqItem.title}
                    </Title>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text c="white" variant="text-2">
                      {faqItem.description}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>

          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/9.png`} alt="main-light-9" className={classes.lightNine} />
        </Stack>
      </Container>
    </Stack>
  );
};
