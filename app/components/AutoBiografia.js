import React from 'react';
import { Button } from 'react95';
import './styles/autobiografia.css';
import './styles/fuentes.css';
import autobiografiaIcon from './../images/autobiografia.png'

const AutoBiografia = ({funcionBoton}) => {
    return (
        <div className='divAutobiografia'>
            <div className='textoAutobiografia'>
                <p className='tituloAutobiografia'>Autobiografía</p>
                <p className='tiempoAutobiografia'>Tiempo de lectura: 5min</p>
                <p className='descripcionAutobiografia'>Un libro corto, me he dado cuenta de que soy joven (24 años).</p>
                <Button style={{fontFamily: 'MS Sans Serif'}} className='botonLeer' onClick={funcionBoton}>Leer</Button>
            </div>
            <img src={autobiografiaIcon.src} alt={'autobiografia'} className='iconoAutobiografia' />
        </div>
    );
};

export default AutoBiografia;
