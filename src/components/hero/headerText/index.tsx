import { useEffect, useRef } from "react";
import headerImage from "../../../assets/images/headerText/logo_watch_series_8__bold89dmm38i_large.png";
import { Text } from "../../common/text/text";
import { gsap } from "gsap";
export const HeaderText = () => {
  const parent = useRef(null!);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: "Power1.easeOut" },
      });
      tl.from(".image", {
        yPercent: 80,
        opacity: 0,
        delay: 0.3,
      });
      tl.from(".text", {
        yPercent: 80,
        opacity: 0,
      });
    }, parent);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={parent}
      className="flex items-center w-full max-w-5xl flex-col gap-2 mt-[30vh] z-[1] hide  mx-auto"
    >
      <img className="image" src={headerImage} alt="series" />
      <span className="text ">
        <Text color="text-whiteApple" Components="h2" variant="xxl/bold">
          A healthy leap ahead.
        </Text>
      </span>
    </div>
  );
};
