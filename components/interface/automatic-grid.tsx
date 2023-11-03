import { ComponentProps } from "react";

type AutomaticGridProps = ComponentProps<"div">;

export const AutomaticGrid = ({ className, ...props }: AutomaticGridProps) => {
  return (
    <div
      className="grid grid-cols-auto-fit-300 items-center justify-center mx-auto gap-6 my-6 px-4 max-w-[1720px]"
      {...props}
    />
  );
};
