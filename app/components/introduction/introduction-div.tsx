import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type DivIntroductionProps = ComponentProps<"div">;

export const DivIntroduction = ({
  className,
  ...props
}: DivIntroductionProps) => {
  return (
    <div
      className={twMerge(
        "absolute flex flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    />
  );
};
