import { useResize } from "@/hooks/useResize";
import { Center, Title } from "@mantine/core";
import { motion } from "framer-motion";

import classes from "./styles.module.css";

interface LoadingScreenProps {
  opened: boolean;
  type?: "main" | "block";
  styles?: React.CSSProperties;
  overlayStyles?: React.CSSProperties;
  title?: string;
}

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "20%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.9,
  repeat: Infinity,
  ease: "easeInOut",
};

const lgRingTransition = { repeat: Infinity, repeatDelay: 1.5, repeatType: "reverse" as const, ease: "easeInOut", duration: 5 };
const mdRingTransition = { repeat: Infinity, repeatDelay: 1.5, repeatType: "reverse" as const, ease: "easeInOut", duration: 4 };
const smRingTransition = { repeat: Infinity, repeatDelay: 1.5, repeatType: "reverse" as const, ease: "easeInOut", duration: 3.5 };

export const LoadingScreen = ({ opened = true, type = "main", styles, overlayStyles, title = "Loading Spot Trading" }: LoadingScreenProps) => {
  if (!opened) return null;

  const { isAdaptive: sm } = useResize(500);

  return (
    <div className={type === "main" ? classes.overlay : classes.overlayBlock} style={overlayStyles ? overlayStyles : undefined}>
      <div
        className={type === "main" ? classes.content : classes.contentBlock}
        style={styles ? styles : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <Center className={type === "main" ? classes.loader : classes.loaderBlock}>
          <motion.div style={{ position: "absolute" }} animate={{ rotate: 180 }} transition={lgRingTransition}>
            <svg
              width={type === "main" ? "248" : "180"}
              height={type === "main" ? "247" : "182"}
              viewBox="0 0 248 247"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="124" cy="123.5" r="121" stroke="#9747FF" stroke-opacity="0.1" stroke-width="5" stroke-dasharray="5 5" />
            </svg>
          </motion.div>
          <motion.div style={{ position: "absolute" }} animate={{ rotate: 180 }} transition={mdRingTransition}>
            <svg
              width={type === "main" ? "184" : "132"}
              height={type === "main" ? "185" : "133"}
              viewBox="0 0 184 185"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_2001_25)">
                <circle cx="91.9981" cy="92.4999" r="87.2223" stroke="#9747FF" stroke-opacity="0.3" stroke-width="5" stroke-dasharray="5 5" />
              </g>
              <defs>
                <filter
                  id="filter0_f_2001_25"
                  x="0.275879"
                  y="0.777618"
                  width="183.444"
                  height="183.445"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2001_25" />
                </filter>
              </defs>
            </svg>
          </motion.div>
          <motion.div style={{ position: "relative" }} animate={{ rotate: 180 }} transition={smRingTransition}>
            <svg
              width={type === "main" ? "114" : "80"}
              height={type === "main" ? "115" : "82"}
              viewBox="0 0 114 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_2001_31)">
                <circle cx="57.0009" cy="57.5001" r="52.037" stroke="#9747FF" stroke-opacity="0.8" stroke-width="5" stroke-dasharray="5 5" />
              </g>
              <defs>
                <filter
                  id="filter0_f_2001_31"
                  x="0.463867"
                  y="0.963104"
                  width="113.074"
                  height="113.074"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2001_31" />
                </filter>
              </defs>
            </svg>
          </motion.div>
          <motion.div style={{ position: "absolute" }} className={classes.dots} variants={loadingContainerVariants} initial="start" animate="end">
            <motion.svg
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
              width={type === "main" ? "6" : "5"}
              height={type === "main" ? "6" : "5"}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#9747FF" />
            </motion.svg>
            <motion.svg
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
              width={type === "main" ? "6" : "5"}
              height={type === "main" ? "6" : "5"}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#9747FF" />
            </motion.svg>
            <motion.svg
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
              width={type === "main" ? "6" : "5"}
              height={type === "main" ? "6" : "5"}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#9747FF" />
            </motion.svg>
          </motion.div>
        </Center>

        {type === "main" ? (
          <Title fz={sm ? "24px" : "36px"} ff="Inter">
            {title}
          </Title>
        ) : null}
      </div>
    </div>
  );
};
