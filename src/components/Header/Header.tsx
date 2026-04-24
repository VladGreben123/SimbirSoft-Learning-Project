import styles from './header.module.css'
import PlaceIcon from "../../assets/Icons/place.svg?react";

function Header(){
    return(
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <h1 className={styles.logo}>Need for drive</h1>
            <div className={styles.map}>
                <PlaceIcon />
                Ульяновск
            </div>
        </div>
    </header>
    );
}

export default Header