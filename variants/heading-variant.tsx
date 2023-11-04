import { tv } from "tailwind-variants";

export const HeadingVariants = tv({
  base: "font-bold tracking-tight",
  variants: {
    variant: {
      title: "text-muted-12",
      subtitle: "text-muted-11",
      highlight: "text-red-700",
    },
    size: {
      "3xs": "text-xs sm:text-sm",
      "2xs": "text-lg sm:text-xl",
      xs: "text-xl sm:text-2xl",
      sm: "text-2xl sm:text-3xl",
      md: "text-3xl sm:text-4xl",
      lg: "text-4xl sm:text-6xl",
    },
    position: {
      centered: "mx-auto text-center",
      left: "mr-left text-start",
      right: "ml-right text-end",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "title",
    position: "left",
  },
});
