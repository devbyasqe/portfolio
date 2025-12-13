import { cn } from "@/lib/utils";
import { gradientVariants } from "../variants/css";
import { MotionContainer } from "./client";
import { slideInVariant } from "../variants/motion";
import { VariantProps } from "class-variance-authority";

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
      "animate-line-move pointer-events-none overflow-clip [--offset-y:16px] border-b",
      className,
    )}
  >
    <div className="mx-auto w-[95%] max-w-4xl border-r border-l py-10 text-center transition-all duration-500 sm:max-md:max-w-160 px-4">
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
