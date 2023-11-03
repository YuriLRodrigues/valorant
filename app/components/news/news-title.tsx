import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsTitleProps = ComponentProps<"h3">;

export const NewsTitle = ({ className, ...props }: NewsTitleProps) => {
  return (
    <h3
      className={twMerge(
        "text-xl uppercase font-bold dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
