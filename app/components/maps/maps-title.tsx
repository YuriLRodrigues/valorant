import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type MapsTitleProps = ComponentProps<"h5">;

export const MapsTitle = ({ className, ...props }: MapsTitleProps) => {
  return (
    <h5
      className={twMerge(
        "text-lg sm:text-xl uppercase font-medium dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
