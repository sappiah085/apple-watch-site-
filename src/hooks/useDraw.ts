import { useEffect} from "react";
import { currentFrame } from "../utils/commonFunc";
import { useRefType } from "../utils/typeDefinitions";

export const useDraw = (progress: number, canvas: useRefType) => {
  useEffect(() => {
    const canvasElement = canvas.current as HTMLCanvasElement;
    const imageIndex = Math.ceil(progress * 478);
    const ctx = canvasElement.getContext("2d");
    if (imageIndex > 478) return;
    requestAnimationFrame(() => {
      const image = new Image();
      image.src = currentFrame(imageIndex);
      image.onload = () => {
        ctx?.drawImage(image, 0, 0, canvasElement.width, canvasElement.height);
      };
    });
  }, [progress, canvas]);
};
