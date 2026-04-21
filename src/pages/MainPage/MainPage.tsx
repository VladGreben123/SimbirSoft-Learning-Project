import styles from "./MainPage.module.css";
import Slider from "../../components/Slider/Slider";
import PlaceIcon from "../../assets/Icons/place.svg?react";
import Sidebar from "../../components/Header/Sidebar";

function MainPage() {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.logo}>Need for drive</h1>
          <div className={styles.map}>
            <PlaceIcon />
            Ульяновск
          </div>
        </header>
        <div className={styles["hero-block"]}>
          <h2 className={styles["hero-main"]}>Каршеринг</h2>
          <p className={styles["hero-logo"]}>Need for drive</p>
          <p className={styles["hero-text"]}>
            Поминутная аренда авто твоего города
          </p>
          <button type="button" className={styles.button}>
            Забронировать
          </button>
        </div>

        <footer className={styles.footer}>
          <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
          <p>
            <a className={styles.mobile} href="tel:8 (495) 234-22-44">
              8 (495) 234-22-44
            </a>
          </p>
        </footer>
        <div className={styles["image-panel"]}>
          <Slider />
        </div>
      </main>
    </>
  );
}

export default MainPage;
