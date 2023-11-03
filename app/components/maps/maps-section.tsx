import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type MapsSectionRootProps = ComponentProps<"section">;

export const MapsSectionRoot = ({
  className,
  ...props
}: MapsSectionRootProps) => {
  return (
    <section
      className={twMerge("my-10 pt-10 flex flex-col justify-center", className)}
      {...props}
    />
  );
};
