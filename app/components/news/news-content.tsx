import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsContentProps = ComponentProps<"div">;

export const NewsContent = ({ className, ...props }: NewsContentProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 justify-center w-full h-full",
        className
      )}
      {...props}
    />
  );
};
