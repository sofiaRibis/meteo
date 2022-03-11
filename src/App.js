
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Previsioni from './components/Previsioni';
import HomePage from './components/HomePage';
import NuovaPagina from "./components/PaginaNuova";
import NotFound from "./components/NotFound";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dettagli/:citta" element={<NuovaPagina />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
