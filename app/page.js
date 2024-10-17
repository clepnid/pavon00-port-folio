"use client"; // top to the file

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import WindowComponentClose from './components/WindowComponentClose';
import { Button } from 'react95';
import Escritorio from './components/Escritorio';
import MyPdfPage from './components/MyPdfPage';
import Autobiografia from './components/AutoBiografia';

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
import { JavaOriginal, JavascriptOriginal, ReactOriginal, BashOriginal, CplusplusOriginal, NodejsOriginal, MysqlOriginal, ExpressOriginal } from 'devicons-react';
import './components/styles/perfil.css'; // Ruta correcta hacia tu archivo CSS
import fgifView from './images/fgif-view.gif';
import clepnidView from './images/clepnid_view.png';
import complementaryView from './images/Compelementary.png';
import boletoView from './images/boleto.png';
import ganaderiappView from './images/ganaderiapp_view.png';

export default function Home() {
  const [theme, setTheme] = useState(white); // Estado para el tema actual
  const [themeChanger, setThemeChanger] = useState(false); // Estado para el tema actual
  const btnClepnid = useRef(null);
  const btnFgif = useRef(null);
  const btnUser = useRef(null);
  const btnGanaderiapp = useRef(null);
  const btnComplementary = useRef(null);
  const btnCortijo = useRef(null);
  const btnAutobiografia = useRef(null);

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

  const llamarMetodoVisibilidadUser = () => {
    if (btnFgif.current) {
      btnUser.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadGanaderiapp = () => {
    if (btnFgif.current) {
      btnGanaderiapp.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadCortijo = () => {
    if (btnFgif.current) {
      btnCortijo.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadComplementary = () => {
    if (btnFgif.current) {
      btnComplementary.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadAutoBiografia = () => {
    if (btnFgif.current) {
      btnAutobiografia.current.handleOpenClick();
    }
  };

  const arrayOnClicks = [llamarMetodoVisibilidadUser, llamarMetodoVisibilidadFgif, llamarMetodoVisibilidadClepnid, llamarMetodoVisibilidadGanaderiapp, llamarMetodoVisibilidadCortijo, llamarMetodoVisibilidadComplementary];

  return (
    <>
      <ThemeProvider theme={theme}>

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
          <Escritorio arrayOnClicks={arrayOnClicks} />
          <Autobiografia funcionBoton={llamarMetodoVisibilidadAutoBiografia} />
        </div>
        <div>
          <WindowComponentClose ref={btnClepnid} title="Clepnid" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={clepnidView} />
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
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={fgifView} />
              <a style={{ padding: '0.5rem' }} href="https://clepnid.github.io/fgif/">Ir al sitio.</a>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Escritorio Windows</h2>
              <h1 style={{ padding: '0.5rem' }}>Abre imagenes animadas con extensión .gif y disfruta viendo como se mueve.</h1>
              <p style={{ padding: '0.5rem' }}>Se ha desarrollado una aplicación de escritorio diseñada para embellecer la pantalla del usuario. La imagen elegida se mostrará en la parte superior de todas las ventanas sin interferir con su manipulación, garantizando así una experiencia sin interrupciones. Además, se ofrece la funcionalidad de redimensionar y mover la imagen libremente en la pantalla según las preferencias del usuario. <JavaOriginal className="dev-image" /> <CplusplusOriginal className="dev-image" /></p>
            </div>
          } />
          <WindowComponentClose ref={btnUser} title="Usuario" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <h1 style={{ padding: '0.5rem' }}>Antonio Jesús Pavón Correa</h1>
              <p style={{ padding: '0.5rem' }} className="job-title">Ingeniero Software</p>
              <p style={{ padding: '0.5rem' }} className="job-type">Full Stack</p>
              <p style={{ padding: '0.5rem' }}>Disfruto más de tareas de Backend que de Frontend &rarr; Backend &gt; Frontend.</p>
              <p style={{ padding: '0.5rem' }}>Dedico todo el tiempo posible a la programación, siempre tengo una nueva idea en mente para desarrollar.</p>
              <p style={{ padding: '0.5rem' }}>En el escritorio se encuentra disponible un PDF vinculado que contiene mi autobiografía.</p>
              <p style={{ padding: '0.5rem' }}>Mi objetivo al escribir esta autobiografía es ofrecer una visión transparente de mi trayectoria, para que puedas evaluar si mi experiencia y mis habilidades se alinean con lo que buscas.</p>
            </div>
          } />
          <WindowComponentClose ref={btnGanaderiapp} title="Ganaderiapp" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={ganaderiappView} />
              <a style={{ padding: '0.5rem' }} href="https://ganaderiaapp.vercel.app/">Ir al sitio.</a>
              <h1 style={{ padding: '0.5rem' }}>¿Estás buscando una forma más fácil y eficiente de gestionar tu explotación ganadera?</h1>
              <p style={{ padding: '0.5rem' }}><span class="highlight">¡Nuestra aplicación está diseñada para ti!</span> Inspirada en las necesidades reales de ganaderos ovino-caprinos, esta herramienta intuitiva facilita la gestión integral de tu rebaño con la última tecnología.</p>

              <p style={{ padding: '0.5rem' }}>Con nuestra aplicación, podrás:</p>
              <ul style={{ padding: '0.5rem' }}>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Tener trazabilidad total de cada animal</span>, usando escáneres Bluetooth y tecnología OCR para identificar cotrales electrónicos de forma rápida y precisa.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Monitorear el rendimiento</span> y estado del ganado a través de análisis y estadísticas que te permitirán tomar decisiones informadas.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Controlar la genealogía</span> y planificar el crecimiento de tu rebaño de manera más inteligente.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Optimizar tus tareas diarias</span>, con herramientas de planificación que te ayudarán a ahorrar tiempo y mejorar la productividad.</li>
              </ul>

              <p style={{ padding: '0.5rem' }}>Este proyecto ha sido desarrollado con pasión, después de escuchar las necesidades de los ganaderos como tú. No es solo una aplicación más, es una solución hecha a medida que transformará la manera en que gestionas tu negocio. <span class="highlight">¡Di adiós a las tediosas tareas administrativas y descubre una forma más ágil y entretenida de llevar tu ganadería al siguiente nivel!</span></p>
            </div>
          } />

          <WindowComponentClose ref={btnCortijo} title="Cortijo" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={boletoView} />
              <a style={{ padding: '0.5rem' }} href="https://feriacortijo.vercel.app/">Ir al sitio.</a>
              <h1 style={{ padding: '0.5rem' }}>Escanea el boleto o ve al sitio para introducir el código del boleto</h1>
              <p style={{ padding: '0.5rem' }}>
                Durante la feria de mi pueblo, un amigo tenía una caseta y se me ocurrió que podría ofrecer promociones a sus mejores clientes. Él aceptó la idea con entusiasmo.
              </p>
              <p style={{ padding: '0.5rem' }}>
                Desarrollé un sistema para que pudiera editar premios y generar boletos en formato PDF. Aunque al final no hizo mucho uso de la aplicación, ya que los camareros estaban siempre muy ocupados con la barra y no entregaban los boletos, la feria resultó ser un gran éxito para él de todos modos.
              </p>
            </div>
          } />

          <WindowComponentClose ref={btnComplementary} title="Complementary" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={complementaryView} />
              <a style={{ padding: '0.5rem' }} href="https://complementary-demo.vercel.app/">Ir al sitio.</a>
              <h1 style={{ padding: '0.5rem' }}>Transforma tus imágenes con estilo dinámico y animaciones fluidas</h1>
              <p style={{ padding: '0.5rem' }}>
                Este componente permite a los desarrolladores seleccionar cualquier imagen y aplicar una
                manipulación de color inspirada en paletas Tríadicas o el contraste visual de colores opuestos.
                Utiliza tres canvas: uno para la imagen original, otro para los colores invertidos,
                y un tercero para fusionar ambas versiones en una visualización combinada.
                El resultado es una experiencia visual única, enriquecida con animaciones suaves que alternan
                entre las dos versiones.
              </p>
              <p style={{ padding: '0.5rem' }}>Características clave:</p>
              <ul style={{ padding: '0.5rem' }}>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Paleta de colores dinámica</span>: Personaliza la experiencia visual aplicando transformaciones de color ajustadas a tus preferencias o las de tus usuarios.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Animaciones fluidas</span>: Integra animaciones de máscaras que transicionan entre versiones de la imagen con un rendimiento óptimo, configurable a través de un parámetro de FPS.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Optimización de rendimiento</span>: Diseñado para manejar múltiples animaciones en pantalla sin comprometer la fluidez, asegurando una experiencia impecable</li>
              </ul>
              <p style={{ padding: '0.5rem' }}>
                Ideal para aplicaciones que buscan un componente visualmente impactante y personalizable.
                ¡Lleva tus imágenes a un nuevo nivel con esta herramienta creativa y eficiente!
              </p>
            </div>
          } />

          <WindowComponentClose ref={btnAutobiografia} title="Autobiografía" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <MyPdfPage />
            </div>
          } />

        </div>
        <AppBarComponent themeChanger={themeChanger} funcionBoton={cambiarTemaAleatorio} />
      </ThemeProvider>
    </>
  );
}
