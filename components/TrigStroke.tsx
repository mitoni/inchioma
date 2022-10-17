import anime from "animejs";
import React, {
  forwardRef,
  SVGAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Waypoint } from "react-waypoint";

const TrigStroke = (
  props: SVGAttributes<SVGSVGElement>,
  ref: React.ForwardedRef<SVGSVGElement>
) => {
  const { children, ...rest } = props;

  const pathRef = useRef<SVGSVGElement>(null);
  const timeline = useRef<anime.AnimeInstance>();

  useEffect(() => {
    timeline.current = anime({
      targets: pathRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      autoplay: false,
    });
  }, []);

  const handleEnter = useCallback(() => {
    if (timeline.current?.reversed) {
      timeline.current?.reverse();
    }

    timeline.current?.play();
  }, []);

  const handleExit = useCallback(() => {
    timeline.current?.reverse();
    timeline.current?.play();
  }, []);

  return (
    <Waypoint onEnter={handleEnter} onLeave={handleExit} bottomOffset="20%">
      <svg
        ref={ref}
        vectorEffect="non-scaling-stroke"
        style={{
          zIndex: -1,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        {...rest}
      >
        {React.isValidElement(children)
          ? // @ts-ignore
            React.cloneElement(children, { ref: pathRef })
          : null}
      </svg>
    </Waypoint>
  );
};

export default forwardRef(TrigStroke);