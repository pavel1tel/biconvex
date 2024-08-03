import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

import classes from "./Container.module.css";

export const Container = ({
  children,
  padding = 32,
  className = "",
  style = {},
}: {
  children: ReactNode;
  padding?: number;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div style={{ padding: padding && padding - 1, ...style }} className={clsx(classes.container, className)}>
      {children}
    </div>
  );
};
