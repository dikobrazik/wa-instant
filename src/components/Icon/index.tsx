import * as icons from "./icons";
import cn from "classnames";
import "./styles.css";

export type Icons = keyof typeof icons;

type Props = {
  name: keyof typeof icons;
  size?: "m";
};

export const Icon = (props: Props) => {
  const { name, size = "m" } = props;

  const IconC = icons[name];

  return <IconC className={cn("icon", { ["size-m"]: size === "m" })} />;
};
