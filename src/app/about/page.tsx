import { interests, userProfile } from "@/components/data";
import { ResumeButton } from "@/components/home";
import {
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  PhoneIcon,
  SparklesIcon,
} from "@/components/svg";
import { AboutSectionCard, Container, PageTitle } from "@/components/ui";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "@/components/ui/buttons";
import { MotionContainer } from "@/components/ui/client";
import { gradientVariants } from "@/components/variants/css";
import { slideInVariant } from "@/components/variants/motion";
import { cn } from "@/lib/utils";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "rect" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-y:16px]",
        )}
      />
      <section>
        <PageTitle title="About Me" axis={"xy"} />
        <Container className="space-y-6 py-10">
          <AboutSectionCard id={1} title="Hello world!">
            <p>
              I&apos;m Ashique, a full-stack web developer from the misty hills
              of Tamil Nadu, where the tea is strong enough to wake the dead,
              the spices can knock the wind out of you, and the view here makes
              you wonder if you&apos;ve accidentally walked into a postcard.The
              internet here? Let&apos;s just say it&apos;s… trying its best.Most
              days, I&apos;m cooking up sturdy backends with Django and
              PostgreSQL, then slapping on a shiny Next.js frontend to make
              everything look nice and not crash (fingers crossed).
            </p>
          </AboutSectionCard>
          <AboutSectionCard id={2} title="How I Got Here">
            <p>
              I first started coding in college, just messing around with HTML,
              CSS, and JavaScript. It wasn&apos;t “serious work,” more like
              doodling on the internet. Then a friend introduced me to Python,
              and I thought, “Well… this is actually fun.” But I didn&apos;t
              start my career in IT. I spent two years in Oman working as a
              store manager running a shop instead of servers. Eventually, I
              decided it was time for a change and dove into Django full-time.
              From there, I picked up Django REST Framework for APIs, wandered
              into React, then Next.js so I could make my own full-stack
              creations.
            </p>
            <p className="mt-2">
              During my internship, the design team wasn&apos;t exactly thrilled
              with my “creative” layouts, so I started learning ui designin with
              Figma on my own. Then came Framer Motion, because who doesn&apos;t
              like buttons that wiggle when you poke them? Over time, I found I
              prefer minimal designs — fewer colors means fewer chances for me
              to regret my life choices later.
            </p>
          </AboutSectionCard>
          <div className="grid items-start gap-x-2 gap-y-6 md:grid-cols-2">
            <AboutSectionCard id={3} title="What's Next">
              <p>
                Right now, I&apos;m planning to explore mobile app development,
                and maybe dabble in AI and machine learning. If all goes well,
                my future projects might be smart enough to tell me when my code
                is terrible — which, honestly, could save me a lot of time.
              </p>
            </AboutSectionCard>
            <AboutSectionCard id={4} title="Interests & Hobbies">
              <p>When I&apos;m not coding, </p>
              <div className="mt-3 space-y-3">
                {interests.map((interest, index) => (
                  <div
                    key={interest + index}
                    className="flex items-center gap-3"
                  >
                    <IconWrapper variant={"muted"}>
                      <SparklesIcon />
                    </IconWrapper>
                    <p className="text-pretty">{interest} </p>
                  </div>
                ))}
              </div>
            </AboutSectionCard>
          </div>
          <MotionContainer
            variants={slideInVariant}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className={cn(
              "bg-card animate-line-move mx-auto mt-10 w-[95%] max-w-2xl rounded-3xl border p-4 [--offset-y:16px]",
              gradientVariants({ axis: "xy" }),
            )}
          >
            <h2 className="text-pretty">
              Got an exciting project or need a reliable developer on your team?
              I&apos;d love to hear from you!
            </h2>
            <div
              id="contacts"
              className="mx-auto mt-10 flex w-[90%] max-w-md flex-wrap justify-center gap-x-3 gap-y-4"
            >
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
              <CustomLink
                href={`tel:${userProfile["phone"]}`}
                padding={"icon-movable"}
                target="_blank"
                variant={"accent"}
              >
                <ButtonSlide variant={"secondary"} />
                <IconWrapper variant={null} hover={"left"}>
                  <PhoneIcon />
                </IconWrapper>
                <IconWrapper hover={"right"} variant={"secondary"}>
                  <PhoneIcon />
                </IconWrapper>
                <ButtonSlideText>Phone</ButtonSlideText>
              </CustomLink>
            </div>
          </MotionContainer>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
