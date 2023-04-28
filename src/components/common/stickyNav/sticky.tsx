import { useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";
import { Text } from "../text/text";

export const Sticky = () => {
  const parent = useRef<HTMLDivElement>(null!);

  useScroll(parent);
  return (
    <div ref={parent} className="w-full sticky z-10 top-0 py-2">
      <nav className="flex  justify-between gap-5 items-center max-w-3xl px-2 mx-auto">
        <Text color="text-whiteApple why" Components="span" variant="medium/bold">
          Apple Watch Series 8
        </Text>
        <span className="flex  gap-3 items-center">
          <Text
            color="text-darkGreyApple"
            variant="xSmall/normal"
            Components="a"
            href="/"
          >
            Overview
          </Text>
          <Text
            color="text-whiteApple why"
            variant="xSmall/normal"
            Components="a"
            href="/"
          >
            Why Apple Watch
          </Text>
          <button className="bg-blueApple text-whiteApple px-3 rounded-3xl text-[12px] py-1">
            Buy
          </button>
        </span>
      </nav>
    </div>
  );
};
