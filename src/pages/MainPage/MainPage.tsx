import styles from './MainPage.module.css';
import Slider from '../../components/Slider/Slider';
import PlaceIcon from '../../assets/place.svg?react';

function MainPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.logo}>Need for drive</h1>
      <div className={styles.map}>
        <PlaceIcon />
        Ульяновск
      </div>
      <div className={styles['hero-block']}>
        <p className={styles['hero-main']}>Каршеринг</p>
        <p className={styles['hero-logo']}>Need for drive</p>
        <p className={styles['hero-text']}>Поминутная аренда авто твоего города</p>
        <button type="button" className={styles.button}>Забронировать</button>
      </div>
      
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
        <p className={styles.mobile}>8 (495) 234-22-44</p>
      </footer>
      <div className={styles['image-panel']}>
        <Slider />
        <div className={styles['image-panel-overlay']} />
      </div>
    </main>
  );
}

export default MainPage;
