import { Box, Image, Stack, Text, Title } from "@mantine/core";
import clsx from "clsx";
import { motion } from "framer-motion";

import classes from "./styles.module.css";

const COLLABORATORS = [
  `${import.meta.env.BASE_URL}assets/partners/Near.png`,
  `${import.meta.env.BASE_URL}assets/partners/Metamask.png`,
  `${import.meta.env.BASE_URL}assets/partners/Trust.png`,
  `${import.meta.env.BASE_URL}assets/partners/Ledger.png`,
  `${import.meta.env.BASE_URL}assets/partners/Binance Labs.png`,
];

COLLABORATORS.push(...COLLABORATORS.map((value) => value + "?copy"));

export const Collaborators = ({ data }: { data?: string[] }) => {
  const collaboratorsSlides = data
    ? data.map((url) => (
        <li key={url}>
          <Image src={url} alt="Partner" className={classes.collaboratorsCarouselSlide} />
        </li>
      ))
    : COLLABORATORS.map((url) => (
        <li key={url}>
          <Image src={url} alt="Partner" className={classes.collaboratorsCarouselSlide} />
        </li>
      ));
  return (
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
      <Stack gap={"clamp(2rem, 4vw, 4rem)"} className={classes.collaboratorsWrapper}>
        {data ? (
          <></>
        ) : (
          <Stack style={{ gap: "clamp(1rem, 2vw, 2rem)" }} align="center">
            <Title ta={"center"} order={2} className={classes.collaboratorsTitle}>
              Powerful Crypto{" "}
              <Text span className={classes.collaboratorsTitleHighlighted}>
                Collaborations
              </Text>
            </Title>
            <Text ta="center" variant="text-2" className={classes.collaboratorsSubTitle}>
              Powering Progress Together: Explore Our Dynamic Network of Strategic Alliances and Collaborations in the Crypto World.
            </Text>
          </Stack>
        )}
        <Box className={classes.collaboratorsCarouselWrapper}>
          <div className={classes.scroller} data-animated="true">
            <ul className={clsx(classes.imagesList, classes.scrollerInner)}>{collaboratorsSlides}</ul>
          </div>
        </Box>
      </Stack>
    </motion.div>
  );
};
