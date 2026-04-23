import slides from "./slidesData";
import styles from "./slides.module.css";

function Slides() {
  return (
    <>
      {slides.map((slide, index) => (
        <div key={slide.head} className={styles["slider-item"]}>
          <div className={styles["slider-item-info"]}>
            <h3>{slide.head}</h3>
            <p>{slide.body}</p>
            <button type="button" className={styles[slide.buttonClass]}>
              {slide.button}
            </button>
          </div>
          <img src={slide.img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </>
  );
}

export const slidesLength = slides.length;

export default Slides;
