import style from "./Gallery.module.css";

import React, { useState, useEffect } from "react";
import image1 from '../../../Assets/Project/Bluee.png';
import image2 from '../../../Assets/Project/Comfy.jpg';
import image3 from '../../../Assets/Project/Horizon.jpg';
import image4 from '../../../Assets/Project/Alseef.png';
import image5 from '../../../Assets/Project/lafit.png';
import image6 from '../../../Assets/Project/BerlinLogo.png';
import image7 from '../../../Assets/Project/crstal.png';
import image8 from '../../../Assets/Project/grandLand.png';
import image9 from '../../../Assets/Project/home star.png'
import image10 from '../../../Assets/Project/lafit.png'
import image11 from '../../../Assets/Project/newme.png'
import image12 from '../../../Assets/Project/sandkom.png'


import Button from 'react-bootstrap/Button';
import { Link, useNavigate  } from 'react-router-dom';

const images = [image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,



]; // Array of image paths

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500); // Change interval to control auto-scroll speed

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/Designs'); // Navigate to the Designs route
  };

  return <>
    <div className={style['slider-container']}>
      <h2 className="text-center text-white mb-5">Clients</h2>
      <div className={style["slide"]} style={{ backgroundImage: `url(${images[current]})` }} />



    </div>
    <div className={style.Button}>
      <Button onClick={handleClick} className=''> Let me impress you </Button>
    </div>
  </>
};

export default Slider;


