import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WavDivProps = ComponentProps<"div">;

export const WavDiv = ({ className, ...props }: WavDivProps) => {
  return (
    <div
      className={twMerge(
        "w-full h-full relative flex justify-center my-4 flex-col gap-4",
        className
      )}
      {...props}
    />
  );
};
