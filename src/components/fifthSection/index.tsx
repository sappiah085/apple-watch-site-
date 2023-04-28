import { Text } from "../common/text/text";
import watch from "../../assets/images/fifthSection/design_tougher__gajlw77vwniq_large_2x.jpg";
import { useRef } from "react";
import { useFadeUp } from "../../animations/fadeUp";
import { useIO } from "../../hooks/IO";
export const FifthSection = () => {
  const tough = useRef(null!);
  const subText = useRef(null!);
  const parent = useRef(null!);
  const span1 = useRef(null!);
  const span2 = useRef(null!);
  const span3 = useRef(null!);

  const isIntersecting1 = useIO({
    element: tough,
    options: { threshold: 0.5 },
  });
  useFadeUp({ target: tough, parent, isIntersecting: isIntersecting1 });
  const isIntersecting2 = useIO({
    element: subText,
    options: { threshold: 0.5 },
  });
  useFadeUp({ target: subText, parent, isIntersecting: isIntersecting2 });
  const isIntersecting3 = useIO({
    element: span1,
    options: { threshold: 0.5 },
  });
  useFadeUp({ target: span1, parent, isIntersecting: isIntersecting3 });
  const isIntersecting4 = useIO({
    element: span2,
    options: { threshold: 0.5 },
  });
  useFadeUp({ target: span2, parent, isIntersecting: isIntersecting4 });
  const isIntersecting5 = useIO({
    element: span3,
    options: { threshold: 0.5 },
  });
  useFadeUp({ target: span3, parent, isIntersecting: isIntersecting5 });
  return (
    <section ref={parent} className="w-full py-20 pb-48 bg-brown">
      <div className="w-[90%] flex flex-col gap-14 pt-32 rounded-[50px] overflow-hidden bg-black mx-auto">
        <div className="flex justify-between px-11">
          <span ref={tough} className="max-w-xs">
            <Text
              Components="h3"
              variant="xl/bold"
              color="text-white leading-[60px]"
            >
              Tougher than tough.
            </Text>
          </span>
          <span ref={subText} className="max-w-md">
            <Text Components="p" variant="im/normal" color="text-darkGreyApple">
              The same innovations used to create the beautiful, edge‑to‑edge
              Always‑On display also help make it incredibly durable. A thick
              front crystal, robust geometry, and flat base make it resistant to
              cracking.
            </Text>
          </span>
        </div>
        <div className="px-11 flex gap-6">
          <span ref={span1} className="flex flex-col max-w-[200px] gap-4">
            <Text
              Components="h3"
              variant="xlg/bold"
              color="text-oceanBlueApple leading-[50px]"
            >
              Crack Resistant
            </Text>
            <Text
              Components="p"
              variant="im/normal"
              color="text-darkGreyApple "
            >
              Designed to be strong.
            </Text>
          </span>
          <span ref={span2} className="flex flex-col max-w-[200px] gap-4">
            <Text
              Components="h3"
              variant="xlg/bold"
              color="text-oceanBlueApple leading-leading-[50px]"
            >
              Dust Resistant
            </Text>
            <Text
              Components="p"
              variant="im/normal"
              color="text-darkGreyApple  "
            >
              IP6X certification. <sup>3</sup>
            </Text>
          </span>
          <span ref={span3} className="flex flex-col max-w-[200px] gap-4">
            <Text
              Components="h3"
              variant="xlg/bold"
              color="text-oceanBlueApple leading-[50px]"
            >
              Water Resistant
            </Text>
            <Text
              Components="p"
              variant="im/normal"
              color="text-darkGreyApple "
            >
              Swimproof with WR50 water resistance.4
            </Text>
          </span>
        </div>
        <img src={watch} alt="black watch" />
      </div>
    </section>
  );
};
