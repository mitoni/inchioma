import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SplitScreen = (
  props: HTMLAttributes<HTMLDivElement> & {
    screen1: ReactNode;
    screen2: ReactNode;
  }
) => {
  const { className = "", screen1, screen2, ...rest } = props;

  return (
    <div
      className={twMerge(`h-screen w-full text-center p-10 ${className}`)}
      {...rest}
    >
      <div className="h-1/2 flex flex-col justify-end">{screen1}</div>
      <div className="h-1/2 flex flex-col justify-center">{screen2}</div>
    </div>
  );
};

export default SplitScreen;
