import styles from "./AdminHeader.module.css";
import BellIcon from "../../../assets/Icons/bell.svg?react";
import ChevronDown from "../../../assets/Icons/chevronDown.svg?react";

type Props = {
  userName?: string;
  notificationsCount?: number;
};

function AdminHeader({ userName = "User 1", notificationsCount = 2 }: Props) {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search …"
        />
      </div>
      <button
        type="button"
        className={styles.notifications}
        aria-label="Уведомления"
      >
        <BellIcon className={styles.notificationsIcon} />
        {notificationsCount > 0 && (
          <span className={styles.notificationsBadge}>
            {notificationsCount}
          </span>
        )}
      </button>
      <div className={styles.profile}>
        <span className={styles.profileAvatar} />
        <span className={styles.profileName}>{userName}</span>
        <ChevronDown className={styles.profileArrow} />
      </div>
    </header>
  );
}

export default AdminHeader;
