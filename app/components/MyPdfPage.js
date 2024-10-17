import React from 'react';

const PdfViewer = () => {
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