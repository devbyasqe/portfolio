"use client";
import React  from "react";
import { motion,  } from "motion/react";
import { TMotionContainer } from "@/lib/types";


export const MotionContainer = ({
  as: Component = "div",
  children,
  ...props
}: TMotionContainer) => {
  const MotionComponent = motion.create(Component);

  return <MotionComponent {...props}>{children}</MotionComponent>;
};
