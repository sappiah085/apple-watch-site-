import { Text } from "../common/text/text";
import watch from "../../assets/images/6th/health_hero__d63yvs2woguq_large_2x.jpg";
import watch2 from "../../assets/images/6th/health_temperature__bli4z8frz23m_large_2x.jpg";
import ovulation from "../../assets/images/6th/health_ovulation__glj6plwb7umy_large_2x.jpg";
import temp from "../../assets/images/6th/health_cycle__e41h2bl0s66a_large_2x.jpg";
import { useIO } from "../../hooks/IO";
import { useRef } from "react";
import { useFadeUp } from "../../animations/fadeUp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CardIllustration } from "./cardIllus";
import { AppleGradient } from "./appleGradient";
export const SixthSection = () => {
  const parent = useRef(null!);
  const target = useRef(null);
  const intersecting = useIO({
    element: target,
    options: { threshold: 0.75 },
  });
  useFadeUp({ target, parent, isIntersecting: intersecting });
  const target2 = useRef(null);
  const intersecting2 = useIO({
    element: target,
    options: { threshold: 0.75 },
  });
  useFadeUp({ target, parent, isIntersecting: intersecting2 });
  return (
    <section
      ref={parent}
      className="w-full flex flex-col items-center gap-36 bg-gradientLikeBackColor py-36 px-24 "
    >
      <div ref={target2} className="max-w-xl w-full self-start flex flex-col">
        <Text Components="h4" variant="medium/bold">
          Health
        </Text>

        <Text color="leading-[80px]" variant="xxl/bold" Components="h3">
          Here’s to a healthier you.
        </Text>
      </div>
      <img src={watch} alt="watches" />
      <span ref={target} className="self-start max-w-xl">
        <Text Components="p" color="leading-[40px]" variant="lg/bold">
          The more informed you are about your health, the more empowered you
          are to affect it. Advanced health sensors in Apple Watch Series 8
          provide insights to help you better understand your health.
        </Text>
      </span>
      <div className="bg-whiteApple w-full max-w-5xl flex gap-3 px-16 rounded-[40px] overflow-hidden h-[88vh]  justify-between items-start">
        <img className="h-full" src={watch2} alt="watches" />{" "}
        <div className="self-center flex  flex-col gap-3 max-w-[400px] -ml-[50px]">
          <Text Components="h4" color="leading-[60px]" variant="xl/bold">
            Temperature sensing.
          </Text>
          <Text
            Components="p"
            color="text-darkGreyApple"
            variant="small/normal"
          >
            <span className="text-black">
              {" "}
              Understand your cycle like never before.
            </span>{" "}
            Apple Watch Series 8 has an innovative sensor that tracks your
            temperature while you sleep, so you can see changes over time. Cycle
            Tracking uses this data to provide a retrospective estimate of when
            you likely ovulated, which can be helpful for family planning. When
            combined with your heart rate and logged cycle data, you’ll get a
            detailed view of your menstrual cycle.
          </Text>

          <span className="flex gap-2 items-center">
            <a className="hover:underline font-semibold text-lg" href="/">
              Learn about temperature sensing
            </a>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div>
      <div className="flex w-full justify-center gap-5">
        <CardIllustration img={ovulation} color="bg-white">
          <span className="flex flex-col gap-4">
            {" "}
            <Text Components="p" color="leading-[40px]" variant="lg/bold">
              An easier way to understand when you likely ovulated.
            </Text>
            <span className="flex gap-2 items-center">
              <a className="hover:underline font-semibold text-lg" href="/">
                Learn about advanced Cycle Tracking
              </a>
              <MdOutlineKeyboardArrowRight />
            </span>
          </span>
        </CardIllustration>
        <CardIllustration img={temp} color="bg-black">
          <Text
            Components="p"
            color="text-darkGreyApple"
            variant="small/normal"
          >
            <span className="text-white">
              {" "}
              Period predictions. Less of a question mark.
            </span>{" "}
            Get improved period predictions with wrist temperature data. And
            receive notifications if your logged cycle data shows a possible
            cycle deviation, like irregular or prolonged periods. You can share
            your cycle history with your healthcare provider for more informed
            conversations.5
          </Text>
        </CardIllustration>
      </div>
      <AppleGradient />
    </section>
  );
};
