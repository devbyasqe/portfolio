import { cn } from "@/lib/utils";

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
