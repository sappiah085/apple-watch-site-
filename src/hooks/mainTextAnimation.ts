import { useEffect } from "react";
import { useRefType } from "../utils/typeDefinitions";
import { gsap } from "gsap";
export const useMainTextAnimation = (parent: useRefType) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hide",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".hide",
            start: "top 300px",
            toggleActions: "play play pause reverse",
          },
        }
      );
      gsap.fromTo(
        ".p-hide",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".p-hide",
            start: "top 40%",
            toggleActions: "play play pause reverse",
          },
        }
      );
    }, parent);
    return () => ctx.revert();
  }, [parent]);
};
