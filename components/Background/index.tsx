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

  function getPercentage() {
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementHeight = svgRef.current?.getBoundingClientRect().height ?? 0;
    const elementTop =
      window.pageYOffset + (svgRef.current?.getBoundingClientRect().top ?? 0);

    const percentage =
      (scrollTop + viewportHeight / 2) / (elementHeight + elementTop);

    return percentage;
  }

  const handleScroll = useCallback(() => {
    if (!!!hasScrolled.current) {
      heroTimeline.current?.pause();
    }

    hasScrolled.current = true;

    const percentage = getPercentage();

    const lerp = interpolate(lut, percentage);

    if (process.env.NODE_ENV === "development") {
      console.log({ percentage, lerp });
    }

    const to = lerp * (fullTimeline.current?.duration ?? 1);

    fullTimeline.current?.seek(to);
  }, [hasScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const pathLength = anime.setDashoffset(pathRef.current);

    fullTimeline.current = anime({
      targets: pathRef.current,
      strokeDashoffset: [pathLength, 0],
      easing: "linear",
      autoplay: false,
    });
  }, []);

  useEffect(() => {
    const pathLength = anime.setDashoffset(pathRef.current);

    heroTimeline.current = anime
      .timeline({
        easing: "easeInOutSine",
        autoplay: true,
      })
      .add({
        targets: pathRef.current,
        strokeDashoffset: [pathLength, pathLength * (1 - lut[0].y)],
        duration: 3500,
      });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1802 5848"
      vectorEffect="non-scaling-stroke"
      preserveAspectRatio="xMidYMid meet"
      style={{
        zIndex: -1,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
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
