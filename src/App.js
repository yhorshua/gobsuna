import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PDFElement from './Pages/PDFElement';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdfElement" element={<PDFElement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
