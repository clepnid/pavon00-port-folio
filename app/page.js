"use client"; // top to the file

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import WindowComponent from './components/WindowComponent';
import WindowComponentClose from './components/WindowComponentClose';
import { Button, WindowContent } from 'react95';

// pick a theme of your choice

import aiee from './assets/themes/aiee';
import ash from './assets/themes/ash';
import azureOrange from './assets/themes/azureOrange';
import bee from './assets/themes/bee';
import blackAndWhite from './assets/themes/blackAndWhite';
import blue from './assets/themes/blue';
import brick from './assets/themes/brick';
import candy from './assets/themes/candy';
import cherry from './assets/themes/cherry';
import coldGray from './assets/themes/coldGray';
import counterStrike from './assets/themes/counterStrike';
import darkTeal from './assets/themes/darkTeal';
import denim from './assets/themes/denim';
import eggplant from './assets/themes/eggplant';
import fxDev from './assets/themes/fxDev';
import highContrast from './assets/themes/highContrast';
import honey from './assets/themes/honey';
import hotChocolate from './assets/themes/hotChocolate';
import hotdogStand from './assets/themes/hotdogStand';
import index from './assets/themes/index';
import lilac from './assets/themes/lilac';
import lilacRoseDark from './assets/themes/lilacRoseDark';
import maple from './assets/themes/maple';
import marine from './assets/themes/marine';
import matrix from './assets/themes/matrix';
import millenium from './assets/themes/millenium';
import modernDark from './assets/themes/modernDark';
import molecule from './assets/themes/molecule';
import monochrome from './assets/themes/monochrome';
import ninjaTurtles from './assets/themes/ninjaTurtles';
import olive from './assets/themes/olive';
import original from './assets/themes/original';
import pamelaAnderson from './assets/themes/pamelaAnderson';
import peggysPastels from './assets/themes/peggysPastels';
import plum from './assets/themes/plum';
import polarized from './assets/themes/polarized';
import powerShell from './assets/themes/powerShell';
import rainyDay from './assets/themes/rainyDay';
import raspberry from './assets/themes/raspberry';
import redWine from './assets/themes/redWine';
import rose from './assets/themes/rose';
import seawater from './assets/themes/seawater';
import shelbiTeal from './assets/themes/shelbiTeal';
import slate from './assets/themes/slate';
import solarizedDark from './assets/themes/solarizedDark';
import solarizedLight from './assets/themes/solarizedLight';
import spruce from './assets/themes/spruce';
import stormClouds from './assets/themes/stormClouds';
import theSixtiesUSA from './assets/themes/theSixtiesUSA';
import tokyoDark from './assets/themes/tokyoDark';
import toner from './assets/themes/toner';
import tooSexy from './assets/themes/tooSexy';
import travel from './assets/themes/travel';
import vaporTeal from './assets/themes/vaporTeal';
import vermillion from './assets/themes/vermillion';
import violetDark from './assets/themes/violetDark';
import vistaesqueMidnight from './assets/themes/vistaesqueMidnight';
import water from './assets/themes/water';
import white from './assets/themes/white';
import windows1 from './assets/themes/windows1';
import wmii from './assets/themes/wmii';

const themes = [
  aiee, 
  ash, 
  azureOrange, 
  bee, 
  blackAndWhite, 
  blue, 
  brick, 
  candy, 
  cherry, 
  coldGray, 
  counterStrike, 
  darkTeal, 
  denim, 
  eggplant, 
  fxDev, 
  highContrast, 
  honey, 
  hotChocolate, 
  hotdogStand, 
  index, 
  lilac, 
  lilacRoseDark, 
  maple, 
  marine, 
  matrix, 
  millenium, 
  modernDark, 
  molecule, 
  monochrome, 
  ninjaTurtles, 
  olive, 
  original, 
  pamelaAnderson, 
  peggysPastels, 
  plum, 
  polarized, 
  powerShell, 
  rainyDay, 
  raspberry, 
  redWine, 
  rose, 
  seawater, 
  shelbiTeal, 
  slate, 
  solarizedDark, 
  solarizedLight, 
  spruce, 
  stormClouds, 
  theSixtiesUSA, 
  tokyoDark, 
  toner, 
  tooSexy, 
  travel, 
  vaporTeal, 
  vermillion, 
  violetDark, 
  vistaesqueMidnight, 
  water, 
  white, 
  windows1, 
  wmii
];


import AppBarComponent from './components/AppBarComponent';
import { JavaOriginal, JavascriptOriginal, ReactOriginal, BashOriginal, CplusplusOriginal } from 'devicons-react';
import './components/styles/perfil.css'; // Ruta correcta hacia tu archivo CSS
import fgifView from './images/fgif-view.gif';

export default function Home() {
  const [theme, setTheme] = useState(white); // Estado para el tema actual
  const [themeChanger, setThemeChanger] = useState(false); // Estado para el tema actual
  const btnClepnid = useRef(null);
  const btnFgif = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (themeChanger) {
        const randomIndex = Math.floor(Math.random() * themes.length);
        setTheme(themes[randomIndex]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [themeChanger]); // Se ejecuta cada vez que cambia themeChanger

  const cambiarTemaAleatorio = () => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    if (!themeChanger) {
      setTheme(randomTheme);
    }
    setThemeChanger(!themeChanger);
  };


  const llamarMetodoVisibilidadClepnid = () => {
    if (btnClepnid.current) {
      btnClepnid.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadFgif = () => {
    if (btnFgif.current) {
      btnFgif.current.handleOpenClick();
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <WindowComponentClose ref={btnClepnid} title="Clepnid" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
            <a style={{ padding: '0.5rem' }} href="https://clepnid-doc.vercel.app/">Ir al sitio.</a>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Escritorio Windows, Linux, MacOs</h2>
              <h1 style={{ padding: '0.5rem' }}>Cliente/Servidor dinámico trabajando en dos modos a la vez: </h1>
              <h3 style={{ padding: '0.5rem' }}>Local</h3>
              <p style={{ padding: '0.5rem' }}>Con solo presionar algunas teclas, nuestra aplicación permite simular las acciones de copiar y pegar del portapapeles, facilitando así el intercambio de archivos, imágenes y texto entre dispositivos conectados a la misma red.<JavaOriginal className="dev-image" /></p>
              <h3 style={{ padding: '0.5rem' }}>Web</h3>
              <p style={{ padding: '0.5rem' }}>Nuestra plataforma ofrece acceso web a los diversos elementos compartidos en red, centrándose en la interacción a través de páginas web modulares para archivos, que permiten reproducir, editar, descargar, y más. <JavascriptOriginal className="dev-image" />    <ReactOriginal className="dev-image" />Además, integra un sistema de backend espejo para redirigir a otros servicios web en diferentes puertos. <BashOriginal className="dev-image" /></p>
            </div>
          } />
          <WindowComponentClose ref={btnFgif} title="Fgif" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
              <Image style={{padding: '0.5rem', width: '100%', height: 'auto' }} src={fgifView} />
              <a  style={{ padding: '0.5rem' }} href="https://clepnid.github.io/fgif/">Ir al sitio.</a>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Escritorio Windows</h2>
              <h1  style={{ padding: '0.5rem' }}>Abre imagenes animadas con extensión .gif y disfruta viendo como se mueve.</h1>
              <p style={{ padding: '0.5rem' }}>Se ha desarrollado una aplicación de escritorio diseñada para embellecer la pantalla del usuario. La imagen elegida se mostrará en la parte superior de todas las ventanas sin interferir con su manipulación, garantizando así una experiencia sin interrupciones. Además, se ofrece la funcionalidad de redimensionar y mover la imagen libremente en la pantalla según las preferencias del usuario. <JavaOriginal className="dev-image" /> <CplusplusOriginal className="dev-image" /></p>
            </div>
          } />
          <WindowComponent title="Un poco sobre mí" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <h1  style={{ padding: '0.5rem' }}>Antonio Jesús Pavón Correa</h1>
              <p  style={{ padding: '0.5rem' }} className="job-title">Ingeniero Software</p>
              <p  style={{ padding: '0.5rem' }} className="job-type">Full Stack</p>
              <p  style={{ padding: '0.5rem' }}>8 años en este mundillo y desde el primer día me emociona imaginar y crear cualquier cosa.</p>
              <p  style={{ padding: '0.5rem' }}>Backend &gt; Frontend</p>
              <div>
                <Button style={{ padding: '0.5rem' }} primary onClick={llamarMetodoVisibilidadClepnid}>Clepnid</Button>
              </div>
              <div>
                <Button style={{ padding: '0.5rem' }} primary onClick={llamarMetodoVisibilidadFgif}>Fgif</Button>
              </div>
            </div>
          } />

        </div>
        <AppBarComponent themeChanger = {themeChanger} funcionBoton={cambiarTemaAleatorio}/>
      </ThemeProvider>
    </div>
  );
}
