import { HTMLAttributes } from "react";

const Anchor = (
  props: HTMLAttributes<HTMLDivElement> & { offsetY?: number }
) => {
  const { offsetY = 50, ...rest } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        transform: `translateY(-${offsetY}vh)`,
      }}
      {...rest}
    />
  );
};

export default Anchor;
