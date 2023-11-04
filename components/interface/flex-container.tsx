import { FlexContainerVariants } from "@/variants/flex-container-variant";
import { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";

type FlexContainerProps = ComponentProps<"div"> &  VariantProps<typeof FlexContainerVariants>;

export const FlexContainer = ({ className, ...props }: FlexContainerProps) => {
  return (
    <div
      className={FlexContainerVariants({...props, className})}
      {...props}
    />
  );
};
