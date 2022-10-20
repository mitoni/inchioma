import { HTMLAttributes } from "react";

const Anchor = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div style={{ top: "50%", transform: "translateY(-30vh)" }} {...props} />
  );
};

export default Anchor;
