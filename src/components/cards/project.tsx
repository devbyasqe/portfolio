"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  ButtonSlide,
  ButtonSlideText,
  CustomLink,
  IconWrapper,
} from "../ui/buttons";
import { LinkArrowIcon } from "../svg";
import { TProjectCard } from "@/lib/types";
import { motion } from "motion/react";

const ProjectCard = ({ id, thumbnail, summary, name }: TProjectCard) => {
  return (
    <div className="relative mx-2">
      <div
        className={cn(
          "absolute z-10 inline-flex size-8 items-center justify-center rounded-2xl border backdrop-blur",
          id % 2 === 0
            ? "bg-accent/50 top-0 right-0"
            : "bg-muted/50 border-muted top-0 left-0",
        )}
      >
        {id}
      </div>
      <div className="grid gap-2 rounded-[1.25rem] border p-1 md:grid-cols-2">
        <motion.div
          className={cn(
            "aspect-square overflow-clip rounded-2xl border",
            id % 2 === 0 ? "bg-accent md:order-2" : "bg-background",
          )}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          {thumbnail.img && (
            <Image
              alt={`${name} project thumbnail`}
              src={thumbnail.img}
              height={720}
              width={1080}
              loading="lazy"
              className="size-full object-cover object-center"
            />
          )}
          {thumbnail.video && (
            <video
              src={thumbnail.video}
              preload="none"
              autoPlay
              muted
              loop
              className="size-full object-cover object-center"
            />
          )}
        </motion.div>
        <div
          className={cn(
            "bg-card flex flex-col items-start justify-center overflow-clip rounded-2xl border p-4",
            id % 2 === 0 && "md:order-1",
          )}
        >
          <motion.p
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="text-lg font-medium"
          >
            {name}
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
            className="text-foreground-muted mt-2"
          >
            {summary}
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ amount: 0.1, once: true }}
            transition={{ duration: 0.3, delay: 0.5, ease: "linear" }}
            className="mt-4"
          >
            <CustomLink
              href={`/projects/${encodeURIComponent(name)}`}
              padding={"icon-movable"}
              variant={id % 2 === 0 ? "accent" : "secondary"}
            >
              <ButtonSlide variant={id % 2 === 0 ? "secondary" : "accent"} />
              <IconWrapper
                variant={id % 2 === 0 ? "secondary" : "accent"}
                hover={"left"}
              >
                <LinkArrowIcon />
              </IconWrapper>
              <IconWrapper
                variant={id % 2 === 0 ? "secondary" : "accent"}
                hover={"right"}
              >
                <LinkArrowIcon />
              </IconWrapper>
              <ButtonSlideText>Open Project</ButtonSlideText>
            </CustomLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
