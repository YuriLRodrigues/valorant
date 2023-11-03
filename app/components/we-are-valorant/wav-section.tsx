import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WavSectionRootProps = ComponentProps<"section">;

export const WavSectionRoot = ({
  className,
  ...props
}: WavSectionRootProps) => {
  return (
    <section
      className={twMerge(
        "my-14 px-4 grid lg:grid-cols-2 grid-cols-1 justify-center gap-2",
        className
      )}
      {...props}
    />
  );
};
