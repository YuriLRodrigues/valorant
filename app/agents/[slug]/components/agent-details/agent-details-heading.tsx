import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentDetailsHeadingProps = ComponentProps<"h2">;

const AgentDetailsHeading = async ({
  className,
  ...props
}: AgentDetailsHeadingProps) => {
  return (
    <h2
      className={twMerge(
        "font-valorant text-3xl sm:text-6xl dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};

export default AgentDetailsHeading;
