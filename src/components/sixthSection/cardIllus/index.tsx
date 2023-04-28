import { ReactNode } from "react";

export const CardIllustration = ({
  color,
  img,
  children,
}: {
  children: ReactNode;
  color: string;
  img: any;
}) => {
  return (
    <div
      className={`${color} w-full max-w-[550px] p-16 rounded-[50px] flex-col gap-7 flex`}
    >
      {children}
      <img className="w-auto h-[500px] object-contain" src={img} alt="image from apple" />
    </div>
  );
};
