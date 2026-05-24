import styles from "./AdminSidebar.module.css";
import Logo from "../../../assets/Icons/logoIcon.svg?react";

const menuItems = [
  "Карточка автомобиля",
  "Список авто",
  "Заказы",
  "menu4",
  "menu5",
  "menu6",
  "menu7",
];

type Props = {
  activeItem?: string;
};

function AdminSidebar({ activeItem = "Карточка автомобиля" }: Props) {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBarHeader}>
        <Logo className={styles.sideBarLogo} />
        <span className={styles.sideBarTitle}>Need for car</span>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li
              key={item}
              className={`${styles.menuItem} ${
                item === activeItem ? styles.menuItemActive : ""
              }`}
            >
              <span className={styles.menuItemDot} />
              <span className={styles.menuItemLabel}>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
