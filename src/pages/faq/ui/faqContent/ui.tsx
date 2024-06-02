import { Accordion, Stack, Text, Title, rem } from "@mantine/core";

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

export const FaqContent = () => {
  return (
    <Stack gap={"clamp(2rem, 4vw, 4rem)"} className={classes.faqWrapper}>
      <Title order={3} className={classes.faqTitle}>
        <span className={classes.textTitleHighlighted}>F</span>requently <span className={classes.textTitleHighlighted}>A</span>sked{" "}
        <span className={classes.textTitleHighlighted}>Q</span>uestions
      </Title>
      <Stack gap={"clamp(1.5rem, 2vw, 2rem)"}>
        <Text className={classes.topicTitle}>Questions topic</Text>
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
          {firstTopic.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2">
                  {faqItem.description}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
      <Stack gap={rem("32px")}>
        <Text className={classes.topicTitle}>Questions topic</Text>
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
          {secondTopic.map((faqItem) => (
            <Accordion.Item key={faqItem.title} value={faqItem.title}>
              <Accordion.Control>
                <Title order={3}>{faqItem.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text c="white" variant="text-2">
                  {faqItem.description}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};
