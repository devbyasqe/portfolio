"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { CustomLink, IconWrapper } from "../ui/buttons";
import { userProfile } from "../data";
import { DocsIcon } from "../svg";

export const ResumeButton = () => {
  const { theme } = useTheme();
  return (
    <CustomLink
      href={
        theme === "light" ? userProfile.lightResume : userProfile.darkResume
      }
      download={"Ashique_resume.pdf"}
      variant={null}
      enlargeVariant={"secondary"}
      hover={"enlarge"}
      target="_blank"
      suppressHydrationWarning
    >
      Resume
      <IconWrapper variant={"muted"} direction={"right-left"}>
        <DocsIcon />
      </IconWrapper>
    </CustomLink>
  );
};



export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null; 
};
