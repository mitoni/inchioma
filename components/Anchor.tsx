import { HTMLAttributes } from "react";

const Anchor = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={{ top: "50%", transform: "translateY(-50vh)" }} {...props} />
  );
};

export default Anchor;
