import { Text } from "../common/text/text";
import watch from "../../assets/images/fourthSection/design_always_on__d2xu1t2c9bwy_large_2x.jpg";
import { useIO } from "../../hooks/IO";
import { useRef } from "react";
import { useFadeUp } from "../../animations/fadeUp";
export const FourthSection = () => {
  const parent = useRef(null!);
  const target = useRef(null);
  const isIntersecting = useIO({
    element: target,
    options: { threshold: 0.75 },
  });
  useFadeUp({ target, parent, isIntersecting });
  return (
    <section
      ref={parent}
      className="w-full bg-brown py-36  mt-36 gap-28 items-center flex flex-col relative  "
    >
      <span ref={target} className="max-w-[500px]  w-full mx-28 self-start">
        <Text variant="im/bold" Components="h3" color="text-darkGreyApple">
          <span className="text-whiteApple">
            Always-On Retina display. Take it all in. Get it all done.
          </span>{" "}
          The bright Always‑On screen makes detailed watch faces look stunning
          and easy to read, even when your wrist is down. The large display
          accommodates all your favorite complications and makes tapping,
          typing, and swiping a snap.
        </Text>
      </span>
      <img src={watch} alt="watch orange" />
    </section>
  );
};
