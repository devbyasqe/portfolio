import { ArrowIcon } from "@/components/svg";
import { Container } from "@/components/ui";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "@/components/ui/buttons";
import { gradientVariants } from "@/components/variants/css";
import { cn } from "@/lib/utils";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "check" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-x:24px] [--offset-y:24px]",
        )}
      />
      <section>
        <Container className="flex h-[calc(100svh-15rem)] min-h-96 flex-col items-center justify-center gap-10">
          <div className="space-y-2 text-center">
            <h1 className="from-muted to-secondary mx-1 bg-linear-to-t bg-clip-text text-7xl leading-none font-bold text-transparent md:text-8xl lg:text-9xl">
              404
            </h1>
            <h1>Page not found</h1>
          </div>

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
              <ArrowIcon />
            </IconWrapper>
            <ButtonSlideText>Back to Home</ButtonSlideText>
          </CustomLink>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
