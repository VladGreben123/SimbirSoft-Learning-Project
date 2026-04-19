import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  isMenuOpen: boolean;
}

function LanguageSwitcher({ isMenuOpen }: LanguageSwitcherProps) {
  return (
    <div className={`${styles['language-switcher']} ${isMenuOpen ? styles['language-switcher--menu-open'] : ''}`}>
      Eng
    </div>
  );
}

export default LanguageSwitcher;
