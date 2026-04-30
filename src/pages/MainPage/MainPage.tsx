import styles from "./MainPage.module.css";
import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function MainPage() {
  return (
    <>
      <Sidebar />
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          <div className={styles["hero-block"]}>
            <h2 className={styles["hero-main"]}>Каршеринг</h2>
            <p className={styles["hero-logo"]}>Need for drive</p>
            <p className={styles["hero-text"]}>
              Поминутная аренда авто твоего города
            </p>
            <button type="button" className={styles.button}>
              <a href="/book/point" className={styles.bookButton}>
                Забронировать
              </a>
            </button>
          </div>
          <div className={styles["image-panel"]}>
            <Slider />
          </div>
        </main>
        <footer className={styles.footer}>
          <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
          <p>
            <a className={styles.mobile} href="tel:8 (495) 234-22-44">
              8 (495) 234-22-44
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
