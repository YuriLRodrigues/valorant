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
  if (redirect !== undefined || uuid !== undefined) {
    return (
      <Link href={`${redirect}/${uuid}`} prefetch={false}>
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
  }

  return (
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
  );
};
