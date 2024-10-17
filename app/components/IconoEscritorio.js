// IconoEscritorio.js
import React from 'react';
import './styles/escritorio.css';
import './styles/fuentes.css';

const IconoEscritorio = ({ nombre, imagen, onClick }) => {
    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)'; // Aumenta el tamaño al pasar el ratón
        e.currentTarget.style.transition = 'transform 0.3s'; // Añade una transición suave
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Vuelve al tamaño original
    };
    return (
        <div className='icono'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={onClick}
        >
            <img src={imagen} alt={nombre} className='iconoImagen' />
            <p className='iconoNombre'>{nombre}</p>
        </div>
    );
};


export default IconoEscritorio;
