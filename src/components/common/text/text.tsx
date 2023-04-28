import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const textVariant = cva("", {
  variants: {
    fontWeight: {
      normal: "font-normal",
      bold: "font-semibold",
    },
    fontSize: {
      xSmall: "text-[12px]",
      small: "text-[17px]",
      im: "text-[19px]",
      medium: "text-[21px]",
      lg: "text-[32px]",
      xlg: "text-[40px]",
      xxlg: "text-[48px]",
      xl: "text-[56px]",
      xxl: "text-[80px]",
    },
  },
});

type textStyleType = VariantProps<typeof textVariant>;
interface textProps
  extends Omit<textStyleType, "fontSize" | "fontWeight">,
    Omit<
      React.HtmlHTMLAttributes<
        | HTMLAnchorElement
        | HTMLParagraphElement
        | HTMLHeadingElement
        | HTMLSpanElement
      >,
      "className"
    > {
  variant: `${NonNullable<textStyleType["fontSize"]>}/${NonNullable<
    textStyleType["fontWeight"]
  >}`;
  Components: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "a" | "span";
  children: ReactNode;
  color?: string;
  href?: string;
}
export const Text = ({
  variant,
  Components,
  children,
  href,
  color = " text-blackApple",
  ...props
}: textProps) => {
  const [fontSize, fontWeight] = variant.split("/") as [
    textStyleType["fontSize"],
    textStyleType["fontWeight"]
  ];

  return (
    <Components
      href={href}
      className={`${textVariant({ fontSize, fontWeight })} ${color}`}
      {...props}
    >
      {children}
    </Components>
  );
};
