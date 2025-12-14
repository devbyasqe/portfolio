import { cn } from "@/lib/utils";
import { gradientVariants } from "../variants/css";
import { MotionContainer } from "./client";
import { slideInVariant } from "../variants/motion";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

export type TContainer = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

export const Container = ({
  as: Comp = "div",
  className,
  ...props
}: TContainer) => (
  <Comp
    className={cn(
      "mx-auto w-[95%] max-w-4xl border-r border-l transition-all duration-500 sm:max-md:max-w-160",
      className,
    )}
    {...props}
  />
);

export const PageTitle = ({
  title,
  className,
  axis = "check",
}: {
  title: string;
  axis?: VariantProps<typeof gradientVariants>["axis"];
  className?: string;
}) => (
  <div
    className={cn(
      gradientVariants({ axis }),
      "animate-line-move pointer-events-none overflow-clip border-b [--offset-y:16px]",
      className,
    )}
  >
    <div className="mx-auto w-[95%] max-w-4xl border-r border-l px-4 py-10 text-center transition-all duration-500 sm:max-md:max-w-160">
      <MotionContainer
        as={"h1"}
        variants={slideInVariant}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        {title}
      </MotionContainer>
    </div>
  </div>
);

export const AboutSectionCard = ({
  title,
  children,
  id,
}: {
  id: number;
  title: string;
  children: ReactNode;
}) => (
  <MotionContainer
    variants={slideInVariant}
    initial={"hidden"}
    whileInView={"visible"}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.3, delay: (id / 2) * 0.3, ease: "linear" }}
    className={cn(
      "mx-auto w-[95%] rounded-[1.75rem] border",
      id % 2 === 0 ? "bg-accent" : "bg-card border-lines",
    )}
  >
    <h3 className="px-4 pt-3 pb-2">{title}</h3>
    <div
      className={cn(
        "mx-1 mb-1 rounded-3xl border p-4",
        id % 2 === 0 ? "bg-card border-lines" : "bg-accent",
      )}
    >
      {children}
    </div>
  </MotionContainer>
);
