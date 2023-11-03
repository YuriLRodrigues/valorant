import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"div">;

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div className={twMerge("py-2 mx-auto max-w-2xl", className)} {...props} />
  );
};
