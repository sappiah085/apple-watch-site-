import { useEffect, useRef } from "react";
import { currentFrame } from "../utils/commonFunc";

export const usePreloadImages = (
  canvas: ReturnType<typeof useRef<HTMLCanvasElement>>
) => {
  useEffect(() => {
    const frameCount = 478;
    const imgFirstLoad = new Image();
    imgFirstLoad.src = currentFrame(0);
    imgFirstLoad.onload = () => {
      canvas.current
        ?.getContext("2d")
        ?.drawImage(
          imgFirstLoad,
          0,
          0,
          canvas.current.width,
          canvas.current.height
        );
    };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  }, [canvas]);
};
