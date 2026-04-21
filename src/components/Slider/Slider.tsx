import { useEffect, useState } from "react";
import Slides, { slidesLenght } from "./Slides/slides";
import styles from "./Slider.module.css";
import LeftIcon from "../../assets/Icons/left.svg?react";
import RightIcon from "../../assets/Icons/right.svg?react";
import Dot from "../../assets/Icons/dot.svg?react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i === slidesLenght - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles["slider-container"]}>
      <button
        type="button"
        className={styles["left-switch"]}
        onClick={() => {
          setCurrentIndex(
            currentIndex === 0 ? slidesLenght - 1 : currentIndex - 1,
          );
        }}
      >
        <LeftIcon />
      </button>
      <div
        className={styles["slider-track"]}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <Slides />
      </div>
      <button
        type="button"
        className={styles["right-switch"]}
        onClick={() => {
          setCurrentIndex(
            currentIndex === slidesLenght - 1 ? 0 : currentIndex + 1,
          );
        }}
      >
        <RightIcon />
      </button>
      <nav className={styles['slider-nav']}>
        <ul className={styles['slider-nav-list']}>
            <li className={styles['slider-nav-item']}>
              <button type="button">
                <Dot/>
              </button>
            </li>
            <li className={styles['slider-nav-item']}>
              <button type="button">
                <Dot/>
              </button>
            </li>
            <li className={styles['slider-nav-item']}>
              <button type="button">
                <Dot/>
              </button>
            </li>
            <li className={styles['slider-nav-item']}>
              <button type="button">
                <Dot/>
              </button>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Slider;
