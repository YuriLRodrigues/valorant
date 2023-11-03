import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsDataProps = ComponentProps<"span">;

export const NewsData = ({ className, ...props }: NewsDataProps) => {
  return (
    <span
      className={twMerge("font-semibold dark:text-white text-black", className)}
      {...props}
    />
  );
};
