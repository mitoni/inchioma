import { HTMLAttributes } from "react";

const Strong = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <span className={`font-medium ${className}`} {...rest} />;
};

export default Strong;
