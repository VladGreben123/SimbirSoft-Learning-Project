import styles from "./Header.module.css";
import PlaceIcon from "../../assets/Icons/place.svg?react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            Need for drive
          </a>
        </h1>
        <div className={styles.map}>
          <PlaceIcon />
          Ульяновск
        </div>
      </div>
    </header>
  );
}

export default Header;
