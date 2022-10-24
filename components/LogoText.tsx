import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const LogoText = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props;

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center ${className}`
      )}
      {...rest}
    >
      <span className="font-medium text-7xl">IC</span>
      <span className="text-xs">IN CHIOMA</span>
    </div>
  );
};

export default LogoText;
