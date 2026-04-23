import slider1 from "../../../assets/Images/slider1.png";
import slider2 from "../../../assets/Images/slider2.png";
import slider3 from "../../../assets/Images/slider3.png";
import slider4 from "../../../assets/Images/slider4.png";
import type { Slide } from "../../../types/index";

const slides: Slide[] = [
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

export default slides;
