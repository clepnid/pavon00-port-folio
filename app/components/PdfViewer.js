import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  // Función para manejar el evento de carga del documento
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reinicia a la primera página al cargar un nuevo documento
  };

  return (
    <div>
      <Document
        file={fileUrl} // URL del archivo PDF que pasas como prop
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Página {pageNumber} de {numPages}
      </p>
      <button
        disabled={pageNumber <= 1}
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Página anterior
      </button>
      <button
        disabled={pageNumber >= numPages}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Siguiente página
      </button>
    </div>
  );
};

export default PdfViewer;
