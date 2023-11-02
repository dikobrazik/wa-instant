import { HTMLAttributes, PropsWithChildren } from "preact/compat";
import { Icon, Icons } from "../Icon";
import cn from "classnames";
import "./styles.css";

type Props = {
  icon?: Icons;
  size?: "m";
} & HTMLAttributes<HTMLButtonElement>;

export const Button = (props: PropsWithChildren<Props>) => {
  const { icon, size = "m", children, ...buttonProps } = props;

  return (
    <button
      className={cn({ ["with-icon"]: !!icon, "size-m": size })}
      {...buttonProps}
    >
      {children}
      {icon && <Icon name={icon} size={size} />}
    </button>
  );
};
