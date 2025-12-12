import { cva } from "class-variance-authority";

export const gradientVariants = cva("bg-background bg-size-[16px_16px]", {
  variants: {
    axis: {
      x: "bg-[repeating-linear-gradient(315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%)]",
      y: "bg-[repeating-linear-gradient(-315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%)]",
      xy: "bg-[repeating-linear-gradient(315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%),repeating-linear-gradient(-315deg,hsl(var(--lines))_0,hsl(var(--lines))_1px,transparent_0,transparent_50%)]",

      check:
        "bg-[linear-gradient(to_right,hsl(var(--lines))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--lines))_1px,transparent_1px)]",
      square:
        "bg-[repeating-conic-gradient(hsl(var(--lines))_0%_25%,hsl(var(--background))_0%_50%)]",

      bars: "bg-[linear-gradient(135deg,#0000_18.75%,hsl(var(--background))_0_31.25%,#0000_0),repeating-linear-gradient(45deg,hsl(var(--background))_-6.25%_6.25%,hsl(var(--lines))_0_18.75%)]",
    },
  },
});
