import styles from "./HamburgerMenu.module.css";
import HamburgerIcon from "../../../assets/Icons/hamburger.svg?react";
import CloseIcon from "../../../assets/Icons/close.svg?react";
import TelegramIcon from "../../../assets/Icons/telegram.svg?react";
import InstagramIcon from "../../../assets/Icons/instagram.svg?react";
import FacebookIcon from "../../../assets/Icons/facebook.svg?react";

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const socialsIcons = [
  { icon: TelegramIcon, name: "telegram", href: "#" },
  { icon: InstagramIcon, name: "instagram", href: "#" },
  { icon: FacebookIcon, name: "facebook", href: "#" },
];
const menuItems = [
  { label: "ПАРКОВКА", href: "#" },
  { label: "СТРАХОВКА", href: "#" },
  { label: "БЕНЗИН", href: "#" },
  { label: "ОБСЛУЖИВАНИЕ", href: "#" },
];

function HamburgerMenu({ isOpen, onToggle }: HamburgerMenuProps) {
  const HamIcon = isOpen ? CloseIcon : HamburgerIcon;
  return (
    <>
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className={styles["button-icon"]}
        type="button"
      >
        <HamIcon className={styles["hamburger-icon"]} />
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <div className={styles["menu-content"]}>
            <ul className={styles["menu-list"]}>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.menuLink}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className={styles.socials}>
              {socialsIcons.map(({ icon: Icon, name, href }) => (
                <li key={name}>
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    <Icon className={styles.socialIcon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default HamburgerMenu;
