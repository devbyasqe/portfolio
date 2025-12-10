"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useHoverHighlightPosition } from "../hooks/mouse-position";
import { motion } from "motion/react";
import { Button } from "./buttons";
import { THoverEvent } from "@/lib/types";
import { themeModes } from "../data";
import { cn } from "@/lib/utils";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  const { handleMouseEnter, handleMouseLeave, hoverPosition } =
    useHoverHighlightPosition();

  useEffect(() => setMount(true), []);

  if (!mount) return null;

  const handleHover = (e: THoverEvent, label: string) => {
    if (theme !== label) {
      handleMouseEnter(e);
    }
  };

  const handleClick = (e: THoverEvent, label: string) => {
    if (theme !== label) {
      setTheme(label);
      handleMouseEnter(e);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="bg-background relative inline-flex items-center gap-0.5 rounded-full border p-1"
    >
      {themeModes.map(({ icon, label }, index) => (
        <Button
          key={label + index}
          disabled={theme === label}
          variant={null}
          size={"theme"}
          hover={null}
          padding={null}
          className={cn(
            "z-10",
            theme === label &&
              "bg-accent text-foreground-muted border-lines border",
          )}
          onClick={(e) => handleClick(e, label)}
          onMouseEnter={(e) => handleHover(e, label)}
          onFocus={(e) => handleHover(e, label)}
        >
          {icon}
        </Button>
      ))}
      <motion.div
        animate={{ ...hoverPosition }}
        className="bg-accent absolute rounded-full"
      />
    </div>
  );
};

export default ThemeToggler;
