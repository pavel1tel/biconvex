import { useResize } from "@/hooks/useResize";
import { Button, Divider, Group, Image, Space, Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";

import { BlackCircleBg } from "@/shared/ui/icon/BlackCircleBg";
import { FlashIcon } from "@/shared/ui/icon/FlashIcon";
import { ListNumberOne } from "@/shared/ui/icon/ListNumberOne";
import { ListNumberTwo } from "@/shared/ui/icon/ListNumberTwo";

import classes from "./styles.module.css";

const steps = [
  {
    title: "Invite Your Friend",
    description: (
      <>
        Share your referral <br className={classes.divider} /> link or code <br className={classes.divider} /> with your friend
      </>
    ),
    step: "01",
  },
  {
    title: "Apply for a Card",
    description: "Encourage your friend to apply for a card using your referral code. ",
    step: "02",
  },
  {
    title: "Make a Transaction",
    description: "Both receive rewards upon your referee's first BitConvex Card transaction!",
    step: "03",
  },
];

export const CardContent = () => {
  const { isAdaptive: md } = useResize(1200);
  return (
    <>
      <Group className={classes.sectionContainer}>
        <Stack className={classes.cardDescription}>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "-100%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Text className={classes.cardTitle} component="h1">
              <span>Bitconvex Card</span>
              <Space />
              Referral Program
            </Text>
            {md && (
              <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/Card_origin.png`} className={classes.cardImage} alt="bitconvex-card" />
            )}
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "-100%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <Group className={classes.box}>
              <Text className={classes.cardDescriptionText}>Invite a friend to open the card and receive bonuses together.</Text>
              <Button className={classes.button} rightSection={<FlashIcon />} variant="radial-gradient">
                starting soon
              </Button>
            </Group>
          </motion.div>
        </Stack>
        {!md && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "100%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={classes.cardImageWrapper}
          >
            <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/Card_origin.png`} alt="bitconvex-card" className={classes.cardImage} />
          </motion.div>
        )}
      </Group>
      <Group className={classes.sectionContainer}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: "-70%",
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/gift.png`} alt="bitconvex-card" className={classes.giftImage} />
        </motion.div>
        <Stack className={classes.giftMainWrapper}>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "70%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Text className={classes.giftTitle} component="h2">
              Sharing is Caring
            </Text>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "70%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Text className={classes.giftSubtitle}>
              Both you and your referee will receive rewards upon their initial transaction using the BitConvex Card.
            </Text>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: "70%",
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Divider c="white" opacity={0.12} />
          </motion.div>
          <Stack gap={"clamp(2rem, 3vw, 3rem)"}>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: "70%",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <Text className={classes.giftListTitle} fz={{ 0: 20, md: 32 }}>
                Earn money together with your friend.
              </Text>
            </motion.div>
            <Stack gap={32}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-70%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Group gap={"clamp(1rem, 2vw, 2rem)"} align="center" wrap="nowrap">
                  <div className={classes.giftListNumberWrapper}>
                    <ListNumberOne />
                  </div>
                  <Text fz={{ 0: 16, md: 20 }} className={classes.giftListText}>
                    Receive 20 USDT when your referral applies for a BitConvex Card and successfully conducts their inaugural
                    <br /> transaction with it.
                  </Text>
                </Group>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-100%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <Group gap={"clamp(1rem, 2vw, 2rem)"} align="center" wrap="nowrap">
                  <div className={classes.giftListNumberWrapper}>
                    <ListNumberTwo />
                  </div>
                  <Text fz={{ 0: 16, md: 20 }} className={classes.giftListText}>
                    Get 10 USDT upon completing your initial transaction with the BitConvex Card.
                  </Text>
                </Group>
              </motion.div>
            </Stack>
          </Stack>
        </Stack>
      </Group>
      <Stack className={classes.sectionContainer} ta={{ 0: "left", md: "center" }} style={{ gap: "clamp(2rem, 4vw, 4rem)" }}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: "-70%",
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text fz={{ 0: 40, md: 54 }} className={classes.bonusesTitle}>
            Get bonuses in three simple steps.
          </Text>
        </motion.div>
        <Group className={classes.grid} gap={"clamp(1.5rem, 4vw, 4rem)"} wrap="nowrap">
          {steps.map(({ title, description, step }, i) => (
            <motion.div
              key={step}
              className={classes.stepContainer}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "-70%",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + (i + 1) * 0.2 }}
            >
              <div className={classes.outerRing}>
                <div className={classes.innerRing}>
                  <BlackCircleBg />
                  <div className={classes.stepWrapper}>
                    <p className={classes.stepNumber}>{step}</p>
                    <p className={classes.stepText}>STEP</p>
                  </div>
                </div>
              </div>
              <Stack gap={16} className={classes.stepDescriptionWrapper}>
                <Text className={classes.stepTitle}>{title}</Text>
                <Text className={classes.stepDescription}>{description}</Text>
              </Stack>
            </motion.div>
          ))}
        </Group>
      </Stack>
    </>
  );
};
