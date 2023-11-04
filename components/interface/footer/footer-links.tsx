import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type FooterLnksProps = ComponentProps<"a">;
export const FooterLinks = ({ className, ...props }: FooterLnksProps) => {
  return (
    <a
      className={twMerge(
        "p-2 text-2xl hover:bg-red-600 duration-300 dark:text-white text-black hover:text-white dark:bg-zinc-700 dark:hover:bg-red-600 bg-zinc-400 rounded-lg",
        className
      )}
      {...props}
    />
  );
};
