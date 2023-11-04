import { tv } from "tailwind-variants";

export const TextVariants = tv({
  base: [""],
  variants: {
    variant: {
      paragraph: "text-muted-12",
      subtitle: "text-muted-11 leading-8",
      description: "text-muted-11 leading-8",
      highlight: "text-red-700",
    },
    size: {
      xs: "text-xs",
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-3xl",
    },
    position: {
      centered: "mx-auto text-center",
      left: "mr-left text-start",
      right: "ml-right text-end",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "paragraph",
    position: "left",
  },
});
