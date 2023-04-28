import { useMemo } from "react";
import { activeEnum } from "../utils/storeEnums";
import { storeLinks } from "../utils/storeLinks";
import { macLinks } from "../utils/macLinks";

export const useSelector = (menu: activeEnum) => {
  const data = useMemo(() => {
    switch (menu) {
      case activeEnum.store:
        return storeLinks;
      case activeEnum.mac:
        return macLinks;
      default:
        return storeLinks;
    }
  }, [menu]);
  return data;
};
