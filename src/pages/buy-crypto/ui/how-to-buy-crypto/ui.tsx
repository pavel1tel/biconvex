import { Divider, Flex, Stack, Text, Title, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

import classes from "./styles.module.css";

const steps = [
  {
    number: "01",
    text: "Go to our partners' website.",
  },
  {
    number: "02",
    text: "Choose a convenient payment method and amount of cryptocurrency.",
  },
  {
    number: "03",
    text: "Verify your email and passport details.",
  },
  {
    number: "04",
    text: "After checking the data, enter the wallet address of the coin from our exchange that you want to buy.",
  },
  {
    number: "05",
    text: "After payment, the coins will arrive on the exchange within 5-10 minutes.",
  },
];
const steps3 = [
  {
    number: "01",
    text: "Go to our partners' website.",
  },
  {
    number: "02",
    text: "Choose a convenient payment method and amount of cryptocurrency.",
  },
  {
    number: "03",
    text: "Verify your email and passport details.",
  },
];
const steps2 = [
  {
    number: "04",
    text: "After checking the data, enter the wallet address of the coin from our exchange that you want to buy.",
  },
  {
    number: "05",
    text: "After payment, the coins will arrive on the exchange within 5-10 minutes.",
  },
];
const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const HowToBuyCrypto = () => {
  const matches = useMediaQuery("(min-width: 1360px)");

  return (
    <Stack gap={"clamp(2rem, 4vw, 4rem)"} className={classes.stepWrapper}>
      <Stack gap={"clamp(1rem, 2vw, 2rem)"} align="center">
        <Title ta={{ 0: "center", md: "left" }} order={2} className={classes.stepTitle}>
          <Text span className={classes.stepTitleHighlighted} mr={rem(15)}>
            How
          </Text>
          to buy crypto?
        </Title>
      </Stack>
      <div className={classes.adaptive}>
        {matches ? (
          <motion.section initial={"hidden"} whileInView={"visible"} viewport={{ amount: 0.2, once: true }}>
            <Flex direction={"row"} gap={{ base: "sm", sm: "1px" }} justify={{ sm: "center" }} align={{ sm: "center" }}>
              {steps.map((item, index) => (
                <>
                  <motion.div custom={index + 1} variants={blockAnimation} className={classes.stepItemWrapper}>
                    <Text className={classes.stepItemNumber}>{item.number}</Text>
                    <Text className={classes.stepItemTitle}>{item.text}</Text>
                  </motion.div>
                  {index !== steps.length - 1 && (
                    <motion.div custom={index + 1} variants={blockAnimation}>
                      <Divider w={"32px"} className={classes.divider} size={"2px"} variant="dashed" />{" "}
                    </motion.div>
                  )}
                </>
              ))}
            </Flex>
          </motion.section>
        ) : (
          <Flex direction={"row"} gap={{ base: "sm", sm: "2px" }} justify={{ sm: "center" }} align={{ sm: "center" }}>
            <Flex w={"100%"} direction={"column"} gap={"32px"}>
              <Flex direction={"row"} gap={{ base: "sm", sm: "2px" }} justify={{ sm: "center" }} className={classes.flex} align={{ sm: "center" }}>
                {steps3.map((item, index) => (
                  <>
                    <Stack
                      w={{ base: "100%", sm: rem("292px") }}
                      h={rem("260px")}
                      gap={rem("32px")}
                      justify={"space-between"}
                      className={classes.stepItemWrapper}
                    >
                      <Text className={classes.stepItemNumber}>{item.number}</Text>
                      <Text className={classes.stepItemTitle}>{item.text}</Text>
                    </Stack>
                    {index !== 2 ? <Divider w={"32px"} className={classes.divider} size={"2px"} variant="dashed" /> : <></>}
                  </>
                ))}
              </Flex>
              <Flex direction={"row"} gap={{ base: "sm", sm: "2px" }} justify={{ sm: "center" }} align={{ sm: "center" }} className={classes.flex}>
                {steps2.map((item, index) => (
                  <>
                    <Stack
                      w={{ base: "100%", sm: rem("292px") }}
                      h={rem("260px")}
                      gap={rem("32px")}
                      justify={"space-between"}
                      className={classes.stepItemWrapper}
                    >
                      <Text className={classes.stepItemNumber}>{item.number}</Text>
                      <Text className={classes.stepItemTitle}>{item.text}</Text>
                    </Stack>
                    {index !== steps2.length - 1 ? <Divider w={"32px"} className={classes.divider} size={"2px"} variant="dashed" /> : <></>}
                  </>
                ))}
              </Flex>
            </Flex>
          </Flex>
        )}
        <motion.section initial={"hidden"} whileInView={"visible"} viewport={{ amount: 0.2, once: true }}>
          <ul className={classes.grid}>
            {steps.map((stepItem, index) => (
              <motion.div custom={index + 1} variants={blockAnimation}>
                <li className={classes.gridItem}>
                  <div className={classes.gridOrder}>{stepItem.number}</div>
                  <p>{stepItem.text}</p>
                </li>
              </motion.div>
            ))}
          </ul>
        </motion.section>
      </div>
    </Stack>
  );
};
