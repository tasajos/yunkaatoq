import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

import sombrero from "../assets/parteLogos/atom/Sombrero.png"
import engranajes from "../assets/parteLogos/atom/Engranajes.png"
import cruzAmarilla from "../assets/parteLogos/atom/CruzAmarilla.png"
import corazon from "../assets/parteLogos/atom/Corazon.png"
import cruzBlanca from "../assets/parteLogos/atom/CruzBlanca.png"
import hachas from "../assets/parteLogos/atom/Hachas.png"

const PartesLogo = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    const flickityInstance = new Flickity(flickityRef.current, {
      cellAlign: 'left',
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false,
      initialIndex: 0,
      dragThreshold: 10,
      selectedAttraction: 0.1,
      friction: 0.8,
      freeScroll: true,
      contain: true,
      lazyLoad: 2,
      imagesLoaded: true,
    });

    return () => flickityInstance.destroy();
  }, []);

  return (
    <div ref={flickityRef} className='carousel bg-fondo2'>
      <div className='carousel-cell'>
        <img src={sombrero} alt='1' />
      </div>
      <div className='carousel-cell'>
        <img src={engranajes} alt='2' />
      </div>
      <div className='carousel-cell'>
        <img src={cruzAmarilla} alt='3' />
      </div>
      <div className='carousel-cell'>
        <img src={corazon} alt='4' />
      </div>
      <div className='carousel-cell'>
        <img src={cruzBlanca} alt='5' />
      </div>
      <div className='carousel-cell'>
        <img src={hachas} alt='6' />
      </div>
    </div>
  );
};

export default PartesLogo;
