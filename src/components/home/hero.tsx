import React from "react";
import { Container } from "../ui";
import Image from "next/image";
import { userProfile } from "../data";
import { cn } from "@/lib/utils";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "../ui/buttons";
import { GithubIcon, GmailIcon, LinkedInIcon } from "../svg";
import { ResumeButton } from ".";

const HomeHero = () => {
  return (
    <section>
      <Container>
        <div className="grid sm:grid-cols-12">
          <div className="group/image bg-background px-4 py-6 transition-all duration-500 sm:col-span-5 sm:border-r md:col-span-4">
            <div className="ring-muted ring-offset-background via-muted animate-shimmer relative aspect-square overflow-hidden rounded-full bg-linear-to-r from-transparent to-transparent bg-size-[200%_100%] ring-2 ring-offset-2 max-sm:h-44">
              <Image
                loading="eager"
                src={userProfile["primaryImage"]}
                alt="profile image"
                height={720}
                width={1080}
                className={cn(
                  "absolute size-full object-cover object-center",
                  "transition-all duration-300",
                  "group-hover/image:-rotate-6 group-hover/image:opacity-0 group-hover/image:blur",
                  "group-active/image:-rotate-6 group-active/image:opacity-0 group-active/image:blur",
                )}
              />
              <Image
                loading="eager"
                src={userProfile["secondaryImage"]}
                alt="profile image"
                height={720}
                width={1080}
                className={cn(
                  "absolute size-full rotate-6 object-cover object-center opacity-0 blur",
                  "transition-all duration-300",
                  "group-hover/image:rotate-0 group-hover/image:opacity-100 group-hover/image:blur-none",
                  "group-active/image:rotate-0 group-active/image:opacity-100 group-active/image:blur-none",
                )}
              />
            </div>
          </div>
          <div className="flex flex-col justify-end transition-all duration-500 sm:col-span-7 md:col-span-8">
            <div className="bg-background p-4 sm:border-t">
              <h1>ASHIQUE</h1>
              <p className="text-foreground-muted mt-1 text-sm tracking-tight">
                [aa-shi-k]
              </p>
              <h2 className="mt-4">A Full-Stack Developer</h2>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="bg-background mx-auto w-[90%] max-w-2xl border-r border-l">
            <h3 className="p-4 text-pretty">
              I develop full-stack applications using Django and Next.js. I care
              about clean code, thoughtful interfaces, and building things that
              actually work.
            </h3>
            <div className="flex flex-wrap justify-center gap-3 border-t px-4 py-2 sm:items-center">
              <CustomLink
                href={`mailto:${userProfile["email"]}`}
                padding={"icon-movable"}
                target="_blank"
                variant={"accent"}
              >
                <ButtonSlide variant={"secondary"} />
                <IconWrapper variant={null} hover={"left"}>
                  <GmailIcon />
                </IconWrapper>
                <IconWrapper hover={"right"} variant={"secondary"}>
                  <GmailIcon />
                </IconWrapper>
                <ButtonSlideText>Gmail</ButtonSlideText>
              </CustomLink>
              <CustomLink
                href={userProfile["github"]}
                padding={"icon-movable"}
                target="_blank"
              >
                <ButtonSlide variant={"accent"} />
                <IconWrapper variant={null} hover={"left"}>
                  <GithubIcon />
                </IconWrapper>
                <IconWrapper hover={"right"} variant={"accent"}>
                  <GithubIcon />
                </IconWrapper>
                <ButtonSlideText>Github</ButtonSlideText>
              </CustomLink>

              <CustomLink
                href={userProfile["linkedin"]}
                variant={null}
                enlargeVariant={"muted"}
                hover={"enlarge"}
                target="_blank"
              >
                LinkedIn
                <IconWrapper direction={"top-bottom"}>
                  <LinkedInIcon />
                </IconWrapper>
              </CustomLink>
              <ResumeButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
