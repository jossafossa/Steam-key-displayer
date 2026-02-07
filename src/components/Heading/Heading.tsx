import type { PropsWithChildren } from "react";
import styles from "./Heading.module.scss";
import classNames from "classnames";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
  children,
  level,
  className,
  ...headingProps
}: PropsWithChildren<HeadingProps>) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag {...headingProps} className={classNames(styles.heading, className)}>
      {children}
    </Tag>
  );
};
