import styles from './HamburgerMenu.module.css';
import HamburgerIcon from '../../../assets/Icons/hamburger.svg?react';
import CloseIcon from '../../../assets/Icons/close.svg?react';
import TelegramIcon from '../../../assets/Icons/telegram.svg?react';
import InstagramIcon from '../../../assets/Icons/instagram.svg?react';
import FacebookIcon from '../../../assets/Icons/facebook.svg?react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

function HamburgerMenu({ isOpen, onToggle }: HamburgerMenuProps) {
  return (
    <>
      {isOpen ? (
        <CloseIcon
          className={styles['hamburger-icon']}
          onClick={onToggle}
        />
      ) : (
        <HamburgerIcon
          className={styles['hamburger-icon']}
          onClick={onToggle}
        />
      )}
      {isOpen && (
        <nav className={styles.menu}>
          <div className={styles['menu-content']}>
            <ul className={styles['menu-list']}>
              <li>ПАРКОВКА</li>
              <li>СТРАХОВКА</li>
              <li>БЕНЗИН</li>
              <li>ОБСЛУЖИВАНИЕ</li>
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
          </div>
        </nav>
      )}
    </>
  );
}

export default HamburgerMenu;
