import { useEffect } from "react";
import { gsap } from "gsap";
import { useRefType } from "../utils/typeDefinitions";
export const useStoreAnimation = (parent: useRefType) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".child-1",
        { opacity: 0, yPercent: -2 },
        { opacity: 1, yPercent: 0, delay: 0.3 }
      );
      gsap.fromTo(
        ".child-2",
        { opacity: 0, yPercent: -2 },
        { opacity: 1, yPercent: 0, delay: 0.3 }
      );
      gsap.fromTo(
        ".child-3",
        { opacity: 0, yPercent: -2 },
        { opacity: 1, yPercent: 0, delay: 0.3 }
      );
    }, parent);
    return () => ctx.revert();
  }, [parent]);
};
