import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type MapsHeadingProps = ComponentProps<"h3">;

export const MapsHeading = ({ className, ...props }: MapsHeadingProps) => {
  return (
    <h3
      className={twMerge(
        "text-4xl sm:text-5xl font-bold uppercase dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
