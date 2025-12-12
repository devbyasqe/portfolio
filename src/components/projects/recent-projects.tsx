import React from "react";
import { Container } from "../ui";
import { myProjects } from "../data/projects";
import { CustomLink, IconWrapper } from "../ui/buttons";
import { ArrowIcon } from "../svg";
import ProjectCard from "./project-card";

const RecentProjects = () => {
  const highlightingProjects = myProjects.filter(
    (project) => project.highlight,
  );
  return (
    <section className="border-t">
      <Container className="py-10">
        <div className="bg-background flex flex-wrap items-center justify-between gap-4 border-t border-b px-4 py-2">
          <div className="relative">
            <h2 className="">Recent Projects</h2>
            <p className="absolute -top-1 -right-9 text-xs">
              (
              <span className="text-sm font-medium">
                {highlightingProjects.length}
              </span>
              /
              <span className="text-foreground-muted">{myProjects.length}</span>
              )
            </p>
          </div>
          <CustomLink
            href={"/projects"}
            variant={null}
            hover={"enlarge"}
            enlargeVariant={"muted"}
          >
            Discover More
            <IconWrapper direction={"left-right"} hover={"rotate"}>
              <ArrowIcon />
            </IconWrapper>
          </CustomLink>
        </div>
        <div className="mt-10 space-y-6">
          {highlightingProjects.map(({ thumbnail, name, overview }, index) => (
            <ProjectCard
              key={name + index}
              id={index + 1}
              name={name}
              thumbnail={thumbnail}
              summary={overview.summary}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentProjects;
