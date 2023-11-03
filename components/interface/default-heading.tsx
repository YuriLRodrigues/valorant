import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type DefaultHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const DefaultHeading = ({
  className,
  tag = "h2",
  ...props
}: DefaultHeadingProps) => {
  const Comp = tag ?? "h2";
  return (
    <Comp
      className={twMerge(
        "uppercase text-center mt-4 font-bold text-4xl md:text-6xl dark:text-white text-black",
        className
      )}
      {...props}
    />
  );
};
