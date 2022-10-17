import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

const Grid = (
  props: HTMLAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { className = "", ...rest } = props;

  return (
    <div className="flex flex-row">
      <div
        className={`w-full grid grid-cols-12 grid-rows-6 gap-4 max-w-screen-xl mx-auto ${className}`}
        ref={ref}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(Grid);
