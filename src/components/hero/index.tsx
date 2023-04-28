import { useEffect, useRef } from "react";
import { HeaderText } from "./headerText";
import { usePreloadImages } from "../../hooks/preloadImages";
import { useScrollProgress } from "../../hooks/scrollProgress";

import { useDraw } from "../../hooks/useDraw";
import { MainText } from "./mainText";
import { useMainTextAnimation } from "../../hooks/mainTextAnimation";
import { useIO } from "../../hooks/IO";
export const Hero = ({ toggle }: { toggle: (tog: boolean) => void }) => {
  const tog = useRef(toggle);
  const canvas = useRef(null!);
  const parent = useRef(null!);
  //text animation
  useMainTextAnimation(parent);
  // preloading images
  usePreloadImages(canvas);
  // getting progress on scroll
  const progress = useScrollProgress({ relativeElement: parent });
  // draw on scroll
  useDraw(progress, canvas);
  const isIntersecting = useIO({
    element: parent,
    options: { threshold: 0.001 },
  });
  useEffect(() => {
    tog.current(isIntersecting);
  }, [isIntersecting]);
  return (
    <section
      ref={parent}
      className="w-full bg-black flex-col flex  z-[3] h-[3000px]"
    >
      <HeaderText />
      <canvas
        height={window.innerHeight}
        width={window.innerWidth}
        ref={canvas}
        className={
          progress > 0.985
            ? "w-full bg-black h-screen static top-0 left-0"
            : "w-full bg-black h-screen fixed top-0 left-0"
        }
      ></canvas>
      <MainText />
    </section>
  );
};
