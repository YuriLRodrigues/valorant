import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WavDescriptionProps = ComponentProps<"p">;

export const WavDescription = ({
  className,
  ...props
}: WavDescriptionProps) => {
  return (
    <p
      className={twMerge(
        "text-justify text-gray-400 font-medium dark:text-white",
        className
      )}
      {...props}
    />
  );
};
