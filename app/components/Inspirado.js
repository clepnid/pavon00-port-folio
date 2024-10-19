import React from 'react';
import inspiradoImage from './../images/inspirado.png';
import './styles/inspirado.css';

const Inspirado = ({ isSmallScreen, isSmallHeight }) => {
  if (isSmallHeight) {
    return (
      <div className={`inspirado_container `}>
        <img src={inspiradoImage.src} alt={'inspirado'} className='inspirado_image inspirado_image_margin' />
      </div>
    );
  }

  return (
    <div className={`inspirado_container ${isSmallScreen ? 'small_screen' : 'large_screen'}`}>
      <img src={inspiradoImage.src} alt={'inspirado'} className={'inspirado_image'} />
    </div>
  );
};

export default Inspirado;
