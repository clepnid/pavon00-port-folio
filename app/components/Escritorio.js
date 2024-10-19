// Escritorio.js
import React from 'react';
import IconoEscritorio from './IconoEscritorio';
import fgifIcon from './../images/fgif.gif';
import clepnidIcon from './../images/clepnid.png';
import reactIcon from './../images/react.png';
import userIcon from './../images/user.png';
import cortijoIcon from './../images/cortijo.png';
import ganaderiappIcon from './../images/ganaderiapp.png';
import './styles/escritorio.css';
import './styles/fuentes.css'; 

const Escritorio = ({arrayOnClicks}) => {
  const listaDeIconos = [
    {id: '399332302', nombre: 'Antonio Jesus Pavon Correa', imagen: userIcon.src, pixeles: 0},
    {id: '399093302', nombre: 'Fgif', imagen: fgifIcon.src, pixeles: 3},
    {id: '395332302', nombre: 'Clepnid', imagen: clepnidIcon.src, pixeles: 3},
    {id: '399323202', nombre: 'Ganaderiapp', imagen: ganaderiappIcon.src, pixeles: 3},
    {id: '393232302', nombre: 'Cortijo', imagen: cortijoIcon.src, pixeles: 2},
    {id: '395392302', nombre: 'Complementary', imagen: reactIcon.src, pixeles: 2},
    // Agrega más iconos según sea necesario
  ];

  return (
    <div className='escritorio'>
      {listaDeIconos.map((icono, index) => (
        <IconoEscritorio key={index} id={icono.id} nombre={icono.nombre} imagen={icono.imagen} pixeles={icono.pixeles} onClick={arrayOnClicks[index]} />
      ))}
    </div>
  );
};

export default Escritorio;
