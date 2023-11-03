import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentDetailsContentProps = ComponentProps<"section">;

const AgentDetailsContent = async ({
  className,
  ...props
}: AgentDetailsContentProps) => {
  return (
    <section
      className={twMerge(
        "w-full mx-auto flex flex-col my-2 gap-2 justify-center",
        className
      )}
      {...props}
    />
  );
};

export default AgentDetailsContent;
