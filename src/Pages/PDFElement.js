import  { useEffect } from 'react';

function PDFElement() {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = './archivo/prueba.pdf';
    link.download = 'prueba.pdf';
    link.click();
  }, []);

}

export default PDFElement;
