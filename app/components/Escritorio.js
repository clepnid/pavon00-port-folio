// Escritorio.js
import React from 'react';
import IconoEscritorio from './IconoEscritorio';
import fgifIcon from './../images/fgif.gif'
import clepnidIcon from './../images/clepnid.png'
import reactIcon from './../images/react.png'
import userIcon from './../images/user.png'
import ganaderiappIcon from './../images/ganaderiapp.png'
import './styles/escritorio.css';
import './styles/fuentes.css'; 

const Escritorio = ({arrayOnClicks}) => {
  const listaDeIconos = [
    { nombre: 'Antonio Jesus Pavon Correa', imagen: userIcon.src},
    { nombre: 'Fgif', imagen: fgifIcon.src},
    { nombre: 'Clepnid', imagen: clepnidIcon.src},
    { nombre: 'Ganaderiapp', imagen: ganaderiappIcon.src},
    { nombre: 'Complementary', imagen: reactIcon.src},
    // Agrega más iconos según sea necesario
  ];

  return (
    <div className='escritorio'>
      {listaDeIconos.map((icono, index) => (
        <IconoEscritorio key={index} nombre={icono.nombre} imagen={icono.imagen} onClick={arrayOnClicks[index]} />
      ))}
    </div>
  );
};

export default Escritorio;
