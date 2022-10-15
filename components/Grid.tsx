import { HTMLAttributes } from "react";

const Grid = (props: HTMLAttributes<HTMLElement>) => {
  const { className = "", ...rest } = props;

  return (
    <div
      className={`w-full h-screen grid grid-cols-12 grid-rows-6 ${className}`}
      {...rest}
    />
  );
};

export default Grid;
