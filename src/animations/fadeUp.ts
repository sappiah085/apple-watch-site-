import React, { useEffect } from "react";
import { gsap } from "gsap";
interface FadeUpParams {
  target: React.RefObject<HTMLElement>;
  parent: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
}
export const useFadeUp = ({ target, parent, isIntersecting }: FadeUpParams) => {
  useEffect(() => {
    const ctx = gsap.context((context) => {
      context.add("ani", () => {
        gsap.fromTo(
          target.current,
          {
            opacity: 0,
            yPercent: 20,
          },
          { opacity: 1, yPercent: 0, duration: 1.5 }
        );
      });
      context.add("clear", () => {
        gsap.fromTo(
          target.current,
          { opacity: 1, yPercent: 0, duration: 1.5 },
          {
            opacity: 0,
            yPercent: 20,
          }
        );
      });
    }, parent);

    isIntersecting ? ctx.ani() : ctx.clear();

    return () => ctx.revert();
  }, [isIntersecting, target, parent]);
};
