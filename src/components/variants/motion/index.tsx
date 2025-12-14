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

export const slideInXVariant: Variants = {
  hidden: { x: 100, opacity: 0, filter: "blur(10px)" },
  visible: { x: 0, opacity: 1, filter: "blur(0px)" },
};

export const slideInYVariant: Variants = {
  hidden: { y: -50, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export const flipVariant: Variants = {
  hidden: {
    y: -100,
    x: 100,
    opacity: 0,
    filter: "blur(20px)",
    scaleX: -1,
  },
  visible: { y: 0, x: 0, opacity: 1, filter: "blur(0px)", scaleX: 1 },
};
