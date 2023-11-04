import { tv } from "tailwind-variants";

export const FlexContainerVariants = tv({
  base: ["flex"],
  variants: {
    variant: {
      centered: "justify-center",
      end: "justify-end",
      between: "justify-between",
      "start-centered": "items-center sm:flex-row",
      "centered-all": "justify-center items-center",
      "end-centered": "justify-end items-center",
      "between-centered": "justify-between items-center",
    },
    flex: {
      col: "flex-col",
      row: "flex-col sm:flex-row",
    },
    gap: {
      "2": "gap-2",
      "4": "gap-4",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
      sm: "max-w-sm",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
    },
    position: {
      centered: "mx-auto",
      left: "mr-auto",
      right: "ml-auto",
    },
    py: {
      xs: "py-1",
      sm: "py-2",
      md: "py-4",
      lg: "py-6",
      xl: "py-8",
    },
    my: {
      xs: "my-1",
      sm: "my-2",
      md: "my-4",
      lg: "my-6",
      xl: "my-8",
    },
    px: {
      xs: "px-1",
      sm: "px-2",
      md: "px-4",
      lg: "px-6",
      xl: "px-8",
    },
    mx: {
      xs: "mx-1",
      sm: "mx-2",
      md: "mx-4",
      lg: "mx-6",
      xl: "mx-8",
    },
  },
  defaultVariants: {
    gap: "2",
    position: "left",
    width: "full",
    flex: "row",
  },
});
