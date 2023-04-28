import React, { useEffect, useState } from "react";

interface IOParams {
  element: React.RefObject<Element>;
  once?: boolean;
  options?: {
    root?: string;
    rootMargin?: string;
    threshold?: number;
  };
}
export const useIO = ({ element, options, once = false }: IOParams) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const target: Element = element.current as Element;
    const defaultOption = {
      root: null,
      threshold: 1,
      rootMargin: "0px",
    } as { root: HTMLElement | null; threshold: number; rootMargin: string };
    if (options?.root)
      defaultOption.root = document.querySelector(options.root);
    if (options?.threshold) defaultOption.threshold = options.threshold;
    if (options?.rootMargin) defaultOption.rootMargin = options.rootMargin;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIntersecting(true) : setIntersecting(false);
        if (once) observer.unobserve(entry.target);
      });
    }, defaultOption);
    observer.observe(target);
    return () => observer.disconnect();
  }, [once, options, element]);
  return intersecting;
};
