import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "group/button relative isolate inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full",
    "font-medium whitespace-nowrap",
    "transition-all duration-500",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        accent: "bg-accent text-foreground border",
        muted: "bg-muted text-foreground",
        secondary: "bg-secondary text-foreground-secondary",
      },
      enlargeVariant: {
        accent: ["before:bg-accent", "text-foreground before:border"],
        muted: ["before:bg-muted", "text-foreground"],
        secondary: ["before:bg-secondary", "text-foreground-secondary"],
      },
      size: {
        default: "h-10",
        theme: "size-8",
      },
      padding: {
        default: "gap-2 px-4 py-2",
        "icon-last": "gap-2 ps-3 pe-1",
        "icon-movable": "overflow-hidden ps-1 pe-9",
      },
      hover: {
        scale: [
          "hover:scale-110",
          "focus-visible:scale-110",
          "active:scale-95",
        ],

        enlarge: [
          "before:absolute before:inset-0 before:-z-1 before:rounded-full before:content-['']",
          "before:transition-all before:duration-500",
          "hover:before:scale-x-102 hover:before:scale-y-110",
          "focus-visible:before:scale-x-102 focus-visible:before:scale-y-110",
          "active:before:scale-y-95",
        ],
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
      padding: "icon-last",
      hover: "scale",
    },
  }
);

export const iconWrapperVariants = cva(
  [
    "relative inline-flex size-8 items-center justify-center rounded-full",
    "transition-all duration-500",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        accent: "bg-accent text-foreground border",
        muted: "bg-muted text-foreground",
        secondary: "bg-secondary text-foreground-secondary",
      },
      hover: {
        left: [
          "absolute -left-9",
          "group-hover/button:translate-x-10",
          "group-focus-visible/button:translate-x-10",
        ],
        right: [
          "absolute right-1",
          "group-hover/button:translate-x-10",
          "group-focus-visible/button:translate-x-10",
        ],
        rotate: [
          "-rotate-45",
          "group-hover/button:rotate-0",
          "group-focus-visible/button:rotate-0",
        ],
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export const iconEffectVariants = cva(
  "inline-flex items-center gap-2 transition-all duration-500",
  {
    variants: {
      direction: {
        "right-left": [
          "h-5 w-10 translate-x-0.5",
          "group-hover/button:-translate-x-5.5",
          "group-focus-visible/button:-translate-x-5.5",
        ],
        "left-right": [
          "h-5 w-10 -translate-x-5.5",
          "group-hover/button:translate-x-0.5",
          "group-focus-visible/button:translate-x-0.5",
        ],
        "bottom-top": [
          "h-10 w-5 flex-col",
          "group-hover/button:-translate-y-6",
          "group-focus-visible/button:-translate-y-6",
        ],
        "top-bottom": [
          "h-10 w-5 -translate-y-6 flex-col",
          "group-hover/button:translate-y-0",
          "group-focus-visible/button:translate-y-0",
        ],
      },
    },
  }
);

export const animatedBackgroundVariants = cva(
  [
    "absolute right-1 h-8 w-8 rounded-full",
    "transition-all duration-500",
    "group-hover/button:w-[calc(100%-40px)]",
    "group-focus-visible/button:w-[calc(100%-40px)]",
  ],
  {
    variants: {
      variant: {
        accent: "bg-accent",
        secondary: "bg-secondary",
        muted: "bg-muted",
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  }
);
