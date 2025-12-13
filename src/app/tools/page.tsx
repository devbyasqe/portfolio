import { techEcosystem } from "@/components/data/dev-toolkit";
import { Container, PageTitle } from "@/components/ui";
import { MotionContainer } from "@/components/ui/client";
import { gradientVariants } from "@/components/variants/css";
import {
  slideInVariant,
  slideInXVariant,
  slideInYVariant,
} from "@/components/variants/motion";
import { cn } from "@/lib/utils";
import React from "react";

const ToolsPage = () => {
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "x" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-x:16px] [--offset-y:16px]",
        )}
      />
      <section>
        <PageTitle title="Development Toolkit" axis={"y"} />
        <Container className="space-y-6 px-2 py-10">
          {techEcosystem.map(({ developmentlist, title }, pindex) => (
            <div key={title + pindex}>
              <MotionContainer
                as={"h3"}
                variants={slideInVariant}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="bg-card w-fit rounded-t-[1.75rem] border border-b-0 px-4 pt-3 pb-2 mx-auto"
              >
                {title}
              </MotionContainer>
              <div
                className={cn(
                  "grid overflow-clip rounded-3xl  border md:grid-cols-2",
                  gradientVariants({ axis: "y" }),
                  "animate-line-move   [--offset-y:16px]",
                )}
              >
                {developmentlist.map(
                  ({ icon, label, description, tags }, index) => (
                    <div
                      key={label + index}
                      className={cn(
                        "isolate grid grid-cols-12 items-center gap-4 border-b last:border-b-0",
                        (index + 1) % 2 === 0 ? "" : "md:border-r",
                        developmentlist.length % 2 === 0 &&
                          "md:nth-last-[2]:border-b-0",
                      )}
                    >
                      <MotionContainer
                        variants={slideInXVariant}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ amount: 0.2, once: true }}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className="col-span-3 p-4"
                      >
                        <div className="h-12">{icon}</div>
                      </MotionContainer>

                      <div className="bg-card relative z-10 col-span-9 size-full space-y-2 overflow-clip p-4">
                        <MotionContainer
                          variants={slideInVariant}
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{ amount: 0.2, once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3,
                            ease: "linear",
                          }}
                          className="font-medium"
                        >
                          {label}{" "}
                        </MotionContainer>
                        <MotionContainer
                          variants={slideInVariant}
                          initial={"hidden"}
                          whileInView={"visible"}
                          viewport={{ amount: 0.2, once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5,
                            ease: "linear",
                          }}
                          className="text-foreground-muted text-sm text-pretty"
                        >
                          {description}
                        </MotionContainer>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, index) => (
                            <MotionContainer
                              variants={slideInYVariant}
                              initial={"hidden"}
                              whileInView={"visible"}
                              viewport={{ amount: 0.2, once: true }}
                              transition={{
                                duration: 0.3 * (index + 0.3),
                                delay: 0.1 * (index + 0.2),
                                ease: "linear",
                              }}
                              key={index + tag}
                              className="bg-muted text-foreground rounded-lg px-1.5 py-1 text-xs font-medium lowercase"
                            >
                              {tag}
                            </MotionContainer>
                          ))}
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default ToolsPage;
