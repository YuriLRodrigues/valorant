import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentDetailsDescriptionProps = ComponentProps<"p">;

const AgentDetailsDescription = async ({
  className,
  ...props
}: AgentDetailsDescriptionProps) => {
  return (
    <p
      className={twMerge("dark:text-white text-black text-justify", className)}
      {...props}
    />
  );
};

export default AgentDetailsDescription;
