"use client";

import { ArrowIcon, FileIcon } from "@/components/svg";
import { Container } from "@/components/ui";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "@/components/ui/buttons";
import { gradientVariants } from "@/components/variants/css";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const projectName = decodeURIComponent(pathname.replace(/^\/projects\//, ""));
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "bars" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 bg-size-[24px_24px] [--offset-x:24px] [--offset-y:24px]",
        )}
      />
      <section>
        <Container className="flex h-[calc(100svh-15rem)] min-h-96 flex-col items-center justify-center gap-4">
          <h1 className="text-center text-balance">
            Not Found
            <span className="from-muted to-secondary mx-1 bg-linear-to-t bg-clip-text text-transparent">
              {decodeURIComponent(projectName)}
            </span>
            Project.
          </h1>
          <CustomLink
            href={"/projects"}
            replace
            padding={"icon-movable"}
            variant={"accent"}
          >
            <ButtonSlide variant={"secondary"} />
            <IconWrapper
              variant={"muted"}
              hover={"left"}
              className="-rotate-180"
            >
              <ArrowIcon />
            </IconWrapper>
            <IconWrapper hover={"right"} variant={"secondary"}>
              <FileIcon />
            </IconWrapper>
            <ButtonSlideText>Back to Projects</ButtonSlideText>
          </CustomLink>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
