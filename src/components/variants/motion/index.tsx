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
