import { TButton, TButtonSlide, TCustomLink, TIconWrapper } from "@/lib/types";
import {
  animatedBackgroundVariants,
  buttonVariants,
  iconEffectVariants,
  iconWrapperVariants,
} from "../variants/css/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CustomLink = ({
  className,
  variant,
  size,
  padding,
  enlargeVariant,
  hover,
  href,
  ...props
}: TCustomLink) => (
  <Link
    data-slot="link"
    href={href}
    className={cn(
      buttonVariants({
        size,
        padding,
        hover,
        variant,
        enlargeVariant,
      }),
      className,
    )}
    {...props}
  />
);

export const Button = ({
  className,
  variant,
  size,
  padding,
  enlargeVariant,
  hover,
  ...props
}: TButton) => (
  <button
    data-slot="button"
    type="button"
    className={cn(
      buttonVariants({
        size,
        padding,
        hover,
        variant,
        enlargeVariant,
      }),
      className,
    )}
    {...props}
  />
);

export const IconWrapper = ({
  className,
  variant,
  direction,
  hover,
  children,
  ...props
}: TIconWrapper) => (
  <div
    className={cn(
      iconWrapperVariants({
        variant,
        hover,
      }),
      className,
    )}
    {...props}
  >
    {direction ? (
      <div className="relative size-5 overflow-hidden">
        <div
          className={cn(
            iconEffectVariants({
              direction,
            }),
          )}
        >
          {children}
          {children}
        </div>
      </div>
    ) : (
      children
    )}
  </div>
);

export const ButtonSlide = ({ variant, className, ...props }: TButtonSlide) => {
  return (
    <div
      className={cn(
        animatedBackgroundVariants({
          variant,
          className,
        }),
      )}
      {...props}
    />
  );
};

export const ButtonSlideText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      [
        "relative inline-flex px-2 font-normal text-white mix-blend-difference",
        "transition-all duration-500",
        "group-hover/button:translate-x-8",
        "group-focus-visible/button:translate-x-8",
      ],
      className,
    )}
  >
    {children}
  </span>
);
