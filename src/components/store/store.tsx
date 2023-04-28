import { useRef } from "react";
import { storeProps } from "../../utils/storeLinks";
import { List } from "../common/listRender";
import { Text } from "../common/text/text";
import { useStoreAnimation } from "../../hooks/animation";

export const Store = ({ store }: { store: storeProps }) => {
  const parent = useRef(null);
  useStoreAnimation(parent);
  return (
    <div ref={parent} className="w-full max-w-3xl mx-auto flex gap-12">
      <div className="flex flex-col gap-4 child-1 ">
        <Text
          color="text-darkGreyApple"
          Components="span"
          variant="xSmall/normal"
        >
          {store[0].label}
        </Text>
        <List
          direction="v"
          items={store[0].links}
          gap="-gap-[.09rem]"
          render={({ title }) => (
            <Text
              color="text-whiteApple"
              href="/"
              variant="lg/bold"
              Components="a"
            >
              {title}
            </Text>
          )}
        />
      </div>
      {store.slice(1).map(({ label, links }, i) => {
        return (
          <div className={`flex flex-col gap-4 child-${i + 2} `} key={label}>
            <Text
              color="text-darkGreyApple"
              Components="span"
              variant="xSmall/normal"
            >
              {label}
            </Text>
            <List
              direction="v"
              items={links}
              gap="-gap-[.09rem]"
              render={({ title }) => (
                <Text
                  color="text-whiteApple"
                  href="/"
                  variant="xSmall/normal"
                  Components="a"
                >
                  {title}
                </Text>
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
