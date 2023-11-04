import { FlexContainerVariants } from "@/variants/flex-container-variant";
import { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";

type FlexContainerProps = ComponentProps<"div"> &
  VariantProps<typeof FlexContainerVariants>;

export const FlexContainer = ({
  className,
  flex,
  gap,
  px,
  py,
  my,
  mx,
  position,
  variant,
  width,
  ...props
}: FlexContainerProps) => {
  return (
    <div
      className={FlexContainerVariants({
        position,
        gap,
        px,
        flex,
        py,
        my,
        mx,
        variant,
        width,
        className,
      })}
      {...props}
    />
  );
};
