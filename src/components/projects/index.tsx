import { TProjectHeader } from "@/lib/types";
import { CustomLink } from "../ui/buttons";
import { cn } from "@/lib/utils";

export const ProjectHeader = ({ projectCategories, tech }: TProjectHeader) => (
  <div className="border-t">
    <div className="bg-background mx-auto flex w-fit flex-wrap justify-center gap-2 border-r border-l p-4 max-sm:max-w-xs">
      {projectCategories.map(({ name, total }, index) => (
        <CustomLink
          key={name + index}
          href={`/projects?tech=${name}`}
          enlargeVariant={name === tech ? "muted" : "accent"}
          hover={"enlarge"}
          variant={null}
        >
          {name}
          <div
            className={cn(
              "bg-secondary text-foreground-secondary inline-flex size-8 items-center justify-center rounded-full",
              name === tech && "bg-accent text-foreground",
            )}
          >
            {total}
          </div>
        </CustomLink>
      ))}
    </div>
  </div>
);
