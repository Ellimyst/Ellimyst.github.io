import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set worker path
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error) {
    // setError(<span className='error'>Failed to load PDF</span>);
    setError('Failed to load PDF');
    setLoading(false);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sumukh_Resume.pdf';
    link.download = 'Sumukh_Vaze_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text">
      <div className='resume-header'>
        <p className="title">Resume</p>
        <button onClick={handleDownload} className='download-button'>
          Download
        </button>
      </div>
      {/* <div className="pdf-container">
        <Document
          file='/Sumukh_Resume.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page 
              key={`page_${index + 1}`} 
              pageNumber={index + 1} 
              renderTextLayer={false}
              scale={1.2}
            />
          ))}
        </Document>
      </div> */}
      <div className="pdf-container">
        <iframe
          src="/Sumukh_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&view=FitH"
          width="100%"
          height="1100px"  // Adjust this based on your resume's dimensions
          title="resume"
          style={{ 
            border: 'none',
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
  );
};

export default Resume;
