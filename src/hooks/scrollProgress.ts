import { useEffect, useState } from "react";
import { useRefType } from "../utils/typeDefinitions";

interface scrollProgressParams {
  relativeElement?: useRefType;
}
export const useScrollProgress = ({
  relativeElement,
}: scrollProgressParams) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function scrollFunc() {
      const html = document.documentElement as HTMLElement;
      if (!relativeElement) {
        const ratio = html.scrollTop / (html.scrollHeight - window.innerHeight);
        setProgress(ratio);
      } else {
        const element = relativeElement.current as HTMLElement;
        const ratio =
          html.scrollTop / (element.scrollHeight - window.innerHeight);
        setProgress(ratio);
      }
    }
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, [relativeElement]);
  return progress;
};
