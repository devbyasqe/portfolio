import { TProjectHeader } from "@/lib/types";
import { CustomLink } from "../ui/buttons";
import { cn } from "@/lib/utils";
import { gradientVariants } from "../variants/css";
import { MotionContainer } from "../ui/client";
import { slideInVariant } from "../variants/motion";
import { ReactNode } from "react";

export const ProjectHeader = ({ projectCategories, tech }: TProjectHeader) => (
  <MotionContainer
    variants={slideInVariant}
    initial={"hidden"}
    animate={"visible"}
    transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
    className="bg-background mx-auto flex w-fit flex-wrap justify-center gap-2 border-r border-l p-4 max-sm:max-w-xs"
  >
    {projectCategories.map(({ label, total }, index) => (
      <CustomLink
        key={label + index}
        href={`/projects?tech=${label}`}
        enlargeVariant={label === tech ? "muted" : "accent"}
        hover={"enlarge"}
        variant={null}
      >
        {label}
        <div
          className={cn(
            "bg-secondary text-foreground-secondary inline-flex size-8 items-center justify-center rounded-full",
            label === tech && "bg-accent text-foreground",
          )}
        >
          {total}
        </div>
      </CustomLink>
    ))}
  </MotionContainer>
);

export const ProjectSection = ({
  title,
  children,
  childrenClassName,
}: {
  childrenClassName?: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <MotionContainer
      key={title}
      variants={slideInVariant}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
      className={cn(
        "mx-auto w-[95%] overflow-clip rounded-2xl border",
        "animate-line-move [--offset-y:16px]",
        gradientVariants({ axis: "xy" }),
      )}
    >
      <h3 className="bg-card w-fit border-r px-4 py-2">{title}</h3>
      <div className={cn("bg-card border-t px-2 pt-4 pb-2", childrenClassName)}>
        {children}
      </div>
    </MotionContainer>
  );
};
