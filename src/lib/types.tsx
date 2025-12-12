import { type VariantProps } from "class-variance-authority";
import { LinkProps } from "next/link";
import {
  animatedBackgroundVariants,
  buttonVariants,
  iconEffectVariants,
  iconWrapperVariants,
} from "@/components/variants/css/button";
import { ElementType } from "react";
import { MotionProps } from "motion/react";

export type TCustomLink = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  VariantProps<typeof buttonVariants>;

export type TButton = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export type TIconWrapper = React.ComponentProps<"div"> &
  VariantProps<typeof iconWrapperVariants> &
  VariantProps<typeof iconEffectVariants>;

export type TButtonSlide = React.ComponentProps<"div"> &
  VariantProps<typeof animatedBackgroundVariants>;

export type THoverPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
  opacity: number;
};

export type THoverEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.FocusEvent<HTMLElement, Element>;

type ProjectTag = "Python" | "Next.Js" | "Django";
type RepositoryLabel = "Source Code" | "Frontend" | "Backend";
type Media = {
  img?: string;
  video?: string;
};

export type TProject = {
  highlight?: boolean;
  name: string;

  overview: {
    summary: string;
    description: string;
  };

  thumbnail: Media;

  preview: Media;

  liveDemo?: string;

  repositoryUrl: {
    label: RepositoryLabel;
    link: string;
  }[];

  features?: string[];
  stacks: string[];
  tags: ProjectTag[];
};

export type TProjectCard = {
  id: number;
  thumbnail: Media;
  summary: string;
  name: string;
};

export type TProjectsParams = {
  searchParams: Promise<{ tech: ProjectTag }>;
};

export type TMotionContainer = {
  as?: ElementType;
  children?: React.ReactNode;
} & MotionProps &
  React.HTMLAttributes<HTMLElement>;

export type TProjectHeader = {
  tech: ProjectTag | "All";
  projectCategories: {
    name: string;
    total: number;
  }[];
};
