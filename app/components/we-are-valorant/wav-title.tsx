import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WavTitleProps = ComponentProps<"h5">;

export const WavTitle = ({ className, ...props }: WavTitleProps) => {
  return (
    <h4
      className={twMerge(
        "text-lg sm:text-xl uppercase font-medium text-gray-400 dark:text-white",
        className
      )}
      {...props}
    />
  );
};
