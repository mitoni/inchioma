import { HTMLAttributes } from "react";

const FixedBlock = (
  props: HTMLAttributes<HTMLDivElement> & { offsetX: number; offsetY: number }
) => {
  const { className = "", offsetX, offsetY, ...rest } = props;

  return (
    <div
      className="absolute w-full flex flex-row justify-center"
      style={{
        top: offsetY,
      }}
    >
      <div
        className={`max-w-xl relative ${className}`}
        style={{ transform: `translateX(${offsetX}px)` }}
        {...rest}
      />
    </div>
  );
};

export default FixedBlock;
