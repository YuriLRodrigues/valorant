import { HeadingVariants } from "@/variants/heading-variant";
import { HTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof HeadingVariants> & {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export const Heading = ({
  className,
  position,
  size,
  variant,
  tag = "h2",
  ...props
}: HeadingProps) => {
  const Comp = tag ?? "h2";
  return (
    <Comp
      className={HeadingVariants({ className, size, variant, position })}
      {...props}
    />
  );
};
