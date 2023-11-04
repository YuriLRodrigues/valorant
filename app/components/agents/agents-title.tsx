import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentsTitleProps = ComponentProps<"h5">;

export const AgentsTitle = ({ className, ...props }: AgentsTitleProps) => {
  return (
    <h4
      className={twMerge(
        "text-lg sm:text-xl uppercase font-medium text-white",
        className
      )}
      {...props}
    />
  );
};
