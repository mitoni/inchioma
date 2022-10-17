import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { className = "", children, ...rest } = props;

  return (
    <a
      className={twMerge(
        `group font-light flex flex-row items-center ${className}`
      )}
      {...rest}
    >
      <span className="group-hover:w-5 w-0 transition-all h-px bg-black mr-2" />
      {children}
    </a>
  );
};

export default Link;
