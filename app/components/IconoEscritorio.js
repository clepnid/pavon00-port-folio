// IconoEscritorio.js
import React from 'react';
import './styles/escritorio.css';
import './styles/fuentes.css';
import Pixelify from './Pixelify';

const IconoEscritorio = React.memo(({ id, nombre, imagen, pixeles, onClick }) => {

    // Función para verificar si un nombre está en localStorage
    function isNameInLocalStorage(name) {
        return localStorage.getItem(name) !== null;
    }

    // Función para guardar un dato en localStorage con un nombre
    function saveDataToLocalStorage(name, data) {
        localStorage.setItem(name, data);
    }

    // Función para obtener un dato en localStorage con un nombre
    function getNameInLocalStorage(name) {
        return localStorage.getItem(name);
    }

    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)'; // Aumenta el tamaño al pasar el ratón
        e.currentTarget.style.transition = 'transform 0.3s'; // Añade una transición suave
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Vuelve al tamaño original
    };

    // Verifica si hay una imagen guardada en localStorage
    const savedImage = getNameInLocalStorage(id);

    return (
        <div className='icono'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={onClick}
        >
            {
                savedImage ? (
                    <img src={savedImage} alt={nombre} className='iconoImagen' />
                ) : (
                    pixeles !== 0 && (
                        <Pixelify
                            className={'iconoImagen'}
                            src={imagen}
                            pixelSize={pixeles}
                            transparency={true}
                            width={200}
                            height={200}
                            onIsLoad={(base64) => {
                                saveDataToLocalStorage(id, base64);
                            }}
                            
                        />
                    )
                )
            }
            {
                pixeles === 0 && !savedImage && (
                    <img src={imagen} alt={nombre} className='iconoImagen' />
                )
            }
            <p className='iconoNombre'>{nombre}</p>
        </div>
    );
});

export default IconoEscritorio;
