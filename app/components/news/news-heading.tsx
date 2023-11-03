import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsHeadingProps = ComponentProps<"h2">;

export const NewsHeading = ({ className, ...props }: NewsHeadingProps) => {
  return (
    <h2
      className={twMerge(
        "uppercase text-center font-bold text-4xl md:text-6xl text-red-500 my-6",
        className
      )}
      {...props}
    />
  );
};
