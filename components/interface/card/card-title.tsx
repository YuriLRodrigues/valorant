import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CardTitleProps = ComponentProps<"h3"> & {
  gradient?: string[];
};

export const CardTitle = ({
  className,
  gradient,
  ...props
}: CardTitleProps) => {
  return (
    <h3
      style={{
        background: `linear-gradient(#${gradient && gradient[0]}, #${
          gradient && gradient[1]
        }, #${gradient && gradient[2]})`,
      }}
      className={twMerge(
        "group-hover:translate-y-0 translate-y-[200%] uppercase font-medium text-2xl text-shadow-black w-full text-center shadow-black font-valorant duration-500 absolute bottom-0 text-white",
        className
      )}
      {...props}
    />
  );
};
