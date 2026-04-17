import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import HamburgerIcon from '../../../assets/hamburger.svg?react';
import CloseIcon from '../../../assets/close.svg?react';
import TelegramIcon from '../../../assets/telegram.svg?react';
import InstagramIcon from '../../../assets/instagram.svg?react';
import FacebookIcon from '../../../assets/facebook.svg?react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <CloseIcon
          className={styles['hamburger-icon']}
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <HamburgerIcon
          className={styles['hamburger-icon']}
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <nav className={styles.menu}>
          <ul className={styles['menu-list']}>
            <li>Парковка</li>
            <li>Страховка</li>
            <li>Бензин</li>
            <li>Обслуживание</li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <TelegramIcon className={styles['social-icon']} />
            </li>
            <li>
              <InstagramIcon className={styles['social-icon']} />
            </li>
            <li>
              <FacebookIcon className={styles['social-icon']} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default HamburgerMenu;
