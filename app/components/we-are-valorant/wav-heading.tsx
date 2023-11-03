import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WavHeadingProps = ComponentProps<"h3">;

export const WavHeading = ({ className, ...props }: WavHeadingProps) => {
  return (
    <h3
      className={twMerge(
        "text-3xl sm:text-4xl font-bold uppercase dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
