import { HTMLAttributes } from "react";

const H2 = (props: HTMLAttributes<HTMLElement>) => {
  const { className = "", ...rest } = props;

  return (
    <h2 className={`font-light sm:text-4xl text-2xl ${className}`} {...rest} />
  );
};

export default H2;
