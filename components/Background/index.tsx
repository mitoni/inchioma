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
      duration: 15000,
      autoplay: false,
    });

    setTimeout(() => timeline.current?.play(), 500);
  }, []);

  const handleScroll = useCallback(() => {
    timeline.current?.pause();

    const top = svgRef.current?.clientTop ?? 0;
    const height = svgRef.current?.clientHeight ?? 0;

    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const perc = (scrolled + windowHeight / 2) / (top + height);

    const lerp = interpolate(lut, perc);

    // console.log({ perc });

    timeline.current?.seek(lerp * timeline.current.duration);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 3849 11578"
      vectorEffect="non-scaling-stroke"
      preserveAspectRatio="xMidYMid meet"
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
