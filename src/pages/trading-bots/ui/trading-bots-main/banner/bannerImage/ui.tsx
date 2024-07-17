import { Box } from "@mantine/core";
import { motion } from "framer-motion";

import classes from "./styles.module.css";

export const BannerImage = () => {
  return (
    <Box className={classes.bannerRightSide}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 200,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
      >
        <img draggable="false" className={classes.mainRobot} src={`${import.meta.env.BASE_URL}assets/trading-bots/Main_robot.png`} alt="banner" />
      </motion.div>

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
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img draggable="false" className={classes.bitcoinOne} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-1.png`} alt="banner" />
      </motion.div>
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
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img draggable="false" className={classes.bitcoinTwo} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-2.png`} alt="banner" />
      </motion.div>
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
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img draggable="false" className={classes.etheriumTwo} src={`${import.meta.env.BASE_URL}assets/trading-bots/Etherium-2.png`} alt="banner" />
      </motion.div>
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
        transition={{ duration: 1, delay: 0.7 }}
      >
        <img draggable="false" className={classes.liteCoin} src={`${import.meta.env.BASE_URL}assets/trading-bots/LiteCoin-1.png`} alt="banner" />
      </motion.div>
    </Box>
  );
};
