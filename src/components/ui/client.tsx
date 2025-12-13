"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { TMotionContainer } from "@/lib/types";
import { Button } from "./buttons";
import { PauseIcon, PlayIcon } from "../svg";
import { cn } from "@/lib/utils";

export const MotionContainer = ({
  as: Component = "div",
  children,
  ...props
}: TMotionContainer) => {
  const MotionComponent = motion.create(Component);

  return <MotionComponent {...props}>{children}</MotionComponent>;
};

export const VideoPlayer = ({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        preload="none"
        muted
        poster={poster}
        className={cn(
          "size-full object-cover object-center",
          !isPlaying &&
            "mask-[linear-gradient(to_top,hsla(var(--black),0.75),hsla(var(--black),0.98)_20%,hsla(var(--black),0.98)_80%,hsla(var(--black),0.75)),linear-gradient(to_left,hsla(var(--black),0.75),hsla(var(--black),0.98)_10%,hsla(var(--black),0.98)_90%,hsla(var(--black),0.75))] mask-intersect",
        )}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <Button
        variant={"muted"}
        size={null}
        padding={null}
        className="absolute bottom-2 left-2 z-10 size-8 md:size-12 md:[&_svg:not([class*='size-'])]:size-6"
        onClick={togglePlay}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
    </>
  );
};
