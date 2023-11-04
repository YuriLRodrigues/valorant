import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "p-2 text-white bg-red-600 w-fit rounded font-medium",
        className
      )}
      {...props}
    />
  );
};
