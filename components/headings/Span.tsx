import { HTMLAttributes } from "react";

const Span = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <span className={`font-light ${className}`} {...rest} />;
};

export default Span;
