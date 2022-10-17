import { HTMLAttributes } from "react";

const P = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <p className={`font-light sm:text-xl mb-3 ${className}`} {...rest} />;
};

export default P;
