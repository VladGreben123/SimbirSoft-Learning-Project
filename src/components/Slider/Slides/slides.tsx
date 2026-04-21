import slider1 from "../../../assets/Images/slider1.png";
import slider2 from "../../../assets/Images/slider2.png";
import slider3 from "../../../assets/Images/slider3.png";
import slider4 from "../../../assets/Images/slider4.png";
import styles from "./slides.module.css";

const slides = [
  {
    head: "Бесплатная парковка",
    body: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    button: "Подробнее",
    buttonClass: "button-parking",
    img: slider1,
  },
  {
    head: "Страховка",
    body: "Полная страховка страховка автомобиля",
    button: "Подробнее",
    buttonClass: "button-ensurance",
    img: slider2,
  },
  {
    head: "Бензин",
    body: "Полный бак на любой заправке города за наш счёт",
    button: "Подробнее",
    buttonClass: "button-fuel",
    img: slider3,
  },
  {
    head: "Обслуживание",
    body: "Автомобиль проходит еженедельное ТО",
    button: "Подробнее",
    buttonClass: "button-service",
    img: slider4,
  },
];

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

export const slidesLenght = slides.length;

export default Slides;
