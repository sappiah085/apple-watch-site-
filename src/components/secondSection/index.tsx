import { useEffect, useRef } from "react";
import watch from "../../assets/images/secondSection/design_hero__f1s45zjcwt6y_large.jpg";

import { Text } from "../common/text/text";
import { gsap } from "gsap";
import { useIO } from "../../hooks/IO";
import { ThirdSection } from "../thirdSection";
import { useFadeUp } from "../../animations/fadeUp";
import { FourthSection } from "../fourthSection";
import { FifthSection } from "../fifthSection";
import { SixthSection } from "../sixthSection";
export const SecondSection = ({ toggle }: { toggle: boolean }) => {
  const parent = useRef(null!);
  const target = useRef(null);
  const intersecting = useIO({ element: target, options: { threshold: 0.75 } });
  useFadeUp({ target, parent, isIntersecting: intersecting });
  return (
    <section
      ref={parent}
      className={
        !toggle
          ? "w-full static top-0 bg-black justify-center flex flex-col items-center  -z-[1] left-0 pb-72 min-h-[1500px] overflow-x-hidden "
          : "w-full fixed top-0 bg-black justify-center flex flex-col items-center  -z-[1] left-0 pb-72 min-h-[1500px] overflow-x-hidden "
      }
    >
      <img src={watch} className="relative -right-[500px]" alt="watch" />
      <div
        ref={target}
        className="-mt-[100px] z-[1]  mr-[500px]  flex flex-col w-full gap-3 max-w-[550px]  "
      >
        <Text Components="h4" color="text-white " variant="medium/bold">
          Design and durability
        </Text>
        <Text
          Components="p"
          color="text-white leading-[70px]"
          variant="xxl/bold"
        >
          Beautiful. And made to stay that way.
        </Text>
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </section>
  );
};
