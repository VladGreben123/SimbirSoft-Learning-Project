import styles from './Header.module.css';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function Header() {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
