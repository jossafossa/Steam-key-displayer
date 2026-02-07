import { useState } from "react";
import { NotifyContext } from "./NotifyContext";
import { Notifications } from "../Notifications";
import styles from "./NotifyProvider.module.scss";

export const NotifyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const notify = (message: string) => {
    setNotifications((prev) => [...prev, message]);
  };

  return (
    <NotifyContext.Provider value={{ notify }}>
      {children}
      <div className={styles.notifications}>
        <Notifications notifications={notifications} />
      </div>
    </NotifyContext.Provider>
  );
};
