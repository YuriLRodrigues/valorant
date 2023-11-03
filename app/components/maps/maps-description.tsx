import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type MapsDescriptionProps = ComponentProps<"p">;

export const MapsDescription = ({
  className,
  ...props
}: MapsDescriptionProps) => {
  return (
    <p
      className={twMerge(
        "text-justify font-medium dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
