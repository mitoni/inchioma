import { HTMLAttributes } from "react";

const Span = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <span className={`font-thin text-2xl ${className}`} {...rest} />;
};

export default Span;
