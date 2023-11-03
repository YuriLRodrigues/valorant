import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentDetailsRootProps = ComponentProps<"section">;

const AgentDetailsRoot = async ({
  className,
  ...props
}: AgentDetailsRootProps) => {
  return (
    <section
      className={twMerge(
        "w-11/12 max-w-screen-lg mx-auto flex flex-col my-6 justify-center items-center",
        className
      )}
      {...props}
    />
  );
};

export default AgentDetailsRoot;
