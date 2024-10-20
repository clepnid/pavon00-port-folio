import React, { useState, useEffect } from 'react';
import './styles/escritorio.css';
import './styles/fuentes.css';
import Pixelify from './Pixelify';

const IconoEscritorio = ({ id, nombre, imagen, pixeles, onClick }) => {

    const [savedImage, setSavedImage] = useState(null);

    // Función para guardar un dato en localStorage con un nombre
    function saveDataToLocalStorage(name, data) {
        localStorage.setItem(name, data);
    }

    // Función para obtener un dato de localStorage con un nombre
    function getNameInLocalStorage(name) {
        return localStorage.getItem(name);
    }

    useEffect(() => {
        // Cargar imagen desde localStorage cuando el componente se monta
        const savedImage = getNameInLocalStorage(id);
        if (savedImage) {
            setSavedImage(savedImage);
        }
    }, [id]); // Dependencia en `id`, para ejecutar cuando cambia

    const handleMouseOver = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.transition = 'transform 0.3s';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

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
                                setSavedImage(base64); // Actualiza el estado con la imagen base64
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
};

export default IconoEscritorio;
