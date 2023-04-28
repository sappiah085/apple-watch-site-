import { useEffect } from "react";
import Splitting from "splitting";
import { gsap } from "gsap";
export const useSplitText = () => {
  useEffect(() => {
    const p = document.querySelector(".p-hide>p") as HTMLElement;

    const result: any = Splitting({
      target: p,
      by: "items",
      matching: "span",
    });
    const spanArray: HTMLSpanElement[] = result[0].items;
    spanArray.forEach((span) => {
      gsap.fromTo(
        span,
        { color: "#8d8d8e" },
        {
          color: "white",
          scrollTrigger: {
            trigger: span,
            start: "top center",
            end: "+=20%",
            toggleActions: "play reset play reset",
          },
        }
      );
    });
  }, []);
};
