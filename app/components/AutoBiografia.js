import React from 'react';
import { Button } from 'react95';
import './styles/autobiografia.css';
import './styles/fuentes.css';
import autobiografiaIcon from './../images/autobiografia.png'

const AutoBiografia = ({funcionBoton, funcionBoton2}) => {
    return (
        <div className='divAutobiografia'>
            <div className='textoAutobiografia'>
                <p className='tituloAutobiografia'>Currículum Vitae</p>
                <p className='tiempoAutobiografia'>Tiempo de lectura: 1min</p>
                <p className='descripcionAutobiografia'>He pasado incontables días programando en proyectos, adquiriendo experiencia práctica y resolviendo retos diversos.</p>
                <Button style={{fontFamily: 'MS Sans Serif'}} className='botonLeer' onClick={funcionBoton}>Español</Button>
                <Button style={{fontFamily: 'MS Sans Serif', marginLeft: "12px"}} className='botonLeer' onClick={funcionBoton2}>Ingles</Button>
            </div>
            <img src={autobiografiaIcon.src} alt={'autobiografia'} className='iconoAutobiografia' />
        </div>
    );
};

export default AutoBiografia;
