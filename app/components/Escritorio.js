// Escritorio.js
import React from 'react';
import IconoEscritorio from './IconoEscritorio';
import fgifIcon from './../images/fgif.gif';
import clepnidIcon from './../images/clepnid.png';
import reactIcon from './../images/react.png';
import userIcon from './../images/user.png';
import controlIcon from './../images/control.png';
import fotos365Icon from './../images/fotos365.png';
import cortijoIcon from './../images/cortijo.png';
import ganaderiappIcon from './../images/ganaderiapp.png';
import './styles/escritorio.css';
import './styles/fuentes.css'; 

const Escritorio = ({arrayOnClicks}) => {
  const listaDeIconos = [
    {id: '399332362', nombre: 'Antonio Jesus Pavon Correa', imagen: userIcon.src, pixeles: 0},
    {id: '399093232', nombre: 'Fgif', imagen: fgifIcon.src, pixeles: 3},
    {id: '395335332', nombre: 'Clepnid', imagen: clepnidIcon.src, pixeles: 3},
    {id: '399323122', nombre: 'Ganaderiapp', imagen: ganaderiappIcon.src, pixeles: 3},
    {id: '393232312', nombre: 'Cortijo', imagen: cortijoIcon.src, pixeles: 2},
    {id: '395392323', nombre: 'Complementary', imagen: reactIcon.src, pixeles: 2},
    {id: '395392304', nombre: 'Empresa1', imagen: controlIcon.src, pixeles: 4},
    {id: '395392303', nombre: 'FotosBodas', imagen: fotos365Icon.src, pixeles: 4},
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
