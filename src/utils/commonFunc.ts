export const currentFrame = (index: number) => {
  return `/src/assets/pic/Screen Recording 2023-03-02 at 13.53.22-1_${index
    .toString()
    .padStart(5, "0")}.png`;
};
