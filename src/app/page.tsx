import HomeHero from "@/components/home/hero";
import RecentProjects from "@/components/projects/recent-projects";
import { gradientVariants } from "@/components/variants/css";
import { cn } from "@/lib/utils";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div
        className={cn(
          gradientVariants({ axis: "bars" }),
          "animate-line-move pointer-events-none fixed inset-0 -z-10 bg-size-[24px_24px] [--offset-x:24px] [--offset-y:24px]",
        )}
      />
      <HomeHero />
      <RecentProjects />
    </>
  );
};

export default HomePage;
