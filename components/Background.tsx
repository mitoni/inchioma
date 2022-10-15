import anime from "animejs";
import { useEffect, useRef } from "react";
import { interpolate } from "../utils/interpolate";
import SingleDrawing from "./paths/SingleDrawing";

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
  }, []);

  function handleScroll() {
    const top = svgRef.current?.clientTop ?? 0;
    const height = svgRef.current?.clientHeight ?? 0;

    const scrolled = scrollY;

    const perc = scrolled / (top + height);

    const lerp = interpolate(
      [
        {
          x: 0,
          y: 0.22,
        },
        // Slow down
        {
          x: 0.07,
          y: 0.23,
        },
        // Tree climbing
        {
          x: 0.16,
          y: 0.315,
        },
        // Potatura
        {
          x: 0.26,
          y: 0.35,
        },
        // Abbattimento
        {
          x: 0.38,
          y: 0.52,
        },
        // VDS
        {
          x: 0.6,
          y: 0.72,
        },
        // Salute dell'albero
        {
          x: 0.72,
          y: 0.8,
        },
        // Consolidamenti
        {
          x: 0.89,
          y: 1,
        },
      ],
      perc
    );

    console.log({ perc, lerp });

    timeline.current?.seek(lerp * timeline.current.duration);
  }

  useEffect(() => {
    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{ zIndex: 10, maxWidth: 1280 }}
      className="absolute mt-60"
      viewBox="0 0 3849 11578"
    >
      <SingleDrawing ref={pathRef} />
    </svg>
  );
};

export default Background;
