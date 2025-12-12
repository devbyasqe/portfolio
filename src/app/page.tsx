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
          "animate-line-move pointer-events-none fixed inset-0 -z-10 [--offset-x:16px] [--offset-y:16px]",
          gradientVariants({ axis: "bars" }),
        )}
      />
      <HomeHero />
      <RecentProjects />
    </>
  );
};

export default HomePage;
