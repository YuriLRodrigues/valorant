import { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";
import { TextVariants } from "@/variants/text-variant";

type TextProps = ComponentProps<"p"> &
  VariantProps<typeof TextVariants> & {
    as?: "p" | "span";
  };

export const Text = ({
  as,
  size,
  variant,
  position,
  className,
  ...props
}: TextProps) => {
  const Comp = as ?? "p";

  return (
    <Comp
      className={TextVariants({ size, variant, position, className })}
      {...props}
    />
  );
};
