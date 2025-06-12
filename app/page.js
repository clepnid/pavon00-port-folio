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
import Inspirado from './components/Inspirado';
import Bienvenido from './components/Bienvenido';
import { JavaOriginal, JavascriptOriginal, ReactOriginal, BashOriginal, CplusplusOriginal, NodejsOriginal, MysqlOriginal, ExpressOriginal } from 'devicons-react';
import './components/styles/perfil.css'; // Ruta correcta hacia tu archivo CSS
import fgifView from './images/fgif-view.gif';
import clepnidView from './images/clepnid_view.png';
import complementaryView from './images/Compelementary.png';
import fotos365View1 from './images/fotos365.gif';
import fotos365View2 from './images/fotos365_1.gif';
import controlView1 from './images/control_1.png';
import controlView2 from './images/control_2.png';
import controlView3 from './images/control_3.png';
import controlView4 from './images/control_4.png';
import controlView5 from './images/control.gif';
import boletoView from './images/boleto.png';
import ganaderiappView from './images/ganaderiapp_view.png';

export default function Home() {
  const [theme, setTheme] = useState(white); // Estado para el tema actual
  const [themeChanger, setThemeChanger] = useState(false); // Estado para el tema actual
  const btnClepnid = useRef(null);
  const btnFgif = useRef(null);
  const btnUser = useRef(null);
  const btnGanaderiapp = useRef(null);
  const btnSdsControl = useRef(null);
  const btnFotos365 = useRef(null);
  const btnComplementary = useRef(null);
  const btnCortijo = useRef(null);
  const btnAutobiografia = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
      setIsSmallHeight(window.innerHeight <= 560);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (btnUser.current) {
      btnUser.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadGanaderiapp = () => {
    if (btnGanaderiapp.current) {
      btnGanaderiapp.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadCortijo = () => {
    if (btnCortijo.current) {
      btnCortijo.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadComplementary = () => {
    if (btnComplementary.current) {
      btnComplementary.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadControl = () => {
    if (btnSdsControl.current) {
      btnSdsControl.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadFotos365 = () => {
    if (btnFotos365.current) {
      btnFotos365.current.handleOpenClick();
    }
  };

  const llamarMetodoVisibilidadAutoBiografia = () => {
    if (btnAutobiografia.current) {
      btnAutobiografia.current.handleOpenClick();
    }
  };

  const arrayOnClicks = [llamarMetodoVisibilidadUser, llamarMetodoVisibilidadFgif, llamarMetodoVisibilidadClepnid, llamarMetodoVisibilidadGanaderiapp, llamarMetodoVisibilidadCortijo, llamarMetodoVisibilidadComplementary, llamarMetodoVisibilidadControl, llamarMetodoVisibilidadFotos365];

  return (
    <>
      <ThemeProvider theme={theme}>

        <div style={{
          position: isSmallScreen ? 'unset' : 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: (isSmallScreen || isSmallHeight) ? '100%' : '100vh',
          marginBottom: (isSmallScreen || isSmallHeight) ? '100px' : '0px',
          overflow: (isSmallScreen || isSmallHeight) ? 'auto' : 'hidden',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: (isSmallScreen || isSmallHeight) ? 'column' : 'row', // Cambia a columna si la pantalla es pequeña
            flexWrap: (isSmallScreen || isSmallHeight) ? 'wrap' : 'nowrap',
            justifyContent: 'space-between',
            maxWidth: '100%',
            alignItems: (isSmallScreen || isSmallHeight) ? 'center' : 'flex-start',
          }}>
            <div style={{
              flex: '1 1 100%', // Se ajusta al 100% en pantallas pequeñas
              minWidth: '320px',
              maxWidth: '740px',
            }}>
              <Escritorio arrayOnClicks={arrayOnClicks} />
              <Autobiografia funcionBoton={llamarMetodoVisibilidadAutoBiografia} />
            </div>
            <div style={{
              flex: '1 1 100%', // Se ajusta al 100% en pantallas pequeñas
              maxWidth: '98vw',
              width: '740px',
            }}>
              <Bienvenido />
              <Inspirado isSmallScreen={isSmallScreen} isSmallHeight={isSmallHeight} />
            </div>
          </div>


        </div>
        <div>
          <WindowComponentClose ref={btnClepnid} title="Clepnid" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={clepnidView} />
              <a style={{ padding: '0.5rem' }} href="https://clepnid-doc.vercel.app/">Ir al sitio.</a>
              <p style={{ padding: '0.5rem' }}>Desarrollado desde 2020 - 2024</p>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Escritorio Windows, Linux, MacOs</h2>
              <p style={{ padding: '0.5rem' }}>La segunda idea que tuve surgió de estar tan acostumbrado a copiar y pegar. Un día, en clase, intenté copiar algo desde el ordenador de un compañero y pegarlo en el mío. No funcionó... y de ahí nació la idea.</p>
              <p style={{ padding: '0.5rem' }}>
                Los primeros meses de desarrollo me sirvieron para aprender a ser autodidacta. En varios aspectos, sentaron las bases de lo que soy ahora como programador. Si necesitaba incorporar una nueva función, buscaba hasta dar con la manera de implementarla.
                Este programa tiene mucha historia detrás. Al principio, era una herramienta de red que escuchaba puertos y compartía el contenido del portapapeles al pulsar una combinación de teclas. Me sirvió como trabajo de fin de grado superior. Al año siguiente lo usé de forma más seria, pero como daba algunos errores, tuve que refactorizarlo y mejorarlo desde cero, ya que la base de código era muy pobre debido a mi poca experiencia como desarrollador.
                En esa fase de mejoras, añadí una interfaz web y la gestión de usuarios. Un año después, ya en segundo de carrera, me vi en la necesidad de integrar aplicaciones web a los archivos compartidos por el sistema. Esto dio como resultado una aplicación completamente distinta a la planteada originalmente, con tiempos de desarrollo bastante largos.
                Con decir que, a día de hoy, cada vez que veo esa aplicación me dan ganas de seguir mejorándola... pero claro, siempre hay otras cosas que hacer.
              </p>
            </div>
          } />
          <WindowComponentClose ref={btnFgif} title="Fgif" initialX={150} initialY={150} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={fgifView} />
              <a style={{ padding: '0.5rem' }} href="https://clepnid.github.io/fgif/">Ir al sitio.</a>
              <p style={{ padding: '0.5rem' }}>Creado en 2019</p>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Escritorio Windows</h2>
              <h1 style={{ padding: '0.5rem' }}>Abre imagenes animadas con extensión .gif y decora tu pantalla.</h1>
              <p style={{ padding: '0.5rem' }}>
                Mientras estudiaba, tuve mi primera idea de aplicación: que además de personalizar el fondo con fondos animados, se pudiese personalizar el frente con algo animado. La hice lastrado por la tecnología que estaba aprendiendo: Java. Me limité a realizar una aplicación de escritorio y desarrollé mi primera biblioteca visual, solo con botones, con resize al aumentar o reducir la ventana, y con una opción para cambiar el idioma de estos.
                Lo que desarrollé fue un componente de ventana, conteniendo un gif elegido por el usuario, que estuviese encima de todo y que fuera transparente a los eventos, ya fuesen de ratón o de teclas, pasando estos eventos a la ventana detrás de la animación. En ese entonces, solo fui capaz de realizarlo en Windows; probé en Linux sin éxito, así que procedí a empaquetarlo con Inno Setup y di por terminado el desarrollo.
                Es una pena, pero perdí el código al formatear mi ordenador, quedándome solo con el instalador.</p>
            </div>
          } />
          <WindowComponentClose ref={btnUser} title="Usuario" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <h1 style={{ padding: '0.5rem' }}>Antonio Jesús Pavón Correa</h1>
              <p style={{ padding: '0.5rem' }} className="job-title">Ingeniero Software - España</p>
              <p style={{ padding: '0.5rem' }} className="job-type">Full Stack</p>
              <p style={{ padding: '0.5rem' }}>Actualizado el 16/04/2025.</p>
              <p style={{ padding: '0.5rem' }}>He creado un ícono que despliega una ventana para explicar cada aplicación que he desarrollado.</p>
              <p style={{ padding: '0.5rem' }}>Dedico todo el tiempo posible a la programación, siempre tengo una nueva idea en mente para desarrollar.</p>
              <p style={{ padding: '0.5rem' }}>En el escritorio se encuentra disponible un PDF vinculado que contiene mi autobiografía.</p>
              <p style={{ padding: '0.5rem' }}>Mi objetivo al escribir esta autobiografía es ofrecer una visión transparente de mi trayectoria, para que puedas evaluar si mi experiencia y mis habilidades se alinean con lo que buscas.</p>
            </div>
          } />
          <WindowComponentClose ref={btnGanaderiapp} title="Ganaderiapp" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={ganaderiappView} />
              <a style={{ padding: '0.5rem' }} href="https://ganaderiapp.com/">Ir al sitio.</a>
              <p style={{ padding: '0.5rem' }}>Desarrollado desde 2024 - 2025</p>
              <h2 style={{ padding: '0.5rem' }}>Aplicación Web</h2>
              <p style={{ padding: '0.5rem' }}>Mis suegros tienen una ganadería, y como no encontraban una aplicación que les gustara, me puse a investigar sobre los problemas que enfrentan los ganaderos. A partir de ahí, decidí desarrollar una aplicación para facilitarles un poco la vida.</p>

              <p style={{ padding: '0.5rem' }}>Funciones de la aplicación:</p>
              <ul style={{ padding: '0.5rem' }}>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Tener trazabilidad total de cada animal</span>, usando escáneres Bluetooth y tecnología OCR para identificar cotrales electrónicos de forma rápida y precisa.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Monitorear el rendimiento</span> y estado del ganado a través de análisis y estadísticas que te permitirán tomar decisiones informadas.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Controlar la genealogía</span> y planificar el crecimiento de tu rebaño de manera más inteligente.</li>
                <li style={{ padding: '0.5rem' }}><span class="highlight">Optimizar tus tareas diarias</span>, con herramientas de planificación que te ayudarán a ahorrar tiempo y mejorar la productividad.</li>
              </ul>

              <p style={{ padding: '0.5rem' }}>Ahora me encuentro desarrollándola, y al acercarse el momento de terminarla, veo la necesidad de dar a conocer el producto y ofrecer algún medio para mostrarle a los ganaderos cómo funciona..</p>
            </div>
          } />

          <WindowComponentClose ref={btnCortijo} title="Cortijo" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={boletoView} />
              <a style={{ padding: '0.5rem' }} href="https://feriacortijo.vercel.app/">Ir al sitio.</a>
              <h1 style={{ padding: '0.5rem' }}>Escanea el boleto o ve al sitio para introducir el código del boleto</h1>
              <p style={{ padding: '0.5rem' }}>Desarrollado en 2024</p>
              <p style={{ padding: '0.5rem' }}>
                Durante la feria de mi pueblo, un amigo tenía una caseta y se me ocurrió que podría ofrecer promociones a sus clientes.
              </p>
              <p style={{ padding: '0.5rem' }}>
                Desarrollé un sistema para poder editar premios y generar boletos en formato PDF. Estos boletos tienen un premio vinculado y siempre dan dicho premio, mostrando una animación de ruleta. Me quedo con que a la gente le gustaron tanto la ruleta como los premios.
              </p>
              <p style={{ padding: '0.5rem' }}>
                Para futuras mejoras me planteo en si añadir más animaciones o juegos además de la ruleta y expandir este producto para que sea un sistema de fidelidad de los clientes.
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
              </p>
              <p style={{ padding: '0.5rem' }}>
                Para ser sinceros, lo realicé en poco tiempo y no le voy a poner más empeño. No está optimizado para nada y lo dejo solo porque es una idea que, para mi gusto, está bien implementada, aun con las mejoras que puede tener.
              </p>
            </div>
          } />

          <WindowComponentClose ref={btnSdsControl} title="Empresa 1" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <p style={{ padding: '0.5rem' }}>Desarrollado en 2024 - 2025</p>
              <h1 style={{ padding: '0.5rem' }}>Sistema Contable</h1>
              <p style={{ padding: '0.5rem' }}>
                Primer trabajo remunerado. Desarrollé para una empresa la solución a la necesidad de automatizar los partes realizados por los trabajadores,
                controlando estos gastos en el balance de las operaciones de trabajo para realizar documentos de presupuestos y facturas a los clientes de forma sencilla.
              </p>
              <p style={{ padding: '0.5rem' }}>
                Se necesitó de 2 meses de desarrollo y 2 meses de testing e integración en dicha empresa. Todo hecho a medida y atendiendo a las peticiones sin problemas.
              </p>
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={controlView5} />
              <p style={{ padding: '0.5rem', marginBottom: '14px' }}>El operario introduce sus partes diarios.</p>
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={controlView1} />
              <p style={{ padding: '0.5rem', marginBottom: '14px' }}>Inicio de app Oficina.</p>
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={controlView2} />
              <p style={{ padding: '0.5rem', marginBottom: '14px' }}>Balance Gastos/Beneficio en una operación de trabajo.</p>
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={controlView3} />
              <p style={{ padding: '0.5rem', marginBottom: '14px' }}>Horas de trabajo de dicha operacion de trabajo.</p>
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={controlView4} />
              <p style={{ padding: '0.5rem', marginBottom: '14px' }}>Proforma generada de dicha operación de trabajo.</p>
            </div>
          } />

          <WindowComponentClose ref={btnFotos365} title="Fotos 365" initialX={100} initialY={100} contenido={
            <div className="presentation-container">
              <p style={{ padding: '0.5rem' }}>Desarrollado en 2025</p>
              <h1 style={{ padding: '0.5rem' }}>Plataforma Web: Fotos y Videos</h1>
              <p style={{ padding: '0.5rem' }}>
                Plataforma para crear y modificar todos los componentes, paleta de colores y textos que contiene dicho álbum común. Realizado para la boda de mi tía.
              </p>
              <p style={{ padding: '0.5rem' }}>
                Las fotos y los videos subidos a la plataforma se comprimen para permitir un renderizado rápido en la app. Contiene una función para descargar todo en un archivo .zip, comprimiendo por separado fotos y videos, manteniendo la calidad original del álbum.
              </p>
              <p style={{ padding: '0.5rem' }}>
                La página de administración de álbumes se mantiene cifrada, para que la gestión de los mismos sea exclusivamente de mi propiedad.
              </p>
              <Image style={{ padding: '0.5rem', maxWidth: '400px', width: '100%', height: 'auto' }} src={fotos365View1} />
              <p style={{ padding: '0.5rem', marginBottom: '10px' }}>Edición Albúm.</p>
              <Image style={{ padding: '0.5rem', maxWidth: '600px', width: '100%', height: 'auto' }} src={fotos365View2} />
              <p style={{ padding: '0.5rem' }}>Añadir contenido.</p>
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
