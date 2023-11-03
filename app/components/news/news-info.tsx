import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsInfoProps = ComponentProps<"p">;

export const NewsInfo = ({ className, ...props }: NewsInfoProps) => {
  return (
    <p
      className={twMerge("text-red-500 uppercase font-medium", className)}
      {...props}
    />
  );
};
