import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const A = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { className = "", children, ...rest } = props;

  return (
    <a
      className={twMerge(
        `group font-light flex flex-col origin-center ${className}`
      )}
      {...rest}
    >
      {children}
      <span className="hidden sm:block group-hover:scale-x-[0.1] transition-transform h-px bg-black" />
    </a>
  );
};

export default A;
