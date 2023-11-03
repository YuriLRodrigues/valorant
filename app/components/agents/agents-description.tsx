import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type AgentsDescriptionProps = ComponentProps<"p">;

export const AgentsDescription = ({
  className,
  ...props
}: AgentsDescriptionProps) => {
  return (
    <p
      className={twMerge("text-justify font-medium text-white", className)}
      {...props}
    />
  );
};
