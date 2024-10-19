import { useEffect } from 'react';
import Script from 'next/script';
import '/clippy.css'; // Importa el CSS desde la carpeta public

const ClippyAgent = () => {
  useEffect(() => {
    const loadClippy = () => {
      if (window.clippy) {
        window.clippy.load('Merlin', (agent) => {
          agent.show();
        });
      }
    };

    // Verifica si Clippy ya está cargado antes de inicializar
    if (typeof window !== 'undefined' && window.clippy) {
      loadClippy();
    }
  }, []);

  return (
    <>
      {/* Cargar jQuery primero desde la carpeta public */}
      <Script src="https://pavon00-port-folio.vercel.app/jquery.1.7.min.js" strategy="beforeInteractive" />

      {/* Cargar Clippy.js desde la carpeta public */}
      <Script
        src="https://pavon00-port-folio.vercel.app/clippy.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.clippy.load('Merlin', (agent) => {
            agent.show();
          });
        }}
      />
    </>
  );
};

export default ClippyAgent;
