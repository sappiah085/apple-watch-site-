import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render(item: T): ReactNode;
  direction: "h" | "v";
  gap?: string;
}
export const List = <T,>({
  items,
  render,
  direction,
  gap = "gap-5",
}: ListProps<T>) => {
  const align = direction === "h" ? "flex-row items-center" : "flex-col";
  return (
    <ul className={`flex ${align} ${gap} `}>
      {items.map((item, key) => (
        <li key={key}>{render(item)}</li>
      ))}
    </ul>
  );
};
