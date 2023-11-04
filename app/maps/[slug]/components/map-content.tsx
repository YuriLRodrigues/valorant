import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type MapContentProps = ComponentProps<"div">;

export const MapContent = ({ className, ...props }: MapContentProps) => {
  return <div className={twMerge("space-y-4", className)} {...props} />;
};
