import { useState } from 'react';
import styles from './Header.module.css';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import PlaceIcon from '../../assets/place.svg?react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <HamburgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((prev) => !prev)} />
      <div className={styles['header-right']}>
        <h1 className={styles['text-logo']}>Need for drive</h1>
        <div className={styles.map}>
          <PlaceIcon />
          Ульяновск
        </div>
      </div>
      <LanguageSwitcher isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
