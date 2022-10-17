import anime from "animejs";
import { useCallback, useEffect, useRef } from "react";
import { interpolate } from "../../utils/interpolate";
import SingleDrawing from "./../paths/SingleDrawing";
import lut from "./lut";

const Background = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const timeline = useRef<anime.AnimeInstance>();

  useEffect(() => {
    timeline.current = anime({
      targets: pathRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      autoplay: false,
    });

    timeline.current.seek(interpolate(lut, 0) * timeline.current.duration);
  }, []);

  const handleScroll = useCallback(() => {
    const top = svgRef.current?.clientTop ?? 0;
    const height = svgRef.current?.clientHeight ?? 0;

    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const perc = (scrolled + windowHeight / 2) / (top + height);

    const lerp = interpolate(lut, perc);

    // console.log({ perc, lerp });

    timeline.current?.seek(lerp * timeline.current.duration);
  }, []);

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 3849 11578"
      vectorEffect="non-scaling-stroke"
      preserveAspectRatio="xMidYMid meet"
      className="max-w-screen-xl mt-60"
      style={{
        zIndex: -1,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
    >
      <SingleDrawing ref={pathRef} />
    </svg>
  );
};

export default Background;
