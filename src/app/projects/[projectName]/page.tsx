import { myProjects } from "@/components/data/projects";
import { ProjectSection } from "@/components/projects";
import { GithubIcon, LinkArrowIcon, SparklesIcon } from "@/components/svg";
import { Container, PageTitle } from "@/components/ui";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "@/components/ui/buttons";
import { MotionContainer, VideoPlayer } from "@/components/ui/client";
import { gradientVariants } from "@/components/variants/css";
import { slideInVariant } from "@/components/variants/motion";
import { TProjectParams } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProjectPage = async ({ params }: TProjectParams) => {
  const { projectName } = await params;

  const project = myProjects.find(
    (p) => p.name === decodeURIComponent(projectName),
  );
  if (!project) {
    notFound();
  }
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "diamond" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-y:16px]",
        )}
      />
      <section>
        <PageTitle title={project.name} axis={"xy"} />
        <Container className="space-y-6 py-10">
          <MotionContainer
            variants={slideInVariant}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
            className="border-t border-b p-1"
          >
            <div className="via-muted animate-shimmer relative aspect-video overflow-hidden rounded-2xl bg-linear-to-r from-transparent to-transparent bg-size-[200%_100%]">
              {project.preview.img && (
                <Image
                  loading="lazy"
                  alt={`${project.name} project image`}
                  src={project.preview.img}
                  height={720}
                  width={1080}
                  className="size-full object-cover object-center"
                />
              )}
              {project.preview.video && (
                <VideoPlayer
                  src={project.preview.video}
                  poster={project.preview.poster || project.preview.img}
                />
              )}
            </div>
          </MotionContainer>
          <MotionContainer
            variants={slideInVariant}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.3, delay: 0.6, ease: "linear" }}
            className="border-t border-b"
          >
            <div className="bg-background mx-auto flex w-[90%] max-w-2xl flex-wrap justify-center gap-3 border-r border-l px-4 py-2">
              {project.repositoryUrl.map(({ label, link }, index) => (
                <CustomLink
                  key={index + label}
                  href={link}
                  variant={null}
                  enlargeVariant={"muted"}
                  hover={"enlarge"}
                  target="_blank"
                >
                  {label}
                  <IconWrapper direction={"top-bottom"}>
                    <GithubIcon />
                  </IconWrapper>
                </CustomLink>
              ))}
              {project.liveDemo && (
                <CustomLink
                  href={project.liveDemo}
                  target="_blank"
                  padding={"icon-movable"}
                >
                  <ButtonSlide variant={"accent"} />
                  <IconWrapper variant={null} hover={"left"}>
                    <LinkArrowIcon />
                  </IconWrapper>
                  <IconWrapper hover={"right"} variant={"accent"}>
                    <LinkArrowIcon />
                  </IconWrapper>
                  <ButtonSlideText>Live Demo</ButtonSlideText>
                </CustomLink>
              )}
            </div>
          </MotionContainer>

          <ProjectSection title="Inside the Build">
            <p className="text-pretty">{project.overview.description}</p>
          </ProjectSection>

          <ProjectSection title="Built With">
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack, index) => (
                <p
                  key={stack + index}
                  className="bg-accent rounded-lg border px-2 py-1 text-sm font-medium"
                >
                  {stack}
                </p>
              ))}
            </div>
          </ProjectSection>

          {project.features && (
            <ProjectSection title="Why It's Useful">
              <div className="grid gap-3 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={feature + index}
                    className="bg-card hover:bg-background group/feature border-lines flex items-center gap-3 rounded-xl border px-2 py-3 transition-all duration-500"
                  >
                    <IconWrapper
                      variant={null}
                      className="bg-background group-hover/feature:bg-accent transition-all duration-500"
                    >
                      <SparklesIcon />
                    </IconWrapper>
                    <p className="text-sm/relaxed transition-all duration-500 md:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </ProjectSection>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProjectPage;
