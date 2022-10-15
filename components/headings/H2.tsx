import { HTMLAttributes } from "react";

const H2 = (props: HTMLAttributes<HTMLElement>) => {
  const { className = "", ...rest } = props;

  return <h2 className={`font-thin text-5xl ${className}`} {...rest} />;
};

export default H2;
