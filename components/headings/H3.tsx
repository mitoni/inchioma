import { HTMLAttributes } from "react";

const H3 = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <h3 className={`font-medium text-lg ${className}`} {...rest} />;
};

export default H3;
