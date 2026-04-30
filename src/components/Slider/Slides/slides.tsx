import slides from "./slidesData";
import styles from "./slides.module.css";

function Slides() {
  return (
    <>
      {slides.map((slide, index) => (
        <div key={slide.head} className={styles["slider-item"]}>
          <div className={styles["slider-item-info"]}>
            <h3 className={styles.sliderItemHead}>{slide.head}</h3>
            <p className={styles.sliderItemText}>{slide.body}</p>
            <button
              type="button"
              className={`${styles[slide.buttonClass]} ${styles.sliderItemButton}`}
            >
              {slide.button}
            </button>
          </div>
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className={styles.sliderItemImage}
          />
        </div>
      ))}
    </>
  );
}

export const slidesLength = slides.length;

export default Slides;
