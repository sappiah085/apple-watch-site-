import React, { useEffect } from "react";
import { activeEnum } from "../utils/storeEnums";
import { gsap } from "gsap";
type props = {
  active: activeEnum;
  parent: React.RefObject<HTMLElement>;
};
export const useAnimation = ({ active, parent }: props) => {
  useEffect(() => {
    const ctx = gsap.context((context) => {
      context.add("hover", () => {
        gsap.fromTo(
          parent.current as HTMLElement,
          { backgroundColor: "black" },
          { backgroundColor: "#1d1d1f", duration: 0.1 }
        );
      });
      context.add("outHover", () => {
        gsap.fromTo(
          parent.current as HTMLElement,
          { backgroundColor: "#1d1d1f" },
          { backgroundColor: "black", duration: 0.1 }
        );
      });
    }, parent);
    active !== activeEnum.inactive ? ctx.hover() : ctx.outHover();

    return () => ctx.revert();
  }, [active, parent]);
};
