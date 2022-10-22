import anime from "animejs";
import { useCallback, useEffect, useRef } from "react";
import { interpolate } from "../../utils/interpolate";
import SingleDrawing from "./../paths/SingleDrawing";
import lut from "./lut";

const Background = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const fullTimeline = useRef<anime.AnimeInstance>();
  const heroTimeline = useRef<anime.AnimeInstance>();
  const hasScrolled = useRef(false);

  useEffect(() => {
    const pathLength = anime.setDashoffset(pathRef.current);

    heroTimeline.current = anime
      .timeline({
        easing: "easeInOutSine",
        autoplay: true,
      })
      .add({
        targets: pathRef.current,
        strokeDashoffset: [pathLength, pathLength * (1 - 0.22)],
        duration: 3500,
      });
  }, []);

  useEffect(() => {
    const pathLength = anime.setDashoffset(pathRef.current);

    fullTimeline.current = anime({
      targets: pathRef.current,
      strokeDashoffset: [pathLength, 0],
      easing: "linear",
      autoplay: false,
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (!!!hasScrolled.current) {
      heroTimeline.current?.pause();
    }

    hasScrolled.current = true;

    const top = svgRef.current?.getBoundingClientRect().top ?? 0;
    const height = svgRef.current?.getBoundingClientRect().height ?? 0;

    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const perc = (scrolled + windowHeight / 2) / (top + height);

    const lerp = interpolate(lut, perc);

    fullTimeline.current?.seek(lerp * fullTimeline.current.duration);
  }, [hasScrolled]);

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
