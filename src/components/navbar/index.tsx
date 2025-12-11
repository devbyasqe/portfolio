"use client";

import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useHoverHighlightPosition } from "../hooks/mouse-position";
import { THoverEvent } from "@/lib/types";
import { navbarVariant } from "../variants/motion";
import { navLinks } from "../data";
import { CustomLink, IconWrapper } from "../ui/buttons";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { handleMouseEnter, handleMouseLeave, hoverPosition } =
    useHoverHighlightPosition();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      setScrolled(latest > previous && latest > 150);
    }
  });

  const handleInteraction = (e: THoverEvent, href: string) => {
    if (pathname !== href) {
      handleMouseEnter(e);
    } else {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      variants={navbarVariant}
      animate={scrolled ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-x-0 bottom-0 isolate z-50 mx-auto max-w-4xl pt-2 pb-4"
    >
      <div className="bg-background absolute inset-0 mask-t-from-5%" />
      <div className="bg-accent absolute inset-0 blur-2xl" />
      <div
        onMouseLeave={handleMouseLeave}
        className="bg-background relative mx-auto flex w-fit items-center gap-1 rounded-full border p-1"
      >
        {navLinks.map(({ href, label, icon }, index) => (
          <CustomLink
            tabIndex={pathname === href ? -1 : 1}
            key={label + index}
            href={href}
            variant={pathname === href ? "secondary" : null}
            padding={"icon-last"}
            hover={null}
            onClick={(e) => handleInteraction(e, href)}
            onMouseEnter={(e) => handleInteraction(e, href)}
            onFocus={(e) => handleInteraction(e, href)}
            className={cn(
              "z-10",
              pathname === href
                ? "pointer-events-none"
                : "border border-white/20 font-normal text-white mix-blend-exclusion",
            )}
          >
            {label}
            <IconWrapper variant={"accent"}>{icon}</IconWrapper>
          </CustomLink>
        ))}

        <motion.div
          animate={{ ...hoverPosition }}
          className="bg-secondary absolute rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
