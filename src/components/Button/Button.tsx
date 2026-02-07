import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={styles.button} {...buttonProps}>
      {children}
    </button>
  );
};
