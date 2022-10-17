import anime from "animejs";
import React, { useCallback, useRef, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Divider from "./Divider";
import Link from "./headings/Link";
import LogoText from "./LogoText";

const Sidebar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    anime({
      targets: containerRef.current,
      translateX: "0%",
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 750,
    });

    setOpen(true);
  }, []);

  const close = useCallback(() => {
    anime({
      targets: containerRef.current,
      translateX: "100%",
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 750,
    });

    setOpen(false);
  }, []);

  function handleClick() {
    isOpen ? close() : open();
  }

  function handleSidebarClick(event: React.MouseEvent) {
    const { nativeEvent } = event;
    const target = nativeEvent.target as HTMLElement;

    const nodeName = target.nodeName;

    if (nodeName === "A") {
      close();
    }
  }

  return (
    <>
      <a
        className="fixed h-screen right-0 top-0 bottom-0 p-12 z-30 pointer-events-none"
        onClick={handleClick}
      >
        <span className="pointer-events-auto cursor-pointer">
          {isOpen ? (
            <IoCloseOutline className="w-10 h-10 pointer" />
          ) : (
            <IoMenuOutline className="w-10 h-10" />
          )}
        </span>
      </a>

      <div
        className="absolute inset-0 overflow-hidden flex flex-row justify-end z-20 pointer-events-none"
        onClick={handleSidebarClick}
      >
        <div
          ref={containerRef}
          style={{ transform: "translateX(100%)" }}
          className="fixed sm:w-1/4 w-full h-full bg-white sm:border-l border-black flex flex-col items-center justify-center pointer-events-auto"
        >
          <a href="#home">
            <LogoText className="mb-10" />
          </a>

          <Link href="#home" className="mb-5 text-xl">
            CHI SIAMO
          </Link>

          <Link href="#tree-climbing" className="text-xl">
            SERVIZI
          </Link>

          <Divider className="w-1/2" />

          <Link href="#tree-climbing" className="mb-5">
            TREE CLIMBING
          </Link>

          <Link href="#potatura" className="mb-5">
            POTATURA
          </Link>

          <Link href="#abbattimento" className="mb-5">
            ABBATTIMENTO
          </Link>

          <Link href="#vta" className="mb-5">
            V.T.A.
          </Link>

          <Link href="#trattamenti" className="mb-5">
            TRATTAMENTI
          </Link>

          <Link href="#consolidamenti" className="mb-5">
            CONSOLIDAMENTI
          </Link>

          <Link href="#messa-in-dimora" className="mb-5">
            MESSA A DIMORA
          </Link>

          <Divider className="w-1/2" />

          <Link href="#contatti" className="text-xl">
            CONTATTI
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
