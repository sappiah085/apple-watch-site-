import { useEffect } from "react";
import { gsap } from "gsap";
import { useRefType } from "../utils/typeDefinitions";
export const useScroll = (element: useRefType) => {
  useEffect(() => {
    const logo = document.querySelectorAll(".why");
    const ctx = gsap.context((context) => {
      context.add("bgColor", () => {
        gsap.to(element.current as HTMLHtmlElement, {
          backgroundColor: "#1d1d1f",
          duration: 0.5,
          delay: 0.1,
        });
      });
      context.add("bgColorTrans", () => {
        gsap.to(element.current as HTMLHtmlElement, {
          backgroundColor: "transparent",
          duration: 0.3,
        });
      });
      context.add("bgColorWhite", () => {
        gsap.to(element.current as HTMLHtmlElement, {
          backgroundColor: "white",
          duration: 0.3,
        });
      });
    }, element);
    const toggleFunc = () => {
      const position: number = element.current?.offsetTop as number;
      if (position > 64 && position < 7760) {
        ctx.bgColor();
        logo.forEach((el) => {
          el.classList.add("text-whiteApple");
        });
      } else if (position >= 7760) {
        ctx.bgColorWhite();
        logo.forEach((el) => {
          el.classList.remove("text-whiteApple");
        });
      } else {
        ctx.bgColorTrans();
      }
    };
    window.addEventListener("scroll", toggleFunc);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", toggleFunc);
    };
  }, [element]);
};
