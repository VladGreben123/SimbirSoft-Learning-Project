import { useEffect, useState } from "react";
import Slides, { slidesLength } from "./Slides/slides";
import styles from "./Slider.module.css";
import LeftIcon from "../../assets/Icons/left.svg?react";
import RightIcon from "../../assets/Icons/right.svg?react";
import Dot from "../../assets/Icons/dot.svg?react";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction >= 10000) {
        setCurrentIndex((i) => (i === slidesLength - 1 ? 0 : i + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [lastInteraction]);

  const handleInteraction = (updateIndex: () => void) => {
    updateIndex();
    setLastInteraction(Date.now());
  };

  return (
    <div className={styles["slider-container"]}>
      <button
        type="button"
        className={styles["left-switch"]}
        onClick={() => {
          handleInteraction(() =>
            setCurrentIndex((i) => (i === 0 ? slidesLength - 1 : i - 1)),
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
          handleInteraction(() =>
            setCurrentIndex((i) => (i === slidesLength - 1 ? 0 : i + 1)),
          );
        }}
      >
        <RightIcon />
      </button>
      <nav className={styles["slider-nav"]}>
        <ul className={styles["slider-nav-list"]}>
          {Array.from({ length: slidesLength }, (_, i) => {
            const dotClass =
              i === currentIndex
                ? styles["slider-nav-item-active"]
                : styles["slider-nav-item-passive"];
            const dotOnClick = () => {
              handleInteraction(() => setCurrentIndex(i));
            };
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={dotOnClick}
                  className={styles.sliderNavButton}
                >
                  <Dot className={dotClass} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Slider;
