import { useEffect, useState} from 'react';
import slider1 from '../../assets/Images/slider1.png';
import slider2 from '../../assets/Images/slider2.png';
import slider3 from '../../assets/Images/slider3.png';
import slider4 from '../../assets/Images/slider4.png';
import styles from './Slider.module.css';
import LeftIcon from '../../assets/Icons/left.svg?react';
import RightIcon from '../../assets/Icons/right.svg?react';

const slides = [slider1,slider2,slider3,slider4]

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentIndex((i) => (i === slides.length-1 ? 0 : i + 1))
    },6000);
    return () => clearInterval(interval)
  })

  return (
    <div className={styles['slider-container']} >
      <button 
        type='button' 
        className={styles['left-switch']} 
        onClick={() => {setCurrentIndex(currentIndex === 0 ? slides.length-1 : currentIndex - 1)}}
      >
        <LeftIcon/>
      </button>
      <div className={styles['slider-track']} style={{transform:`translateX(-${currentIndex * 100}%)`}}>
        {slides.map((src,index) => (
          <img key={src} src={src} alt = {`Slide ${index+1}`}/>
        ))}
      </div>
      <button 
        type='button' 
        className={styles['right-switch']} 
        onClick={() => {setCurrentIndex(currentIndex === slides.length-1 ? 0 : currentIndex + 1)}}
      >
        <RightIcon/>
      </button>
    </div>
  );
}

export default Slider;
