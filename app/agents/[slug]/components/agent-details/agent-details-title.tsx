import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentDetailsTitleProps = ComponentProps<"h5">;

const AgentDetailsTitle = async ({
  className,
  ...props
}: AgentDetailsTitleProps) => {
  return (
    <h5
      className={twMerge(
        "text-xl sm:text-2xl mt-4 font-medium dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};

export default AgentDetailsTitle;
