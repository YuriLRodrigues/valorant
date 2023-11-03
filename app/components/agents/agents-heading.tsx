import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentsHeadingProps = ComponentProps<"h3">;

export const AgentsHeading = ({ className, ...props }: AgentsHeadingProps) => {
  return (
    <h3
      className={twMerge(
        "text-4xl sm:text-5xl font-bold uppercase text-white",
        className
      )}
      {...props}
    />
  );
};
