import { HTMLAttributes } from "react";

const H4 = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { className = "", ...rest } = props;

  return <h4 className={` font-light text-xl ${className}`} {...rest} />;
};

export default H4;
