import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import InicioFuncionario from "./pages/funcionario/InicioFuncionario";
import Inicio from "./pages/Inicio";
import InicioCiudadano from "./pages/ciudadano/InicioCiudadano";
import LoaderCube from "./components/LoaderCube";
import { useState, useEffect } from "react";
import FadeIn from "./components/FadeIn";
import LayoutCiudadano from "./layout/LayoutCiudadano";
import Entes from "./pages/ciudadano/Entes";
import "./styles/loaders.css"

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga (API, auth, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={loading ?
          <LoaderCube /> :
           (<FadeIn><Inicio /></FadeIn>)}
        />

        {/* Funcionario */}
        <Route path="/funcionario" element={<Layout/>}>
          <Route index element={<InicioFuncionario/>}/>
          
        </Route>

        {/* Ciudadano */}
        <Route path="/ciudadano" element={<LayoutCiudadano/>}>
          <Route index element={<Entes/>}/>
          <Route path="sistemas" element={<InicioCiudadano/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
