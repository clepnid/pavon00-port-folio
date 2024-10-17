import React, { useEffect } from 'react';

const PdfViewer = () => {
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Redirigir a la ruta específica para móviles
      window.location.href = 'https://pavon00-port-folio.vercel.app/autobiografia.pdf';
    }
  }, []);

  return (
    <div style={{ height: 'calc(100vh - 120px)' }}>
      <iframe
        src={`/autobiografia.pdf`}
        width="100%"
        height="100%"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
