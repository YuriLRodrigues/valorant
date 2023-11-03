import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type FlexDivProps = ComponentProps<"div"> & {
  col?: boolean;
};

export const FlexDiv = ({ className, col, ...props }: FlexDivProps) => {
  return (
    <div
      className={twMerge(
        "flex gap-4 relative w-full",
        className,
        col && "flex-col"
      )}
      {...props}
    />
  );
};
