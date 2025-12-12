import { Variants } from "motion/react";

export const navbarVariant: Variants = {
  visible: {
    y: 0,
    filter: "blur(0px) grayscale(0)",
  },
  hidden: {
    y: "150%",
    filter: "blur(10px) grayscale(1)",
  },
};

export const clipPathVariant: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
  },
  visible: { clipPath: "inset(0 0 0 0)" },
};

export const slideInVariant: Variants = {
  hidden: { y: 50, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};
