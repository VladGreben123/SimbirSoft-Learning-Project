import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  isMenuOpen: boolean;
}

function LanguageSwitcher({ isMenuOpen }: LanguageSwitcherProps) {
  return (
    <button
      className={`${styles["language-switcher"]} ${isMenuOpen ? styles["language-switcher-menu-open"] : ""}`}
    >
      Eng
    </button>
  );
}

export default LanguageSwitcher;
