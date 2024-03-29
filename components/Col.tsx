import React, { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Col = (
  props: HTMLAttributes<HTMLElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { className = "", ...rest } = props;

  return (
    <div
      ref={ref}
      className={twMerge(
        `relative w-full col-span-6 row-span-6 sm:p-8 p-4 ${className}`
      )}
      {...rest}
    />
  );
};

export default forwardRef(Col);
