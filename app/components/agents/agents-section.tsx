import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentsSectionRootProps = ComponentProps<"section">;

export const AgentsSectionRoot = ({
  className,
  ...props
}: AgentsSectionRootProps) => {
  return (
    <section
      className={twMerge(
        "my-20 pt-10 flex flex-col bg-red-500 justify-center",
        className
      )}
      {...props}
    />
  );
};
