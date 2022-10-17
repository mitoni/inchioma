import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Divider = (
  props: HTMLAttributes<HTMLElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { className = "", ...rest } = props;

  return (
    <div
      ref={ref}
      className={twMerge(`h-px bg-black w-full my-5 ${className}`)}
      {...rest}
    />
  );
};

export default forwardRef(Divider);
