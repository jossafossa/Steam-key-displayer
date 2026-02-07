import { Notification } from "../Notification";
import styles from "./Notifications.module.scss";

type NotificationsProps = {
  notifications: string[];
};
export const Notifications = ({ notifications }: NotificationsProps) => {
  return (
    <div className={styles.notifications}>
      {notifications.map((notification, index) => (
        <Notification key={index}>{notification}</Notification>
      ))}
    </div>
  );
};
