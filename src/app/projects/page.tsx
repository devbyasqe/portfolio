import { myProjects } from "@/components/data/projects";
import { ProjectHeader } from "@/components/projects";
import ProjectCard from "@/components/projects/project-card";
import { Container, PageTitle } from "@/components/ui";
import { MotionContainer } from "@/components/ui/client";
import { gradientVariants } from "@/components/variants/css";
import { slideInVariant } from "@/components/variants/motion";
import { TProjectsParams } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

const ProjectsPage = async ({ searchParams }: TProjectsParams) => {
  const { tech = "All" } = await searchParams;

  const filteredProjects =
    tech === "All"
      ? myProjects
      : myProjects.filter((project) => project.tags.includes(tech));

  const tagsWithCounts = [
    {
      label: "All",
      total: myProjects.length,
    },
    ...Array.from(new Set(myProjects.flatMap((project) => project.tags)))
      .sort()
      .map((tag) => ({
        label: tag,
        total: myProjects.filter((project) => project.tags.includes(tag))
          .length,
      })),
  ];

  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "xy" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-x:16px] [--offset-y:16px]",
        )}
      />
      <section>
        <PageTitle title="Projects" />
        <Container className="overflow-clip" >
          <ProjectHeader tech={tech} projectCategories={tagsWithCounts} />
        </Container>
      </section>
      <section className="border-t">
        <Container className="py-10">
          <div className="space-y-6">
            {filteredProjects.map(({ thumbnail, overview, name }, index) => (
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
    </>
  );
};

export default ProjectsPage;
