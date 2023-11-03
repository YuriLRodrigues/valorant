import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CardRootProps = ComponentProps<"div"> & {
  gradient?: string[];
  uuid?: string;
  redirect?: string;
};

export const CardRoot = ({
  className,
  gradient,
  uuid,
  redirect,
  ...props
}: CardRootProps) => {
  return (
    <Link href={`${redirect}/${uuid}`}>
      <div
        style={{
          background: `linear-gradient(#${gradient && gradient[0]}, #${
            gradient && gradient[1]
          }, #${gradient && gradient[2]})`,
        }}
        className={twMerge(
          "w-full rounded flex flex-col items-center justify-center cursor-pointer overflow-hidden group relative",
          className
        )}
        {...props}
      />
    </Link>
  );
};
