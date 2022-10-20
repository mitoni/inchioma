import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

const H2 = (
  props: HTMLAttributes<HTMLElement>,
  ref: ForwardedRef<HTMLHeadingElement>
) => {
  const { className = "", ...rest } = props;

  return (
    <h2
      ref={ref}
      className={`font-thin sm:text-4xl text-2xl ${className}`}
      {...rest}
    />
  );
};

export default forwardRef(H2);
