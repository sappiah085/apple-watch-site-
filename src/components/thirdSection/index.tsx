import { Text } from "../common/text/text";
import watch from "../../assets/images/thirdSection/pluto_face__cjl2wlt1ui82_large_2x.jpg";
import { useIO } from "../../hooks/IO";
import { useRef } from "react";
import { useFadeUp } from "../../animations/fadeUp";
export const ThirdSection = () => {
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
      className="w-full mt-36 gap-10 items-center flex flex-col relative bg-blackApple "
    >
      <span ref={target} className="max-w-sm self-end mx-48">
        <Text variant="im/bold" Components="h3" color="text-darkGreyApple">
          <span className="text-whiteApple">
            Smooth and seamless. The edge of design.
          </span>{" "}
          Apple Watch Series 8 features a big, brilliant Always‑On display.
          Narrow borders push the screen right to the edge, resulting in an
          elegant integration with the curvature of the case.
        </Text>
      </span>

      <img src={watch} alt="watch orange" />
    </section>
  );
};
