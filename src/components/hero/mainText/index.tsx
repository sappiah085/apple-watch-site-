import { Text } from "../../common/text/text";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import { useSplitText } from "../../../hooks/useSplitText";
export const MainText = () => {
  useSplitText();
  return (
    <div className="z-[1] text-whiteApple flex flex-col w-full  mt-auto max-w-5xl mx-auto p-hide pb-24">
      <Text color="text-darkGreyApple" Components="p" variant="xxlg/bold">
        <span>Your essential companion is even more powerful.</span>{" "}
        <span>
          Temperature sensing for deeper insights into women’s health.{" "}
          <sup className="hover:text-oceanBlueApple cursor-pointer">1 </sup>{" "}
        </span>{" "}
        <span>
          Crash Detection to get help in an emergency.{" "}
          <sup className="hover:text-oceanBlueApple cursor-pointer">2</sup>
        </span>
        <span> Sleep stages to better understand your sleep.</span>{" "}
        <span>And improved ways to train using the enhanced Workout app.</span>{" "}
        <span> The future of health never looked so good.</span>
      </Text>
      <div className="text-[19px] mt-28 font-semibold w-full flex items-center gap-9">
        <span className="flex gap-2 items-center">
          <a className="hover:underline" href="/">
            Watch the film
          </a>
          <BsPlayCircle />
        </span>
        <span className="flex gap-2 items-center">
          <a className="hover:underline" href="/">
            Watch the event
          </a>
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};
