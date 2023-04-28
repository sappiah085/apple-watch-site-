import { useRef, useState } from "react";
import { Icons } from "../../../utils/icons";
import { links } from "../../../utils/links";
import { Store } from "../../store/store";
import { List } from "../listRender";
import { Text } from "../text/text";
import { activeEnum } from "../../../utils/storeEnums";
import { useAnimation } from "../../../hooks/animationHeader";
import { useSelector } from "../../../hooks/selectMenu";

export const Header = () => {
  const [active, setActive] = useState(activeEnum.inactive);
  const parent = useRef(null);
  function setActiveFunc(name: activeEnum) {
    setActive(name);
  }
  const data = useSelector(active);
  useAnimation({ active, parent });

  return (
    <>
      <div className="h-16"></div>
      <header
        ref={parent}
        onMouseLeave={() => setActiveFunc(activeEnum.inactive)}
        className={`w-full gap-9 absolute top-0 z-20 left-0 flex-col p-2  flex items-center  parent transition-all duration-200 ${
          active !== activeEnum.inactive
            ? " pb-10 bg-lightBlack"
            : " bg-blackApple"
        }`}
      >
        <nav className="flex gap-5 items-center max-w-4xl mx-auto">
          <span className="fill-white">
            <Icons.appleLogo />
          </span>
          <List
            direction="h"
            items={links}
            render={({ label, url, active: lab }) => (
              <Text
                onMouseEnter={() => setActiveFunc(lab)}
                Components="a"
                color="text-darkGreyApple"
                variant="xSmall/normal"
                href={url}
              >
                {label}
              </Text>
            )}
          />
          <span className="fill-darkGreyApple">
            <Icons.search />
          </span>
          <span className="fill-darkGreyApple">
            <Icons.cart />
          </span>
        </nav>
        {activeEnum.inactive !== active && <Store store={data} />}
      </header>
    </>
  );
};
