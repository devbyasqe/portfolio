import { myProjects } from "@/components/data/projects";
import { ProjectHeader } from "@/components/projects";
import ProjectCard from "@/components/projects/project-card";
import { Container } from "@/components/ui";
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
      name: "All",
      total: myProjects.length,
    },
    ...Array.from(new Set(myProjects.flatMap((project) => project.tags)))
      .sort()
      .map((tag) => ({
        name: tag,
        total: myProjects.filter((project) => project.tags.includes(tag))
          .length,
      })),
  ];

  return (
    <>
      <div
        className={cn(
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-x:16px] [--offset-y:16px]",
          gradientVariants({ axis: "xy" }),
        )}
      />
      <section>
        <Container className="">
          <div
            className={cn(
              "animate-line-move pointer-events-none overflow-clip py-10 text-center [--offset-y:16px]",
              gradientVariants({ axis: "square" }),
            )}
          >
            <MotionContainer
              as={"h1"}
              variants={slideInVariant}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              Projects
            </MotionContainer>
          </div>

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
