import { useEffect, useState, type PropsWithChildren } from "react";
import styles from "./Notification.module.scss";
import classNames from "classnames";

export const Notification = ({ children }: PropsWithChildren) => {
  const [isInVisible, setIsInVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsInVisible(true), 2000);
    const timer2 = setTimeout(() => setIsHidden(false), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isHidden) return null;

  return (
    <div
      className={classNames(
        styles.notification,
        isInVisible && styles.isInvisible,
      )}
    >
      {children}
    </div>
  );
};
