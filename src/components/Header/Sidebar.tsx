import { useCallback, useState, memo } from 'react';
import styles from './Sidebar.module.css';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFunction = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <aside className={styles.aside}>
      <HamburgerMenu isOpen={isMenuOpen} onToggle={toggleFunction} />
      <LanguageSwitcher isMenuOpen={isMenuOpen} />
    </aside>
  );
}

export default memo(Sidebar);
