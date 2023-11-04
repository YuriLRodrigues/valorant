import { ContainerVariants } from "@/variants/container-variant";
import { ComponentProps } from "react";
import { type VariantProps } from "tailwind-variants";

type ContainerProps = ComponentProps<"div"> &
  VariantProps<typeof ContainerVariants> & {
    tag?: "div" | "main";
  };

export const Container = ({
  className,
  position,
  width,
  tag,
  ...props
}: ContainerProps) => {
  const Comp = tag ?? "div";
  return (
    <Comp
      className={ContainerVariants({
        position,
        width,
        className,
      })}
      {...props}
    />
  );
};
